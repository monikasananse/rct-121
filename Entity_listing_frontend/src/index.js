import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {ChakraProvider} from "@chakra-ui/react";
import axios from 'axios';
import {Provider} from 'react-redux';
import {store} from './Redux/store';


axios.defaults.baseURL="http://localhost:3000/"
axios.defaults.headers.post["content-Type"]="application/json";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
);


