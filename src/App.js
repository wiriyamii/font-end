import React from 'react'
import Form1 from './components/content/Form1'
import Form2 from './components/content/Form2'
import Navbar from "./components/templates/Navbar"
import Sidebar from './components/templates/Sidebar'
import { Switch, Route } from "react-router-dom"

export default function App() {
  return (
    <div>
     <Navbar/>
     <Sidebar/>
     <div className="container">
        <Switch>
          <Route path="/Order" >
            <Form1 />
          </Route>
          <Route path="/Product" >
            <Form2/>
          </Route>
        </Switch>
      </div>
    </div>
  )
}
