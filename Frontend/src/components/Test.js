import React from "react";
import "./Test.css";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { Container, Card } from "react-bootstrap";



import AOS from "aos";
import "aos/dist/aos.css";
import model1 from './imagegallery/Akanksha-Wankhade-modified.png';
import model2 from './imagegallery/Aman-Ashok-modified.png';
import model3 from './imagegallery/Anjali-Bhandari-modified.png';
import model4 from './imagegallery/Arushi-Sharma-modified.png';
import model5 from './imagegallery/Ashly-Nelyndem-modified.png';
import model6 from './imagegallery/Bhavya-Sharma-modified.png';
import model7 from './imagegallery/Arpitha-Rajendra-modified.png';
AOS.init();

export default function Test() {
  return (
    <div className="container my-5 py-5">
      <h1 className="heading-2 text-center" style={{ color: "white", fontWeight:'500' }}>
        {" "}
        Our Models
      </h1>

      <div className="scrollable-card-grid" style={{ color: "black" }}>
        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model1} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Akanksha Wankhade </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model2} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Aman Ashok </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model3} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Anjali Bhandari </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model4} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Arushi Sharma </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model5} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Ashly Nelyndem </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model6} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Bhavya Sharma </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model7} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Arpitha Rajendra </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model1} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Akanksha Wankhade </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>


        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model2} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Aman Ashok </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
} 
