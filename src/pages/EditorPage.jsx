import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Client from "../Client";
import Editor from "../Editor";

const EditorPage = () => {
  const params = useParams();
  const [clients, setClients] = useState([
    { socketId: 1, username: "Ashish S" },
    { socketId: 2, username: "Nikki" },
  ]);

  const copyRoomIdHandler = () => {
    console.log("Copy Room ID");
  };
  const leaveHandler = () => {
    console.log("Leave");
  };

  return (
    <div className="editorWrapper">
      <div className="sideBar">
        <div className="top">
          <header
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.2)",
              paddingBottom: "1rem",
            }}
          >
            <p className="heading">Code Sync 🚀</p>
            <span className="smallPara">Real Time Code Editor</span>
          </header>
          <main>
            <h4 style={{ fontSize: "1rem", color: "#fff" }}>Connected</h4>
            <div className="clientsList">
              {clients.map((client, index) => (
                <>
                  <Client key={client.socketId} username={client.username} />
                </>
              ))}
            </div>
          </main>
        </div>
        <div className="bottom">
          <button className="btn copyRoomId" onClick={copyRoomIdHandler}>
            Copy ROOM ID
          </button>
          <button className="btn leave" onClick={leaveHandler}>
            Leave
          </button>
        </div>
      </div>
      <div className="editorMain">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
