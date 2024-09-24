import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../Styles/Question.css";
function Question({ eachquest }) {
  const [ans, setans] = useState([]);

  useEffect(() => {
    axios
      .get(`https://findev-back.herokuapp.com/api/answers/${eachquest._id}`)
      .then((data) => {
        setans(data.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Question">
      <div className="questdet">
        <div className="questiontitle">
          <p>{eachquest.title}</p>
        </div>
        <div className="questdesc">{eachquest.desc}</div>
        <div className="username">
          <span>
            {" "}
            <svg
              width="30"
              height="30"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.0001 4.16667C13.5001 4.16667 4.16675 13.5 4.16675 25C4.16675 36.5 13.5001 45.8333 25.0001 45.8333C36.5001 45.8333 45.8334 36.5 45.8334 25C45.8334 13.5 36.5001 4.16667 25.0001 4.16667ZM15.3126 38.5417C18.0417 36.5833 21.3751 35.4167 25.0001 35.4167C28.6251 35.4167 31.9584 36.5833 34.6876 38.5417C31.9584 40.5 28.6251 41.6667 25.0001 41.6667C21.3751 41.6667 18.0417 40.5 15.3126 38.5417ZM37.7917 35.6667C34.1426 32.8036 29.6384 31.2475 25.0001 31.2475C20.3618 31.2475 15.8576 32.8036 12.2084 35.6667C9.702 32.6778 8.32987 28.9007 8.33342 25C8.33342 15.7917 15.7917 8.33334 25.0001 8.33334C34.2084 8.33334 41.6668 15.7917 41.6668 25C41.6668 29.0625 40.2084 32.7708 37.7917 35.6667Z"
                fill="white"
              />
              <path
                d="M24.9999 12.5C20.9791 12.5 17.7083 15.7708 17.7083 19.7917C17.7083 23.8125 20.9791 27.0833 24.9999 27.0833C29.0208 27.0833 32.2916 23.8125 32.2916 19.7917C32.2916 15.7708 29.0208 12.5 24.9999 12.5ZM24.9999 22.9167C23.2708 22.9167 21.8749 21.5208 21.8749 19.7917C21.8749 18.0625 23.2708 16.6667 24.9999 16.6667C26.7291 16.6667 28.1249 18.0625 28.1249 19.7917C28.1249 21.5208 26.7291 22.9167 24.9999 22.9167Z"
                fill="white"
              />
            </svg>
          </span>
          {eachquest.userId}
        </div>
      </div>
      <div className="ansdet">
        <div className="commentsec">
          <div className="comment">
            <div className="commentimg">
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 18.75H21.25V10H18.75V18.75H10V21.25H18.75V30H21.25V21.25H30V18.75Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="commentbox">
              <Link to={`/comments/${eachquest._id}`}>Answer</Link>
            </div>
          </div>
          <div className="numanswers">{ans} Answers</div>
        </div>
        <div className="questiontags">
          {eachquest &&
            eachquest.tag.map((data, ind) => (
              <div className="tag" key={ind}>
                <p>
                  <Link to={`/question-tag/${data}`}>{data}</Link>
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Question;
