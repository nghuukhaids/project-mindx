import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import { RoomProvider } from './Context/RoomContext';
import { BookingProvider } from './Context/BookingContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <AuthProvider>
      <RoomProvider>
        <BookingProvider>
          <App />
        </BookingProvider>
      </RoomProvider>
    </AuthProvider>
  </BrowserRouter>
);


reportWebVitals();
