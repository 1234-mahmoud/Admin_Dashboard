"use client";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import ParentComp from "./ParentComp";
import Products from "./Products";
import { useState } from "react";
import { useSelector } from "react-redux";

// ✅ Child component that can safely access Redux
function AppContent({ role, setRole, children }) {
  const total = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.total, 0)
  );

  return (
    <>
      <div className="w-full h-[50px] bg-black text-white flex items-center px-4 justify-between">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="bg-blue-600 w-[200px] p-1 rounded"
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <span className="text-lg font-semibold">
          🧾 Total: ${total.toFixed(2)}
        </span>
      </div>

      {role === "user" ? <Products /> : <ParentComp>{children}</ParentComp>}
    </>
  );
}

export default function ReduxProvider({ children }) {
  const [role, setRole] = useState("user");

  return (
  
    <Provider store={store}>
      <AppContent role={role} setRole={setRole}>
        {children}
      </AppContent>
    </Provider>
  );
}
