// #1
import React from "react";
// #2
function Image(props) {
  // #3
  return <img className="circle-img" src={props.img} alt="avatar_img" />;
}
// #4
export default Image;
