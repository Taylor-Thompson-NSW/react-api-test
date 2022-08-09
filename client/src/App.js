import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateUser from "./components/CreateUser";
import NavigationBar from "./components/NavigationBar";
import UserDetail from "./components/UserDetail";
import Users from "./components/Users";
import UserEdit from "./components/UserEdit"
import "./index.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route path="users" element={<Users />} />
            <Route path="users/create" element={<CreateUser />} />
            <Route path={"users/:id"} element={<UserDetail />} />
            <Route path={"users/:id/edit"} element={<UserEdit />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
