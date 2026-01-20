import express from "express";
import fs from "fs";
import cloudinary from "../config/cloudinary.config.js";
import upload from "../middleware/upload.middleware.js";
import uniqueEmail from "../middleware/uniqueEmail.middleware.js";

const router = express.Router();
const DB_PATH = "./src/db.json";

const readDB = () => JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
const writeDB = (data) =>
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

router.post(
  "/signup",
  upload.single("profile"),
  uniqueEmail,
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          error: "Profile image is required"
        });
      }

      const { name, email, password } = req.body;

      const result = await cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
          if (error) {
            return res.status(500).json({ error: "Upload failed" });
          }

          const db = readDB();

          const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            profilePic: result.secure_url
          };

          db.users.push(newUser);
          writeDB(db);

          res.status(201).json({
            message: "User registered successfully",
            user: {
              id: newUser.id,
              name: newUser.name,
              email: newUser.email,
              profilePic: newUser.profilePic
            }
          });
        }
      );

      result.end(req.file.buffer);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

export default router;
