import "./App.css";
import ComponentData from "./components/ComponentData";
import ComponentError from "./components/ComponentError";
import ComponentLoading from "./components/ComponentLoading";

function App() {
  return (
    <div className="App">
      <p className="note">
        Запустите сервер из папки backend
      </p>
      <ComponentLoading suffix="loading" />
      <ComponentError suffix="error" />
      <ComponentData suffix="data" />
    </div>
  );
}

export default App;
