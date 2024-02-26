import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="header--main">
        <FontAwesomeIcon icon={faEarthAmericas} />
        <p className="header--title"> my travel journal.</p>
    </div>
  );
}

export default Header;
