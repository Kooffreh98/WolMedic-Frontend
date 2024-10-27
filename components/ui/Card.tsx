import React from "react";
import "./globals.css";

interface CardProps {
  title: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "default" | "outlined" | "shadow";
  icon?: React.ReactNode;
  actions?: React.ReactNode;
}

const Card = ({
  title,
  content,
  footer,
  variant = "default",
  icon,
  actions,
}: CardProps) => {
  return (
    <div className={`card card-${variant}`}>
      <div className="card-header">
        {icon && <div className="card-icon">{icon}</div>}
        <h3 className="card-title">{title}</h3>
        {actions && <div className="card-actions">{actions}</div>}
      </div>
      <div className="card-body">{content}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
