import { useState } from "react";
import Read from "./components/Read";
import { useGetTasksQuery } from "./features/taskSlice";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const { data } = useGetTasksQuery();
  console.log(data);

  return (
    <>
      <div>App</div>
      <Read />
    </>
  );
}

export default App;
