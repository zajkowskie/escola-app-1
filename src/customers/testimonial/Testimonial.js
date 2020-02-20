import * as React from 'react';
import TestimonialItem from './TestimonialItem';
import UserThumb from './UserThumb';
import quoteImg from '../../img/customers__quote.png';
import arrowLeft from '../../img/arrow-left.png';
import arrowRight from '../../img/arrow-right.png';
import customerTumb1 from '../../img/user-thumb-1.png';

 export default class Testimonial extends React.Component {
     constructor(props){
         super(props);
         this.state={
             testimonials : [
                {
                    user : {
                        author : "Joanna Stanley",
                        company : "Big Data Company",
                        icon : customerTumb1,
                    },
                    article : "0Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    user : {
                        author : "Joanna Stanley 2",
                        company : "Big Data Company 2",
                        icon :  customerTumb1,
                    },
                    article : "1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    user : {
                        author : "Joanna Stanley 3",
                        company : "Big Data Company 32",
                        icon :  customerTumb1,
                    },
                    article : "2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
            ],
            actualElement : 0,
         }
     }
     onShowSlide(direction){
         switch (direction){
            case "left":
                if(this.state.actualElement - 1 < 0){
                    this.setState({actualElement : (Object.keys(this.state.testimonials).length -1)})
                }else{
                    this.setState({actualElement : this.state.actualElement - 1 })
                }
                break;
            case "right":
                if(this.state.actualElement + 1 > (Object.keys(this.state.testimonials).length -1)){
                    this.setState({actualElement : 0})
                }else{
                    this.setState({actualElement : this.state.actualElement + 1 })
                }
                break;
         }
     }

    render(){
        return (
            <div className="testimonials__slider">
                <img className="testimonials__slider-quote" src={quoteImg}/>
                <div className="testimonials__content-wrapper">
                    <div className="testimonials__arrow--left" onClick={()=>this.onShowSlide('left')}>
                        <img src={arrowLeft}/>
                    </div>
                    <div className="testimonials__content">
                        <TestimonialItem 
                            content={this.state.testimonials[this.state.actualElement].article} 
                            id={this.state.actualElement} 
                            />
                    </div>
                    <div className="testimonials__arrow--right" onClick={()=>this.onShowSlide('right')}>
                        <img src={arrowRight}/>
                    </div>
                    
                </div>
                    <UserThumb userInfo={this.state.testimonials[this.state.actualElement].user}/>
            </div>
          );
    }
  
}
