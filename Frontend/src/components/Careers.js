/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Link} from 'react-router-dom';
import anish from './images/Anish.jpg'
import abhy from './images/Abhyuday.jpg'
import priti from './images/Priti.jpg'
import riju from './images/Riju.jpg'
import priyanka from './images/Priyanka.jpg'
import mrimoy from './images/mrimoy.jpg'
import tridip from './images/Tridip.jpg'
import mansi from './images/mansi.jfif'
import abhishek from './images/Abhishek.jpg'

const Careers = () => {




    return (
        <>
            {/* // "homepage": "https://github.com/atraskiasha/atraskireact.git", */}

            <div class="container py-5">
                <div class="row text-center text-white">
                    <div class="col-lg-8 mx-auto">
                        <h1 class="display-4">Our Team</h1>

                    </div>
                </div>
            </div>



            <div class="container">
                <div class="row text-center">


                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={anish} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 class="mb-0 text-black">Anish Dhar</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                            <ul class="social mb-0 list-inline mt-3">
                                {/* <li class="list-inline-item"><i class="fa-brands fa-square-facebook"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-twitter"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-instagram"></i></li> */}
                                <a href='https://www.linkedin.com/in/anish-dhar?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bx8gYUaYhTcyMIoijF%2FI1DA%3D%3D'> <li class="list-inline-item"><i class="fa-brands fa-linkedin"></i></li></a>
                            </ul>
                        </div>
                    </div>


                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={abhy} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 class="mb-0 text-black">Abhyuday Majhi</h5><span class="small text-uppercase text-muted">Marketing Executive</span>
                            <ul class="social mb-0 list-inline mt-3">
                                {/* <li class="list-inline-item"><i class="fa-brands fa-square-facebook"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-twitter"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-instagram"></i></li> */}
                                <a href='https://www.linkedin.com/in/priti-jhawar-91005a204?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpiticpQmRGyXMO7%2ByBzF2w%3D%3D'><li class="list-inline-item"><i class="fa-brands fa-linkedin"></i></li></a>
                            </ul>
                        </div>
                    </div>


                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={priti} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 class="mb-0 text-black">Priti Jhawar</h5><span class="small text-uppercase text-muted">Business Development Executive</span>
                            <ul class="social mb-0 list-inline mt-3">
                                {/* <li class="list-inline-item"><i class="fa-brands fa-square-facebook"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-twitter"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-instagram"></i></li> */}
                                <a href='https://www.linkedin.com/in/priti-jhawar-91005a204?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpiticpQmRGyXMO7%2ByBzF2w%3D%3D'><li class="list-inline-item"><i class="fa-brands fa-linkedin"></i></li></a>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={priyanka} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 class="mb-0 text-black">P R Executive</h5><span class="small text-uppercase text-muted">Priyanka Basu </span>
                            <ul class="social mb-0 list-inline mt-3">
                                {/* <li class="list-inline-item"><i class="fa-brands fa-square-facebook"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-twitter"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-instagram"></i></li> */}
                               <a href='https://www.linkedin.com/in/priyanka-basu-2063ab192?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9qhO%2FZ0lT1%2BQLAIOKTIY6A%3D%3D'> <li class="list-inline-item"><i class="fa-brands fa-linkedin"></i></li></a>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={riju} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 class="mb-0 text-black">Riju Dass</h5><span class="small text-uppercase text-muted">Graphic Designer</span>
                            <ul class="social mb-0 list-inline mt-3">
                                {/* <li class="list-inline-item"><i class="fa-brands fa-square-facebook"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-twitter"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-instagram"></i></li> */}
                                <a href='https://www.linkedin.com/in/riju-rjd-35958a21a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bf4uEOf%2FTTx2RQf5RE%2Bs0ag%3D%3D'><li class="list-inline-item"><i class="fa-brands fa-linkedin"></i></li></a>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={mrimoy} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 class="mb-0 text-black">Mrinmoy Banik </h5><span class="small text-uppercase text-muted">Business Development Executive </span>
                            <ul class="social mb-0 list-inline mt-3">
                                {/* <li class="list-inline-item"><i class="fa-brands fa-square-facebook"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-twitter"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-instagram"></i></li> */}
                                <a href='https://www.linkedin.com/in/mrinmoy-banik-5439891b6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfjFWOOJqRNq3QIWxutIV8w%3D%3D'><li class="list-inline-item"><i class="fa-brands fa-linkedin"></i></li></a>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={tridip} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 class="mb-0 text-black">Tridip Chowdhury</h5><span class="small text-uppercase text-muted">Marketing Exicutive</span>
                            <ul class="social mb-0 list-inline mt-3">
                                {/* <li class="list-inline-item"><i class="fa-brands fa-square-facebook"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-twitter"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-instagram"></i></li> */}
                                <a href='https://www.linkedin.com/in/tridip-chowdhury-5710b51a6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1MIrT5%2BGSSK9zJpTRKkC8Q%3D%3D'><li class="list-inline-item"><i class="fa-brands fa-linkedin"></i></li></a>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={abhishek} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 class="mb-0 text-black">Abhishek Yadav</h5><span class="small text-uppercase text-muted">Business Development EXECUTIVE</span>
                            <ul class="social mb-0 list-inline mt-3">
                                {/* <li class="list-inline-item"><i class="fa-brands fa-square-facebook"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-twitter"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-instagram"></i></li> */}
                                <a href='https://www.linkedin.com/in/abhishek-yadav-6a2079263?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMjFWR9V0TcqsBeN5KAIq1A%3D%3D'><li class="list-inline-item"><i class="fa-brands fa-linkedin"></i></li></a>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={mansi} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 class="mb-0 text-black">Mansi Chawla</h5><span class="small text-uppercase text-muted">Human Resource</span>
                            <ul class="social mb-0 list-inline mt-3">
                                {/* <li class="list-inline-item"><i class="fa-brands fa-square-facebook"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-twitter"></i></li>
                                <li class="list-inline-item"><i class="fa-brands fa-square-instagram"></i></li> */}
                                <a href='https://www.linkedin.com/in/mansi-chawla-459b97204?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BnoRt3ngOR8qvsrRMW2kcQg%3D%3D'><li class="list-inline-item"><i class="fa-brands fa-linkedin"></i></li></a>
                            </ul>
                        </div>
                    </div>
                    

                </div>
            </div>



            <div className="container">

                <h2 className="text-center mb-4 text-white">Job Openings</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: 'black', fontSize:'20px'}}>Business Development Executive
                                </h5>
                                <span class="bi bi-briefcase-fill">Full Time</span><br></br>
                                <span class="bi bi-plus">Actively Hiring</span><br></br>
                                <span class="bi bi-geo-alt-fill" >Delhi,India</span><br></br>

                                <a href="https://www.linkedin.com/jobs/view/3616374996" className="btn btn-primary" style={{margin:'10px'}} target="_blank">Apply Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: 'black',fontSize:'20px',margin:'18px' }}>Digital Marketing Intern</h5>
                                <span class="bi bi-briefcase-fill">Full Time</span><br></br>
                                <span class="bi bi-plus">Actively Hiring</span><br></br>
                                <span class="bi bi-geo-alt-fill" >Delhi,India</span><br></br>

                                <a href="https://www.linkedin.com/jobs/view/3616374996" className="btn btn-primary" style={{ margin: '10px' }} target="_blank">Apply Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: 'black' ,fontSize:'20px',marginBottom:'16px'}}>Digital Marketing Intern</h5>
                                <span class="bi bi-briefcase-fill">Full Time</span><br></br>
                                <span class="bi bi-plus">Actively Hiring</span><br></br>
                                <span class="bi bi-geo-alt-fill" >Delhi,India</span><br></br>
                                <a href="https://www.linkedin.com/jobs/view/3616374996" className="btn btn-primary" style={{margin:'19px'}} target="_blank">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>

     {/* footer starts  */}
     <footer className=" text-white" style={{backgroundColor:'#333'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <p><i className="fa fa-envelope"></i> Email: communications@atraski.com</p>
              {/* <p><i className="fa fa-envelope"></i>Email: priti.jhawar@atraski.com</p>             */}
                <p><i className="fa fa-phone"></i> Contact No: 9163720198 / 7596009785</p>
              {/* <p><i className="fa fa-phone"></i> Contact No: 7596009785</p> */}
            </div>
            <div className="col-md-6 text-md-right">
              <p>Atraski India
                O-8, Block B, Chittaranjan Park, New Delhi, Delhi- 110019</p>
              <p>Atraski India (Kolkata Office)
                38 Kamalapur (West)
                Dum Dum Cant, Kolkata - 700028</p>
              <Link className="footer-link" to="/privacy">Privacy Policy</Link>
            </div>
          </div>

        </div>
      </footer>

      {/*  footer ends  */}
        </>
    )
}

export default Careers
