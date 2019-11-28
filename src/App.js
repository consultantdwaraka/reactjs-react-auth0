import React, { memo } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import RouterApp from "./components/router/RouterApp";
const App = () => {
  return (
      <div className={"App"}>
          <Header className={"App-header"}></Header>
          <RouterApp/>
      </div>
  );
}

export default memo(App);
