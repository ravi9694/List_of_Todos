import React, { useState } from "react";
// import PropTypes from 'prop-types'

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  let myStye = {
    padding: "10px",
  };

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
      <div className={`bg-${props.mode} }`}>
        <div
          className={`my-1 container text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          style={myStye}
        >
          <h3>Add a Todo</h3>
          <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Todo Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`form-control btn-${
                  props.mode === "dark" ? "secondary" : "light"
                } btn-outline-secondary`}
                id="title"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Todo Description
              </label>
              <input
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className={`form-control btn-${
                  props.mode === "dark" ? "secondary" : "light"
                } btn-outline-secondary`}
                id="desc"
              />
            </div>
            <button type="submit" className="btn btn-sm btn-success">
              Add Todo
            </button>
          </form>
        </div>
      </div>
  );
};

AddTodo.defaultProps = {
  mode: "light",
};
