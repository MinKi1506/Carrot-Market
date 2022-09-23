import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-5 py-10 flex flex-col gap-5">
      <div className="flex justify-center items-center text-gray-500 hover:text-orange-500 transition-colors border-2 border-dashed border-gray-500 hover:border-orange-600 h-48 rounded-md">
        <label>
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input className="hidden" type="file" />
        </label>
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <div className="rounded-md relative shadow-sm flex items-center">
          {/* $와 usd를 input태그 안에 위치시키고 싶을 때, 부모요소에는 relative 클래스를 부여하고 자식요소에는 absolute 클래스를 부여한다 */}
          <div className="absolute left-0 pl-2 pointer-events-none ">
            <span className="text-gray-400">$</span>
          </div>
          <input
            className="appearance-none w-full px-6 border-gray-300 rounded-md shadow-sm
                focus:ring-orange-500
                focus:border-orange-500
                text-gray-900"
            id="price"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 px-2 pointer-events-none text-gray-400">
            <span>USD</span>
          </div>
        </div>
      </div>
      <div>
        <label>Description</label>
        <div>
          <textarea
            className="appearance-none w-full px-3 border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                focus:ring-orange-500
                focus:border-orange-500"
            rows={4}
          />
        </div>
      </div>
      <button className="bg-orange-500 hover:bg-orange-600 text-white w-full mt-2 py-2 px-4 border  border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
