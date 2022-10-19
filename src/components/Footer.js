import "./Footer.css";
import facebook from "../img/icons8-facebook.png";
import instagram from "../img/icons8-instagram.png";
import twitter from "../img/icons8-twitter.png";

const Footer = () => {
    return ( <footer>
        <div className="signupform">
            <p>Sign up to be notified when we launch in your area!</p>
            <form>
                <input type="email" placeholder="Email Address"/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
        <div className="socialcopyright">
            <div className="socialmediaicons">
                <img src={facebook} alt="facebook icon"/>
                <img src={instagram} alt="instagram icon"/>
                <img src={twitter} alt="twitter icon"/>
            </div>
            <p className="copyright">© 2020 Chomp Inc.</p>
        </div>
    </footer> );
}
 
export default Footer