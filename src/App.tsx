import { useGetTasksQuery } from "./features/taskSlice";

function App() {
  const { data } = useGetTasksQuery();
  console.log(data);
  return (
    <>
      <div>App</div>
    </>
  );
}

export default App;
