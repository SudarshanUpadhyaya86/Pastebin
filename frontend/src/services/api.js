import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getAllPastes = () => api.get("/pastes");

export const getPaste = (id) => api.get(`/pastes/${id}`);

export const createPaste = (data) => api.post("/pastes", data);

export const deletePaste = (id) => api.delete(`/pastes/${id}`);

export default api;