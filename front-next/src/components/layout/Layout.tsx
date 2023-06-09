import { Footer } from "../footer";
import { Navbar } from "../navbar";

export interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="align-middle flex flex-col flex-grow">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
