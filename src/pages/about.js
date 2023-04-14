import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-600 min-h-screen">
      <Head>
        <title>About Us</title>
      </Head>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl text-white text-center font-bold mb-8">
          About Us
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Community</h2>
            <p className="text-gray-800">
              Creating a community of student interested in exploring the
              intersection between finances and technology
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Learning Experience
            </h2>
            <p className="text-gray-800">
              Providing students with a hands-on learning experience (technical
              skills: writing non-trivial software, non-technical skills:
              conducting research and publishing papers) (more from a student
              organisation perspective)
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              New Fintech
            </h2>
            <p className="text-gray-800">
              Producing new pieces (non)/fintech software and providing relevant
              publications, forecasts, objective opinions about the fintech
              industry (more from a “corporate” point of view)
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Mentorship
            </h2>
            <p className="text-gray-800">
              Establishing a cross generation mentorship program: older students
              with more experience are paired up with younger students
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
