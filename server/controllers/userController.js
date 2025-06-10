import Coach from "../models/Coach.js";

export const getCoaches = async (req, res) => {
  try {
    const coaches = await Coach.find();
    res.status(200).json(coaches);
  } catch (err) {
    res.status(500).json({ message: "Error fetching coach records" });
  }
};
