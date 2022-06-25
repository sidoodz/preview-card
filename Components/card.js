import React, { Component } from 'react';
import './card.css';



class Card extends Component{
    render(){
            return(
                <>

     <div className="container">
 
          <div className="card-left">
                <div className="card-title">Get <span> insights</span> that help your business grow .
                </div>
                <div className="card-content">
                  <p> Discover the benefits of data analytics and make better decisions regarding revenue , customer experience ,and overall efficiency</p>
                </div>
                <div className="card-static">
                  <div>
                    <h1 className="card-title" >10k+</h1>
                    <p>COMPANIES</p>
                  </div>
                  <div>
                    <h1 className="card-title">314</h1>
                    <p>TEMPLATES</p>
                  </div>
                  <div>
                    <h1 className="card-title">12M+</h1>
                    <p>QUERIES</p>
                  </div>
                  </div>

          </div>
          <div className="card-right">
          <div className="card-img">
            <img src="images/image-header-desktop.jpg"/>
            </div>
          </div>
        </div>
   

                </>
            )
         
          }
        }
export default Card;
     