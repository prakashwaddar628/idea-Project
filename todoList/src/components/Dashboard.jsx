import React, { useState } from "react";

const Dashboard = () => {
  const [items, setItems] = useState([
    { id: 1, name: "buy tomatoes", completed: false },
    { id: 2, name: "Pick kids from school", completed: false },
    { id: 3, name: "wash dishes", completed: false },
  ]);

  const toggleChecked = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedCount = items.filter((item) => item.completed).length;
  const uncompletedCount = items.length - completedCount;

  return (
    <div className="w-[436px] mx-auto my-16 rounded-md flex flex-col justify-center items-center bg-cyan-700">
      <div className="container p-2">
        <div className="flex flex-col justify-center mx-auto items-center">
          <div className="heading text-white font-bold text-nowrap py-3">
            <h1 className="text-2xl">MY TODO LIST</h1>
          </div>
          <div className="form flex gap-2">
            <input
              className="outline-none bg-cyan-400 rounded-sm w-52 h-7"
              type="text"
              placeholder="Enter your task"
            />
            <button className="bg-green-500 px-2 text-white text-sm">
              Add
            </button>
          </div>
        </div>

        {items.length === 0 ? (
          <div>No items to display</div>
        ) : (
          <main className="border-2 border-cyan-500 rounded-md min-h-96 mt-3 w-80 mx-auto">
            <div className="flex justify-center p-3">
              <h2 className="text-white underline font-bold">My Tasks</h2>
            </div>
            {items.map((item) => (
              <div
                key={item.id}
                className="list flex justify-start items-center text-center text-white px-4"
              >
                <input
                  type="checkbox"
                  name="todo"
                  id={`todo-${item.id}`}
                  checked={item.completed}
                  onChange={() => toggleChecked(item.id)}
                />
                <p className={item.completed?"line-through":""}>{item.name}</p>
              </div>
            ))}
          </main>
        )}

        <footer>
          <div className="flex justify-center items-center text-gray-400 p-4">
            <span>Completed: {completedCount}</span>
            <span>|</span>
            <span>Uncompleted: {uncompletedCount}</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
