import Link from "next/link";
import { Navbar } from "../component/Navbar";
import { Accordion } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { MethodAcc } from "../component/Method";
import Footer from "../component/Footer";
export default function Home(props) {
  const [data, setData] = useState(props.links);

  return (
    <div>
      <Navbar />
      <div className="container">
        {/* Highlight SVG Background */}
        <div className="row ">
          <div
            className="col-md-8 responsive-height
                             offset-md-2 col-lg-5 offset-lg-0 align-self-center text-center text-lg-left"
          >
            <h1 className="mb-3 header-text">
              {/* <strong>Grow your Linkedin Profile with us.</strong> */}
              <strong>A trusted place for all CONTENT WRITERS.</strong>
            </h1>
            {/* <p className="lead mb-5">
									A Volunteer platform, designed to help members grow creating a
									strong personal brand through collaboration.
								</p> */}
            <p className="lead mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <Link href="#">
              <a className="cta-btn">Get Started Now</a>
            </Link>
          </div>
          <div className=" responsive-image d-lg-block col-lg-7 align-self-end text-right">
            <img
              src="./assets/634.jpg"
              alt="Fluxo Social Media Marketing Template"
              className="mw-100"
            />
          </div>
        </div>
        <div className="row">
          <div className="  d-lg-block col-md-7 col-sm-12 align-self-end text-right">
            <img className="about-us-img" src="./assets/aboutus.jpg" />
          </div>

          <div id='about' className="col-md-5 col-sm-12 p-5">
            <div className="m-auto text-center">
              <h1>About Us</h1>
            </div>
            <span className=" about-description">
              Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </span>
          </div>
        </div>

        <div className="row method-container">
          <div className="col-md-12 col-sm-12 p-5 m-auto">
            <div className="m-auto text-center">
              <h1>Methods</h1>
            </div>
          </div>

          {data.map((item, index) => {
            return <MethodAcc content={item} index={index} key={index} />;
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export async function getStaticProps(content) {
  const res = [
    {
      title: "Root Finding Methods",
      content: [
        {
          title: "Bisection Method",
          link: "/method/bisection",
        },
        {
          title: "False Position Method",
          link: "/method/falseposition",
        },
        {
          title: "Regula Falsi Method",
          link: "/method/falseposition",
        },
        {
          title: "Fixed Point Iteration",
          link: "/method/onepoint",
        },
        {
          title: "Newton Method",
          link: "/method/newtonraphson",
        },
        {
          title: "Secant Method",
          link: "/method/secant",
        },
      ],
    },
    {
      title: "System of Linear Equation",
      content: [
        {
          title: "Gauss Elimination Method",
          link: "/method/gausselimination",
        },
        {
          title: "Gauss-Jordan Method",
          link: "/method/gaussjordan",
        },
        {
          title: "Jacobi Iteration Method",
          link: "/method/jacobi",
        },
        {
          title: "Seidel Iteration Method",
          link: "/method/gaussseidel",
        },
      ],
    },
    {
      title: "Interpolation ",
      content: [
        {
          title: "Newton Forword Difference",
          link: "/method/linear",
        },
        {
          title: "Newton Backward Difference",
          link: "/method/polynomial",
        },
        {
          title: "Newton's Divided Difference",
          link: "/method/newton",
        },
        {
          title: "Lagrange Interpolation",
          link: "/method/lagrange",
        },
        {
          title: "onverse Interpolation",
          link: "/method/spline",
        },
      ],
    },
    {
      title: "Difference Table",
      content: [
        {
          title: "Forward Difference Table",
          link: "/method/lu",
        },
        {
          title: "Divided Differnece Table",
          link: "/method/cholesky",
        },
      ],
    },
    {
      title: "Numerical Intergration",
      content: [
        {
          title: " Trapezoidal Rule",
          link: "/method/composite",
        },
        {
          title: "  Trapezoidal function",
          link: "/method/simpson",
        },
        {
          title: " Simpson's (1/3)rd Rule (Tabular)",
          link: "/method/composite",
        },
        {
          title: " Simpson's (1/3)rd Rule (Funtions)",
          link: "/method/composite",
        },
        {
          title: "Composite Simpson's 3/8 Rule",
          link: "/method/composite",
        },
        {
          title: "Simpson's 3/8 Rule Functions",
          link: "/method/composite",
        },
        {
          title: "Gaussian_Quadrature",
          link: "/method/composite",
        },
      ],
    },
    {
      title: "Differential Equation",
      content: [
        {
          title: " Euler's Method",
          link: "/method/euler",
        },
        {
          title: " Modified Euler's Method",
          link: "/method/modifiedeuler",
        },
        {
          title: " Runge-Kutta 4th Order Method",
          link: "/method/rungekutta",
        },
        {
          title: " Runge-Kutta 2nd Order Method",
          link: "/methodrungekutta",
        },
      ],
    },
  ];
  let links = res;
//  console.log(links);
  return {
    props: { links },
  };
}
