import Link from "next/link";

export default function Nav() {
  

  return (
    <>
      <header className="hero">
        <nav className="nav container" id="nav">
          <h2 className="nav__logo">
            <img className="logo" src="Logo.png" />
          </h2>

          <ul className="nav__links">
            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Inicio</a>
              </Link>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                ¿Quienes Somos?
              </a>
            </li>
            <li className="nav__item">
              <Link href="/Sedes">
                <a className="nav__link">Sedes</a>
              </Link>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Contacto
              </a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">
                Matricula en linea
              </a>
            </li>
          </ul>

          <a href="#nav" className="nav__hamburguer">
            <img src="menu.svg" className="nav__icon" />
          </a>

          <a href="#" className="nav__close">
            <img src="close.svg" className="nav__icon" />
          </a>
        </nav>
      </header>

      <style jsx>{`
        .container {
          margin: 0 auto;
          width: 90%;
          max-width: 1200px;
          overflow: hidden;
        }

        .hero {
          background-size: cover;
          min-height: 100px;

          color: #fff;
        }

        .nav {
          --state-close: scale(0);
          --state-hamburguer: scale(1);
          --state-menu: translate(-100%);

          padding: 40px 0;
          display: grid;
          justify-content: space-between;
          align-items: center;
          grid-template-columns: repeat(2, max-content);
        }

        .nav:target {
          --state-menu: translate(0);
          --state-close: scale(1);
          --state-hamburguer: scale(0);
        }

        .nav__logo {
          font-size: 2.5rem;
          z-index: 1;
        }
        .logo {
          height: 150px;
          width: 150px;
          border-radius: 50%;
        }

        .nav__hamburguer,
        .nav__close {
          cursor: pointer;
          grid-column: -2/-1;
          grid-row: 1/2;
          transition: 0.4s transform;
        }

        .nav__hamburguer {
          transform: var(--state-hamburguer);
        }

        .nav__close {
          transform: var(--state-close);
        }

        .nav__icon {
          width: 40px;
        }

        .nav__links {
          background-color: #eea200;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0;

          display: grid;
          align-content: center;
          gap: 2em;
          padding-left: 45%;

          transform: var(--state-menu);
          transition: 0.3s transform;
        }

        .nav__item {
          list-style: none;
        }

        .nav__link {
          color: #fff;
          text-decoration: none;
          font-size: 1.2rem;
          letter-spacing: 2px;
        }

        .nav__link:hover {
          text-decoration: underline;
          color: black;
        }

        @media (min-width: 975px) {
          .nav {
            --state-hamburguer: scale(0);
            --state-menu: translate(0);
          }

          .nav:target {
            --state-close: scale(0);
          }

          .nav__links {
            padding: 0;
            background-color: unset;
            position: unset;
            gap: 50px;
            grid-auto-flow: column;

            transform: unset;

            grid-column: -2/-1;
            grid-row: 1/2;
          }

          .nav__link {
            font-size: 1rem;
            letter-spacing: none;
          }
          .nav__link:hover {
            text-decoration: underline;
            color: #000;
            transition: 0.3s ease-in-out;
          }
        }

        @media (max-width: 400px) {
          .logo {
            height: 120px;
            width: 120px;
            border-radius: 50%;
          }
        }
      `}</style>
    </>
  );
}
