import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { images, captionPosition, textAlign } = attributes;

  return (
    <section {...useBlockProps.save()} className="hero">
      <div className="hero-slider">
        {images.map((image, index) => (
          <div
            className={`hero-image-wrapper ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img src={image.url} alt={image.alt} data-caption={image.caption} />
            {image.caption && (
              <span
                className={`hero-image-caption ${captionPosition.vertical} ${captionPosition.horizontal} ${textAlign}`}
              >
                {image.caption}
              </span>
            )}
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="controls">
          <button className="prev-slide">
            <span>Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFF"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button className="next-slide">
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFF"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
