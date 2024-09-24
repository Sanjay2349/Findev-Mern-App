import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/Project.css";
function EachProject({ eachpost }) {
  const [ref, setref] = useState([]);
  const navigate = useNavigate();
  function joinproj() {
    const token = JSON.parse(localStorage.getItem("data"));
    if (
      !eachpost.join.includes(token._id) &&
      eachpost.join.length <= eachpost.team
    ) {
      const joinusers = [...eachpost.join, token._id];

      if (token._id == eachpost.userId) {
        console.log("ADmin Cannot join");
      } else {
        axios
          .put(`https://findev-back.herokuapp.com/api/posts/${eachpost._id}`, {
            userId: eachpost.userId,
            join: joinusers,
          })
          .then((data) => {})
          .catch((err) => {
            console.log(err);
          });
      }
      navigate(`/project-join/${eachpost._id}`);
    } else {
      navigate(`/project-join/${eachpost._id}`);
    }
  }
  return (
    <div className="eachproject">
      <div className="projdet">
        <div className="projtitle">
          <Link to={`/projects/${eachpost._id}`}>{eachpost.title}</Link>
        </div>
        <p className="projdesc">{eachpost.desc}</p>
        <div className="projuser">
          <div className="userpic">
            <img src="" alt="" />
          </div>
          <div className="username">{eachpost.username}</div>
        </div>
      </div>
      <div className="projbutt">
        <button
          onClick={() => {
            joinproj();
          }}
        >
          Join
        </button>
        <p>
          Team {eachpost.join && eachpost.join.length}/{eachpost.team}
        </p>
      </div>
    </div>
  );
}

export default EachProject;
