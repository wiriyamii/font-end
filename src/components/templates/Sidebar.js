import React from 'react'
import './Style.css'
export default function Sidebar() {
    return (
      <div>
        <div className="sidenav">
          <h2>PRODUCT</h2>
          <a href="/Order" >Order</a>
          <a href="/Product">Product list</a>
          <a href="/Total">Total</a>
        </div>
      </div>
    );
}
