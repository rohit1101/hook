import React, { useState, useContext, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

export function App() {
  const [name, setName] = useState("Rohit");

  return (
    <div>
      <h1>Hello from hooks {name}</h1>
    </div>
  );
}
