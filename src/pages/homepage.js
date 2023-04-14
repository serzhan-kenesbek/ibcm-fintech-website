import Link from "next/link";

export default function Homepage() {
  return (
    <div>
      <div
        className="absolute top-15 left-0 w-full h-full"
        style={{
          backgroundImage: `url('/images/bck1.jpeg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <div className="absolute top-15 left-0 w-full h-full flex justify-center items-center flex-col">
        <div className="w-full h-full flex justify-center items-center text-center bg-gray-800 bg-opacity-40 rounded-lg">
          <h1 className="text-5xl font-bold text-white mb-25">
            Welcome to IB&CM FinTech!
          </h1>
        </div>
      </div>
    </div>
  );
}
