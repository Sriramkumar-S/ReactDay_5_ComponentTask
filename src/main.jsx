import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Banner from './Banner/Banner'
import Peoples from './People/Peoples'
import Feature from './Features/Feature'

const banner_1 = {
  description: "Generate more leads with a professional landing page!",
  height: '40rem',
  id: 1
};
const banner_2 = {
  description: "Ready to get started? Sign up now!",
  height: '20rem',
  id: 2
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Banner key={banner_1.id} description={banner_1.description} height={banner_1.height} />
    <Feature />
    <Peoples />
    <Banner key={banner_2.id} description={banner_2.description} height={banner_2.height} />
    <Footer />
  </React.StrictMode>,
)
