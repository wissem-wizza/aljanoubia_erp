import axios from "axios";

const API_URL = "/api/users/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};
const getUser = async (id) => {
  
  // const response = await axios.get(API_URL + 'me', userData)
  const response = await axios.get(API_URL + 'me', id);
  // const user = JSON.parse(localStorage.getItem('user'))

  // if (response.data) {
    localStorage.getItem('user')//, JSON.stringify(response.data)
  // }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
  getUser,
};

export default authService;
