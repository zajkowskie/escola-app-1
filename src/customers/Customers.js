import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Testimonial from './testimonial/Testimonial';

function Customers() {
    return (
    <section className="section section--customers" id="customers">
            <SectionTitle title="Our customer" description="Testimonials"/>
            <Testimonial />
      </section>
    );
  }
  
  export default Customers;