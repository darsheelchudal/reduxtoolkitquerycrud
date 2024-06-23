import { useState } from "react";

function Create() {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setTask(value);
    console.log(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task", task);
  };
  return (
    <>
      <div className="create">
        <div className="heading">
          <h1 className="text-2xl font-semibold p-10 text-center bg-blue-200">
            Create Tasks
          </h1>
        </div>
        <div className="card flex justify-center">
          <div className="inner-card border-2 w-[600px] h-[300px] flex justify-center p-12 my-10">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="form-item">
                <input
                  type="text"
                  name="taskName"
                  id="taskName"
                  className="rounded-2 bg-slate-200 h-10 p-4 outline-none rounded-lg w-[400px]"
                  placeholder="Task Name ..."
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <input
                  type="text"
                  name="taskType"
                  id="taskName"
                  className="rounded-2 bg-slate-200 h-10 p-4 outline-none rounded-lg w-[400px]"
                  placeholder="Task Type ..."
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center">
                <button className="button bg-blue-300 w-[100px] rounded-xl shadow-2xl text-center h-12 ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
