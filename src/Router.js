import React, { Component } from 'react';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Routes, Route, useParams, Navigate  } from 'react-router-dom';

import Error from './components/Error';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CrearTE from './components/CrearTE';
import CrearNTE from './components/CrearNTE';
import Gantt from './components/Gantt';

class Router extends Component {

    render() {
        

        
        

        return (
            <BrowserRouter>
                <Header />

                
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/home' element={<Home />} />
                    <Route exact path='/crearTE' element={<CrearTE />} />
                    <Route exact path='/crearNTE' element={<CrearNTE />} />
                    <Route exact path='/gannt' element={<Gantt />} />
                    <Route path='*' element={<Error />} />
                </Routes>
                


                <div className='clearfix'></div>
                <Footer />


            </BrowserRouter >
        );
    }
}

export default Router;
