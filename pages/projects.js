import Link from "next/link";

function Home() {
  const projects = [
    {
      id: 1,
      nome: "NODE.JS",
      date: 2024,
      link: "https://github.com/matheusb-dev",
    },
    {
      id: 2,
      nome: "JAVA",
      date: 2024,
      link: "https://github.com/matheusb-dev",
    },
  ];
  return (
    <body>
      <header>
        <nav>
          <ul id="links">
            <li>
              <Link href="/">
                <as>/</as>
              </Link>
              <Link href="/projects">
                <as>Projects</as>
              </Link>
            </li>
          </ul>

          <ul id="networks">
            <li>
              <Link href="https://github.com/matheusb-dev">
                <as>git</as>
              </Link>

              <Link href="https://www.linkedin.com/in/matheus-bezerra-domingos-14b0841a2/">
                <as>linkedin</as>
              </Link>

              <Link href="https://instagram.com/matheusb.dev">
                <as>insta</as>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </body>
  );
}

export default Home;

const project = {
  id: 1,
  nome: "NODE.JS",
  date: 2024,
  link: "https://github.com/matheusb-dev",
};

console.log(project.id, project.nome, project.date, project.link); // Acessa o nome
