const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.registerUser = async (data) => {
  // Check if user already exists
  const userExists = await prisma.user.findFirst({
    where: { email: data.email, phoneNumber: data.phoneNumber },
  });
  if (userExists) {
    const error = new Error("User already exists");
    error.statusCode = 409;
    throw error;
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(data.password, salt);

  // Create user
  const newUser = await prisma.user.create({
    data: { ...data, password: hashedPassword },
  });

  // Create empty refresh token
  await prisma.refreshToken.create({
    data: { userId: newUser.id },
  });

  return newUser;
};

exports.loginUser = async (phoneNumber, password) => {
  // Check if user exists
  const user = await prisma.user.findFirst({
    where: { phoneNumber },
  });

  if (!user) {
    const error = new Error("Invalid credentials");
    error.statusCode = 401;
    throw error;
  }

  // Compare passwords
  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    const error = new Error("Invalid credentials");
    error.statusCode = 401;
    throw error;
  }

  // Generate tokens
  const accessToken = jwt.sign(
    { id: user.id },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "10s" }
  );
  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );

  // update refresh token in database
  await prisma.refreshToken.update({
    where: { userId: user.id },
    data: { token: refreshToken },
  });

  return { accessToken, refreshToken, isProvider: user.isProvider };
};

exports.refreshToken = async (refreshToken) => {
  const user = await prisma.refreshToken.findFirst({
    where: { token: refreshToken },
  });
  if (!user) return res.sendStatus(403);

  // Verify token
  return jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, user) => {
      if (err) return res.status(403);
      const accessToken = jwt.sign(
        { id: user.id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "10s" }
      );
      return accessToken;
    }
  );
};

exports.logout = async (refreshToken) => {
  await prisma.refreshToken.update({
    where: { token: refreshToken },
    data: { token: null },
  });
};