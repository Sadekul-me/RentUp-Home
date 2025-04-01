import React from "react";
import Heading from "../../common/Heading";
import { team } from "../../data/Data";
import "./team.css";

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          {/* Heading with title and subtitle */}
          <Heading
            title='Our Featured Agents'
            subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
          />

          <div className='content mtop grid3'>
            {/* Mapping through the team array to display agent data */}
            {team.map((val, index) => (
              <div className='box' key={index}>
                {/* Button to display the number of listings */}
                <button className='btn3'>{val.list} Listings</button>
                <div className='details'>
                  {/* Agent image and a verified icon */}
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  {/* Agent address */}
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>

                  {/* Agent name */}
                  <h4>{val.name}</h4>

                  {/* List of agent icons (social media or contact options) */}
                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>

                  {/* Message and Call buttons */}
                  <div className='button flex'>
                    <button>
                      <i className='fa fa-envelope'></i>
                      Message
                    </button>
                    <button className='btn4'>
                      <i className='fa fa-phone-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
