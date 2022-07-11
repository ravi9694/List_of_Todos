import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "75vh",
    margin: "2px auto",
    padding : "5px"
  };
  return (
    <div 
    className={`bg-${props.mode === "dark" ? "dark" : "light"} text-${props.mode === "light" ? "dark" : "light"}`}
    >
      <div className="container"
        style={myStyle}
      >
        <h3>{props.title}</h3>
        {props.todos.length === 0
          ? props.extra 
          : props.todos.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  mode={props.mode}
                  onDelete={props.onDelete}
                />
              );
            })}
      </div>
    </div>
  );
};
