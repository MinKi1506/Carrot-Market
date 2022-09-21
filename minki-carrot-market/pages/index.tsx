import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-[400px] flex flex-col space-y-5">
      {/* 같은 기능 (flex와 grid용법 이해하기) */}
      {/* <div className="bg-slate-400 p-10 gird gap-10"> */}
      <div className="bg-white p-10 mx-500 shadow-xl rounded-2xl">
        <div>
          <span className="font-semibold">Select Item</span>
          <div className="flex justify-between py-2">
            <span className="text-gray-500">아이템1</span>
            <span className="font-semibold">100원</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-500">아이템2</span>
            <span className="font-semibold">200원</span>
          </div>
          <div className="flex justify-between border-t-2 border-dashed py-3">
            <span>Total</span>
            <span className="font-semibold">300원</span>
          </div>
          <div className="mt-5 m-auto w-2/4 bg-green-200 text-black p-3 text-center rounded-2xl">
            ChechOut
          </div>
        </div>
        <div></div>
      </div>

      <div className="bg-white shadow-xl overflow-hidden rounded-2xl">
        <div className="bg-green-200 px-5 pt-8 pb-12 ">
          <span>Profile</span>
        </div>
        <div className="bg-white rounded-2xl p-5 relative -top-6">
          <div className="flex justify-between items-end relative -top-16 ">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Order</span>
              <span className="font-medium">700원</span>
            </div>
            <div className="w-24 h-24 relative bg-orange-400 rounded-full"></div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">selling</span>
              <span className="font-medium">700원</span>
            </div>
          </div>
          <div className="flex flex-col relative -mt-14 -mb-5 items-center">
            <span className="">Elder</span>
            <span className="">한국</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 shadow-xl rounded-2xl">
        <div className="flex justify-between">
          <div className="">⬅️</div>
          <div className="flex space-x-3">
            <div className="">
              ⭐️<span>4.8</span>
            </div>
            <div className="">💖</div>
          </div>
        </div>
        <div className="p-8 h-[72]">
          <Image
            alt="느타리"
            src="/images/ntl.jpg"
            width={72}
            height={72}
            layout="responsive"
          />
        </div>
        <div className="flex flex-col">
          <span className="">쥬키니 호박</span>
          <span className="">호박</span>
        </div>
        <div className="flex justify-between">
          <div className="space-x-2">
            <button className="w-5 h-5 rounded-full bg-red-400" />
            <button className="w-5 h-5 rounded-full bg-yellow-400" />
            <button className="w-5 h-5 rounded-full bg-sky-400" />
          </div>
          <div className="flex space-x-3">
            <div className="">+</div>
            <div className="">
              <span>1</span>
            </div>
            <div className="">-</div>
          </div>
        </div>
        <div className="flex justify-between mt-6 -mb-5 items-center">
          <div className="">
            <span>3000원</span>
          </div>
          <div className="bg-green-200 py-3 px-10 rounded-2xl">
            장바구니 담기
          </div>
        </div>
      </div>

      <div className="bg-white p-10 shadow-xl rounded-2xl"></div>
    </div>
  );
};

export default Home;
