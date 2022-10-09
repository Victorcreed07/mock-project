import React from 'react'
import '../css/dashboard.scss'
import Button from '@mui/material/Button';
import { Outlet, Link ,useNavigate } from "react-router-dom";
import {useAuth} from "./auth.js"

const Dashboard = () => {

const auth = useAuth()
const navigate = useNavigate()
const handleLogout = () => {

     auth.logout();
     navigate("/")
}
	return (
		<>
			


  
     



     <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
          <div className="container">

               <div className="navbar-header">
                    <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                         <span className="icon icon-bar"></span>
                         <span className="icon icon-bar"></span>
                         <span className="icon icon-bar"></span>
                    </button>

                
                   
                     <img src="https://img.icons8.com/color/150/000000/sap.png" style={{marginTop: "-40px"}} />

               </div>

          
               <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-nav-first">
                         <li ><a style={{fontSize: "30px"}} href="#about" className="smoothScroll">About</a></li>
                         <li><a style={{fontSize: "30px"}} href="#blog" className="smoothScroll">Portals</a></li>
                         <li><a style={{fontSize: "30px"}} href="#work" className="smoothScroll">Products</a></li>
                         <li><a style={{fontSize: "30px"}} href="#contacts" className="smoothScroll">Contact</a></li>
                        
                         <li><a style={{fontSize: "30px",marginLeft:"120px",color:"#fcf403"}}  className="smoothScroll" href="#" onClick={handleLogout}>Logout</a></li>
                    </ul>

               </div>

          </div>
     </section>


     <section id="home" data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container">
               <div className="row">

                    <div className="col-md-6 col-sm-12">
                         <div className="home-info">
                              <h1>We make the world run better and improve people's lives.</h1>
                              
                              
                         </div>
                    </div>

                   
                    
               </div>
          </div>
     </section>


 
     <section id="about" data-stellar-background-ratio="0.5">
          <div className="container">
               <div className="row">

                    <div className="col-md-8 col-sm-6">
                         <div className="about-info">
                              <div className="section-title">
                                   <h2>Let us introduce</h2>
                                   <span className="line-bar">...</span>
                              </div>
                              <p style={{fontSize:"24px",fontFamily: 'Jost',color: "black"}}>SAP is the market leader in enterprise application software, helping companies of all sizes and in all industries run at their best: SAP customers generate 87% of total global commerce. Our machine learning, Internet of Things (IoT), and advanced analytics technologies help turn customers’ businesses into intelligent enterprises. Our end-to-end suite of applications and services enables our customers to operate profitably, adapt continuously, and make a difference. </p>
                         </div>
                    </div>

                    <div className="col-md-4 col-sm-6" style={{float:"right"}}>
                         <div className="about-info skill-thumb">

                              <strong>Leadership</strong>
                                   <span className="pull-right">95%</span>
                                        <div className="progress">
                                             <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}></div>
                                        </div>

                              <strong>Knowledge</strong>
                                   <span className="pull-right">90%</span>
                                        <div className="progress">
                                             <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}></div>
                                        </div>

                              <strong>Success</strong>
                                   <span className="pull-right">98%</span>
                                        <div className="progress">
                                             <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"style={{width: "98%"}}></div>
                                        </div>

                              <strong>Customer Service</strong>
                                   <span className="pull-right">100%</span>
                                        <div className="progress">
                                             <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                                        </div>

                         </div>
                    </div>

                    
                    
               </div>
          </div>
          <br />
          <br />
     </section>


    
     <section id="blog" data-stellar-background-ratio="0.5">
          <div className="container">
               <div className="row">

                    <div className="col-md-12 col-sm-12">
                         <div className="section-title">
                              <h2>Our Portals</h2>
                              <span className="line-bar">...</span>
                         </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
              
                         <div className="media blog-thumb">
                              <div className="media-object media-left">
                                   <a href=""><img src="https://images.unsplash.com/photo-1561813858-214a7aa470b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8&w=1000&q=80" className="img-responsive" alt="" /></a>
                              </div>
                              <div className="media-body blog-info">
                                   <small></small>
                                   <h3><a href="">Quality Reporter</a></h3>
                                   <p>Welcome to the customer portal.Click the button to log into it.</p>
                                    <Button variant="outlined"  style={{fontSize:"15px",fontWeight:20}}><Link to="/quality">Proceed</Link></Button>
                              </div>
                         </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
   
                         <div className="media blog-thumb">
                              <div className="media-object media-left">
                                   <a href=""><img src="https://images.unsplash.com/photo-1566625147574-b1cf1ff6cf7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwcm9hZHxlbnwwfHwwfHw%3D&w=1000&q=80" className="img-responsive" alt="" /></a>
                              </div>
                              <div className="media-body blog-info">
                                   <small></small>
                                   <h3><a href="">Model Builder</a></h3>
                                   <p>Welcome to the Vendor portal.Click the button to log into it.</p>
                                   <Button variant="outlined"   style={{fontSize:"15px",fontWeight:20}}><Link to="/modelbuilder">Proceed</Link></Button>
                              </div>
                         </div>
                    </div>

                   

                    <div className="col-md-6 col-sm-6">
                    
                         <div className="media blog-thumb">
                              <div className="media-object media-left">
                                   <a href=""><img src="https://images.pexels.com/photos/358255/pexels-photo-358255.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-responsive" alt="" /></a>
                              </div>
                              <div className="media-body blog-info">
                                   <small></small>
                                   <h3><a href="">Sales Forecasting</a></h3>
                                   <p>Welcome to the Employee portal.Click the button to log into it.</p>
                                   <Button variant="outlined"  style={{fontSize:"15px",fontWeight:20}}><Link to="/forecast">Proceed</Link></Button>
                              </div>
                         </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                    
                         <div className="media blog-thumb">
                              <div className="media-object media-left">
                                   <a href=""><img src="https://images.pexels.com/photos/358255/pexels-photo-358255.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-responsive" alt="" /></a>
                              </div>
                              <div className="media-body blog-info">
                                   <small></small>
                                   <h3><a href="">Algorithm Analyzer</a></h3>
                                   <p>Welcome to the Employee portal.Click the button to log into it.</p>
                                   <Button variant="outlined"  style={{fontSize:"15px",fontWeight:20}}><Link to="/algoanalyzer">Proceed</Link></Button>
                              </div>
                         </div>
                    </div>
                    
               </div>
          </div>
     </section>


     <section id="work" data-stellar-background-ratio="0.5">
          <div className="container">
               <div className="row">

                    <div className="col-md-12 col-sm-12">
                         <div className="section-title">
                              <h2>Our Products</h2>
                              <span className="line-bar">...</span>
                         </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                      
                         <div className="work-thumb">
                              <a href="assets/work-image1.jpg" className="image-popup">
                                   <img src="https://www.stechies.com/userfiles/images/ST-Sol-Manager.jpg" className="img-responsive" alt="Work" />

                                   <div className="work-info">
                                        <h3>SAP Solution Manager</h3>
                                        
                                   </div>
                              </a>
                         </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                       
                         <div className="work-thumb">
                              <a href="assets/work-image2.jpg" className="image-popup">
                                   <img src="https://d1rytvr7gmk1sx.cloudfront.net/wp-content/uploads/2017/05/sap-cloud-logo.png" className="img-responsive" alt="Work" style={{height: "250px"}} />

                                   <div className="work-info">
                                        <h3>SAP S/4 HANA CLOUD</h3>
                                        
                                   </div>
                              </a>
                         </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                     
                         <div className="work-thumb">
                              <a href="assets/work-image3.jpg" className="image-popup">
                                   <img src="https://www.isystechworks.com/wp-content/uploads/2018/03/SAP-9.3-Image-01.png" className="img-responsive" alt="Work" style={{height: "250px"}} />

                                   <div className="work-info">
                                        <h3>SAP Bussiness One</h3>
                                        
                                   </div>
                              </a>
                         </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                      
                         <div className="work-thumb">
                              <a href="assets/work-image4.jpg" className="image-popup">
                                   <img src="https://i0.wp.com/www.technosap.com/wp-content/uploads/2012/12/PLM1.png?ssl=1" className="img-responsive" alt="Work" />

                                   <div className="work-info">
                                        <h3>SAP Product Lifecycle Management</h3>
                                        
                                   </div>
                              </a>
                         </div>
                    </div>

               </div>
          </div>
     </section>

     <footer data-stellar-background-ratio="0.5" id="contacts">
          <div className="container">
               <div className="row">

                    <div className="col-md-5 col-sm-12">
                         <div className="footer-thumb footer-info"> 
                              <h2>SAP</h2>
                              <p>Thank you for reaching us.Do check out our other 
                              services and products and don't hesitate to contact us 
                         either using any of the aforementioned handles or just
                    call us.</p>
                         </div>
                    </div>

                    <div className="col-md-2 col-sm-4"> 
                         <div className="footer-thumb"> 
                              <h2>Company</h2>
                              <ul className="footer-link">
                                   <li><a href="#">About Us</a></li>
                                   <li><a href="#">Join our team</a></li>
                                   <li><a href="#">Read Blog</a></li>
                                   <li><a href="#">Press</a></li>
                              </ul>
                         </div>
                    </div>

                    <div className="col-md-2 col-sm-4"> 
                         <div className="footer-thumb"> 
                              <h2>Services</h2>
                              <ul className="footer-link">
                                   <li><a  href="#">Pricing</a></li>
                                   <li><a href="#">Documentation</a></li>
                                   <li><a href="#">Support</a></li>
                              </ul>
                         </div>
                    </div>

                    <div className="col-md-3 col-sm-4"> 
                         <div className="footer-thumb"> 
                              <h2>Find us</h2>
                              <p> Bergstraße 49, 69469 Weinheim,  <br /> Germany</p>
                         </div>
                    </div>                    

                    <div className="col-md-12 col-sm-12">
                         <div className="footer-bottom">
                              <div className="col-md-6 col-sm-5">
                                   <div className="copyright-text"> 
                                        <p>Copyright &copy; 2017 Your Company</p>
                                   </div>
                              </div>
                              <div className="col-md-6 col-sm-7">
                                   <div className="phone-contact"> 
                                        <p>Call us <span>(+66) 010-020-0340</span></p>
                                   </div>
                                   <ul className="social-icon">
                                        <li><a href="https://www.facebook.com/templatemo" className="fa fa-facebook-square" attr="facebook icon"></a></li>
                                        <li><a href="#" className="fa fa-twitter"></a></li>
                                        <li><a href="#" className="fa fa-instagram"></a></li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    
               </div>
          </div>
     </footer>


   
     <section className="modal fade" id="modal-form" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
               <div className="modal-content modal-popup">

                    <div className="modal-header">
                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                         </button>
                    </div>

                    <div className="modal-body">
                         <div className="container-fluid">
                              <div className="row">

                                   <div className="col-md-12 col-sm-12">
                                        <div className="modal-title">
                                             <h2>Hydro Co</h2>
                                        </div>

                                       
                                        <ul className="nav nav-tabs" role="tablist">
                                             <li className="active"><a href="#sign_up" aria-controls="sign_up" role="tab" data-toggle="tab">Create an account</a></li>
                                             <li><a href="#sign_in" aria-controls="sign_in" role="tab" data-toggle="tab">Sign In</a></li>
                                        </ul>

                                       
                                        <div className="tab-content">
                                             <div role="tabpanel" className="tab-pane fade in active" id="sign_up">
                                                  <form action="#" method="post">
                                                       <input type="text" className="form-control" name="name" placeholder="Name" required />
                                                       <input type="telephone" className="form-control" name="telephone" placeholder="Telephone" required />
                                                       <input type="email" className="form-control" name="email" placeholder="Email" required />
                                                       <input type="password" className="form-control" name="password" placeholder="Password" required />
                                                       <input type="submit" className="form-control" name="submit" value="Submit Button" />
                                                  </form>
                                             </div>

                                             <div role="tabpanel" className="tab-pane fade in" id="sign_in">
                                                  <form action="#" method="post">
                                                       <input type="email" className="form-control" name="email" placeholder="Email" required />
                                                       <input type="password" className="form-control" name="password" placeholder="Password" required />
                                                       <input type="submit" className="form-control" name="submit" value="Submit Button" />
                                                       <a href="https://www.facebook.com/templatemo">Forgot your password?</a>
                                                  </form>
                                             </div>
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </div>

               </div>
          </div>
     </section>

     <script src="../js/jquery.js"></script>
     <script src="../js/bootstrap.min.js"></script>
     <script src="../js/jquery.stellar.min.js"></script>
     <script src="../js/jquery.magnific-popup.min.js"></script>
     <script src="../js/smoothscroll.js"></script>
     <script src="../js/custom.js"></script>


     
    
		</>

		)
}

export default Dashboard