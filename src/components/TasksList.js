import Input from "./Input";

const TasksList = () => {
  window.onload = () => {
    if (localStorage.getItem(`tasksList`)) {
      document.querySelector(`#taskContainer`).innerHTML =
        localStorage.getItem(`tasksList`);
      taskChecked();
      deleteTasks();
    }
  };

  function createTask(value) {
    let div = document.createElement(`div`);
    document.querySelector(`#taskContainer`).appendChild(div);

    div.innerHTML = `
    <h3 style="color: #fff; font-size:1rem;">${value || "task"}</h3>
    <div> 
     <i class='bx bx-check' id="checkBtn" style="font-size:1.4rem; color:#00FCBB; cursor: pointer"></i>
     <i class='bx bx-x' id="deleteBtn" style="font-size:1.4rem; color:red; cursor: pointer"></i>
     </div>
    `;

    div.style.cssText = `width: 21.8rem; height: 3rem; border: 1px solid RGB(188, 188, 188);
    display:flex; flex-direction: row; justify-content: space-between; padding: 0.8rem 1rem;
     border-radius:5px; margin-bottom: 1vh; `;
  }
  const onClick = (e) => {
    let inputValue = e.target.parentElement.children[0].value;
    createTask(inputValue);
    taskChecked();
    deleteTasks();
    saveToLocalStorage();
  };

  function taskChecked() {
    let checkBtn = document.querySelectorAll(`#checkBtn`);

    checkBtn.forEach((e) => {
      e.addEventListener(`click`, (e) => {
        e.target.parentElement.parentElement.style.cssText = `width: 21.8rem; height: 3rem; border: 2px solid #00FCBB;
        display:flex; flex-direction: row; justify-content: space-between; padding: 0.8rem 1rem;
         border-radius:5px; margin-bottom: 1vh;`;
        e.target.parentElement.parentElement.children[0].style.cssText = `color: #fff; font-size:1rem;text-decoration: line-through`;
        e.target.parentElement.children[0].remove();
        saveToLocalStorage();
      });
    });
  }

  function deleteTasks() {
    let deleteBtn = document.querySelectorAll(`#deleteBtn`);

    deleteBtn.forEach((e) => {
      e.addEventListener(`click`, (e) => {
        e.target.parentElement.parentElement.remove();
        saveToLocalStorage();
      });
    });
  }
  function saveToLocalStorage() {
    let tasksDiv = document.querySelector(`#taskContainer`).innerHTML;
    localStorage.setItem(`tasksList`, `${tasksDiv}`);
  }

  return (
    <>
      <div style={inputContainer}>
        <div style={input}>
          <Input text="Add Task" />
          <i
            class="bx bx-message-square-add"
            style={addBtn}
            onClick={onClick}
          ></i>
        </div>
      </div>
      <div style={taskContainer} id="taskContainer"></div>
    </>
  );
};

export default TasksList;

const taskContainer = {
  display: "flex",
  justifyContent: "center",
  marginTop: "2vh",
  flexDirection: "column",
  alignItems: "center",
};
const inputContainer = {
  display: "flex",
  justifyContent: "center",
};
const addBtn = {
  fontSize: "1.5rem",
  position: "absolute",
  top: "0.8rem",
  right: "1.1rem",
  color: "var(--main-color)",
  cursor: "pointer",
};
const input = {
  position: "relative",
  width: "21.8rem",
};
