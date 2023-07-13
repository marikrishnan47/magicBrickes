import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Front from '../FrontPage/Front';
import Properties from '../Properties/Properties';
import Details from '../Details/Details';
import { Stores } from '../Redux/Store';
import { Provider } from 'react-redux';


const Routers = () => {
  return (
  
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Front />}></Route>
                <Route path='/properties/:id/:amount/:amount2' element={<Properties />}></Route>
                <Route path='/details' element={<Details />}></Route>
                <Route path='*' element={<Front />}></Route>
            </Routes>
        </BrowserRouter>
   
  )
}
const Setup=()=>{
  return <Provider store={Stores}>
          <Routers />
  </Provider>
}

export default Setup