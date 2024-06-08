import React from 'react';
import Dashboard, { DashboardItem } from './Dashboard';
import { User, Home, SquarePen, LogOut, Calendar, LifeBuoy, Settings } from "lucide-react";

const DashboardWriterProfile = () => {
  const loaderStyle = {
    width: '70px',
    height: '15px',
    borderRadius: '15px',
    background: 'linear-gradient(orange 0 0) 0/0% no-repeat lightblue',
    animation: 'l2 3s infinite steps(10)'
  };

  const keyframesStyle = `
    @keyframes l2 {
      100% { background-size: 110%; }
    }
  `;

  return (
    <>
      {/* Dashboard */}
      <div className="flex">
        <Dashboard>
          <DashboardItem icon={<Home size={20} />} text="Home" />
          <DashboardItem icon={<SquarePen size={20} />} text="Write Article" active />
          <DashboardItem icon={<Calendar size={20} />} text="Consultations" alert />
          <DashboardItem icon={<User size={20} />} text="Your Profile" />
          <hr className="my-3 border-gray-600" />
          <DashboardItem icon={<Settings size={20} />} text="Settings" />
          <DashboardItem icon={<LifeBuoy size={20} />} text="Help" />
          <DashboardItem icon={<LogOut size={20} />} text="Log Out" />
        </Dashboard>
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold">Write an Article!</h1>
          <p>This is your dashboard content.</p>
          
          <div
          //  className='hidden'
          >
            <style>{keyframesStyle}</style>
            <div style={loaderStyle}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardWriterProfile;
