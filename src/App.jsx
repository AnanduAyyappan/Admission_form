import React, { useState } from 'react';
import './App.css';
import { Button, ButtonGroup, TextField } from '@mui/material';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import pict from '../src/assets/schoolimage.png'

function App() {
  // State variables
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');

  // Validation states
  const [invalidName, setInvalidName] = useState(false);
  const [invalidAddress, setInvalidAddress] = useState(false);
  const [invalidPhone, setInvalidPhone] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidGender, setInvalidGender] = useState(false);
  const [invalidCourse, setInvalidCourse] = useState(false);

  // Validation logic
  const validateInput = (field, value) => {
    switch (field) {
      case 'name':
        const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
        setInvalidName(!nameRegex.test(value));
        setName(value);
        break;

      case 'address':
        setInvalidAddress(value.trim().length < 10);
        setAddress(value);
        break;

      case 'mobileNumber':
        const phoneRegex = /^[6-9]\d{9}$/;
        setInvalidPhone(!phoneRegex.test(value));
        setMobileNumber(value);
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setInvalidEmail(!emailRegex.test(value));
        setEmail(value);
        break;

      case 'gender':
        setInvalidGender(!value);
        setGender(value);
        break;

      case 'course':
        setInvalidCourse(!value);
        setCourse(value);
        break;

      case 'date':
        setSelectedDate(value);
        break;

      default:
        break;
    }
  };

  const handleClear = () => {
    setName('');
    setAddress('');
    setMobileNumber('');
    setEmail('');
    setGender('');
    setCourse('');
    setSelectedDate('');
    setInvalidName(false);
    setInvalidAddress(false);
    setInvalidPhone(false);
    setInvalidEmail(false);
    setInvalidGender(false);
    setInvalidCourse(false);
  };

  const handleSubmit = () => {
    if (
      !invalidName &&
      !invalidAddress &&
      !invalidPhone &&
      !invalidEmail &&
      gender &&
      course &&
      selectedDate
    ) {
      handleClear()
      alert('Form submitted successfully!');
    } else {
      alert('Please fill out all fields correctly.');
    }
  };

  return (
    <div className='d-flex justify-content-center bg-dark' style={{ width: '100%', minHeight: '80vh' }}>
      <div className="col-lg-3"></div>
      <div className="col-lg-6">
        <div className='bg-light rounded text-dark mt-5 p-5 mb-5' style={{minHeight:'90vh'}}>
          <div className='mb-3' style={{width:'100px', marginLeft:'31vb'}}>
            <img src={pict} className='img-fluid' alt='noimage'/>
          </div>
          <h3 className='text-center mb-4 text-danger'>Higher Secondary Admission Form</h3>
          <form className='mb-5 mt-5 px-5'>
            {/* Name Field */}
            <div className='mb-4' style={{ display: 'flex' }}>
              <label className='mt-4 me-4 fw-bolder'>Name of Student: </label>
              <TextField
                id="sName"
                label="Student Name"
                variant="standard"
                className='w-50'
                value={name}
                onChange={(e) => validateInput('name', e.target.value)}
                error={invalidName}
                helperText={invalidName ? 'Invalid name (only letters, spaces, hyphens allowed).' : ''}
              />
            </div>

            {/* Address Field */}
            <div className='mb-4' style={{ display: 'flex' }}>
              <label className='mb-4 me-5 mt-5 fw-bolder'>Address: </label>
              <TextField
                id="sAddress"
                label="Enter Address"
                multiline
                rows={4}
                value={address}
                variant="standard"
                className='mt-3 ms-5 w-50'
                onChange={(e) => validateInput('address', e.target.value)}
                error={invalidAddress}
                helperText={invalidAddress ? 'Address should be at least 10 characters long.' : ''}
              />
            </div>

            {/* Phone Number */}
            <div className='mb-3' style={{ display: 'flex' }}>
              <label className='mt-4 me-5 fw-bolder'>Phone Number: </label>
              <TextField
                id="sPhoneNum"
                label="Phone Number"
                variant="standard"
                className='w-50'
                value={mobileNumber}
                onChange={(e) => validateInput('mobileNumber', e.target.value)}
                error={invalidPhone}
                helperText={invalidPhone ? 'Invalid phone number.' : ''}
              />
            </div>

            {/* Email */}
            <div className='mb-3' style={{ display: 'flex' }}>
              <label className='mt-4 me-5 fw-bolder'>Student E-Mail: </label>
              <TextField
                id="sEmail"
                label="E-Mail"
                variant="standard"
                className='w-50'
                value={email}
                onChange={(e) => validateInput('email', e.target.value)}
                error={invalidEmail}
                helperText={invalidEmail ? 'Invalid email address.' : ''}
              />
            </div>

            {/* Gender */}
            <div className='mb-3' style={{ display: 'flex' }}>
              <label className='mt-4 me-5 fw-bolder'>Gender: </label>
              <ButtonGroup variant="text" className='mt-4 ms-5'>
                <Button onClick={() => validateInput('gender', 'male')}>Male</Button>
                <Button onClick={() => validateInput('gender', 'female')}>Female</Button>
                <Button onClick={() => validateInput('gender', 'others')}>Others</Button>
              </ButtonGroup>
              {invalidGender && <p className='text-danger'>Please select a gender.</p>}
            </div>
            <div className='mb-4'style={{display:'flex'}}>
            <label className='mt-4 me-2 fw-bolder'>Selected Gender: <span className='ms-4 ps-2 text-primary'>{gender}</span></label></div>


            {/* Date of Birth */}
            <div className='mb-3' style={{ display: 'flex' }}>
              <label className='mt-4 me-5 fw-bolder'>Date of Birth: </label>
              <TextField
                label="Select Date"
                type="date"
                value={selectedDate}
                onChange={(e) => validateInput('date', e.target.value)}
                InputLabelProps={{ shrink: true }}
                className='ms-3'
              />
            </div>
            

            {/* Course */}
            <div className='mb-3' style={{ display: 'flex' }}>
              <label className='mt-5 me-5 mb-4 fw-bolder'>Select Course: </label>
              <DropdownButton
                id="dropdown-basic-button"
                title="Select Course"
                className='ms-2 mt-5'
                onSelect={(value) => validateInput('course', value)}
              >
                <Dropdown.Item eventKey="biology">Biology</Dropdown.Item>
                <Dropdown.Item eventKey="computerscience">Computer Science</Dropdown.Item>
                <Dropdown.Item eventKey="commerce">Commerce</Dropdown.Item>
                <Dropdown.Item eventKey="humanities">Humanities</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className='mb-4'style={{display:'flex'}}>
            <label className='mt-4 me-2 fw-bolder'>Selected Course: <span className='ms-4 px-4 text-primary'>{course}</span></label></div>


            {/* Buttons */}
            <div className='d-flex justify-content-center'>
              <Button variant="contained" className='mx-3 my-5' onClick={handleClear}>Clear</Button>
              <Button variant="contained" className='mx-3 my-5' onClick={handleSubmit}>Submit</Button>
            </div>
            <div className='d-flex justify-content-center mb-3'>
              <p>AnanduAyyappan@2024December</p></div>
          </form>
        </div>
      </div>
      <div className="col-lg-3"></div>
    </div>
  );
}

export default App;
