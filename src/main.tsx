import * as React from "react";
import { createRoot } from 'react-dom/client'
import './App.css'
import AppComponent from './App'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>,
)
