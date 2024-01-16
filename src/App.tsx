import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppShell from "./components/nav/AppShell";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppShell/>}>
          <Route index element={<Login/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
