import Image from "next/image";

const Station = () => {
  const images = Array.from({ length: 17 }, (_, i) => ({
    src: `/images/station/Station-presentation.${String(i + 1).padStart(
      3,
      "0"
    )}.jpeg`,
    alt: `Station presentation slide ${i + 1}`,
  }));

  return (
    <div
      className="mx-auto px-2 flex flex-col items-center"
      style={{ width: "92%" }}
    >
      {images.map((image, index) => (
        <div key={index} className="relative mb-4" style={{ width: "100%" }}>
          <Image
            src={image.src}
            alt={image.alt}
            layout="responsive"
            width={1200}
            height={900}
            className="rounded-md shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default Station;
