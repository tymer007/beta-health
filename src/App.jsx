import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// import './bootstrap.min.css'


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AboutUs from './components/AboutUs.jsx';
import WriterProfile from './pages/WriterProfile';
import ApplicationFirstPage from './pages/forms/ApplicationFirstPage';
import ApplicationSecondPage from './pages/forms/ApplicationSecondPage';
import SignUp from './pages/forms/SignUp.jsx';
import DashboardWriterProfile from './dashboard/DashboardWriterProfile.jsx';
import DashboardWriterConsultations from './dashboard/DashboardConsultations.jsx';
import DashboardWriteArticle from './dashboard/DashboardWriteArticle.jsx';
import CardCarousel from './components/CardCarousel.jsx';
import TopArticles from './components/TopArticles.jsx';
import Login from './pages/forms/Login.jsx';
import LoginDashboard from './pages/forms/LoginDashboard.jsx';

function App() {

  // const [count, setCount] = useState(0)

  return (
    <>

      <div><Login /></div>
      <div><SignUp /></div>

      <div><Header /></div>
      <div><AboutUs /></div>
      <div><LoginDashboard /></div>
      { /*
        
              <hr />
      <hr />
      <hr />
      <div><TopArticles /></div>
      <hr />
      <div><CardCarousel /></div>
      <hr />
      <div><DashboardWriterProfile /></div>
      <hr />
      <div><Footer /></div>
      <hr />
      <hr />
      <div><DashboardWriterConsultations /></div>
      <hr />
      <hr />
      <div><WriterProfile /></div>
    */}
    <div><DashboardWriteArticle /></div>
    <div><ApplicationFirstPage /></div> 
    <div><ApplicationSecondPage /></div> 

    {/* <hr />
    */}
    </>
  )
}

export default App