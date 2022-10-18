import React from "react";

import { buildCellList } from "../utils";

const ActionPanel = (props) => {
  const { activeColor, cellList, setCellList } = props;

  return (
    <div className="action-panel">
   
      <button onClick={() => {
        const newList = buildCellList()
        setCellList(newList)
      }}>clear all</button>
    
      <button onClick={() => {
        const newListColor = buildCellList()
        for (let i = 0; i < newListColor.length; i++){
          newListColor[i].color = activeColor
        }
        setCellList(newListColor)
      }}>fill all</button>
   
      <button onClick={() => {
        const newListColorClear = buildCellList()
        console.log(newListColorClear, cellList)
        for (let i = 0; i < newListColorClear.length; i++){
          if(cellList[i].color){
            newListColorClear[i].color = cellList[i].color
          }else{
            newListColorClear[i].color = activeColor
          }

        }
        setCellList(newListColorClear)
        
      }}>fill empty</button>
    </div>
  );
};

export default ActionPanel;
