import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul className="navlinks">
          <li>
            <Link href="#home">
              <a>Início</a>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <a>Projetos</a>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
