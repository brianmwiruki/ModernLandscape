import { storage } from "../server/storage";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Example: get all users (not implemented in storage, so just a placeholder)
    res.status(200).json({ message: "GET users not implemented" });
  } else if (req.method === "POST") {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password required" });
    }
    try {
      const user = await storage.createUser({ username, password });
      res.status(201).json(user);
    } catch (e) {
      res.status(500).json({ message: "Error creating user" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
