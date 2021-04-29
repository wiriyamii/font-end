import React from 'react'
import '../templates/Style.css'

export default function Form3() {
    return (
        <div>
            <div className="Product-list"><h1>Total Amount</h1></div>
            
            <div className="container">
                <div className="container p-3 my-3 border">

              
                    
                <div className="row">
                    <div className="col-3">
                        <label>Total Investment amount</label>
                        <input type="number" className="form-control sm-2 mr-sm-2" id="Total" name="Total" />
                    </div>
                    <div className="col-2">
                        <label>1st H Plan</label>
                        <input type="number" className="form-control" id="1st" name="1st" />
                    </div>
                    <div className="col-2">
                        <label>2st H Plan</label>
                        <input type="number" className="form-control" id="2st" name="2st" />
                    </div>
                    <div className="col-2">
                        <label>Full Year Plan</label>
                        <input type="number" className="form-control" id="Full" name="Full" />
                    </div>
                    <div className="col-2">
                        <label>Deferred to 2021</label>
                        <input type="number" className="form-control" id="Deferred" name="Deferred" />
                    </div>
                </div>
                <br />
                </div>
                
                

                </div>
            
        </div>
    )
}
