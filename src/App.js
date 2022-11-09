import Header from "./components/Header";
import DisplayTime from "./components/DisplayTIme";
import TasksList from "./components/TasksList";

function App() {
  return (
    <>
      <Header title="Just Do It" />
      <section className="container">
        <DisplayTime />
        <TasksList />
      </section>
    </>
  );
}

export default App;
