import React from "react";
import Header from "./Header";
import ThreadsList from "./ThreadsList";
import './index.css';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <Header />
      <ThreadsList />
    </div>
  );
}

export default App;
