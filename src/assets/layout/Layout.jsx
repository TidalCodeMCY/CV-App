import React from 'react'
import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import Sheetrep from '../sheet/Sheetrep.jsx';

export default function Layout() {
  return (
    <>
        <Header />

        <Sheetrep />
        <Footer />
    </>
  )
}
