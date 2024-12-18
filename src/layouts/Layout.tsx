import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";

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
