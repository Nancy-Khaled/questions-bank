import React from "react";

import './css/FooterStyle.css';

const Footer = props => {
    const today = new Date();
    const name = "Nancy Khaled";

    return (
        <footer className="copyright text-center p-4">Questions Bank &copy; {today.getFullYear()}. Developed by {name}.</footer>
    );
};

export default Footer;