import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import { Counter } from './components/counter/Counter';
import { Header } from './components/header/Header';
import { ModalBlock } from './components/modal/Modal';
import {Quiz} from './components/Quiz/Quiz';

function App() {
  return (
      <>
        <Header/>

        <Routes>
          <Route path={'/'} element={<Counter/>}></Route>
          <Route path={'/modal'} element={<ModalBlock/>}></Route>
          <Route path={'/quiz'} element={<Quiz/>}></Route>
        </Routes>
      </>
  );
}

export default App;
