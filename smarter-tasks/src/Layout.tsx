import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Form from "./Form";

const Layout = () => {
  return (
    <div>
      <Header />
      <Form />
      <Outlet />
    </div>
  );
};

export default Layout;