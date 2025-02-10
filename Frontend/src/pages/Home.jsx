import { useEffect, useState } from "react";
import Bookmarks from "../components/Bookmarks";

function Home() {
  const [formData, setformData] = useState({ todo: "" });
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const AddTodo = (e) => {
    e.preventDefault();
    if (formData.todo.trim() === "") return;
    setTodos([...todos, formData.todo]);
    setformData({ todo: "" });
  };

  return (
    <>
      <section className="bg-white/30 h-2/3 w-1/2 absolute top-24 left-1/2 -translate-x-1/2 backdrop-blur-lg rounded-md">
        <form onSubmit={AddTodo} className="h-20 py-2">
          <div className="flex justify-center px-4 py-2 items-center gap-2 w-full">
            <input
              type="text"
              name="todo"
              value={formData.todo}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md outline-none "
            />
            <button type="submit" className="btn btn-info py-2">
              Add
            </button>
          </div>
        </form>

        <div className="p-3">
          <ul className="gap-y-2 list-disc pl-5">
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <li key={index} className="p-2 mb-2 rounded shadow">
                  {todo}
                </li>
              ))}
          </ul>
        </div>
      </section>

      <Bookmarks />
    </>
  );
}

export default Home;
