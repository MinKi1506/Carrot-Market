import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="flex flex-col gap-4 px-5 py-10 max-w-3xl">
      <div className="flex space-x-2">
        <div className="bg-gray-500 w-8 h-8 rounded-full" />
        <div className="px-2 border-2 border-gray-400 rounded-md max-w-md flex items-center">
          <span className="text-sm text-gray-700">
            Hi how much are you selling them for?{" "}
          </span>
        </div>
      </div>
      <div className="flex flex-row-reverse space-x-2 space-x-reverse">
        <div className="bg-gray-500 w-8 h-8 rounded-full" />
        <div className="px-2 border-2 border-gray-400 rounded-md max-w-md flex items-center">
          <span className="text-sm text-gray-700">I want ￦20,000</span>
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="bg-gray-500 w-8 h-8 rounded-full" />
        <div className="px-2 border-2 border-gray-400 rounded-md max-w-md flex items-center">
          <span className="text-sm text-gray-700">ok let me show them</span>
        </div>
      </div>
      <div className="fixed max-w-md bottom-1 w-full">
        <div className="relative flex items-center gap-2">
          <input
            type="text"
            className="shadow-sm w-full border-2 focus:ring-orange-500 rounded-full border-gray-400 focus:border-orange-500"
          />
          <span className="absolute right-1 hover:text-orange-600 cursor-pointer">
            &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
