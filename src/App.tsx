import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CreateActtount from "./pages/CreateAccount";
import CreateLinks from "./pages/CreateLinks";
import LoggedInShell from "./components/nav/LoggedInShell";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoggedInShell/>}>
            <Route index path="create-links" element={<CreateLinks/>}/>
            <Route path="profile" element={<Profile/>}/>
        </Route>
          <Route path="login" element={<Login/>} />
          <Route path="create-account" element={<CreateActtount/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
