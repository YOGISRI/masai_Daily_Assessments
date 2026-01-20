import fs from "fs";

const DB_PATH = "./src/db.json";

const uniqueEmail = (req, res, next) => {
  const { email } = req.body;
  const db = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

  const exists = db.users.find(user => user.email === email);

  if (exists) {
    return res.status(409).json({
      error: "Email already exists"
    });
  }

  next();
};

export default uniqueEmail;
