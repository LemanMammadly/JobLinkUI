import { BrowserRouter, Route, Routes } from "react-router-dom";
import Client from "./layouts/Client"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Client />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
