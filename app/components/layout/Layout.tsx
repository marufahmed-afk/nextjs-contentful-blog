import { ReactNode } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-[100vh] bg-teal-50 p-4">
      <div className="mx-auto w-full max-w-7xl ">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
