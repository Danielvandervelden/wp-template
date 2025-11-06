import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  MediaUpload,
  MediaUploadCheck,
  InspectorControls,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl, Button, TextControl, ToggleControl } from "@wordpress/components";
import { close } from "@wordpress/icons";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { images, contentPosition, textAlign } = attributes;
  const blockProps = useBlockProps();

  const extractYouTubeId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const onSelectImages = (newImages) => {
    const updatedImages = [...images];
    newImages.forEach((newImage) => {
      if (!images.some((img) => img.url === newImage.url)) {
        updatedImages.push({
          type: "image",
          url: newImage.url,
          alt: newImage.alt,
          title: "",
          content: "",
          darken: false,
        });
      }
    });
    setAttributes({ images: updatedImages });
  };

  const onSelectVideos = (newVideos) => {
    const updatedImages = [...images];
    newVideos.forEach((newVideo) => {
      if (!images.some((img) => img.url === newVideo.url)) {
        updatedImages.push({
          type: "video",
          url: newVideo.url,
          alt: "",
          title: "",
          content: "",
          darken: false,
        });
      }
    });
    setAttributes({ images: updatedImages });
  };

  const addYouTubeSlide = () => {
    const updatedImages = [...images];
    updatedImages.push({
      type: "youtube",
      url: "",
      youtubeId: "",
      alt: "",
      title: "",
      content: "",
      darken: false,
    });
    setAttributes({ images: updatedImages });
  };

  const onReplaceImages = (newImages) => {
    setAttributes({
      images: newImages.map((image) => ({
        type: "image",
        url: image.url,
        alt: image.alt,
        title: "",
        content: "",
        darken: false,
      })),
    });
  };

  const onRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setAttributes({ images: updatedImages });
  };

  const onUpdateTitle = (index, newTitle) => {
    const updatedImages = images.map((img, idx) => {
      if (idx === index) {
        return { ...img, title: newTitle };
      }
      return img;
    });
    setAttributes({ images: updatedImages });
  };

  const onUpdateContent = (index, newContent) => {
    const updatedImages = images.map((img, idx) => {
      if (idx === index) {
        return { ...img, content: newContent };
      }
      return img;
    });
    setAttributes({ images: updatedImages });
  };

  const onUpdateYouTubeUrl = (index, url) => {
    const youtubeId = extractYouTubeId(url);
    const updatedImages = images.map((img, idx) => {
      if (idx === index) {
        return { ...img, url, youtubeId };
      }
      return img;
    });
    setAttributes({ images: updatedImages });
  };

  const onToggleDarken = (index, darken) => {
    const updatedImages = images.map((img, idx) => {
      if (idx === index) {
        return { ...img, darken };
      }
      return img;
    });
    setAttributes({ images: updatedImages });
  };

  const renderSlideMedia = (slide, index) => {
    switch (slide.type) {
      case "video":
        return <video src={slide.url} controls style={{ width: "100%" }} />;
      case "youtube":
        return slide.youtubeId ? (
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${slide.youtubeId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div style={{ padding: "1rem", background: "#f0f0f0", textAlign: "center" }}>
            {__("Enter YouTube URL below", "hero")}
          </div>
        );
      default:
        return <img src={slide.url} alt={slide.alt} />;
    }
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Content Position", "hero")}>
          <SelectControl
            label={__("Vertical Position", "hero")}
            value={contentPosition.vertical}
            options={[
              { label: __("Top", "hero"), value: "v-top" },
              { label: __("Middle", "hero"), value: "v-middle" },
              { label: __("Bottom", "hero"), value: "v-bottom" },
            ]}
            onChange={(value) =>
              setAttributes({
                contentPosition: { ...contentPosition, vertical: value },
              })
            }
          />
          <SelectControl
            label={__("Horizontal Position", "hero")}
            value={contentPosition.horizontal}
            options={[
              { label: __("Left", "hero"), value: "h-start" },
              { label: __("Center", "hero"), value: "h-center" },
              { label: __("Right", "hero"), value: "h-right" },
            ]}
            onChange={(value) =>
              setAttributes({
                contentPosition: { ...contentPosition, horizontal: value },
              })
            }
          />
        </PanelBody>
        <PanelBody title={__("Text Alignment", "hero")}>
          <SelectControl
            label={__("Text Alignment", "hero")}
            value={textAlign}
            options={[
              { label: __("Left", "hero"), value: "text-left" },
              { label: __("Center", "hero"), value: "text-center" },
              { label: __("Right", "hero"), value: "text-right" },
            ]}
            onChange={(value) => setAttributes({ textAlign: value })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        <MediaUploadCheck>
          <MediaUpload
            onSelect={onReplaceImages}
            multiple
            allowedTypes={["image"]}
            render={({ open }) => (
              <button onClick={open}>
                {__("Replace Images", "hero")}
              </button>
            )}
          />
        </MediaUploadCheck>
        <MediaUploadCheck>
          <MediaUpload
            onSelect={onSelectImages}
            multiple
            allowedTypes={["image"]}
            render={({ open }) => (
              <button onClick={open}>{__("Add Images", "hero")}</button>
            )}
          />
        </MediaUploadCheck>
        <MediaUploadCheck>
          <MediaUpload
            onSelect={onSelectVideos}
            multiple
            allowedTypes={["video"]}
            render={({ open }) => (
              <button onClick={open}>{__("Add Videos", "hero")}</button>
            )}
          />
        </MediaUploadCheck>
        <button onClick={addYouTubeSlide}>
          {__("Add YouTube Video", "hero")}
        </button>
        <div className="hero-images">
          {images.map((slide, index) => (
            <div className="hero-image-wrapper" key={index}>
              <Button
                icon={close}
                onClick={() => onRemoveImage(index)}
                className="remove-image-button"
              />
              <div className="slide-type-badge">
                {slide.type === "youtube" ? "YouTube" : slide.type === "video" ? "Video" : "Image"}
              </div>
              {renderSlideMedia(slide, index)}
              {slide.type === "youtube" && (
                <TextControl
                  label={__("YouTube URL", "hero")}
                  value={slide.url}
                  onChange={(value) => onUpdateYouTubeUrl(index, value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              )}
              <ToggleControl
                label={__("Darken background", "hero")}
                checked={slide.darken || false}
                onChange={(value) => onToggleDarken(index, value)}
              />
              <div
                className={`hero-text-wrapper ${contentPosition.vertical} ${contentPosition.horizontal} ${textAlign}`}
              >
                <input
                  type="text"
                  value={slide.title}
                  onChange={(e) => onUpdateTitle(index, e.target.value)}
                  placeholder={__("Add title", "hero")}
                  className="title-input"
                />
                <RichText
                  tagName="div"
                  className="hero-content"
                  value={slide.content || ""}
                  onChange={(value) => onUpdateContent(index, value)}
                  placeholder={__("Add content...", "hero")}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
