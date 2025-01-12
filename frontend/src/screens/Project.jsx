import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Project = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const location = useLocation();

  console.log(location.state);
  return (
    <main className="h-screen w-screen flex">
      <section className="left flex flex-col h-full min-w-96 bg-red-300">
        <header className="flex bg-green-200 justify-end p-2 px-4 w-full">
          <button
            onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
            className="p-2"
          >
            <i className="ri-group-fill"></i>
          </button>
        </header>

        <div className="convertsation-area flex-grow flex flex-col">
          <div className="message-box p-1 flex-grow flex flex-col gap-1">
            <div className="max-w-56 message flex flex-col p-2 bg-slate-50 w-fit rounded-md">
              <small className="opacity-65 text-xs">example@gmail.com</small>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="message ml-auto max-w-56 flex flex-col p-2 bg-slate-50 w-fit rounded-md">
              <small className="opacity-65 text-xs">example@gmail.com</small>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className="inputField w-full flex">
            <input
              className="p-2 px-7 w-[84%] border-none outline-none flex-grow"
              type="text"
              placeholder="Enter message"
            />
            <button className="px-4 bg-slate-950 text-white">
              <i className="ri-send-plane-fill"></i>
            </button>
          </div>
        </div>

        <div
          className={`sidepanel w-36 h-60 bg-slate-100 min-w-96 h-full flex flex-col gap-2 absolute transition-all ${
            isSidePanelOpen ? "translate-x-0" : "-translate-x-full"
          } top-0`}
        >
          <header className="flex justify-end px-4 p-2 bg-slate-200">
            <button
              onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
              className="p-2"
            >
              <i className="ri-close-line"></i>
            </button>
          </header>

          <div className="users flex flex-col gap-2">
            <div className="user cursor-pointer hover:bg-slate-200 p-2 flex gap-2 items-center">
              <div className="aspect-square rounded-full w-fit h-fit flex items-center justify-center p-5 text-white bg-slate-600">
                <i className="ri-user-fill absolute"></i>
              </div>
              <h1 className="font-semibold text-lg">example@gmail.com</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project;
