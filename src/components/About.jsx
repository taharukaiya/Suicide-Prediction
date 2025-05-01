import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaRegEnvelope,
} from "react-icons/fa"; // Using FaRegEnvelope for the envelope icon
import samiul from "../assets/teamMembers/SamiulAlom.jpg";
import taha from "../assets/teamMembers/TahaRukaiya.jpg";
import tomal from "../assets/teamMembers/AnamulTomal.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Samiul Alom",
      description:
        "A passionate researcher and developer with expertise in AI, Machine Learning, and Web Development. Dedicated to building impactful solutions.",
      image: samiul,
      interests: "AI, Machine Learning, Web Development",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/samiul-alom-087124227",
        github: "https://github.com/SamiulAlom",
        facebook: "https://www.facebook.com/samiul.alom.304137",
        mail: "mailto:samiulalom090@gmail.com",
      },
    },
    {
      name: "Rukaiya Taha",
      description:
        "A data science enthusiast with a knack for data analysis, visualization, and Python programming. Committed to making data-driven decisions.",
      image: taha,
      interests: "Data Analysis, Visualization, Python",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/rukaiya-taha-85b6361b4",
        github: "https://github.com/taharukaiya",
        facebook: "https://www.facebook.com/taharu2003",
        mail: "mailto:taharukaiyah@gmail.com",
      },
    },
    {
      name: "Anamul Hoque Tomal",
      description:
        "A creative developer and researcher focused on design systems, prototyping, and accessibility. Strives to create user-friendly experiences.",
      image: tomal,
      interests: "Design Systems, Prototyping, Accessibility",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/anamul-hoque-tomal-808b20285",
        github: "https://github.com/MdAnamulHoqueTomal",
        facebook: "https://www.facebook.com/Carmineme",
        mail: "mailto:anamultomal220@gmail.com",
      },
    },
  ];

  return (
    <div className="sm:w-10/12 w-11/12 mx-auto py-10">
      {/* Our Vision Section */}
      <section className="mb-12 pb-5">
        <h2 className="text-4xl font-bold text-center text-[#45b3e0] mb-6">
          Our Vision
        </h2>
        <p className="text-lg text-gray-600 text-center sm:max-w-3xl mx-auto">
          Our mission is to predict suicide risks using advanced machine
          learning techniques and provide a platform to counsel individuals at
          risk. Through this app, users can identify potential risks and access
          counselors' contact information to help them return to a normal and
          fulfilling life. We aim to create a supportive environment for those
          in need and provide the resources necessary for recovery.
        </p>
      </section>

      {/* Meet Our Team Section */}
      <h3 className="text-3xl font-bold text-center mb-8 text-[#45b3e0]">
        Meet Our Team
      </h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="card bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center text-center border-2 border-transparent hover:border-[#45b3e0] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full w-32 h-32 object-cover mb-4 border-4 border-[#45b3e0]"
            />
            <h2 className="text-xl font-bold text-[#45b3e0] mb-2">
              {member.name}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{member.description}</p>
            <div className="flex justify-center space-x-4 text-2xl">
              <a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0077b5] hover:text-[#005582] transition-colors duration-200"
              >
                <FaLinkedin />
              </a>
              <a
                href={member.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                <FaGithub />
              </a>
              <a
                href={member.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:text-[#145dbf] transition-colors duration-200"
              >
                <FaFacebook />
              </a>
              <a
                href={member.socialLinks.mail}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E90FF] hover:text-[#1C86EE] transition-colors duration-200"
              >
                <FaRegEnvelope />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
