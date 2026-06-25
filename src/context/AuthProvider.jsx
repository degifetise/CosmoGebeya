import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const activeSession = localStorage.getItem("active_user");
    return activeSession ? JSON.parse(activeSession) : null;
  });

  const [usersDatabase, setUsersDatabase] = useState(() => {
    const savedUsers = localStorage.getItem("users_db");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem("users_db", JSON.stringify(usersDatabase));
  }, [usersDatabase]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("active_user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("active_user");
    }
  }, [currentUser]);

  const registerUser = (name, email, password, role = "customer") => {
    const userExists = usersDatabase.some((user) => user.email === email);

    if (userExists) {
      return { success: false, message: "This email is already in..." };
    }

    if (role === "admin") {
      if (email != "admin@shopCosmo.com" || password !== "admin@crud12") {
        return { success: "false", message: "Invalid credentials" };
      }
    }

    const newUser = { id: `user_${Date.now()}`, name, email, password, role };

    setUsersDatabase((prev) => [...prev, newUser]);

    setCurrentUser({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    });
    return { success: true, message: "Registered successfully!" };
  };

  const loginUser = (email, password) => {
    const user = usersDatabase.find(
      (u) => u.email === email && u.password === password,
    );
    if (!user) {
      return { success: false, message: "Invalid email or password" };
    } else {
      setCurrentUser({
        id: user.id,
        name: user.name,
        password: user.password,
        role: user.role,
      });
      return { success: true, message: "Welcome back!", user };
    }
  };
  const logoutUser = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const userContext = useContext(AuthContext);

  if (!userContext) {
    throw new Error("useAuth must used within an AuthProvider");
  }
  return userContext;
}
