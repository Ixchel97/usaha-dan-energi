import React, { useState } from 'react';
import styled from '@emotion/styled';
import { columnsFromBackend } from './DnDList3';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCard3 from './TaskCard3';
import "./DnD3.css";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Container = styled.div`
  display: flex;
  flex-direction : column;
  width : 100%;
  
`;

const TaskList = styled.div`
  
  width: 900px;
  display: flex;
  flex-direction : column;
  background: #f3f3f3;
  border-radius: 5px;
  padding: 15px 15px;
  margin: 30px;
`;

const TaskColumnStyles = styled.div`
  margin: 8px;
  display: flex;
  width: 100%;
  min-height: 80vh;
`;

const Title = styled.span`
  color: #10957d;
  background: rgba(16, 149, 125, 0.15);
  padding: 2px 10px;
  border-radius: 5px;
  align-self: center;
`;

const DnD3 = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  const specificIndex1 = 0;
  const specificIndex2 = 1;

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
        <div className='DnD'>
      <Container>
        <TaskColumnStyles>
            <div className='DnD-Card'>
          {Object.entries(columns).map(([columnId, column], index) => {
            if (index === specificIndex1){
            return (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided, snapshot) => (
                  <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <Title>{column.title}</Title>
                    {column.items.map((item, index) => (
                      <TaskCard3 key={item} item={item} index={index} />
                    ))}
                    {provided.placeholder}
                  </TaskList>
                )}
              </Droppable>
            );
                    }
                    if (index === specificIndex2){
                        return (
                          <Droppable key={columnId} droppableId={columnId}>
                            {(provided, snapshot) => (
                              <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                              >
                                <Title>{column.title}</Title>
                                <table>
                                {column.items.map((item, index) => {
                                  const correctOrder = ['Menentukan gaya yang dihasilkan Rudi mendorong tembok', 'Menentukan jarak perpindahan tembok yang di dorong Rudi ', 'Menentukan usaha yang dihasilkan Rudi mendorong tembok' ];
                            const isCorrectOrder = index < correctOrder.length && item.Task === correctOrder[index];
            
              return (
                <>
                  <tr key={item}>
                    <td>
                      <TaskCard3 item={item} index={index} />
                    </td>
                    <td>
                      {isCorrectOrder ? (
                        <FaCheck color='#03fc3d' size={30} />
                      ) : (
                        <RxCross2 color='#e00712' size={30} />
                      )}
                      <span></span>
                    </td>
                  </tr>
                </>
              );
            })}
                                </table>
                                {provided.placeholder}
                              </TaskList>
                            )}
                          </Droppable>
                        );
                      }
          })}
          </div>
        </TaskColumnStyles>
      </Container>
      </div>
    </DragDropContext>
  );
};

export default DnD3;
