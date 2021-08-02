import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Translator } from "./components/Translator";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Translator />
      <Footer />
    </div>
  );
}
