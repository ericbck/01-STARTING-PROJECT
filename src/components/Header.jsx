import reactImage from "../assets/EAB_pflege_logo_2_blau-1536x283.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import "./Header.css";

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>Liyah</h1>
      <p>Login
      </p>
    </header>
  );
}
