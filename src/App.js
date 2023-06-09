import React from 'react';
import logo from './logo.svg';
import './App.css';
import ControlledCarousel from './components/Carousel';
import Calculator from './components/Calculator';
import EmployeeContextProvider from './contexts/EmployeeContext';
import EmployeeList from './components/EmployeeList';
import MainNavbar from './components/Navbar';
import MapTurkey from './MapTurkey.js';
import { Element } from 'react-scroll';
import FormPage from './components/Formpage';
import Location from './components/location';

function App() {
  
  return (
    
    <div className="App">
  <div className="navbar-container"><MainNavbar  ></MainNavbar></div>

  <Element className="home" name="home">
    

        <div >
            <div >
                <img src={logo} className="App-logo" alt="logo"/ >
            </div>
            <div >
                <h1>Hello,</h1>
                <h2>I am a <span>Programmer</span></h2>
                <h3>Working as a <span> Web Developer</span> for 1 Year</h3>
                <p>A civil engineer has an outstanding educational background. Has language skills, both in English and Turkish, at professional work standards. Extensive experience in the frontend IT sector is showcased, with a focus on <a target='blank' href='https://neset123.github.io/NesetCv.github.io/index.html'>HTML,CSS,Java Script</a>
                , <a target='blank' href='https://neset123.github.io/bootstrapCV.github.io/'>Bootstrap</a>, and <a target='blank' href='https://neset123.github.io/my-app/'>React</a>. Proficiency in developing dynamic and visually appealing web applications, creating responsive layouts, and implementing interactivity are demonstrated. Expertise in leveraging Bootstrap and fundamental knowledge of React for project contributions. Known for staying up-to-date with front-end trends and exceeding client expectations in collaborative environments.</p>
                
                <Location/>
                
                
            </div>
        </div>
    </Element>

      
      
  
    <br></br>
    <br></br>
     <hr></hr>
     
     <Element name="List" className='list' ><div className="container-xl">
     <br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="table-responsive">
          <div className="table-wrapper">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
     <EmployeeContextProvider>
              <EmployeeList />
            </EmployeeContextProvider>
            </div>
        </div>

      </div>

      </Element> 

      <hr></hr>

        
        <br/>
        <Element name="calculator" className='calculator'><br/><br/><br/><br/><br/><br/><br/><br/><Calculator/></Element>
        <hr></hr> <br></br> 
        <Element name="mapTurkey" className='mapTr'> <br/><br/><br/><br/><br/><br/><br/><br/><MapTurkey/></Element>
        <hr></hr><br></br><br></br><br></br>
        <Element name="Slidepage" className='Slidepage' ><br/><br/><br/><br/><br/><br/><br/><br/><ControlledCarousel/> </Element>
        <hr></hr><br></br><br></br><br></br>
        <Element name="FormPage" className='Formpage' ><br/><br/><br/><br/><br/><br/><br/><br/><FormPage/></Element>
        <hr></hr><br></br><br></br><br></br>
       
        
        

    </div>
  );
}


export default App;
