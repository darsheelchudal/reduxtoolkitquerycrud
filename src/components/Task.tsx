import {
  useGetTasksQuery,
  useDeleteTasksMutation,
} from "../features/taskSlice";
import { Link } from "react-router-dom";

function Task() {
  const { data: tasks, isError, isSuccess, isLoading } = useGetTasksQuery();
  const [deleteTasks] = useDeleteTasksMutation();

  console.log(tasks);

  const handleClick = async (id) => {
    try {
      const deleteTask = await deleteTasks(id);
      console.log("Deleted task object", deleteTask);
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <>
      <div>
        <div className="">
          {isLoading && <span>Loading.....</span>}
          {isError && <span>Something went wrong.....</span>}
        </div>
        <div>
          <div className="button flex justify-around m-10 border-2 h-20 items-center rounded-xl bg-blue-200">
            <h2 className="text-center font-semibold text-2xl">
              Read operation
            </h2>
            <Link to="/create">
              <button className="bg-blue-500 text-white w-16 rounded-lg shadow-2xl h-8">
                Create
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 p-10 bg-gray-100">
          {isSuccess &&
            tasks?.map((task) => (
              <div
                key={task?.id}
                className="card bg-white border border-gray-300 rounded-lg shadow-md p-4 w-[400px] space-y-4"
              >
                <div className="id font-semibold text-gray-700">
                  ID: {task?.id}
                </div>
                <div className="name font-semibold text-gray-700 mt-2">
                  NAME: {task?.taskName}
                </div>
                <div className="type font-semibold text-gray-700 mt-2">
                  TYPE: {task?.taskType}
                </div>
                <div className="flex justify-between">
                  <button className="bg-green-500 text-white w-16 rounded-lg shadow-2xl h-8">
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white w-16 rounded-lg shadow-2xl h-8"
                    onClick={() => handleClick(task?.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Task;
