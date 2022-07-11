import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
// import {Search} from './MyComponents/Search'
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  let [mode, setmode] = useState("dark");
  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
    } else {
      setmode("dark");
    }
  };

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    setSearchTodos(
      searchTodos.filter((t) => {
        return t !== todo;
      })
    );
  };

  const [searchTodos, setSearchTodos] = useState(initTodo);
  const [searchTilte, setSearchTitle] = useState("Lets start");
  const search = (value) => {
    setSearchTitle(`Todo with title : ${value}`);
    setSearchTodos(
      todos.filter((e) => {
        return e.title === value;
      })
    );
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header mode={mode} togglemode={togglemode} search={search} />
        <Switch>
          <Route exact path="/mytodo">
            <Todos
              title={"Todos List"}
              todos={todos}
              onDelete={onDelete}
              mode={mode}
              extra={"No Todos for display"}
            />
          </Route>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} mode={mode} />
                  <Todos
                    title={"Todos List"}
                    todos={todos}
                    onDelete={onDelete}
                    mode={mode}
                    extra={"No Todos for display"}
                  />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/search">
            <Todos
              title={searchTilte}
              todos={searchTodos}
              onDelete={onDelete}
              mode={mode}
              extra={"No Todo found"}
            />
          </Route>
        </Switch>
        <Footer mode={mode} />
      </Router>
    </>
  );
}

export default App;
