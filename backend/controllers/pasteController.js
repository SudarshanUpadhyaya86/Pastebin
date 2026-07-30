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

// Get all pastes
const getAllPastes = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("pastes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// Get a single paste by ID
const getPasteById = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("pastes")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      return res.status(404).json({
        message: "Paste not found",
      });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// Delete a paste
const deletePaste = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("pastes")
      .delete()
      .eq("id", id);

    if (error) throw error;

    res.status(200).json({
      message: "Paste deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

module.exports = {
  createPaste,
  getAllPastes,
  getPasteById,
  deletePaste,
};