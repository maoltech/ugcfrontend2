import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import RoutesManager from "./routesmanager/routesManager";
import useWindowSize from "./global/hooks/UseWindowSize";

function App() {
  const screen = useWindowSize();
  return screen ? (
    <div className="flex items-center justify-center h-screen">
      <h1>use a desktop app to visit this site</h1>
    </div>
  ) : (
    <>
      <BrowserRouter>
        <RoutesManager />
      </BrowserRouter>
    </>
  );
}

export default App;
