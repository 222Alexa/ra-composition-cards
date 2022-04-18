import React from "react";

export const CardTitle = ({ title }) => {
  return (
    <>
      <h5 className="card-title">{title}</h5>
    </>
  );
};
export const CardText = ({ text }) => {
  return (
    <>
      <p className="card-text">{text}</p>
    </>
  );
};

export const UrlImage = ({ url }) => {
  if (!url) {
    return;
  }
  return (
    <>
      <div className="image-wrapper">
        <img className="card-image" src={url} alt="" />
      </div>
    </>
  );
};

export const Button = ({ url }) => {
  return (
    <>
      <a className="card-link" href={url}>
        Go somewhere
      </a>
    </>
  );
};

Button.defaultProps = {
  url: "#",
};
