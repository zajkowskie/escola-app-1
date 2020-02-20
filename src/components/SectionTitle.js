import React from 'react';


function SectionTitle(props) {
    return (
        <div className="section__title">
        <h2 >
            {props.title}
        </h2>
        <p >
            {props.description}
        </p>
      </div>
    );
  }
  
  export default SectionTitle;