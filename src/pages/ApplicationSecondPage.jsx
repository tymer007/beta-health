import React, { useState } from 'react';

const ApplicationSecondPage = () => {
  const [formData, setFormData] = useState({
    primarySpecialty: '',
    subSpecialty: '',
    medicalSchool: '',
    degreeObtained: '',
    yearOfGraduation: '',
    currentorganization: '',
    currentorganizationcountry: '',
    currentorganizationstate: '',
    yearsOfExperience: '',
    mdcnLicenseNo: '',
    mdcnRegistrationNo: '',
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-full bg-white flex justify-center">
        <div className="w-full max-w-2xl">

          <img src="logo.png" alt="Logo" className="h-20 w-auto mb-8 mx-auto" />
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="  mb-4">
              <a href="#" className="text-blue-500 hover:underline text-left">Back</a>
              <h2 className="text-2xl font-semibold text-center">Professional Information:</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div >
                <label className="block text-sm font-medium text-gray-700">
                  Medical Degree(s) Earned*
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v24a4 4 0 004 4h24a4 4 0 004-4V20l-8-8z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Click to Upload or drag and drop</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">Max. file size: 25 MB</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-1 gap-12">
                  <div className="flex flex-col">

                    <label htmlFor="primarySpecialty" className="mb-1">Area of Specialty*</label>

                    <select
                      id="primarySpecialty"
                      name="primarySpecialty"
                      value={formData.primarySpecialty}
                      onChange={handleChange}
                      className="border rounded p-2 bg-blue-100"
                      required
                    >
                      <option value="">Primary Specialty*</option>
                      <option value="Anesthesiology">Anesthesiology</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Dentistry">Dentistry</option>
                      <option value="Dermatology">Dermatology</option>
                      <option value="Emergency Medicine">Emergency Medicine</option>
                      <option value="Endocrinology">Endocrinology</option>
                      <option value="Gastroenterology">Gastroenterology</option>
                      <option value="General Practice/Family Medicine">General Practice/Family Medicine</option>
                      <option value="General Surgery">General Surgery</option>
                      <option value="Internal Medicine">Internal Medicine</option>
                      <option value="Neurology">Neurology</option>
                      <option value="Obstetrics and Gynecology (OB/GYN)">Obstetrics and Gynecology (OB/GYN)</option>
                      <option value="Oncology">Oncology</option>
                      <option value="Ophthalmology">Ophthalmology</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Pathology">Pathology</option>
                      <option value="Pediatrics">Pediatrics</option>
                      <option value="Psychiatry">Psychiatry</option>
                      <option value="Pulmonology">Pulmonology</option>
                      <option value="Radiology">Radiology</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="subSpecialty" className="mb-1"></label>
                    <select
                      id="subSpecialty"
                      name="subSpecialty"
                      value={formData.subSpecialty}
                      onChange={handleChange}
                      className="border rounded p-2 bg-blue-100"
                    >
                      <option value="">Sub Specialty</option>
                      <option value="Allergy and Immunology">Allergy and Immunology</option>
                      <option value="Anesthesiology">Anesthesiology</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Critical Care Medicine">Critical Care Medicine</option>
                      <option value="Dentistry">Dentistry</option>
                      <option value="Dermatology">Dermatology</option>
                      <option value="Emergency Medicine">Emergency Medicine</option>
                      <option value="Endocrinology">Endocrinology</option>
                      <option value="Family Medicine">Family Medicine</option>
                      <option value="Forensic Medicine">Forensic Medicine</option>
                      <option value="Gastroenterology">Gastroenterology</option>
                      <option value="Geriatrics">Geriatrics</option>
                      <option value="Hematology">Hematology</option>
                      <option value="Infectious Disease">Infectious Disease</option>
                      <option value="Internal Medicine">Internal Medicine</option>
                      <option value="Medical Genetics">Medical Genetics</option>
                      <option value="Nephrology">Nephrology</option>
                      <option value="Neurology">Neurology</option>
                      <option value="Neurosurgery">Neurosurgery</option>
                      <option value="Obstetrics and Gynecology (OB/GYN)">Obstetrics and Gynecology (OB/GYN)</option>
                      <option value="Occupational Medicine">Occupational Medicine</option>
                      <option value="Oncology">Oncology</option>
                      <option value="Ophthalmology">Ophthalmology</option>
                      <option value="Orthopedic Surgery">Orthopedic Surgery</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Otolaryngology (ENT)">Otolaryngology (ENT)</option>
                      <option value="Pathology">Pathology</option>
                      <option value="Pediatrics">Pediatrics</option>
                      <option value="Physical Medicine and Rehabilitation">Physical Medicine and Rehabilitation</option>
                      <option value="Plastic Surgery">Plastic Surgery</option>
                      <option value="Preventive Medicine">Preventive Medicine</option>
                      <option value="Psychiatry">Psychiatry</option>
                      <option value="Public Health">Public Health</option>
                      <option value="Pulmonology">Pulmonology</option>
                      <option value="Radiology">Radiology</option>
                      <option value="Rheumatology">Rheumatology</option>
                      <option value="Sleep Medicine">Sleep Medicine</option>
                      <option value="Sports Medicine">Sports Medicine</option>
                      <option value="Surgery">Surgery</option>
                      <option value="Urology">Urology</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1">
              <div className="flex flex-col">
                <label htmlFor="medicalSchool" className="mb-1">Educational Background*</label>
                <select
                  name="medicalSchool"
                  id="medicalSchool"
                  className="border rounded p-2 bg-blue-100"
                  required
                >
                  <option value="">Medical School Attended</option>
                  <option value="College of Health Sciences, Abia State University Uturu, Abia State">College of Health Sciences, Abia State University Uturu, Abia State</option>
                  <option value="College of Health Sciences, University of Uyo, Akwa Ibom">College of Health Sciences, University of Uyo, Akwa Ibom</option>
                  <option value="College of Health Sciences, Nnamdi Azikiwe University Nnewi, Anambra State">College of Health Sciences, Nnamdi Azikiwe University Nnewi, Anambra State</option>
                  <option value="College of Medical Sciences, University of Maiduguri, Borno State">College of Medical Sciences, University of Maiduguri, Borno State</option>
                  <option value="College of Medical Sciences, University of Calabar, Cross - Rivers State">College of Medical Sciences, University of Calabar, Cross - Rivers State</option>
                  <option value="College of Health Sciences, Delta State University, Abraka, Delta State">College of Health Sciences, Delta State University, Abraka, Delta State</option>
                  <option value="College of Health Sciences, Ebonyi State University Abakaliki, Ebonyi State">College of Health Sciences, Ebonyi State University Abakaliki, Ebonyi State</option>
                  <option value="College of Medical Sciences, University of Benin, Benin-City, Edo State">College of Medical Sciences, University of Benin, Benin-City, Edo State</option>
                  <option value="College of Health Sciences, Igbinedion University Okada, Edo State">College of Health Sciences, Igbinedion University Okada, Edo State</option>
                  <option value="College of Medicine, Ambrose Alli University Ekpoma, Edo State">College of Medicine, Ambrose Alli University Ekpoma, Edo State</option>
                  <option value="College of Medicine, University of Nigeria Enugu Campus, Enugu State">College of Medicine, University of Nigeria Enugu Campus, Enugu State</option>
                  <option value="College of Medicine, Enugu State University of Science and Technology, Enugu, Enugu State">College of Medicine, Enugu State University of Science and Technology, Enugu, Enugu State</option>
                  <option value="College of Medicine, Imo State University Owerri, Imo State">College of Medicine, Imo State University Owerri, Imo State</option>
                  <option value="College of Medicine, Ahmadu Bello University Zaria, Kaduna State">College of Medicine, Ahmadu Bello University Zaria, Kaduna State</option>
                  <option value="College of Medicine, Bayero University Kano, Kano State">College of Medicine, Bayero University Kano, Kano State</option>
                  <option value="College of Medicine, University of Ilorin, Kwara State">College of Medicine, University of Ilorin, Kwara State</option>
                  <option value="College of Medicine, University of Lagos, Idi-Araba, Lagos State">College of Medicine, University of Lagos, Idi-Araba, Lagos State</option>
                  <option value="College of Medicine, Lagos State University Ikeja, Lagos State">College of Medicine, Lagos State University Ikeja, Lagos State</option>
                  <option value="Obafemi Awolowo College of Health Sciences, Olabisi Onabanjo University Ago Iwoye, Ogun State">Obafemi Awolowo College of Health Sciences, Olabisi Onabanjo University Ago Iwoye, Ogun State</option>
                  <option value="College of Health Sciences, Obafemi Awolowo University Ile-Ife, Osun State">College of Health Sciences, Obafemi Awolowo University Ile-Ife, Osun State</option>
                  <option value="College of Medicine, University of Ibadan, Oyo State">College of Medicine, University of Ibadan, Oyo State</option>
                  <option value="College of Medical Sciences, University of Jos, Plateau State">College of Medical Sciences, University of Jos, Plateau State</option>
                  <option value="College of Health Sciences, Madonna University Elele, Rivers State">College of Health Sciences, Madonna University Elele, Rivers State</option>
                  <option value="College of Health Sciences, University of Port-Harcourt, Rivers State">College of Health Sciences, University of Port-Harcourt, Rivers State</option>
                  <option value="College of Health Sciences, Usmanu Danfodiyo University Sokoto, Sokoto State">College of Health Sciences, Usmanu Danfodiyo University Sokoto, Sokoto State</option>
                  <option value="College of Health Sciences, Ladoke Akintola University of Technology, Ogbomoso, Osun State">College of Health Sciences, Ladoke Akintola University of Technology, Ogbomoso, Osun State</option>
                  <option value="College of Health Sciences, Niger Delta University, Wilberforce Island, Bayelsa State">College of Health Sciences, Niger Delta University, Wilberforce Island, Bayelsa State</option>
                  <option value="College of Health Sciences, Bingham University Karu, Nasarawa State">College of Health Sciences, Bingham University Karu, Nasarawa State</option>
                  <option value="College of Health Sciences, Benue State University, Makurdi, Benue State">College of Health Sciences, Benue State University, Makurdi, Benue State</option>
                  <option value="College of Medicine, Chukwuemeka Odumegwu Ojukwu University, Awka, Anambra State">College of Medicine, Chukwuemeka Odumegwu Ojukwu University, Awka, Anambra State</option>
                  <option value="College of Health Sciences, Bowen University, Iwo, Osun State">College of Health Sciences, Bowen University, Iwo, Osun State</option>
                  <option value="College of Health Sciences, Babcock University, Ilishan-Remo, Ogun State">College of Health Sciences, Babcock University, Ilishan-Remo, Ogun State</option>
                  <option value="College of Health Sciences, University of Abuja">College of Health Sciences, University of Abuja</option>
                  <option value="College of Health Sciences, Afe Babalola University Ado-Ekiti, Ekiti State">College of Health Sciences, Afe Babalola University Ado-Ekiti, Ekiti State</option>
                  <option value="College of Medicine, Ekiti State University, Ado-Ekiti">College of Medicine, Ekiti State University, Ado-Ekiti</option>
                  <option value="College of Medicine, Kaduna State University">College of Medicine, Kaduna State University</option>
                  <option value="College of Medical Sciences, Gombe State University">College of Medical Sciences, Gombe State University</option>
                  <option value="College of Medical Sciences, Abubakar Tafawa Balewa University Bauchi, Bauchi State">College of Medical Sciences, Abubakar Tafawa Balewa University Bauchi, Bauchi State</option>
                  <option value="College of Medicine, Edo University, Uzairue, Edo State">College of Medicine, Edo University, Uzairue, Edo State</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <select
                  name="degreeObtained"
                  id="degreeObtained"
                  className="border rounded p-2 bg-blue-100"
                >
                  <option value="">Degree Obtained</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>

              <div className="flex flex-col">
                <select
                  id="yearOfGraduation"
                  name="yearOfGraduation"
                  value={formData.yearOfGraduation}
                  onChange={handleChange}
                  className="border rounded p-2 bg-blue-100"
                  required
                >
                  <option value="">Year of Graduation</option>
                  {Array.from({ length: 100 }, (_, i) => (
                    <option key={2024 - i} value={2024 - i}>{2024 - i}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1">
              <div className="flex flex-col">
                <label className="mb-1">Current Affiliation (Hospital/Clinic, if applicable)</label>
                <input
                  type="text"
                  name="currentorganization"
                  id="currentorganization"
                  autoComplete="currentorganization"
                  className="border rounded p-2 bg-blue-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <select
                  id="currentorganizationcountry"
                  name="currentorganizationcountry"
                  value={formData.currentorganizationcountry}
                  onChange={handleChange}
                  className="border rounded p-2 bg-blue-100"
                  required
                >
                  <option value="">Country</option>
                  <option value="Nigeria">Nigeria</option>
                </select>
              </div>

              <div className="flex flex-col">
                <select
                  id="currentorganizationstate"
                  name="currentorganizationstate"
                  value={formData.currentorganizationstate}
                  onChange={handleChange}
                  className="border rounded p-2 bg-blue-100"
                  required
                >
                  <option value="">State</option>
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

              <div className="flex flex-col">
                <select
                  name="yearsOfExperience"
                  id="yearsOfExperience"
                  className="border rounded p-2 bg-blue-100"
                >
                  <option value="">Years of Experience*</option>
                  <option value="1-5">1-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11-15">11-15</option>
                  <option value="15+">15+</option>
                </select>
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="contactNumber" className="mb-1">MDCN License Number*</label>
                <input
                  type="text"
                  id="mdcnLicenseNo"
                  name="mdcnLicenseNo"
                  value={formData.mdcnLicenseNo}
                  onChange={handleChange}
                  className="border rounded p-2 bg-blue-100"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="contactNumber" className="mb-1">MDCN Registration Number*</label>
                <input
                  type="text"
                  id="mdcnRegistrationNo"
                  name="mdcnRegistrationNo"
                  value={formData.mdcnRegistrationNo}
                  onChange={handleChange}
                  className="border rounded p-2 bg-blue-100"
                  required
                />
              </div>
            </div>
            <div className='flex justify-center'>
              <button type="submit" className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 w-1/5">
                Continue
              </button>
            </div>
            <p className="text-center mt-4 pb-3">
              <a href="#" className="text-blue-500 hover:underline">Already have an expert account?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSecondPage;