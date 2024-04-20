import "./styles/tailwind.css";
import "./App.css";
import Header from "./components/Header";
import CityList from "./components/CityList";

function App() {
  return (
    <>
      <Header />
      <CityList cities={[]} />
    </>
  );
}

export default App;
