"use client";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import ParentComp from "./ParentComp";

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <ParentComp>{children}</ParentComp>
    </Provider>
  );
}
