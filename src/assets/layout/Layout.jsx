import React from 'react'
import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import Sheetrep from '../sheet/Sheetrep.jsx';
import Settingbar from '../components/settingbar/Settingbar.jsx';
import Form from '../Form/Form.jsx';

export default function Layout() {
  return (
    <>
        <Header />
        <Settingbar />
        <Form />
        <Footer />
    </>
  )
}
