import './App.scss';
import React from 'react';
import { BrowserRouter, Route, RouteProps, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContainPage from './pages/ContainPage';
import LobbyPage from './pages/LobbyPage';

const containRoutes : RouteProps[] = [
    { path: '/service', element: <div>put some service items</div> },
];

function App() {
    const location = useLocation();

    return <TransitionGroup component={null}>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
            <Routes location={location}>
                <Route path={'/'} element={<LobbyPage/>}/>
                <Route path={'/*'} element={<ContainPage containRoutes={containRoutes}/>} />
            </Routes>
        </CSSTransition>
    </TransitionGroup>;
}

export default App;
