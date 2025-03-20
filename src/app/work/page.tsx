"use client";

import Link from "next/link";
import { projects, experiences, merchDesigns } from "@/data";

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Experiences Section */}
        <section>
          <h2 className="text-2xl  mb-8 text-gray-100">Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-8">
            {experiences.map((experience) => (
              <Link
                key={experience.slug}
                href={`/work/experience/${experience.slug}`}
                className="group"
              >
                <div
                  className="overflow-hidden"
                  style={{ aspectRatio: "16/10" }}
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={experience.imageUrl}
                    alt={experience.title}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl  text-white">{experience.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    {experience.date}
                  </p>
                  <p className="mt-2 text-gray-500">{experience.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Personal Projects Section */}
        <section className="mt-16">
          <h2 className="text-2xl  mb-8 text-gray-100">Personal Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/project/${project.slug}`}
                className="group"
              >
                <div
                  className="overflow-hidden"
                  style={{ aspectRatio: "16/10" }}
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl  text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{project.date}</p>
                  <p className="mt-2 text-gray-500">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Merch Designs Section */}
        <section className="mt-16">
          <h2 className="text-2xl  mb-8 text-gray-100">Merch Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-8">
            {merchDesigns.map((merch) => (
              <Link
                key={merch.slug}
                href={`/work/merch/${merch.slug}`}
                className="group"
              >
                <div
                  className="overflow-hidden"
                  style={{ aspectRatio: "16/10" }}
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={merch.imageUrl}
                    alt={merch.title}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl  text-white">{merch.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{merch.date}</p>
                  <p className="mt-2 text-gray-500">{merch.description}</p>
                  {/* <div className="mt-4 flex flex-wrap">
                    {merch.hashtags.map((hashtag, index) => (
                      <span
                        key={index}
                        className="inline-block text-sm font-semibold text-gray-100 mr-2 mb-2"
                      >
                        #{hashtag}
                      </span>
                    ))}
                  </div> */}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
