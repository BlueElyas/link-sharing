import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CreateActtount from "./pages/CreateAccount";
import CreateLinks from "./pages/CreateLinks";
import LoggedInShell from "./components/nav/LoggedInShell";
import Profile from "./pages/Profile";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/main/ProtectedRoute";

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={
                <ProtectedRoute>
                  <LoggedInShell/>
                </ProtectedRoute>
                }>
                <Route index path="/" element={<CreateLinks/>}/>
                <Route path="profile" element={<Profile/>}/>
            </Route>
              <Route path="login" element={<Login/>} />
              <Route path="create-account" element={<CreateActtount/>}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
