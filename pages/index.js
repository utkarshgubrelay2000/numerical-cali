import Link from "next/link";
import { Navbar } from "../component/Navbar";

export default function Home () {
    return (
        <div>
          
       
            <Navbar />
            <div className="container">
						{/* Highlight SVG Background */}
						<div className="row ">
							<div className="col-md-8 responsive-height
                             offset-md-2 col-lg-5 offset-lg-0 align-self-center text-center text-lg-left">
								<h1
									className="mb-3 header-text"
							
								>
									{/* <strong>Grow your Linkedin Profile with us.</strong> */}
									<strong>A trusted place for all CONTENT WRITERS.</strong>
								</h1>
								{/* <p className="lead mb-5">
									A Volunteer platform, designed to help members grow creating a
									strong personal brand through collaboration.
								</p> */}
								<p className="lead mb-5">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                             	</p>
								<Link href="#">
									<a
										className="cta-btn"	
									>
										Get Started Now
									</a>
								</Link>
							</div>
							<div  className=" responsive-image d-lg-block col-lg-7 align-self-end text-right">
								<img
									src="./assets/634.jpg"
							
									alt="Fluxo Social Media Marketing Template"
									className="mw-100"
								/>
							</div>
						</div>
					</div>
        </div>
    );
}