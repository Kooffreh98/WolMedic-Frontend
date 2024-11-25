import React from "react";
import { FaBell } from "react-icons/fa";

const NotificationIcon = () => {
  return (
    <div className="notification-icon">
      <FaBell className="icon" />
      <span className="notification-count">3</span>
    </div>
  );
};

export default NotificationIcon;
