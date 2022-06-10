import "./App.css";
import Home from "./components/Home/Home";
import AuthContextProvider from "./firebase/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Home />
    </AuthContextProvider>
  );
}

export default App;
