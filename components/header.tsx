import React from "react";

const Header: React.FunctionComponent = () => {
  return (
    <header className="primary-header flex">
      <div>
        <img
          src="./assets/shared/logo.svg"
          alt="space tourism logo"
          className="logo"
        />
      </div>
    </header>
  );
};

export default Header;
