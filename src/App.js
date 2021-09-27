import GlobalStyle from "./styles/global";
import NewToDoSection from "./components/NewToDoSection";
import TodoListContext from "./components/TodoContext";
import TodoListSection from "./components/ToDoListSection";
function App() {
  return (
    <div className="App">
        <TodoListContext>
          <GlobalStyle/>
          <NewToDoSection/>
          <TodoListSection/>
        </TodoListContext>
    </div>
  );
}

export default App;
