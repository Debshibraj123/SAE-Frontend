import React from 'react';
import classNames from 'classnames';
import "../../assets/css/arhnCSS/arhnMembers.css";
import "bootstrap";
import "react-bootstrap";

export const Member = () => {
  return (
    <>
       
<div className="container membersArhn pb-4 my-4">
    <div className="row blog">
        <h1 className="center mx-auto text-center py-4">Our Team Members</h1>
       
	   <div className="col-md-12">
            <div id="blogCarousel" className="carousel slide" data-ride="carousel">

                {/* <ol className="invisible carousel-indicators">
                    <li data-target="#blogCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#blogCarousel" data-slide-to="1"></li>
                </ol> */}

               
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src="https://i.ibb.co/L8Pj1mg/o6EuTCT6.jpg"/>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Dana Robins</h3>
                                        <span className="post">Marketing Consultant</span>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a href="#" className="fa fa-envelope"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src="https://i.ibb.co/L8Pj1mg/o6EuTCT6.jpg"/>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">John Doe</h3>
                                        <span className="post">Marketing Consultant</span>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a href="#" className="fa fa-envelope"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src="https://i.ibb.co/L8Pj1mg/o6EuTCT6.jpg"/>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Markus Baas</h3>
                                        <span className="post">Financial Expert</span>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a href="#" className="fa fa-envelope"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src="https://i.ibb.co/L8Pj1mg/o6EuTCT6.jpg"/>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Sophia Lee</h3>
                                        <span className="post">Customer Support</span>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a href="#" className="fa fa-envelope"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                    

                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src="https://i.ibb.co/L8Pj1mg/o6EuTCT6.jpg"/>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Ted Robbins</h3>
                                        <span className="post">Law Expert</span>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a href="#" className="fa fa-envelope"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src="https://i.ibb.co/L8Pj1mg/o6EuTCT6.jpg"/>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Noel Flantier</h3>
                                        <span className="post">Marketing Consultant</span>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a href="#" className="fa fa-envelope"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src="https://i.ibb.co/L8Pj1mg/o6EuTCT6.jpg"/>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Ernesto Appia</h3>
                                        <span className="post">Team Leader</span>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a href="#" className="fa fa-envelope"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src="https://i.ibb.co/L8Pj1mg/o6EuTCT6.jpg"/>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Rosita Jimenez</h3>
                                        <span className="post">Marketing Consultant</span>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a href="#" className="fa fa-envelope"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                   

                </div>
               
            </div>
          

        </div>
    </div>
</div>
    </>
  )
}

export default Member
