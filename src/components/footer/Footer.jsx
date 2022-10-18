import React from 'react';
import {
  FaChevronRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSkype,
  FaLinkedin,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="p-10 bg-gray-800 text-gray-200 ">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h4 className="text-2xl pb-4">1LIVES</h4>
              <p className="text-gray-500">
                Wilmington, DE 19808<br />
                United States
                <br />
                <br />
                <strong>Phone:</strong>+1 (302) 261-5342
                <br />
                <strong>Email:</strong> customercare@1lives.us
              </p>
            </div>

            <div className="mb-5">
              <h4 className="  pb-4">Services</h4>
              <div className="flex items-center  text-gray-500 pb-4">
                <FaChevronRight />
                <Link>DevOps</Link>
              </div>
              <div className="flex items-center  text-gray-500 pb-4">
                <FaChevronRight /> <Link>SECaaS</Link>
              </div>
              <div className="flex items-center  text-gray-500 pb-4">
                <FaChevronRight /> <Link>Assistive Technology</Link>
              </div>
              <div className="flex items-center  text-gray-500 pb-4">
                <FaChevronRight />
                <Link>Solar Energy</Link>
              </div>
              
            </div>
            <div className="mb-5">
              <h4 className="pb-4">About</h4>
              <div className="flex items-center  text-gray-500 pb-4">
                <FaChevronRight />
                <Link>Mission & Vision</Link>
              </div>
              <div className="flex items-center  text-gray-500 pb-4">
                <FaChevronRight /> <Link>Team</Link>
              </div>
              <div className="flex items-center  text-gray-500 pb-4">
                <FaChevronRight /> <Link>Terms of services</Link>
              </div>
              <div className="flex items-center  text-gray-500 pb-4">
                <FaChevronRight />
                <Link>Privacy policy</Link>
              </div>
              <div className="flex items-center  text-gray-500 pb-4">
                <FaChevronRight />
                <Link>Careers</Link>
              </div>
            </div>
            <div className="mb-5">
              <h4 className=" pb-4">Join Our Email Alerts</h4>
              <p className="pb-2 text-gray-500">
                We promised never to spam your email. We'll only send new tips,
                tutorials, and discounts
              </p>

              <form className="flex flex-row flex-wrap" action="">
                <input
                  type="text"
                  name=""
                  id=""
                  className="text-gray-500 w-2/3 p-2 focus:border-yellow-500"
                  placeholder="email@domain.com"
                />
                <button className="p-2 w-1/3 bg-primary text-white hover:bg-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white text-gray-900 px-10">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
          <div className="text-center">
            <div>
              Copyright <strong>1LIVES</strong>. All Rights
              Reserved.
            </div>
            <div>
              Designed by{' '}
              <Link to="/devops" className="text-primary">
                DevOps Team
              </Link>
            </div>
          </div>
          <div className="flex items-center text-xl text-white mb-2">
            <Link
              to="#"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg:primary mx-1  pt-1 "
            >
              <FaFacebook />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-10 h-10  rounded-full bg-primary hover:bg:primary mx-1  pt-1"
            >
              <FaInstagram />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-10 h-10  rounded-full bg-primary hover:bg:primary mx-1  pt-1"
            >
              <FaTwitter />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-10 h-10  rounded-full bg-primary hover:bg:primary mx-1   pt-1"
            >
              <FaYoutube />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-10 h-10  rounded-full bg-primary hover:bg:primary mx-1  pt-1"
            >
              <FaSkype />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-10 h-10  rounded-full bg-primary hover:bg:primary mx-1  pt-1"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
