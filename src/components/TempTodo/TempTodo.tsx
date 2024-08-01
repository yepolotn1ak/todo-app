/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

export const TempTodo: React.FC = () => {
  const { tempTodo } = useContext(TodoContext);

  return (
    <li data-cy="Todo" className="todo">
      <label className="todo__status-label" htmlFor="todo-status">
        <input
          id="todo-status"
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
        />
      </label>

      <span data-cy="TodoTitle" className="todo__title">
        {tempTodo?.title}
      </span>

      <button type="button" className="todo__remove" data-cy="TodoDelete">
        ×
      </button>

      <div data-cy="TodoLoader" className="modal overlay is-active">
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </li>
  );
};
