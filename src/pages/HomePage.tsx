import { FaFacebookF, FaInstagram, FaTiktok, FaSnapchatGhost, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__data">
        <img
          className="home-page__data__logo"
          src="/logo.svg"
          alt="WAM Logo"
        />
        <div className="home-page__data__social">
          <a
            href="https://www.facebook.com/people/Lana-Lingerie/61575876884226/"
            target="_blank"
            rel="noopener noreferrer"
            className="home-page__data__social-btn"
          >
            <FaFacebookF />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/Lana.lingerie.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="home-page__data__social-btn"
          >
            <FaInstagram />
            Instagram
          </a>
          <a
            href="tel:+963968718173"
            target="_blank"
            rel="noopener noreferrer"
            className="home-page__data__social-btn"
          >
            <FaPhone />
            Call us
          </a>
          <a
            href="tel:+963998360383"
            target="_blank"
            rel="noopener noreferrer"
            className="home-page__data__social-btn"
          >
            <FaPhone />
            Call us
          </a>
        </div>
        <div className="home-page__data__location">
          ريف دمشق - جرمانا - شارع الروضة - مقابل مطعم أهل الكرم
          <FaLocationDot  style={{ marginBottom: "11px" }} className="home-page__data__location_icon"/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
