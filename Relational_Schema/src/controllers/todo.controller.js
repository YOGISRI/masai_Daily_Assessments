import { supabase } from "../supabase.js";

export const addTodo = async (req, res) => {
  const { title, description, userId } = req.body;

  if (!title || !userId)
    return res.status(400).json({ message: "Title & userId required" });

  const { data, error } = await supabase
    .from("todos")
    .insert([{ title, description, user_id: userId }]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json({ message: "Todo created", data });
};

export const getTodos = async (req, res) => {
  const { userId } = req.params;

  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", userId);

  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
};

export const updateTodo = async (req, res) => {
  const { todoId } = req.params;
  const updates = req.body;

  const { data, error } = await supabase
    .from("todos")
    .update(updates)
    .eq("id", todoId);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: "Todo updated", data });
};

export const deleteTodo = async (req, res) => {
  const { todoId } = req.params;

  const { error } = await supabase
    .from("todos")
    .delete()
    .eq("id", todoId);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: "Todo deleted" });
};