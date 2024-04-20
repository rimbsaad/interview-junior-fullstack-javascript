import "../styles/tailwind.css";
import Search from "./Search";

function Header() {

  return (
    <>
      <header className="content_header">
          <Search></Search>
      </header>
    </>
  );
}

export default Header;
