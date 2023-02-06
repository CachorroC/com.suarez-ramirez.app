// components/layout.js

import Navbar from './navbar';
import Footer from './footer';
import React from 'react';

export default function Layout(props: any) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
