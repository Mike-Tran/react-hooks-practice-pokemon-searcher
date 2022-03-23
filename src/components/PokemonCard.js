import React, { useState } from 'react';
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {
  const [showFront, setShowFront] = useState(true);
  const {name, hp, sprites} = poke;

  function cardClickHandler() {
    setShowFront((showFront) => !showFront);
  }

  return (
    <Card onClick={cardClickHandler}>
      <div>
        <div className="image">
          <img src={showFront ? sprites.front : sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
