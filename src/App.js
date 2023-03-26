import './App.css';
import Nav from './components/nav';
import Footer from './components/footer';
import Login from './components/login';
import Sign_up from './components/sign_up';
import Main_page from './components/main_page';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className='container'>
      <Nav/>
      {/* <Login/>  */}
      {/* <Sign_up/> */}
      <Main_page/>
      <Footer/>
      <Routes>
        <Route path="/" element={<Login/>}/> 
      </Routes>
    </div>
  );
}

export default App;
