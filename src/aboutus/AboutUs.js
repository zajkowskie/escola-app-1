import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TeamPlayer from './TeamPlayer/TeamPlayer';

function AboutUs() {
    return (
    <section className="section section--about-us" id="about-us">
        <div className="section__content">
            <SectionTitle title="About us" description="Meet the team"/>
            <div className="service__row">
                <TeamPlayer name="Thomas" img="/assets/img/team__player-1.png" position="CEO"/>
                <TeamPlayer name="Thomas" img="/assets/img/team__player-2.png" position="Project manager"/>
                <TeamPlayer name="Thomas" img="/assets/img/team__player-3.png" position="Frontend developer"/>
                <TeamPlayer name="Thomas" img="/assets/img/team__player-4.png" position="Backend developer"/>
            </div>
        </div>
      </section>
    );
  }
  
  export default AboutUs;