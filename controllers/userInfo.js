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

export const getUsersbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userInfo.findById(id);
    if (user) {
      return res.json(user);
    }
    if (!user) {
      res.status(404).json({ message: "User not found!" });
    }
    res.status(404).json({ message: "User not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userInfo.findByIdAndUpdate(id, req.body);
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
      return res.status(200).send("User deleted!");
    }
    throw new Error("User not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
//
