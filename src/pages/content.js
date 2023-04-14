import Head from 'next/head'

const ContentCreation = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-600 min-h-screen">
      <Head>
        <title>Content Creation</title>
      </Head>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl text-white text-center font-bold mb-8">Content Creation</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Description of the position</h2>
            <p className="text-gray-800">
            The ideal candidates for the content creation department are students who have a strong interest in the FinTech industry and are passionate about writing and explaining complex concepts. They should be eager to research and break down topics in a way that is easy to understand for the target audience.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Projects</h2>
            <p className="text-gray-800">
            The content-creation department aims to provide educational content to raise awareness about the rapidly-growing FinTech industry and build trust in our publication. This also provides a good learning context for members. Projects include blog publications/newsletters, podcasts/interviews, and academic papers. There are two types of members: project leads and members. Target audience will begin with those with little FinTech literacy and eventually expand to industry professionals and researchers, with academic papers targeting the academic community.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Role - member</h2>
            <p className="text-gray-800">
            Members of the content-creation department are responsible for conducting research and writing about their allocated part of the topic given by the project lead, as well as conducting interviews with guests when necessary. They should stick to the deadlines and communicate any issues that may arise to the project lead. Furthermore, they should ensure that their writing is coherent and provides quality information when combined with the other parts written by multiple members. Above all, they should enjoy the process of creating educational content.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Role - project lead</h2>
            <p className="text-gray-800">
            The project lead of the content-creation department, in collaboration with the VP of Fintech, is responsible for selecting a topic to be published and setting deadlines for research and writing. They are also tasked with ensuring that the final paper is coherent, concise, and of high quality by combining the parts written by multiple team members.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentCreation