import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const TodoList = ({ todos }) => {
  return (
    <div>
      <h1 className="text-center text-secondary">Todos</h1>
      <ListGroup className="w-50 d-flex mx-auto">
        {todos.map((todo) => (
          <ListGroup.Item variant="success" className="m-2 text-capitalize rounded-5">{todo.text}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
