import React from 'react';

function ServiceItem(props) {
  return (
    <div className="service__item">
          <div className="service__item-img">
           <img src={props.img} alt="service"/>
        </div>
        <p className="service__item-title">
            {props.title}
        </p>
        <p className="service__item-description">
            {props.description}
        </p>
    </div>
  );
}

export default ServiceItem;
