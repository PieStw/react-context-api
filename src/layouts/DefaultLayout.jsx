import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export default function DefaultLayout() {
  return (
    <>
      <div className="wrapper">
        <header>
          <Navbar></Navbar>
        </header>

        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
}
