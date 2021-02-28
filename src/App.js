import "./App.css";
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocalstorage } from "./Hooks/useLocalstorage";
import { Dashboard } from "./Components/Dashboard";
function App() {
  const [id, setId] = useLocalstorage("id");
  return (
    <div className="App">
      {id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />}
    </div>
  );
}

export default App;
