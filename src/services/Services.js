import React from 'react';
import ServiceItem from '../services/serviceItem/ServiceItem';
import SectionTitle from '../components/SectionTitle';
import webdesignImg from '../img/services__item-1.png';
import apiImg from '../img/services__item-2.png';
import backImg from '../img/services__item-3.png';
import mobileImg from '../img/services__item-4.png';

function Services() {
    return (
    <section className="section section--services" id="services">
        <div className="section__content">
            <SectionTitle title=" Our services" description="What we can do"/>
            <div className="service__row">
                <ServiceItem title="Webdesign" img={webdesignImg} description="Lorem ipsum dolor sit amet"/>
                <ServiceItem title="Api development" img={apiImg} description="Lorem ipsum dolor sit amet"/>
                <ServiceItem title="Backend" img={backImg} description="Lorem ipsum dolor sit amet"/>
                <ServiceItem title="Moobile apps" img={mobileImg} description="Lorem ipsum dolor sit amet"/>
            </div>
        </div>
      </section>
    );
  }
  
  export default Services;