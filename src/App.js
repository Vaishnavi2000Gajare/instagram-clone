import './App.css';
import {  Routes, Route } from "react-router-dom";
import Header from './Component/Header/Header';
import SigninPage from './Component/Home/SigninPage';
import LoginPage from './Component/Home/LoginPage';



function App() {
  return (
    <div>
      {/* <Header/> */}
    
      <Routes> 
       
        
          <Route path="/" element={<Header/>} /> 
          <Route path='/signin'element={<SigninPage/>}/>
          <Route path='/login'element={<LoginPage/>}/>
          
        
      </Routes>
   
    </div>
  );
}

export default App;
