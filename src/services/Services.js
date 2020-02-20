import React from 'react';
import ServiceItem from '../services/serviceItem/ServiceItem';
import SectionTitle from '../components/SectionTitle';

function Services() {
    return (
    <section className="section section--services" id="services">
        <div className="section__content">
            <SectionTitle title=" Our services" description="What we can do"/>
            <div className="service__row">
                <ServiceItem title="Webdesign" img="/assets/img/services__item-1.png" description="Lorem ipsum dolor sit amet"/>
                <ServiceItem title="Api development" img="/assets/img/services__item-2.png" description="Lorem ipsum dolor sit amet"/>
                <ServiceItem title="Backend" img="/assets/img/services__item-3.png" description="Lorem ipsum dolor sit amet"/>
                <ServiceItem title="Moobile apps" img="/assets/img/services__item-4.png" description="Lorem ipsum dolor sit amet"/>
            </div>
        </div>
      </section>
    );
  }
  
  export default Services;