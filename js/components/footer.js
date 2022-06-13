const footer = document.querySelector("footer");

export function createFooter() {
    footer.innerHTML = `<div class="footer-wrapper">
                            <div class="icons">
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-pinterest"></i>
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                            <div class="sign-up">
                                <h3>Sign up to newsletter</h3>
                                <form class="sign-up-form">
                                    <input type="email">
                                    <button type="submit" class="signup-button">Sign up</button>
                                </form>
                            </div>
                            <div class="about">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Press</a></li>
                                    <li><a href="#">Store locations</a></li>
                                </ul>
                            </div>
                            <div class="costumer">
                                <h3>Costumer care</h3>
                                <ul>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">Track your order</a></li>
                                    <li><a href="#">Return policy</a></li>
                                    <li><a href="#">Shipping</a></li>
                                    <li><a href="#">FAQ's</a></li>
                                    <li><a href="#">Gift card</a></li>
                                </ul>
                            </div>
                            <div class="copyright">
                                <p>© 2022 ShoeStore. All rights reserved</p>
                            </div>
                            <div class="info">
                                <ul>
                                    <li><a href="#">Terms + Conditions</a></li>
                                    <li><a href="#">Do Not Sell My Personal Information</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>`;

}