import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import ModalProvider from "./providers/ModalProvider.tsx";
import Modal from "./components/Modal.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<p>loading..."</p>}>
          <ModalProvider>
            <Modal />
            <App />
          </ModalProvider>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
