import Head from "next/head";

const Developers = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-600 min-h-screen">
      <Head>
        <title>Developers</title>
      </Head>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl text-white text-center font-bold mb-8">
          Developers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Description of the position
            </h2>
            <p className="text-gray-800">
              We are seeking a student with a strong passion for coding who
              possesses a good foundation in programming. While experience is
              not required, it is strongly recommended. The ideal candidate
              should be eager to learn new skills and technologies and be a
              reliable person.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Projects</h2>
            <p className="text-gray-800">
              The development team is not limited to fintech software only, but
              also includes web services, presentation websites, and more.
              Therefore, we are looking for passionate developers with a strong
              foundation in coding and a willingness to learn new skills and
              technologies. A passion for the financial side and an interest in
              trends such as Blockchain and Web3.0 are a plus. The team consists
              of two types of developers: members and project leads. Project
              leads are assigned on a project basis to provide leadership
              opportunities for as many students as possible. Members are
              allocated to projects according to their skillset and preferences,
              in communication with the VP of FinTech. The aim is to ensure
              everyone enjoys working on their projects.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Role - member
            </h2>
            <p className="text-gray-800">
              As part of the development team, each member is responsible for
              working on the projects they are assigned to and ensuring that
              they adhere to the established deadlines. Communication with the
              project lead is crucial, particularly if any issues arise.
              Additionally, clean code is crucial, and documenting the
              development process is important since other developers may modify
              the codebase. Members must be open to feedback and approach their
              work with a positive attitude, enjoying the process of coding.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Role - project lead
            </h2>
            <p className="text-gray-800">
              The project lead, in collaboration with the VP of FinTech, is
              responsible for creating an action plan for the team's project,
              including designing UML diagrams and creating requirements. They
              are also responsible for assigning smaller tasks within the team,
              setting deadlines and milestones, and ensuring that the team tries
              to adhere to them. In addition, project leads, who are assumed to
              have experience, should provide assistance to team members who get
              stuck and maintain a positive, motivated atmosphere within the
              team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
