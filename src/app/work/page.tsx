import Link from "next/link";
import { experiences, caseStudies } from "@/data";
import Image from "next/image";

const Work = () => {
  return (
    <div className="px-6 py-12 sm:px-32 sm:py-16">
      {/* Experience Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-300">Experience</h2>
        <ul className="mt-6 space-y-6">
          {experiences.map((exp) => (
            <li key={exp.id} className="flex items-center space-x-6">
              {/* Experience Image */}
              {/* <div className="w-20 h-20 relative">
                {exp.imageUrl && (
                  <Image
                    src={exp.imageUrl}
                    alt={exp.title}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                )}
              </div> */}
              {/* Experience Title and Description */}
              <div>
                <Link
                  href={`/work/experience/${exp.slug}`} // ✅ id → slug 사용
                  className="text-xl font-semibold text-blue-600"
                >
                  {exp.title} ({exp.date})
                </Link>
                <p className="text-gray-600 mt-2">{exp.description}</p>
                <div className="mt-2">
                  {exp.hashtags.map((hashtag, idx) => (
                    <span
                      key={idx}
                      className="inline-block text-sm text-gray-500 mr-2"
                    >
                      #{hashtag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Case Study Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">Case Study</h2>
        <ul className="mt-6 space-y-6">
          {caseStudies.map((cs) => (
            <li key={cs.slug}>
              <Link
                href={`/work/case-study/${cs.slug}`}
                className="text-xl font-semibold text-blue-600"
              >
                {cs.title} ({cs.date})
              </Link>
              <p className="text-gray-600 mt-2">{cs.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Work;
