import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import PostsList from "./components/PostsList";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle />
      <PostsList />
    </div>
  );
}

export default App;
