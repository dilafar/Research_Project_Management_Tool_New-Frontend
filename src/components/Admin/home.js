import React from 'react'
import './dashboard.css';
import {Bar} from 'react-chartjs-2';
import Barchart from './Barchart';
import LineChart from './LineChart';

 const Home2 = () => {
  return (
    <div >
        <div className="container">
    <div className="row">
        <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-blue">
                <div className="inner">
                    <h3> 13436 </h3>
                    <p> Students  </p>
                </div>
                <div className="icon">
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                </div>
                <a href="#" className="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>

        <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-green">
                <div className="inner">
                    <h3> 18535 </h3>
                    <p> Total Submissions </p>
                </div>
                <div className="icon">
                    <i className="fa fa-money" aria-hidden="true"></i>
                </div>
                <a href="#" className="card-box-footer">View More <i className="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-orange">
                <div className="inner">
                    <h3> 5464 </h3>
                    <p> New Logins </p>
                </div>
                <div className="icon">
                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                </div>
                <a href="#" className="card-box-footer">View More <i className="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-red">
                <div className="inner">
                    <h3> 723 </h3>
                    <p> Faculty Staffs </p>
                </div>
                <div className="icon">
                    <i className="fa fa-users"></i>
                </div>
                <a href="#" className="card-box-footer">View More <i className="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
    </div>
    <div className="row">
       
    </div>
</div>

<div  >

<Barchart />
<LineChart/>

</div>



    </div>
  )
}
export default Home2;