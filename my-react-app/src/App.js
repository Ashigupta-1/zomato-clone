import React from 'react'
import Navbar from './components/navbar/navbar';
//import{Route, Routes} from 'react-router-dom'
//import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Header from './components/Header/Header';
const App=()=> {
    return (
        <div className='app'>
            <Navbar/>
             <Header/>
        </div>
    )
}
export default App

