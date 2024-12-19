// import { Outlet } from "react-router-dom";
import { ReactNode } from "react";
import Nav from "./Nav";
import Header from "./Header";
import "./layout.scss";

type LayoutProp = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProp) {
  return (
    <>
      <Header />
      <Nav />
      <main>{children}</main>
    </>
  );
}
