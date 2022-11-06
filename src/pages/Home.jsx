import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const onClickHandler = (e) => {
    e.preventDefault();

    if (!roomId || !username) {
      toast.error("ROOM ID & Username is required");
      return;
    }

    navigate(`/editor/${roomId}`);
  };

  const newRoomHandler = (e) => {
    e.preventDefault();

    const id = uuidv4();
    setRoomId(id);
    toast.success("New ROOM ID created!");
  };
  return (
    <div className="container">
      <div className="formContainer">
        <header>
          <p className="heading">Code Sync 🚀</p>
          <span className="smallPara">Real Time Code Editor</span>
        </header>

        <main>
          <form>
            <label className="formLabel" htmlFor="">
              Paste invitation ROOM ID
            </label>
            <input
              placeholder="ROOM ID"
              className="formInput"
              type="text"
              name="roomId"
              id="roomId"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
            <input
              placeholder="USERNAME"
              className="formInput"
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <button className="btn btn-success" onClick={onClickHandler}>
              Join
            </button>
          </form>
          <span className="invitePara">
            If you don't have an invite then create{" "}
            <a onClick={newRoomHandler} href="#">
              new room
            </a>
          </span>
        </main>
      </div>

      <footer>
        <p className="footerPara">Made with ❤ by Ashish Sharma</p>
      </footer>
    </div>
  );
};

export default Home;
