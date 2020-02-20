import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TeamPlayer from './TeamPlayer/TeamPlayer';
import playerImg from '../img/team__player-1.png';

function AboutUs() {
    return (
    <section className="section section--about-us" id="about-us">
        <div className="section__content">
            <SectionTitle title="About us" description="Meet the team"/>
            <div className="service__row">
                <TeamPlayer name="Thomas" img={playerImg} position="CEO"/>
                <TeamPlayer name="Thomas" img={playerImg} position="Project manager"/>
                <TeamPlayer name="Thomas" img={playerImg} position="Frontend developer"/>
                <TeamPlayer name="Thomas" img={playerImg} position="Backend developer"/>
            </div>
        </div>
      </section>
    );
  }
  
  export default AboutUs;