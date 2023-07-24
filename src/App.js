import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from "./Layout/Layout";
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import SignUpFrom from './Components/SignUpFrom/SignUpFrom';
import Shop from './Components/Shop/Shop';
import ShopHooks from './Components/Shop/ShopHooks';
import Counter from './Components/Counter/Counter';
import TodoList from './Components/Todos/TodoList';
import AddTodoForm from './Components/Todos/AddTodoForm';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const App = () => {


  return ( 
    <>
    <ToastContainer
    position="top-center"
    closeOnClick
    rtl={true}
    autoClose={3000}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    />

      <Routes>
        <Route path='/' element={<HomePage />} />
       <Route path='/SignUp' element={<SignUpFrom />} />
       <Route path='/todolist' element={<TodoList />} />
       <Route path='/addtodo' element={<AddTodoForm />} />
       <Route path='/shop' element={<Shop />} />
       <Route path='/shopHooks' element={<ShopHooks />} />
       <Route path='/counter' element={<Counter />} />
       {/* <Route path='/users' element={<UserContainer />} /> */}
        <Route path='/*' element={<NotFound />} />
        </Routes>

    </>
   );
}
 
export default App;

//! BrowserRouter and Provider move to index.js


// State Managment
// - context + useReducer
// - redux

// redux is predictable state container for javascript apps

//* 3 core concepts :

// 1. order => action

// 2. shopkeeper => process ... =>

// 3. store => 10 -1 => 9 : new store


//* 1- Action ===>  2- Reducer ===> 3-Store (subscribe) view => (dispatch) => Action
//! we must't mutate data in react-redux

//* 3 principales :

//1. store : {number of cakes : 10}
//2. update state only with dispatch an action, on object describing what should be happen !
// action : {type : "BUY_CAKE"}
//3. reducer (prevstate, action) => return new state
// numOfCake 1 => 10 -1 = 9
