import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from './pages/Home';
import { Fornecedores } from "./pages/Fornecedores";
import { Login } from "./pages/Login";
import { Servicos } from "./pages/Servicos";

const router = createBrowserRouter([
  { path: "/", element: <HomePage/> },
  { path: "/fornecedores", element: < Fornecedores />},
  { path: "/servicos", element: <Servicos />},
  { path: "/login", element: <Login /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
