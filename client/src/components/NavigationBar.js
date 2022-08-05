import { Link, Outlet } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div>
      <h1>User Management</h1>
      <nav>
        <Link to="/users">Users</Link>
      </nav>
      <Outlet />
    </div>
  );
}
