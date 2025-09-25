import React from "react";

const Home = () => {
  return (
    <div className="flex gap-5 container mx-auto">
      <div className="w-64 hidden sm:block h-screen bg-gray-800">sidebar</div>
      <div className="flex-1 bg-gray-300">content</div>
    </div>
  );
};

export default Home;
