import React, { useState } from "react";
import "../../Styles/Tags.css";
import EachTag from "./EachTag";
import SideNav from "./SideNav";
function Tags() {
  const [tagnames, settagnames] = useState([
    {
      name: "Python",
      des: "Python is a multi-paradigm, dynamically typed, multi-purpose programming language.",
    },
    {
      name: "Java",
      des: "Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the language itself. ",
    },
    {
      name: "JavaScript",
      des: "For questions regarding programming in ECMAScript  and its various dialects/implementations. Note JavaScript is NOT the same as Java!",
    },
    {
      name: "C#",
      des: "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft's .",
    },
    {
      name: "HTML",
      des: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. ",
    },
    {
      name: "C",
      des: "C is a general-purpose programming language used for system programming, libraries, games and cross-platform. ",
    },
  ]);
  const justtags = [
    {
      name: "python",
      des: "Python is a multi-paradigm, dynamically typed, multi-purpose programming language.",
    },
    {
      name: "java",
      des: "Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the language itself. ",
    },
    {
      name: "javascript",
      des: "For questions regarding programming in ECMAScript  and its various dialects/implementations. Note JavaScript is NOT the same as Java!",
    },
    {
      name: "C#",
      des: "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft's .",
    },
    {
      name: "html",
      des: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. ",
    },
    {
      name: "c",
      des: "C is a general-purpose programming language used for system programming, libraries, games and cross-platform. ",
    },
  ];
  const [taginp, settaginp] = useState("");
  function findtag() {
    if (taginp.toLowerCase != "" && justtags.find((x) => x.name === taginp)) {
      const a = justtags.indexOf(justtags.find((x) => x.name === taginp));
      settagnames([justtags[a]]);
    } else {
      settagnames(justtags);
    }
  }
  return (
    <div className="tags">
      {" "}
      <SideNav />
      <div className="tagmidpart">
        <div className="tagsearchquestion">
          <input type="text" placeholder="Search" />
        </div>
        <div className="Tagtitle">
          <div className="tagname">Tags</div>
          <p>
            A tag is a keyword or label that categorizes your question with
            other, similar questions. Using the right tags makes it easier for
            others to find and answer your question.
          </p>
        </div>
        <div className="searchtag">
          <input
            type="text"
            onChange={(e) => {
              settaginp(e.target.value);
            }}
            value={taginp}
          />
          <div
            className="tagsvg"
            onClick={() => {
              findtag();
            }}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.6582 21.6162L19.79 16.748C19.5703 16.5283 19.2725 16.4062 18.96 16.4062H18.1641C19.5117 14.6826 20.3125 12.5146 20.3125 10.1562C20.3125 4.5459 15.7666 0 10.1562 0C4.5459 0 0 4.5459 0 10.1562C0 15.7666 4.5459 20.3125 10.1562 20.3125C12.5146 20.3125 14.6826 19.5117 16.4062 18.1641V18.96C16.4062 19.2725 16.5283 19.5703 16.748 19.79L21.6162 24.6582C22.0752 25.1172 22.8174 25.1172 23.2715 24.6582L24.6533 23.2764C25.1123 22.8174 25.1123 22.0752 24.6582 21.6162ZM10.1562 16.4062C6.7041 16.4062 3.90625 13.6133 3.90625 10.1562C3.90625 6.7041 6.69922 3.90625 10.1562 3.90625C13.6084 3.90625 16.4062 6.69922 16.4062 10.1562C16.4062 13.6084 13.6133 16.4062 10.1562 16.4062Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="tagspace">
          {tagnames.map((data, ind) => (
            <EachTag key={ind} tagname={data.name} des={data.des} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tags;
