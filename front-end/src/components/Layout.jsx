import { Header } from "./Header";
export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mt-8 md:mt-0 mx-auto h-screen">{children}</main>
    </>
  );
};
