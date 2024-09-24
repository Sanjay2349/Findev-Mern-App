import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import "../../Styles/Project.css";
import EachProject from "./EachProject";
import axios from "axios";
function Project() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("data"));

    if (token) {
      axios
        .get("https://findev-back.herokuapp.com/api/posts/something/1")
        .then((data) => {
          setposts(data.data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(token);
    }
  }, []);
  console.log(posts);
  return (
    <div className="project">
      <SideNav />
      <div className="promidpart">
        <div className="projectsearch">
          <input type="text" placeholder="Search" />
        </div>
        <div className="topproj">
          <h1>Top Projects</h1>
        </div>
        <div className="allprojects">
          {posts &&
            posts.map((data, ind) => <EachProject key={ind} eachpost={data} />)}
        </div>
      </div>
    </div>
  );
}

export default Project;
