import "./App.scss";
import Landing from "./components/Landing/Landing";
import Nav from "./components/Nav/Nav";

function App(): JSX.Element {
  return (
    <div className="app">
      <Nav />
      <Landing />
    </div>
  );
}

export default App;
