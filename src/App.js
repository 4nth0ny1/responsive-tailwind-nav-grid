import { useState } from "react";

export default function App() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  return (
    <>
      <div className="sm:hidden h-16 px-4 text-2xl bg-black text-white flex flex-row justify-end items-center">
        <button
          className="rotate-90"
          onClick={() => setOpenMobileNav(!openMobileNav)}
        >
          |||
        </button>
      </div>
      {openMobileNav && (
        <div className="min-h-[calc(100vh-64px)] sm:hidden bg-black text-white flex flex-col justify-center items-center">
          <div>
            <p>home</p>
            <p>about</p>
            <p>projects</p>
            <p>contact</p>
          </div>
        </div>
      )}
      <div className="hidden sm:visible min-w-full h-20 bg-black text-white sm:flex flex-row justify-between px-10 items-center">
        <div>logo</div>
        <div className="flex flex-row justify-start gap-10">
          <p>home</p>
          <p>about</p>
          <p>projects</p>
          <p>contact</p>
        </div>
      </div>
      {!openMobileNav && (
        <div className="p-4 min-h-[calc(100vh-80px)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-400 video"></div>
          <div className="bg-gray-400 video"></div>
          <div className="bg-gray-400 video"></div>
          <div className="bg-gray-400 video"></div>
          <div className="bg-gray-400 video"></div>
          <div className="bg-gray-400 video"></div>
        </div>
      )}
    </>
  );
}
