import "./App.scss";
import Landing from "./components/landing/Landing";
import Nav from "./components/nav/Nav";

function App(): JSX.Element {
  return (
    <div className="app">
      <Nav />
      <Landing />
    </div>
  );
}

export default App;
