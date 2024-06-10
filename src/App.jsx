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
import CardCarousel from './components/CardCarousel.jsx';
import Form from './pages/Form.jsx';
import TopArticles from './components/TopArticles.jsx';

function App() {

  // const [count, setCount] = useState(0)

  return (
    <>

      {/* <div><LogInPage /></div>
      <div><DashboardWriterConsultations /></div>
      <div><DashboardWriteArticle /></div>
      <div><Form /></div> */}



      <div><DashboardWriterProfile /></div>

      {/* 
      <div><WriterProfile /></div>
      <div><Header /></div>
      <div><CardCarousel /></div>
      <div><Footer /></div>
      <div><TopArticles /></div>
      <div><ApplicationFirstPage /></div>
      <div><ApplicationSecondPage /></div>
      <div><SignUpForm /></div> */}


    </>
  )
}

export default App