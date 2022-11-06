import React from "react";
import Avatar from "react-avatar";

const Client = ({ socketId, username }) => {
  return (
    <>
      <div className="client">
        <Avatar
          color={Avatar.getRandomColor("sitebase", ["red", "green", "blue"])}
          size={50}
          round="14px"
          textSizeRatio={2}
          name={username}
        />
        <span className="username">{username}</span>
      </div>
    </>
  );
};

export default Client;
