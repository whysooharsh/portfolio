
if(localStorage.theme === 'dark' || 
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark').matches)
){
  document.documentElement.classList.add('dark');
}
else{
  document.documentElement.classList.remove('dark');
}
import * as React from "react";
import { createRoot } from 'react-dom/client'
import './App.css'
import AppComponent from './App'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>,
)
