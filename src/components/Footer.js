import React from "react";
import "./Footer.css";
import clsx from 'clsx';

function Footer ({ fixed = false }) {
  return (
    <h2 className={clsx("footer", fixed && "fixed-bottom")}>
      Copyright © 2022 thekavikumar 💖 All rights reserved
    </h2>
  );
}

export default Footer;
