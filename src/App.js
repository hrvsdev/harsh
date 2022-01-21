import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <main className="root-app">
      <main className="root-body">
        <Header />
        <Main />
        <Footer />
      </main>
    </main>
  );
}
