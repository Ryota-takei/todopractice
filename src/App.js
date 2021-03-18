import React from "react";
import './App.css';
import { InputArea } from  "./components/InputArea"

export const App =() => {
  return (
    <div className="container">
      <h1>今日の積み立て</h1>
      <InputArea />
     
    </div>
  );
}


