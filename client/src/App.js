import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Analytics } from "./pages/Statistics/Analytics";
import { Budget } from "./pages/Budget/Budget";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </>
  );
}

// nav bar con sezioni:
// -header: nome account: ospite tasto con black e white mode
// -dashboard: con bilancio totale + opzione di aggiungere una trandazione + trasazioni passate
// -statistiche: guardare dashboard sito pirateking
// -pianificazione(da decidere nel tempo): guardare app wallet su pianificarione

export default App;
