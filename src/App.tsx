import { Route, BrowserRouter, useLocation, Routes } from 'react-router-dom';
import { useTransition, a } from 'react-spring';
import AppOutlet from './outlets/AppOutlet';
import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';
import WorksPage from './pages/WorksPage';
import './App.css';
import { ReactElement } from 'react';
import NavBar from './components/NavBar';
import ContactsPage from './pages/ContactsPage';


export function Internal() {

//   const location = useLocation();
//   const transitions = useTransition(location.pathname, {
//     from: { transform: 'translateX(0vw)' },
//     enter: { transform: 'translateY(0vw)' },
//     leave: { transform: 'translateY(100vw)' },
//   });

  return (<>
      {/* {transitions((styles, item) => ( */}
        <a.div>
          <Routes>
            <Route path="/" element={<AppOutlet/>}>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/cotacts" element={<ContactsPage/>} />
                <Route path="/works" element={<WorksPage/>} />
            </Route>
          </Routes>
        </a.div>
      {/* ))} */}
  </>)
}


export default function App(): ReactElement {
  return (<>
    <BrowserRouter>
      <NavBar/>
      <Internal/>
    </BrowserRouter>
  </>)
}
