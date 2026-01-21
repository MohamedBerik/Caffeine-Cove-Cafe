// في ملف authService.js
const AuthService = {
  // الحفظ
  setToken: (token) => {
    localStorage.setItem("token", token);
  },

  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  },

  // القراءة
  getToken: () => {
    return localStorage.getItem("token");
  },

  getUser: () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  // الحذف
  clearAuth: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("refreshToken");

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");

    // حذف cookies
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  },

  // التحقق
  isAuthenticated: () => {
    return !!localStorage.getItem("token");
  },

  // تسجيل الخروج مع إعادة توجيه
  logoutAndRedirect: (navigate) => {
    AuthService.clearAuth();

    if (navigate) {
      navigate("/login");
    } else {
      window.location.href = "/login";
    }
  },

  // عند تغيير الـ Role
  handleRoleChange: (userId, currentUserId, navigate) => {
    if (userId === currentUserId) {
      AuthService.clearAuth();

      if (navigate) {
        navigate("/login");
      } else {
        window.location.href = "/login";
      }

      return true; // تم تسجيل الخروج
    }
    return false; // لم يتم تسجيل الخروج
  },
};

export default AuthService;
