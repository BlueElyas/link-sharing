import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppShell from "./components/nav/AppShell";
import Login from "./pages/Login";
import CreateActtount from "./pages/CreateAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppShell/>}>
          <Route index element={<Login/>} />
          <Route path="/create-account" element={<CreateActtount/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
