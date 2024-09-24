import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../Styles/Projectdetpage.css";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";
function Projectdetails() {
  let params = useParams();
  const navigate = useNavigate();
  const [projectinfo, setprojectinfo] = useState([]);
  useEffect(() => {
    if (params) {
      axios
        .get(`https://findev-back.herokuapp.com/api/posts/${params.id}`)
        .then((data) => {
          setprojectinfo(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <div className="Projectdetpage">
      <SideNav />
      <div className="contmid">
        <div className="midcontentp">
          <div>{projectinfo.title}</div>
          <div>{projectinfo.desc}</div>
          <div className="joinproject">
            <button
              onClick={() => {
                const token = JSON.parse(localStorage.getItem("data"));
                if (!projectinfo.join.includes(token._id)) {
                  const joinusers = [...projectinfo.join, token._id];

                  if (token._id == projectinfo.userId) {
                    console.log("ADmin Cannot join");
                  } else {
                    axios
                      .put(
                        `https://findev-back.herokuapp.com/api/posts/${projectinfo._id}`,
                        {
                          userId: projectinfo.userId,
                          join: joinusers,
                        }
                      )
                      .then((data) => {})
                      .catch((err) => {
                        console.log(err);
                      });
                  }
                  navigate(`/project-join/${projectinfo._id}`);
                }
              }}
            >
              JOIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectdetails;
