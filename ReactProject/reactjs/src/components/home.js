
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default function Home() {
    return (
        <div>
                 <h1 style={{ textAlign: "center",color: "#fff",marginTop:'20px',fontFamily: 'fantacy' }}>You're Invited to Be Part of Something Bigger</h1>
          

            <div style={{ height: "200px" /* Adjust the height based on your needs */, backgroundColor: "fff" }}>
                {/* Your content goes here */}
            </div>

            <footer style={{ backgroundColor: "#333", color: "#fff", padding: "10px", textAlign: "center", position: "fixed", bottom: "0", width: "80%" }}>
                <p>&copy; 2023 NAW Works. All rights reserved.</p>
                <div className="footer-icons">
          <BsTwitter />Twitter 
          <SiLinkedin />Linkedin 
          <BsYoutube />Youtube 
          <FaFacebookF />Facebook
        </div>
            </footer>
        </div>
    );
}
