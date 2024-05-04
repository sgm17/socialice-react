import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
    function sendEmail(emailAddress) {
        // Create the mailto link with the recipient email address
        const mailtoLink = `mailto:${emailAddress}`;

        // Check if the browser supports the 'navigator' object and the 'open' method
        if (navigator && navigator.msLaunchUri) {
            // For Internet Explorer
            navigator.msLaunchUri(mailtoLink);
        } else if (navigator && navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) {
            // For iOS devices
            window.location.href = mailtoLink;
        } else {
            // For other browsers
            window.open(mailtoLink);
        }
    }

    function handleContact(params) {
        sendEmail('example@example.com');
    }

    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                {/* Copyright */}
                <span className="copyright-text">© Socialice - 2024 - All rights reserved</span>

                {/* About */}
                <Link to="/about">About</Link>

                {/* Terms and Conditions */}
                <Link to="/terms-of-use">Terms and Conditions</Link>

                {/* Terms and Conditions */}
                <Link to="/privacy-policy">Privacy Policy</Link>

                {/* Contact */}
                <span onClick={handleContact} className="contact-text">Contact</span>
            </div>
        </div>
    );
}

export default Footer