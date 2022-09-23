import type { NextPage } from "next";
import { arrayBuffer } from "stream/consumers";

const Community: NextPage = () => {
  return (
    <div className="px-5 py-10">
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div key={i} className="flex flex-col items-start gap-2 cursor-pointer">
          <span className="bg-slate-200 px-2 rounded-full">동네질문</span>
          <span>
            <span className="text-orange-400">Q.</span> What is the best mandu
            restaurant?
          </span>
          <div className="flex justify-between w-full text-gray-400">
            <span>니꼬</span>
            <span>18시간 전</span>
          </div>
          <div className="flex gap-6 border-t-[1px] border-b-[2px] w-full py-2 mb-6 text-gray-600 border-b-gray-400">
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>궁금해요:{i}</span>
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>답변:{1}</span>
            </span>
          </div>
        </div>
      ))}

      <button className="fixed bottom-12 right-12 rounded-full p-3 bg-orange-400 hover:bg-orange-500 transition-colors text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Community;
