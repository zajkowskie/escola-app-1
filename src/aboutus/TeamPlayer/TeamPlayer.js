import React from 'react';


function TeamPlayer(props) {
  return (
    <div className="team-player">
          <div className="team-player__img">
           <img src={props.img} alt={props.name}/>
        </div>
        <div className="team-player__name">
            {props.name}
        </div>

        <div className="team-player__dot">
        </div>
        <div className="team-player__position">
            <div className="team-player__position-content">
                {props.position}
                <div className="team-player__arrow"></div>
            </div>
        </div>
    </div>
  );
}

export default TeamPlayer;
