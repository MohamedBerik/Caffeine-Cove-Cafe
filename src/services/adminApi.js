import axios from "./axios";

// =======================
// Dashboard
// =======================
export const getAdminDashboard = () => axios.get("/admin/dashboard");

// =======================
// CRUD
// =======================
export const getEntityById = (table, id) => axios.get(`/admin/${table}/${id}`);

export const createEntity = (table, data) =>
  axios.post(`/admin/${table}`, data);

export const updateEntity = (table, id, data) =>
  axios.put(`/admin/${table}/${id}`, data);

export const deleteEntity = (table, id) =>
  axios.delete(`/admin/${table}/${id}`);

export const getEntities = (table, params = {}) =>
  axios.get(`/admin/${table}`, { params });

export const getTableData = (table, params) =>
  axios.get(`/admin/${table}`, { params });

export const logout = () => axios.post("/logout");
