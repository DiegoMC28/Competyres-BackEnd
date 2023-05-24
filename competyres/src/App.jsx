import "./Globals.css";
import { RouterProvider } from "react-router-dom";
import router from "./pages/Router";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
