import {
  // Link,
  Outlet,
} from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <nav className="nav">
        {/* <Link to="/">Главная</Link> */}
        {/* <Link to="/donate">Donate</Link> */}
      </nav>
      <section className="page-content">
        <Outlet />
      </section>
    </div>
  );
};
