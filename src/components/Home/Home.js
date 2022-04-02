import React from "react";
import { Link, useNavigate } from "react-router-dom";
import banner from "../../banner.png";
import Charges from "../Charges/Charges";

const charges = [
  {
    name: "On Demand",
    id: 1,
    price: 70,
    subTitle: "Starts from $1200",
    services: [
      "Project evaluation & analysis",
      "Extensive Research",
      "Related information ideation",
      "Prototyping with Adobe Xd",
      "Low fidelity mockup creation",
    ],
  },
  {
    name: "Dedicated Staff",
    id: 2,
    price: 360,
    subTitle: "Starts from 1 person for:",
    services: [
      "Project evaluation & analysis",
      "Extensive Research",
      "Related information ideation",
      "Prototyping with Adobe Xd",
      "Low fidelity mockup creation",
    ],
  },
  {
    name: "Project Based",
    id: 3,
    price: 700,
    subTitle: "Depending on project",
    services: [
      "Project evaluation & analysis",
      "Extensive Research",
      "Related information ideation",
      "Prototyping with Adobe Xd",
      "Low fidelity mockup creation",
    ],
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div
        style={{ backgroundColor: "#0e1d3a" }}
        className="md:grid grid-cols-2 pt-10 px-5 items-center min-h-[110vh] mx-auto justify-center gap-5"
      >
        <div>
          <h2 className="text-6xl font-bold text-white">
            Designer, Developer And Marketer United.
          </h2>
          <p className="text-gray-400 text-3xl font-semibold mt-3">
            We have helped over 7000 customers & brands to design, develop and
            market their products worldwide.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white py-3 px-4 rounded-lg font-bold mt-5 hover:bg-slate-300"
          >
            Let's Chat
          </button>
          <Link
            className="underline text-white ml-5 text-xl font-serif"
            to={"/about"}
          >
            Learn more about us
          </Link>
        </div>
        <div>
          <img className="h-1/5" src={banner} alt="" />
        </div>
      </div>
      <div className="pt-10 px-5 pb-5 bg-slate-300">
        <div className="w-2/4 mx-auto text-center">
          <h1 className="text-center text-6xl font-bold font-mono">
            Our Charges
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            explicabo eos officia impedit aperiam voluptatum placeat magni
            corrupti, eius possimus?
          </p>
        </div>
        <div className="md:grid grid-cols-3 gap-10 mx-auto mt-10">
          {
              charges.map(charge => <Charges charge={charge} key={charge.id}></Charges>)
          }
        </div>
      </div>
    </section>
  );
};

export default Home;
