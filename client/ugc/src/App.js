import { BrowserRouter } from "react-router-dom";
import RoutesManager from "./routesmanager/routesManager";

function App() {
  return (
    <BrowserRouter>
      <RoutesManager />
    </BrowserRouter>
  );
}

export default App;
