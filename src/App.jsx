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

function App() {

  // const [count, setCount] = useState(0)

  return (
    <>


      {/* 
    */}
      <div><Header /></div>
      <div><SignUpForm /></div>
      <div><LogInPage /></div>
      <div><ApplicationFirstPage /></div>
      <div><ApplicationSecondPage /></div>
      <div><WriterProfile /></div>
      <div><Footer /></div>
    </>
  )
}

export default App