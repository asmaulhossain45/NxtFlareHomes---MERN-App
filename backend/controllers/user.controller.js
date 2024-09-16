export const test = async (req, res) => {
  try {
    res.send("Test: User api Working");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};
