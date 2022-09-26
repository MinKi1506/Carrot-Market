import type { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className="py-10 px-5 divide-y-[1px] divide-orange-200">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex gap-2 items-center py-2">
          <div className="bg-gray-500 w-12 h-12 rounded-full cursor-pointer" />
          <div className="cursor-pointer">
            <p className="font-medium text-sm text-gray-700 py-1">Steve Jebs</p>
            <p className="text-xs text-gray-500">
              오늘 저녁 8시까지 배드민턴장으로 와
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
