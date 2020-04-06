import React from "react";
import ToDoList from "../src/components/TodoList";
import TodoForm from "../src/components/TodoForm";
import "./components/Todo.css";

const existingToDos = [
  {
    name: "Feed Cat",
    id: 123,
    done: false,
  },
  {
    name: "Feed Myself",
    id: 124,
    done: false,
  },
  {
    name: "Eat more food",
    id: 125,
    done: false,
  },
  {
    name: "Water the plants",
    id: 126,
    done: false,
  },
  {
    name: "Maybe have dessert",
    id: 127,
    done: false,
  },
  {
    name: "Play Zelda",
    id: 128,
    done: false,
  },
];

console.log(existingToDos);

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      existingToDoslist: existingToDos,
    };
  }

  //class methods to update state. You do not need to use const for toggle. Weird right?

  toggleItem = (clickedid) => {
    // without hurting or messing up our current state.  so we need to use the spred operator (...) or an arrry method. In the case we are using .map
    const newTodoItem = this.state.existingToDoslist.map((item) => {
      //lopp through the array
      //find item they clicked one
      // toggle the item's done field.
      if (item.id === clickedid) {
        return {
          ...item,
          done: !item.done,
        };
      } else {
        return item;
      }
    });
    //upste state with the new array
    this.setState({
      existingToDoslist: newTodoItem,
    });
  };

  //function for adding new item

  addNewItem = (itemText) => {
    const newItem = {
      name: itemText,
      id: Date.now(),
      done: false,
    };

    this.setState({
      existingToDoslist: [...this.state.existingToDoslist, newItem],
    });
  };

  clearList = (event) => {
    event.preventDefault();
    this.setState({
      existingToDoslist: this.state.existingToDoslist.filter(
        (newItem) => !newItem.done
      ),
    });
  };

  render() {
    console.log("rendering form");
    return (
      <div className="App">
        <div className="header"></div>
        <h2>Welcome to your To-do App!</h2>
        <TodoForm addNewItem={this.addNewItem} />

        <ToDoList
          existingToDos={this.state.existingToDoslist}
          toggleItem={this.toggleItem}
          clearList={this.clearList}
        />
      </div>
    );
  }
}

export default App;
