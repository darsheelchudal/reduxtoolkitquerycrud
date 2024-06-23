import { useGetTasksQuery } from "../features/taskSlice";

function Task() {
  const { data: tasks, isError, isSuccess, isLoading } = useGetTasksQuery();

  console.log(tasks);
  return (
    <>
      <div>
        <div className="">
          {isLoading && <span>Loading.....</span>}
          {isError && <span>Soemthing went wrong.....</span>}

          {isLoading && <span>Loading.....</span>}
        </div>
        <div>
          <h2 className="text-center font-semibold text-2xl">Read operation</h2>
        </div>

        <div className="flex flex-wrap justify-between gap-4 p-4 bg-gray-100">
          {isSuccess &&
            tasks?.map((task) => (
              <div
                key={task.id}
                className="card bg-white border border-gray-300 rounded-lg shadow-md p-4 w-[200px]"
              >
                <div className="id font-semibold text-gray-700">
                  ID: {task.id}
                </div>
                <div className="name font-semibold text-gray-700 mt-2">
                  NAME: {task.taskName}
                </div>
                <div className="type font-semibold text-gray-700 mt-2">
                  TYPE: {task.taskType}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Task;
