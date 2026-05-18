"use client";

import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";

const ToastProvider = () => {
  const { resolvedTheme } = useTheme();

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={1500}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
};

export default ToastProvider;
