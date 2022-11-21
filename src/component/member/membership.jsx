import React from "react";
import "./membership.css";

const Head = () => {
  return (
    <div className="offering">
      <h1>DLC MEMBERSHIP OFFERINGS</h1>
      <div className="mem">
        <div className="con-one">
          <div className="overlay">
            <img
              src="https://www.dellaleaders.com/images/forum.webp"
              alt="Forums"
            />
          </div>
          <h1 className="text">hi</h1>
        </div>

        <div className="con-two">
          <img
            src="https://www.dellaleaders.com/images/intellect-pop-up-new.png"
            alt="Events"
          />
        </div>
        <div className="con-three">
          <img
            src="https://www.dellaleaders.com/images/knowledge-platforms-new.webp"
            alt="channel"
          />
        </div>
        <div className="con-four">
          <img
            src="	https://www.dellaleaders.com/images/global-summit-new.webp"
            alt="sumbits"
          />
        </div>
        <div className="con-five">
          <img
            src="	https://www.dellaleaders.com/images/brand-collab.png"
            alt="brands"
          />
        </div>
        <div className="con-six">
          <img
            src="https://www.dellaleaders.com/images/social-imapct-new.webp"
            alt="impact"
          />
        </div>
      </div>
      <button className="view">VIEW ALL OFFERINGS</button>
    </div>
  );
};
export default Head;
