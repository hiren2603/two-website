import React from 'react'
import NavBar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer'
import AppSection from './components/AppSection'
import CardSection from './components/CardSection'


const App = ()=> {
    return (
        <div>
        <NavBar/>
        <Jumbotron/>
        
        <CardSection/>
        <AppSection/>
        <Footer/>  
        </div>
    )
}


export default App;
