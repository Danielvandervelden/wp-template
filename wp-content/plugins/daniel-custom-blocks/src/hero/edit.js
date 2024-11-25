import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  MediaUpload,
  MediaUploadCheck,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl, Button } from "@wordpress/components";
import { close } from "@wordpress/icons";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { images, captionPosition, textAlign } = attributes;
  const blockProps = useBlockProps();

  const onSelectImages = (newImages) => {
    const updatedImages = [...images];
    newImages.forEach((newImage) => {
      if (!images.some((img) => img.url === newImage.url)) {
        updatedImages.push({
          url: newImage.url,
          alt: newImage.alt,
          caption: "",
        });
      }
    });
    setAttributes({ images: updatedImages });
  };

  const onReplaceImages = (newImages) => {
    setAttributes({
      images: newImages.map((image) => ({
        url: image.url,
        alt: image.alt,
        caption: "",
      })),
    });
  };

  const onRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setAttributes({ images: updatedImages });
  };

  const onUpdateCaption = (index, newCaption) => {
    const updatedImages = images.map((img, idx) => {
      if (idx === index) {
        return { ...img, caption: newCaption };
      }
      return img;
    });
    setAttributes({ images: updatedImages });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Caption Position", "hero")}>
          <SelectControl
            label={__("Vertical Position", "hero")}
            value={captionPosition.vertical}
            options={[
              { label: __("Top", "hero"), value: "v-top" },
              { label: __("Middle", "hero"), value: "v-middle" },
              { label: __("Bottom", "hero"), value: "v-bottom" },
            ]}
            onChange={(value) =>
              setAttributes({
                captionPosition: { ...captionPosition, vertical: value },
              })
            }
          />
          <SelectControl
            label={__("Horizontal Position", "hero")}
            value={captionPosition.horizontal}
            options={[
              { label: __("Left", "hero"), value: "h-start" },
              { label: __("Center", "hero"), value: "h-center" },
              { label: __("Right", "hero"), value: "h-right" },
            ]}
            onChange={(value) =>
              setAttributes({
                captionPosition: { ...captionPosition, horizontal: value },
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
        <div className="hero-images">
          {images.map((image, index) => (
            <div className="hero-image-wrapper" key={index}>
              <Button
                icon={close}
                onClick={() => onRemoveImage(index)}
                className="remove-image-button"
              />
              <img src={image.url} alt={image.alt} />
              <input
                type="text"
                value={image.caption}
                onChange={(e) => onUpdateCaption(index, e.target.value)}
                placeholder={__("Add caption", "hero")}
                className={`caption-input ${captionPosition.vertical} ${captionPosition.horizontal} ${textAlign}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
