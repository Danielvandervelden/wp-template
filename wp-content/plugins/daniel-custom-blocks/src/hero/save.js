import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { images, contentPosition, textAlign } = attributes;

  const renderSlideMedia = (slide) => {
    switch (slide.type) {
      case "video":
        return (
          <video
            src={slide.url}
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
          />
        );
      case "youtube":
        return slide.youtubeId ? (
          <iframe
            className="hero-youtube"
            src={`https://www.youtube.com/embed/${slide.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${slide.youtubeId}&controls=0&showinfo=0&modestbranding=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : null;
      default:
        return <img src={slide.url} alt={slide.alt} />;
    }
  };

  return (
    <section {...useBlockProps.save()} className="hero">
      <div className="hero-slider">
        {images.map((slide, index) => (
          <div
            className={`hero-image-wrapper ${index === 0 ? "active" : ""} ${slide.darken ? "darken" : ""}`}
            key={index}
            data-slide-type={slide.type || "image"}
          >
            {renderSlideMedia(slide)}
            {slide.darken && <div className="hero-overlay"></div>}
            {(slide.title || slide.content) && (
              <div
                className={`hero-text-wrapper ${contentPosition.vertical} ${contentPosition.horizontal} ${textAlign}`}
              >
                {slide.title && (
                  <h2 className="hero-title">{slide.title}</h2>
                )}
                {slide.content && (
                  <RichText.Content
                    tagName="div"
                    className="hero-content"
                    value={slide.content}
                  />
                )}
              </div>
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
