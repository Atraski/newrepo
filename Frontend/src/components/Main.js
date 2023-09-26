/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useRef,useEffect} from 'react';
import '../index.css';
import { Form, FormControl, Dropdown, Button } from 'react-bootstrap';
// import CustomSelect from './customSelect';
import {  Link } from 'react-router-dom';
import { BsFillCaretDownFill } from 'react-icons/bs'; // Import caret down icon from react-icons library





import logo1 from './images/3-01.jpg';
import logo2 from './images/ducati.jpg';
import logo3 from './images/4-01.jpg';
import logo4 from './images/7.jpg';
import logo5 from './images/1.jpg';
import logo6 from './images/cme.jpeg';
import logo7 from './images/eazydiner-prime.png';
import logo8 from './images/2.jpg';
import logo9 from './images/travel.jpg';


// const options = [
//   { value: 'In need of Digital Marketing Solutions?', label: 'In need of Digital Marketing Solutions?' , link:'/chat' },
//   { value: 'Looking for best brand visibility or Public Relation solutions?', label: 'Looking for best brand visibility or Public Relation solutions?', link:'/chat' },
//   { value: 'Search of optimum Event Management support?', label: 'Search of optimum Event Management support?', link:'/chat' },
//   { value: 'Looking for right Influencer Marketing solutions?', label: 'Looking for right Influencer Marketing solutions?' , link:'/chat'},
//   { value: 'Looking for assistance in MICE solutions?', label: 'Looking for assistance in MICE solutions?', link:'/chat' },
  
// ];

const Main = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    filterOptions();
  }, [searchValue]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSearchValue(option);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    window.location.href = `/chat?selectedOption=${selectedOption}`;
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchBarFocus = () => {
    setShowDropdown(true);
  };

  const filterOptions = () => {
    const filtered = [
      'In need of Digital Marketing Solutions',
      'Looking for best brand visibility or Public Relation solutions',
      'Search of optimum Event Management support',
      'Looking for right Influencer Marketing solutions',
      'Looking for assistance in MICE solutions?',
    ].filter((option) =>
      option.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  return (
    <>
      <div className="background">
        <div className="content">
          <h1>Welcome to Atraski</h1>
          <h3 id="mainheading" style={{ marginTop: '-15px', fontSize: '20px' }}>
            <span className="desktop-only">Hello, World! We believe in inspiring India in a unique and innovative way. Every day, we offer a wide range of services across events, travel, blogging, and fashion to bring you the best of what we have to offer. We promise to inspire and delight you every step of the way. Atraski flourishing furiously over the past years is now proud to present a cabinet of successful events throughout all A tier cities of the country including open mics, fashion walks and walks promoting social causes, bloggers meets, art confluences along with travel meets and packaged tours all across India</span>
            <span className="mobile-only">Hello, World! We believe in inspiring India in a unique and innovative way. Every day, we offer a wide range of services across events, travel, blogging, and fashion to bring you the best of what we have to offer.</span>
          </h3>
          <a href="/chat" className="containerchat">
          </a>
          
          <Form onSubmit={handleFormSubmit} className="d-flex align-items-center">
          <div ref={dropdownRef}>

          <Dropdown show={showDropdown} onToggle={setShowDropdown}>
        <Dropdown.Toggle  variant="dark" id="dropdown-basic">
          <BsFillCaretDownFill size={1} /> 
        </Dropdown.Toggle>

        <Dropdown.Menu>
        {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <Dropdown.Item
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  style={{ fontSize: '12px', color: 'black' }}
                >
                  {option}
                </Dropdown.Item>
              ))
            ) : (
              <Dropdown.Item disabled style={{fontSize:'20px'}}>No results found</Dropdown.Item>
            )}
        </Dropdown.Menu>
      </Dropdown>
      </div>

      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={searchValue}
        onChange={handleSearchInputChange}
        onClick={handleSearchBarFocus}
        style={{ borderColor: 'blue' }}
      />

      <Button type="submit" variant="dark">
        Search
      </Button>
    </Form>
          
      
        </div>
      </div>



<div
        className="background-image-res"

        style={{
          backgroundImage: `url(${logo8})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '100vh',
          position: 'relative',
          zIndex: '-1'

        }}
      >

      </div>


      <div className="container2"
        style={{
          backgroundImage: `url(${logo2})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
        <img src="images/imageb.jpg" alt="" />
      </div>

      <div
        style={{
          backgroundImage: `url(${logo3})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo1})`,
          backgroundSize: '100% auto',
          backgroundAttachment: 'fixed',
          height: '80vh',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo4})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo5})`,
          backgroundSize: '100% auto',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo7})`,
          backgroundSize: '100% auto',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo9})`,
          backgroundSize: '100% auto',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo6})`,
          backgroundSize: '100% auto',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>


      <footer className=" text-white" style={{ backgroundColor: '#333' }}>
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

export default Main
