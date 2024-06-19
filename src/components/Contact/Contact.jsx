
import React from 'react';
import './contact.css';
import Navbar from '../Navbar/Navbar';
import ContactForm from './ContactForm';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <div>
       <Navbar/>
   <section className='contact'>
    </section>  
          <ContactForm />
          <Footer/>
    </div>
  );
}

export default Contact;


