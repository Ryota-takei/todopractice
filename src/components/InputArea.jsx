import React, { useState } from "react";

export const InputArea = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangeAdd = (e) => {
    setInput(e.target.value);
  } 

  const onClickAdd = () => {
    if (input === "") {
      alert("何か入力してね！！")
      return;
    }
    const newLists = [...todos, input];
    setTodos(newLists);
    setInput("");
  }

  const commplete = () => {

  }

  return(
    <>
      <textarea value={input} placeholder="今日も頑張ろう" onChange={onChangeAdd} />
      <button onClick={onClickAdd}>ADD</button>
      <button>All ドーン！！</button>
      <ul className="todoLists">
        {todos.map((todo, index) => {
          return(
          <div className="todoList" key={index}>
            <li>{todo}</li>
            <button className="complete-btn" onClick="complete">完了</button>
            <button className="delete-btn" onClick="delete">削除</button>
            <button className="giveUp-btn" onClick="giveUp">諦める</button>
          </div>
          )
        })}
      </ul>
    </>
  )
}

