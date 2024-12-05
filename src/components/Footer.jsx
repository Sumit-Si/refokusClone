import React from "react";

function Footer() {
  return (
    <div className="py-6">
      <div className="max-w-screen-xl mx-auto flex gap-4 items-center">
        <div className="basis-7/12">
          <h1 className="text-[11rem] font-semibold tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="py-8 flex basis-5/12">
          <div className="basis-1/4">
            <h4 className="mb-5 text-lg text-zinc-400 font-medium">Social</h4>
            <div className="flex flex-col gap-1">
              {["Instagram", "Twitter (X?)", "Linkedin"].map((soc, index) => (
                <a className="text-zinc-500" href="">
                  {soc}
                </a>
              ))}
            </div>
          </div>
          <div className="basis-1/4">
            <h4 className="mb-5 text-lg text-zinc-400 font-medium">Social</h4>
            <div className="flex flex-col gap-1">
              {["Instagram", "Twitter (X?)", "Linkedin"].map((soc, index) => (
                <a className="text-zinc-500" href="">
                  {soc}
                </a>
              ))}
            </div>
          </div>
          <div className="basis-1/2">
            <p className="text-end">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img className="w-32 ml-auto mt-8" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
