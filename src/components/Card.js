import Avatar from "./Avatar";
import AvatarText from "./AvatarText";
import ButtonGroup from "./ButtonGroup";
import React, { useState } from "react";

function Card() {
  const [size, setSize] = useState({key: 's', dimension: 30});
  const [type, setType] = useState("square");

  const setSmall = () => setSize({key: 's', dimension: 30});
  const setMedium = () => setSize({key: 'm', dimension: 60});
  const setLarge = () => setSize({key: 'l', dimension: 120});
  const setXl = () => setSize({key: 'xl', dimension: 200});

  const setSquare = () => setType('square')
  const setRound = () => setType('round')
  const setCircle = () => setType('circle')
  
  return (
    <div className="card">
      <Avatar src="https://picsum.photos/400/400" size={size} type={type} />
      <AvatarText size={size} type={type}/>
      <ButtonGroup
        size={size}
        small={setSmall}
        medium={setMedium}
        large={setLarge}
        xl={setXl}
        square={setSquare}
        round={setRound}
        circle={setCircle}
      />
    </div>
  );
}

export default Card;
