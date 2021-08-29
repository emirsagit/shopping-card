import React from "react";

export default function Icons(props) {
  return (
    <div className="listing__icons">
      {/* heart */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em">
        <path fill="none" d="M0 0H24V24H0z" />
        <path
          d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"
          fill="#fff"
          stroke="#000"
        />
      </svg>
      {/* basket */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 2a6 6 0 0 1 6 6v1h4v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.92a1 1 0 0 1-.996-.917L3.166 11H2V9h4V8a6 6 0 0 1 6-6zm6.826 9H5.173l.667 8h12.319l.667-8zM13 13v4h-2v-4h2zm-4 0v4H7v-4h2zm8 0v4h-2v-4h2zm-5-9a4 4 0 0 0-3.995 3.8L8 8v1h8V8a4 4 0 0 0-3.8-3.995L12 4z"/>
      </svg>
    </div>
  );
}
