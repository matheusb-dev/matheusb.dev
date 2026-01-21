import Link from "next/link";

function Home() {
  return (
    <>
      <header>
        <nav>
          <ul id="links">
            <li>
              <Link href="/">/</Link>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>

          <ul id="networks">
            <li>
              <a href="https://github.com/matheusb-dev" target="_blank">
                git
              </a>
              <a href="https://www.linkedin.com/in/..." target="_blank">
                linkedin
              </a>
              <a href="https://instagram.com/..." target="_blank">
                insta
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div>
          <h2>Matheus Bezerra Domingos</h2>
          <p>Software Engineer</p>
        </div>
      </main>
    </>
  );
}

export default Home;
