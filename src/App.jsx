import Header from './components/Header';
import Footer from './components/Footer';

// import './bootstrap.min.css'


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import WriterProfile from './pages/WriterProfile';
import ApplicationFirstPage from './pages/ApplicationFirstPage';
import ApplicationSecondPage from './pages/ApplicationSecondPage';
import SignUpForm from './pages/SignUpForm.jsx';
import LogInPage from './pages/LogInPage.jsx';
import DashboardWriterProfile from './dashboard/DashboardWriterProfile.jsx';
import DashboardWriterConsultations from './dashboard/DashboardConsultations.jsx';
import DashboardWriteArticle from './dashboard/DashboardWriteArticle.jsx';

function App() {

  // const [count, setCount] = useState(0)

  return (
    <>
      {/* 
      <div><Header /></div>
      <div><SignUpForm /></div>
      <div><WriterProfile /></div>
      <div><LogInPage /></div>
      <div><ApplicationFirstPage /></div>
      <div><ApplicationSecondPage /></div>
      <div><Footer /></div>
      <div><DashboardWriterProfile /></div>
      <div><DashboardWriterConsultations /></div>
    */}
    
    <div><DashboardWriteArticle /></div>

    </>
  )
}

export default App