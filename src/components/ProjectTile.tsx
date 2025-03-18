"use client";
import Image, { StaticImageData } from "next/image";
// import { Github } from 'lucide-react';
import { FaGithub, FaGlobe } from "react-icons/fa6";

export type ProjectTileProp = {
  data: {
    title: string;
    desc: string;
    tools: string[];
    img: StaticImageData;
    url: {
      url: string;
      icons: string;
    }[];
  };
};

export function ProjectTile({ data }: ProjectTileProp) {
  // console.log(url)

  function openInNewTab(url: string) {
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <div className="border flex flex-col rounded-xl bg-gray-300/10 overflow-hidden">
      <div className="bg-amber-300 h-65">
        <Image
          src={data.img}
          alt="Picture of the project"
          className="grayscale-25"
        />
      </div>
      <div className="flex flex-col p-5 justify-between h-full max-h-80 sm:max-h-96">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold">{data.title}</span>
          <span className="font-light">{data.desc}</span>
        </div>
        <div className="border-t flex flex-col">
          <span className="font-bold text-amber-900 dark:text-amber-500">
            Tools:
          </span>
          <span>{data.tools.join(", ")}</span>
          <div className="flex flex-row justify-end mt-1">
            {data.url.map((each, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => openInNewTab(each.url)}
              >
                {each.icons == "github" ? (
                  <FaGithub
                    size={30}
                    className="mx-2 hover:text-amber-500 transition-colors"
                  />
                ) : (
                  <FaGlobe
                    size={30}
                    className="mx-2 hover:text-amber-500  transition-colors"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
