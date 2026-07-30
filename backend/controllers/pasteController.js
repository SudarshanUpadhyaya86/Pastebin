const supabase = require("../config/supabase");

// Create a new paste
const createPaste = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required",
      });
    }

    const { data, error } = await supabase
      .from("pastes")
      .insert([{ title, content }])
      .select();

    if (error) throw error;

    res.status(201).json(data[0]);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

module.exports = {
  createPaste,
};