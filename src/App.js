import React from 'react'
import Form1 from './components/content/Form1'
import Form2 from './components/content/Form2'
import Navbar from "./components/templates/Navbar"
import Sidebar from './components/templates/Sidebar'
import { Switch, Route } from "react-router-dom"
import Form3 from './components/content/Form3'

export default function App() {
  return (
    <div>
     
     <Sidebar/>
     <div className="container">
        <Switch>
          <Route path="/Order" >
            <Form1 />
          </Route>
          <Route path="/Product" >
            <Form2/>
          </Route>
          <Route path="/Total" >
            <Form3/>
          </Route>
        </Switch>
      </div>
    </div>
  )
}
