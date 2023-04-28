import Link from "next/link";
import { MDBBtn } from "mdb-react-ui-kit";
const Navbar = () => {
  return (
    <nav className="navbar container">
      <Link href={"/"}>
        <p className="navbar-brand mt-2">SuperHero Indentity</p>
      </Link>
      <Link href={"/add"}>
        <MDBBtn>New Identity</MDBBtn>
      </Link>
    </nav>
  );
};

export default Navbar;
