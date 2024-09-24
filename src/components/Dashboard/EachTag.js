import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Tags.css";
function EachTag({ tagname, des }) {
  return (
    <div className="eachtag">
      <button className="tagbutt">
        <Link to={`/question-tag/${tagname}`}>{tagname}</Link>
      </button>
      <p>{des}</p>
    </div>
  );
}

export default EachTag;
