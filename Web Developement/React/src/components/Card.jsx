import React from "react";
// #5
import Image from "./Image";
import Detail from "./Detail";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        {/* make image seperate componwnt */}
        {/* <img className="circle-img" src={props.img} alt="avatar_img" /> */}
        <Image img={props.img} />
      </div>
      <div className="bottom">
        <Detail tel={props.tel} email={props.email} />
      </div>
    </div>
  );
}

export default Card;
