import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo-2.png";
import Grid from "./Grid";

const footerAboutLinks = [
  {
    display: "Introduce",
    path: "/about",
  },
  {
    display: "Contact",
    path: "/about",
  },
  {
    display: "Recruitment",
    path: "/about",
  },
  {
    display: "News",
    path: "/about",
  },
  {
    display: "Shop system",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Return Policy",
    path: "/about",
  },
  {
    display: "Warranty Policy",
    path: "/about",
  },
  {
    display: "Refund Policy",
    path: "/about",
  },
];

const footerContactNumber = [
  {
    display: "Contact to order",
    number: "0123456789",
  },
  {
    display: "Order problems",
    number: "0123456789",
  },
  {
    display: "Comments, complaints",
    number: "0123456789",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Support call center</div>
            <div className="footer__content">
              {footerContactNumber.map((item, index) => (
                <p key={index}>
                  {item.display} <strong>{item.number}</strong>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">About Yolo</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Customer care</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              Towards the goal of bringing a new joy of dressing every day to
              millions of Colombian consumers. Let's join Yolo towards a more
              active and positive life.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
