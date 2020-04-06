// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//rendering each item

import React from "react";
import Todo from "../components/Todo";

const TodoList = (props) => {
  console.log(TodoList);
  return (
    <div className="shopping-list">
      {props.existingToDos.map((item) => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button onClick={props.clearList}>Clear To-Do List</button>
    </div>
  );
};

export default TodoList;
