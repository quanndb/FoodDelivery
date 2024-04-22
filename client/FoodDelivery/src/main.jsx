import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import "src/firebase/config.jsx";
import { Provider } from "react-redux";
import store from "src/redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{ textAlign: "center", height: "100%" }}
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Container>
  </React.StrictMode>
);
