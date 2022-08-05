import { Link, Outlet } from "react-router-dom";
import "./App.css";
import UsersFunctional from "./components/UsersFunctional.js";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Users from "./components/Users";
import NavigationBar from "./components/NavigationBar";
import CreateUser from "./components/CreateUser";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route path="users" element={<Users />} />
            {/*<Route path="users/create" element={<CreateUser />} /> */}
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
