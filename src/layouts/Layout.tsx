import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import "./layout.scss";
export default function Layout() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}
