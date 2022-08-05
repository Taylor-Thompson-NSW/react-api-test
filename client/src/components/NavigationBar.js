import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";

export default function NavigationBar() {
  return (
    // <div>
    //   <h1>User Management</h1>
    //   <nav>
    //     <Link to="/users/create">Create User</Link>
    //   </nav>
    //   <Outlet />
    // </div>
    //
    <>
      <Container fluid>
        <h2 className="page-title h1 text-center">User Management</h2>
        <br />
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">NSW</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Item>
                  <LinkContainer to="/users">
                    <Nav.Link>Users</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to="/users/create">
                    <Nav.Link>Create User</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />

        <Outlet />
      </Container>
    </>
  );
}
