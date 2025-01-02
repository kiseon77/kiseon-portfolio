import Nav from "./Nav";
import Header from "./Header";
import "./layout.scss";

interface LayoutProps {
  children: React.ReactNode;
  onMenuClick: (section: string) => void;
}

export default function Layout({ children, onMenuClick }: LayoutProps) {
  return (
    <>
      <Header />
      <Nav onMenuClick={onMenuClick} />
      <main>{children}</main>
    </>
  );
}
