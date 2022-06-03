import React from 'react';
import './style.css';
import backgroundImage from '../../images/homeimg.jpg' ;
import announcement from '../../images/announcement.png';
import notice from '../../images/notice34.png';

const Home = () => {
  return (
    <div>
    
      <div className="container">
   <div className="row">
      <div className="col-md-12">
         <div id="content" className="content content-full-width">
            
            <div className="profile">
               <div className="profile-header">
                  
                  <div className="profile-header-cover" style={{backgroundImage : `url(${backgroundImage})`}}></div>
                  
                  <div className="profile-header-content" style={{height : '300px'}}>
                     
               </div>
            </div>
           
         </div>
         </div>

         <div className="card">
            <div className="header">
               <ul className="profile-header-tab nav nav-tabs" style={{backgroundColor : 'lightgray'}}>
                  <li className="nav-item"><img className="img-fluid img-thumbnail" src={announcement} alt="Awesome Image"  style={{width: '60px', height: '60px', marginRight: '50px' }}/></li>
                  <li cclassName="nav-item" style={{marginTop: '11px'}}><h3>Latest Announcements</h3></li>
                 
               </ul>
            </div>
            <div className="body">
                <ul classNames="comment-reply list-unstyled">
                    <li className="row clearfix" >
                        <div className="icon-box col-md-2 col-4"><img className="img-fluid img-thumbnail" src={notice} alt="Awesome Image"  style={{height: '100px', width: '100px'}}/></div>
                        <div className="text-box col-md-10 col-8 p-l-0 p-r0">
                            <h5 className="m-b-0">rrrrrrrr</h5>
                            <p>rrrrrrrrrrrr. </p>
                            <ul className="list-inline">
                                <li>rrrrrrrrr</li>
                               
                            </ul>
                        </div>
                    </li>

                    <li className="row clearfix" >
                        <div className="icon-box col-md-2 col-4"><img className="img-fluid img-thumbnail"  src={notice} alt="Awesome Image"  style={{height: '100px', width: '100px'}}/></div>
                        <div className="text-box col-md-10 col-8 p-l-0 p-r0">
                            <h5 className="m-b-0">rrrrrrrr</h5>
                            <p>rrrrrrrrrrrr. </p>
                            <ul className="list-inline">
                                <li>rrrrrrrrr</li>
                               
                            </ul>
                        </div>
                    </li>

                    <li className="row clearfix" >
                        <div className="icon-box col-md-2 col-4"><img className="img-fluid img-thumbnail"  src={notice} alt="Awesome Image"  style={{height: '100px', width: '100px'}}/></div>
                        <div className="text-box col-md-10 col-8 p-l-0 p-r0">
                            <h5 className="m-b-0">rrrrrrrr</h5>
                            <p>rrrrrrrrrrrr. </p>
                            <ul className="list-inline">
                                <li>rrrrrrrrr</li>
                               
                            </ul>
                        </div>
                    </li>
                    
                           </ul>
                        </div>
                       </div>




         </div>
         </div>
         </div>


    </div>
  )
}

export default Home;