import Nav from "./Nav";
import Header from "./Header";
import "./layout.scss";
import style from "./layout.module.scss";
interface LayoutProps {
  children: React.ReactNode;
  onMenuClick: (section: string) => void;
}

export default function Layout({ children, onMenuClick }: LayoutProps) {
  return (
    <div className={style.top__container}>
      <Header />
      <Nav onMenuClick={onMenuClick} />
      <main>{children}</main>
    </div>
  );
}
