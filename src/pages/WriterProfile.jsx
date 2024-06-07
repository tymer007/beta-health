import React from 'react'

const WriterProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-md overflow-hidden w-3/4">
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src="index.jpeg"
            alt="Author Background"
          />
          <img
            className="w-32 h-32 rounded-full border-4 border-red absolute top-12 left-8"
            src="index.jpeg"
            alt="Author"
          />
        </div>
        <div className="pl-12">
          <div className="flex items-center space-x-4 mb-4 mt-20">
            <h2 className="text-2xl font-semibold">Kylian Mbappe</h2>
            <span className="text-gray-500">Dr Journalist / Gynaecologist</span>
          </div>
          <p className="text-gray-600 mb-6">
            [Bio – Lorem ipsum dolor sit amet consectetur adipisicing elit Quidem non, animi debitis architecto inventore, assumenda possimus nam rerum]
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">About Author</h3>
              <h4 className="text-md font-semibold">Education :</h4>
              <p className="text-gray-700 mb-4">University of Dundee, Scotland</p>
              <div className="mb-4">
                <h4 className="text-md font-semibold">Certifications :</h4>
                <p className="text-gray-700">Licensed Gynaecologist</p>
              </div>
              <div className="mb-4">
                <h4 className="text-md font-semibold">Affiliations:</h4>
                <p className="text-gray-700">CardinalHealth, Nuffield Health, LivingWell</p>
              </div>
              <div>
                <h4 className="text-md font-semibold">Professional Accomplishments :</h4>
                <p className="text-gray-700">Certified Doctor</p>
              </div>
            </div>
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-4">Articles Written</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((article, index) => (
                  <div key={index} className="flex space-x-4 bg-gray-50 p-4 rounded-lg shadow-md">
                    <img
                      className="w-1/4 h-24 object-cover rounded-lg"
                      src="https://via.placeholder.com/150"
                      alt="Article"
                    />
                    <div className="w-3/4">
                      <h4 className="text-md font-semibold">How to Avoid Breast Cancer</h4>
                      <p className="text-gray-500 text-sm mb-2">5 Minute Read &middot; Posted 2min ago</p>
                      <p className="text-gray-700 mb-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non, animi de...
                      </p>
                      <a href="#" className="text-blue-600 font-semibold">Read more</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WriterProfile