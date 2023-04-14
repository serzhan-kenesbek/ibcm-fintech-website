import Head from "next/head";

const Departments = () => {
  return (
    <>
      <Head>
        <title>Departments</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Development
              </h2>
              <p className="text-gray-700 mb-4">
                Developers represent the “engine” when it comes to producing new
                software required by different stakeholders and working on our
                internal projects.
              </p>
              <a
                href="/developers"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Learn more &rarr;
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Content Creation
              </h2>
              <p className="text-gray-700 mb-4">
                The content creation members are responsible for generating
                value through publications (blogs, newsletter, academic papers)
                that have the purpose of providing fintech literacy to an
                audience as large as possible.
              </p>
              <a
                href="/content"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Learn more &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Departments;
