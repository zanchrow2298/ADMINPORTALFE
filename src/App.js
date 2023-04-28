
import React, { Component, useEffect, useState } from 'react';
import { useRoutes, useLocation } from 'react-router-dom'
import './custom.css';


import Landingpage from './pages/landingpage'
import Sidenav from './pages/sidenav'
import Home from './pages/home'
import Chart from './pages/chart'
import Getuser from './pages/getuser'
import Myaccounttab from './pages/myaccounttab'
import Systemusers from './pages/systemusers'
import Edituser from './pages/edituser'
import Loginpage from './pages/loginpage'



const App = () => {

    const location = useLocation();
    const [routes, setRoutes] = useState([]);

    useEffect(() => {

        if (document.querySelector('.scrolled')) {
            document.querySelector('.scrolled').scrollIntoView();
        }

        let route_list = [
            { index: true, path: '/', element: <Loginpage /> },
            { path: '/home', element: <Home /> },
            { path: '/chart', element: <Chart />},
            { path: '/users', element: <Systemusers />},
            { path: '/myaccount', element: <Myaccounttab />},
            { path: '/edituser', element: <Edituser />}


        ];
        setRoutes(route_list);

    }, [location]);

    return useRoutes(routes);
};

export default App;



























//const App = () => {
//    return (
//        <div className="App">

//            <Sidenav />
//            <div >

//                <Routes>
//                    <Route path='/' element={<Home />} />
//                    <Route path='/myaccount' element={<Myaccounttab />} />
//                    <Route path='/chart' element={<Chart />} />
//                    <Route path='/getuser' element={<Getuser />} />
//                    <Route path='/systemusers' element={<Systemusers />} />
//                    <Route path='/Edituser' element={<Edituser />} />
//                </Routes>
//            </div>

//        </div>

//    )
//}






//export default function App() {

//    const location = useLocation();
//    const [routes, setRoutes] = useState([]);

//    useEffect(() => {

//        if (document.querySelector('.scrolled')) {
//            document.querySelector('.scrolled').scrollIntoView();
//        }


//        let route_list = [
//            { index: true, path: '/', element: <Landingpage /> },
//            {
//                path: '/sidenav', element: <Sidenav />, children: [
//                    { path: 'home', element: <Home /> }
//                ]
//            }
//        ]
//        setRoutes(route_list);
//    }, [location]);

//    return useRoutes(routes)
//}


