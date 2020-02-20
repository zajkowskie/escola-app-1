import React from 'react';
import SectionTitle from '../components/SectionTitle';

function Contact() {
    return (
        <section className="section section--contact" id="contact">
            <SectionTitle title="Contact with us" description="Let's talk"/>
            <img  className="contact__arrows contact__arrows-left" src="/assets/img/contact__arrows-left.png" />
            <img  className="contact__arrows contact__arrows-right"  src="/assets/img/contact__arrows-right.png" />


          <form className="contact__form"> 
              <div className="contact__form-row">
                  <input className="contact__form-input" placeholder="Name"/>
                  <input className="contact__form-input" placeholder="Email or phone"/>
              </div>
              <div className="contact__form-row">
                  <textarea className="contact__form-textarea" placeholder="Message"></textarea>
              </div>
              <div className="contact__form-row contact__form-row--flex-end">
                <button className="button contact__form-button " role="send">Send</button>
              </div>
          </form>
        </section>
    );
  }
  
  export default Contact;