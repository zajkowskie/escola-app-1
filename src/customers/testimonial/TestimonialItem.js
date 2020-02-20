import React from 'react';

export default class TestimonialItem extends React.Component  {
  render(){
    return (
      <div className="testimonial-item__content"id={this.props.id}>
          {this.props.content}
      </div>
    );

  }
}
