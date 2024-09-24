import React, { useEffect, useState } from "react";
import Filter from "./Question/Filter";
import SideNav from "./SideNav";
import "../../Styles/Home.css";
import Question from "./Question/Question";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  let params = useParams();
  const [allquest, setallquest] = useState([]);
  const [searchquest, setsearchquest] = useState("");
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("data"));

    if (token) {
      if (params.tagname) {
        axios
          .get(
            `https://findev-back.herokuapp.com/api/questions/question-tag/${params.tagname}`
          )
          .then((data) => {
            setallquest(data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        axios
          .get("https://findev-back.herokuapp.com/api/questions/allquest/1")
          .then((data) => {
            console.log(data);
            setallquest(data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [params]);
  function submitquest() {
    if (searchquest != "") {
      axios
        .get(
          `https://findev-back.herokuapp.com/api/questions/search/${searchquest}`
        )
        .then((data) => {
          console.log(data);
          setallquest(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get("https://findev-back.herokuapp.com/api/questions/allquest/1")
        .then((data) => {
          console.log(data);
          setallquest(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div className="Homie">
      <SideNav />
      <div className="midpart">
        <div className="searchquestion">
          <input
            onChange={(e) => {
              setsearchquest(e.target.value);
            }}
            placeholder="Search"
            type="text"
          />
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              submitquest();
            }}
          >
            <path
              d="M24.6582 21.6162L19.79 16.748C19.5703 16.5283 19.2725 16.4062 18.96 16.4062H18.1641C19.5117 14.6826 20.3125 12.5146 20.3125 10.1562C20.3125 4.5459 15.7666 0 10.1562 0C4.5459 0 0 4.5459 0 10.1562C0 15.7666 4.5459 20.3125 10.1562 20.3125C12.5146 20.3125 14.6826 19.5117 16.4062 18.1641V18.96C16.4062 19.2725 16.5283 19.5703 16.748 19.79L21.6162 24.6582C22.0752 25.1172 22.8174 25.1172 23.2715 24.6582L24.6533 23.2764C25.1123 22.8174 25.1123 22.0752 24.6582 21.6162ZM10.1562 16.4062C6.7041 16.4062 3.90625 13.6133 3.90625 10.1562C3.90625 6.7041 6.69922 3.90625 10.1562 3.90625C13.6084 3.90625 16.4062 6.69922 16.4062 10.1562C16.4062 13.6084 13.6133 16.4062 10.1562 16.4062Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="timespan">
          <div className="topquest">
            <h1>Top Questions</h1>
          </div>
          <div className="spans">
            <div className="addquest">
              {" "}
              <button>
                <Link to="/addquestion">Add Question</Link>
              </button>
            </div>

            <div className="alltimes">
              {" "}
              <div className="time">Recent</div>
              <div className="time">This Week</div>
              <div className="time">This Month</div>
            </div>
          </div>
        </div>
        <div className="questionspace">
          {allquest &&
            allquest.map((data, ind) => (
              <Question eachquest={data} key={ind} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
