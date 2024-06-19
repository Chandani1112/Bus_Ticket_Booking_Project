// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './components/Contact/Contact';
//import { BrowserRouter } from 'react-router-dom';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import SearchBus from './components/Searchbus/SearchBus';
import Home from './components/Home/Home';
import SelectSeat from './components/SelectSeat/SelectSeat';
import Modal from 'react-modal';
import PrivacyPolicy from './components/Privacy/PrivacyPolicy';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';

Modal.setAppElement('#root'); // Add this line

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/searchbus",
        element: <SearchBus/>,
      },
      {
        path: " ",
        element: <Home/>,
      },
      {
        path: "/select-seat",
        element: <SelectSeat />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>
      },
      {
        path: "/checkout",
        element: <CheckoutPage/>
      },
      
     
     
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
      <RouterProvider router={router}/>
)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />)
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
