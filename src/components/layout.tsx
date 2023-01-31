// components/layout.js

import Navbar from './navbar';
import Footer from './footer';
import { ReactElement } from 'react';

export default function Layout({
  children,
}: {
  children: ReactElement;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
