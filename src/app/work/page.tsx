import Link from "next/link";
import { experiences, caseStudies } from "@/data";
import Image from "next/image";

const Work = () => {
  return (
    <div className="px-6 py-12 sm:px-32 sm:py-16">
      {/* Experience Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900">Experience</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <Link
              key={exp.slug}
              href={`/work/experience/${exp.slug}`}
              className="group relative block"
            >
              {/* Experience Thumbnail */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                {exp.imageUrl && (
                  <Image
                    src={exp.imageUrl}
                    alt={exp.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold">
                  {exp.title} ({exp.date})
                </h3>
                <p className="mt-2 text-sm px-4">{exp.description}</p>
                <div className="mt-2">
                  {exp.hashtags.map((hashtag, idx) => (
                    <span
                      key={idx}
                      className="inline-block text-xs text-gray-300 mr-2"
                    >
                      #{hashtag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Case Study Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900">Case Study</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/case-study/${cs.slug}`}
              className="group relative block"
            >
              {/* Case Study Thumbnail */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                {cs.imageUrl && (
                  <Image
                    src={cs.imageUrl}
                    alt={cs.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold">
                  {cs.title} ({cs.date})
                </h3>
                <p className="mt-2 text-sm px-4">{cs.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Work;
