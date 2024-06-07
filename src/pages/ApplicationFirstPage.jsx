import React, { useState } from 'react';

const ApplicationFirstPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    day: '',
    month: '',
    year: '',
    gender: '',
    contactNumber: '',
    email: '',
    country: '',
    state: '',
    postalCode: '',
    jobType: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => {
      const newJobTypes = checked
        ? [...prevState.jobType, name]
        : prevState.jobType.filter((job) => job !== name);
      return {
        ...prevState,
        jobType: newJobTypes,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted', formData);
  };

  return (
    <div className="min-h-screeen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-full bg-white flex justify-center">
        <div className="w-full max-w-2xl">

        <img src="logo.png" alt="Logo" className="h-20 w-auto mb-8 mx-auto pt-2" />
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="  mb-4">
            <a href="#" className="text-blue-500 hover:underline text-left">Back</a>
            <h2 className="text-2xl font-semibold text-center">Personal Information:</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-1">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border rounded p-2 bg-blue-100"
                placeholder="Please enter your first name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="mb-1">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border rounded p-2 bg-blue-100"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label htmlFor="day" className="mb-1">Date of Birth*</label>
              <select
                id="day"
                name="day"
                value={formData.day}
                onChange={handleChange}
                className="border rounded p-2 bg-blue-100"
                required
              >
                <option value="">DD</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="month" className="mb-1">Month*</label>
              <select
                id="month"
                name="month"
                value={formData.month}
                onChange={handleChange}
                className="border rounded p-2 bg-blue-100"
                required
              >
                <option value="">MM</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="year" className="mb-1">Year*</label>
              <select
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="border rounded p-2 bg-blue-100"
                required
              >
                <option value="">YYYY</option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={2024 - i} value={2024 - i}>{2024 - i}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="gender" className="mb-1">Gender*</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border rounded p-2 bg-blue-100"
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="contactNumber" className="mb-1">Contact Number*</label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="border rounded p-2 bg-blue-100"
                placeholder="+234"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded p-2 bg-blue-100"
                placeholder="example123@gmail.com"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="postalCode" className="mb-1">Postal Code (Optional)</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="border rounded p-2 bg-blue-100"
                placeholder="Type code"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="country" className="mb-1">Country of Residence*</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border rounded p-2 bg-blue-100"
                required
              >
                <option value="">Select</option>
                <option value="Nigeria">Nigeria</option>
                {/* Add more country options here */}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="state" className="mb-1">State*</label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="border rounded p-2 bg-blue-100"
                required
              >
                <option value="">Select</option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="FCT">FCT</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col mb-4 items-center">
            <label className="mb-1">What job(s) are you open to working on, you can check more than one:</label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="Writer"
                  checked={formData.jobType.includes('Writer')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                Sign up as a Writer
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="Consultant"
                  checked={formData.jobType.includes('Consultant')}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                Sign up as a Consultant
              </label>
            </div>
          </div>
          <button type="submit" className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 w-full">
            Continue
          </button>
          <p className="text-center mt-4 pb-3">
            <a href="#" className="text-blue-500 hover:underline">Already have an expert account?</a>
          </p>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFirstPage;