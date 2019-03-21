import React from 'react';
import Todo from '../Todo/Todo';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './TodoList.scss';

const getItemStyle = (isDragging, draggableStyle) => ({
  // styles we need to apply on draggables
  boxShadow: 'indigo 4px 10px 60px',
  ...draggableStyle
});

const getListStyle = () => ({
  boxShadow: 'indigo 4px 10px 60px'
});

class TodoList extends React.Component {
  render() {
    const { todos, deleteTodo, onDragEnd, completeTodo } = this.props;
    const hasTodos = todos.length > 0;
    return (
      <React.Fragment>
        {hasTodos ? <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                className='todo-list-wrapper'
              >
                <ul className='todo-list'>
                  {todos.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <Todo {...todo} key={todo.id} deleteTodo={deleteTodo} completeTodo={completeTodo} />
                      </div>
                    )}
                  </Draggable>
                ))}
                </ul>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext> : <h2>All done. Add some todos!</h2>}
      </React.Fragment>
    );
  }
}

export default TodoList;