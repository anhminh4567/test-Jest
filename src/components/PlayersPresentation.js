import React from "react";

export default function PlayersPresentation(props) {
  return (
    <div className='container'>
      {props.players.map((player) => (
        <div className='column' key={player.id}>
          <div className='card'>
            <img src={player.img} alt='' />
            <h3>{player.name}</h3>
            <p className='title'>{player.club}</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
