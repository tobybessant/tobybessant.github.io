import "./App.scss";
import Landing from "./components/Landing/Landing";
import Header from "./components/Header/Header";

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
