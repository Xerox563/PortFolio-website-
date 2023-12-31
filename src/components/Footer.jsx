import React from "react";
import "../styles/footer.scss";
const Footer = () => {
  return (
    <div class="footer-basic">
      <footer>
        <div class="social">
          <a href="/">
            <i class="icon ion-social-instagram"></i>
          </a>
          <a href="/">
            <i class="icon ion-social-facebook"></i>
          </a>
          <a href="/">
            <i class="icon ion-social-linkedin"></i>
          </a>
          <a href="/">
            <i class="icon ion-social-github"></i>
          </a>
        </div>
        {/* <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">Home</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Services</a>
          </li>
          <li class="list-inline-item">
            <a href="#">About</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul> */}
        <p class="copyright">Amit07 © 2023</p>
      </footer>
    </div>
  );
};

export default Footer;
