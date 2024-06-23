import Create from "./components/Create";
import Task from "./components/Task";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Task />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
