
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/theme.tsx";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
)