import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

if (typeof window !== "undefined") {
  const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);

  if (isLocalhost && "serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        registration.unregister();
      });
    });

    if ("caches" in window) {
      caches.keys().then((keys) => {
        keys.forEach((key) => {
          caches.delete(key);
        });
      });
    }
  }
}

createRoot(document.getElementById("root")!).render(<App />);
