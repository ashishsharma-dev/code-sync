import React, { useEffect } from "react";
import Codemirror from "codemirror";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag";

const Editor = () => {
  useEffect(() => {
    const init = async () => {
      Codemirror.fromTextArea(document.getElementById("realtimeEditor"), {
        mode: { name: "javascript", json: true },
        theme: "dracula",
        autoCloseTags: true,
      });
    };

    init();
  }, []);
  return (
    <div>
      <textarea placeholder="//Code goes here" id="realtimeEditor" />
    </div>
  );
};

export default Editor;
