import React from "react";

export default function Buttons({
  handleLogin,
  handleLogout,
  isLike,
  handleLike,
  handleDislike,
}) {
  return (
    <div>
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>

        <button
          onClick={isLike ? handleDislike : handleLike}
          style={isLike ? { color: "blue" } : { color: "black" }}
        >
          suka
        </button>
      </div>
    </div>
  );
}
