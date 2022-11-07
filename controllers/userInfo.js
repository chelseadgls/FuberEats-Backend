import userInfo from "../models/userInfo.js";

export const getUsers = async (req, res) => {
  try {
    const users = await userInfo.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = new userInfo(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getUserByHash = async (req, res) => {
  try {
    const hashValue = req.params;
    const user = await userInfo.find({ hash: hashValue });
    if (user) {
      return res.json(user);
    }
    if (!user) {
      res.status(404).json({ message: "product not found!" });
    }
    res.status(404).json({ message: "User not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const hash = { hash: req.params};
    const user = await userInfo.findOneAndUpdate(hash , res.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const hash = { hash: req.params};
    const deleted = await userInfo.findOneAndDelete(hash , res.body);
    if (deleted) {
      return res.status(200).send("Product deleted!");
    }
    throw new Error("Product not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
