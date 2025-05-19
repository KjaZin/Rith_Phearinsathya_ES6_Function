import express, { json } from "express";
const app = express();
export const authMiddleware = (req, res, next) => {
  const tokenKey = "123456789";
  const token = req.query.token;
  if (!token || token !== tokenKey) {
    return res.status(401).json({
      error: "Unauthorized",
    });
  }
  next();
};
