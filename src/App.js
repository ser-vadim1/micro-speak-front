import React from "react";
import { AuthLayout } from "./components/Context/AuthContext/AuthContext";
import { Uploadlayout } from "./components/Context/UploadAvatar/UploadContext";
import { SinglChatLayout } from "./components/Context/SinglChatContext/SinglChatContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./hooks/routes/Routes";
import { GlobalStyle } from "./styles/globalStyles/styled";

function App() {
  return (
    <>
      <AuthLayout>
        <Uploadlayout>
          <SinglChatLayout>
            <Router>
              <Routes />
            </Router>
          </SinglChatLayout>
        </Uploadlayout>
      </AuthLayout>
    </>
  );
}

export default App;
