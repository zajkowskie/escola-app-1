import React from 'react';

function UserThumb(props) {
  return (
    <div className="user-thumb">

        <div className="user-thumb__icon">
            <img src={props.userInfo.icon}/>
        </div>
        <div className="user-thumb__content">
            <div className="user-thumb__name">
                <span>{props.userInfo.author}</span>
            </div>
            <div className="user-thumb__position">
                <span>{props.userInfo.company}</span>
            </div>
        </div>
    </div>
  );
}

export default UserThumb;
