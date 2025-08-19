// utils/auth.js
export const login = (email, password) => {
  if (email && password) {
    localStorage.setItem("user", JSON.stringify({ email, role: "student" }));
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("user");
};
