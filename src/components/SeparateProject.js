import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ".././Styles/SeparateProject.css";
import io from "socket.io-client";
import Chat from "./Chat";
import ScrollToBottom from "react-scroll-to-bottom";
import SideNav from "./Dashboard/SideNav";
const socket = io.connect("ws://localhost:8900");
function SeparateProject() {
  let params = useParams();
  const token = JSON.parse(localStorage.getItem("data"));
  const [projectinfo, setprojectinfo] = useState(null);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

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
  useEffect(() => {
    if (projectinfo) {
      socket.emit("join_room", projectinfo._id);
      setShowChat(true);
    }
  }, [projectinfo]);

  return (
    <div className="SeparateProject">
      {!showChat ? (
        <div>Check the connection</div>
      ) : (
        <div className="midseparate">
          <SideNav />
          <Chat
            socket={socket}
            username={token.username}
            room={projectinfo._id}
          />
          <div className="chatend"></div>
        </div>
      )}
    </div>
  );
}

export default SeparateProject;
