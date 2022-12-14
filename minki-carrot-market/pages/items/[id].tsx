import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
    <div className="px-5 py-10">
      <div>
        <div className="bg-gray-500 h-96" />
        <div className="flex gap-2 items-center py-2 border-b border-gray-400 ">
          <div className="bg-gray-500 w-12 h-12 rounded-full cursor-pointer" />
          <div className="cursor-pointer">
            <p className="font-medium text-sm text-gray-700">Steve Jebs</p>
            <p className="text-xs text-gray-500">View profile &rarr;</p>
          </div>
        </div>
        <div className="flex flex-col py-2 mt-2 gap-2">
          <h1 className="font-bold text-4xl text-gray-800">Galaxy S50</h1>
          <p className="font-medium text-xl text-gray-600">$140</p>
          <p className="mt-2">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className="flex justify-between space-x-3 mt-3">
            <button className="bg-orange-500 hover:bg-orange-600 hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-colors rounded-md w-[95%] py-2 font-medium text-white shadow-md">
              Talk to seller
            </button>
            <button className="flex rounded-md justify-center items-center aspect-square w-10 hover:text-red-500 hover:ring-2 hover:ring-offset-2 hover:ring-pink-200 ">
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 py-2">
        <h2 className="font-bold text-xl py-5 border-t-2">Similar items</h2>
        <div className="grid grid-cols-2 gap-6 px-3">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div className="bg-slate-500 w-full h-56 cursor-pointer" />
              <h3 className="text-gray-600 cursor-pointer font-medium px-2">
                Galaxy S60
              </h3>
              <p className="cursor-pointer px-2">$6</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
