import React from "react";
import "./Footer.css";
import clsx from "clsx";
function Footer({ fixed = false }) {
  return (
    <>
      <footer>
        <div class="row primary">
          <div class="column about">
            <h3 className="topic">My Gallery</h3>

            <p>
             The home for your memories.Relieve,Share and organize your photos.The official My Gallery website comes with 15 GB storage and you can access them from anywhere you want! 
            </p>

            <div class="social">
              <a href="/"><i class="fa-brands fa-facebook-square"></i></a>
              <a href="/"><i class="fa-brands fa-instagram-square"></i></a>
              <a href="/"><i class="fa-brands fa-twitter-square"></i></a>
              <a href="/"><i class="fa-brands fa-youtube-square"></i></a>
              <a href="/"><i class="fa-brands fa-whatsapp-square"></i></a>
            </div>
          </div>

          <div class="column links">
            <h3 className="topic">Some Links</h3>

            <ul>
              <li>
                <a href="#faq">F.A.Q</a>
              </li>
              <li>
                <a href="#cookies-policy">Cookies Policy</a>
              </li>
              {/* <li>
                <a href="#terms-of-services">Terms Of Service</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li> */}
            </ul>
          </div>

          <div class="column links">
            <h3 className="topic">Some Links</h3>
            <ul>
              {/* <li>
                <a href="#faq">F.A.Q</a>
              </li>
              <li>
                <a href="#cookies-policy">Cookies Policy</a>
              </li> */}
              <li>
                <a href="#terms-of-services">Terms Of Service</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>

          <div class="column subscribe">
            <h3 className="topic">Newsletter</h3>
            <div >
              <input className="input" type="email" placeholder="Your email id here" />
              <button className="input buttonSus">Subscribe</button>
            </div>
          </div>
        </div>

        <div class="row copyright">
          {/* <div class="footer-menu">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Blog</a>
            <a href="">Social</a>
          </div> */}
          <div className="footer-menu">Copyright &copy; 2022 My Gallery App ❤</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
