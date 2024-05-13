/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
  useBlockProps,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";

import { Button } from "@wordpress/components";
import { close } from "@wordpress/icons";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const { images } = attributes;

  const onSelectImages = (newImages) => {
    setAttributes({
      images: newImages.map((image) => ({
        url: image.url,
        alt: image.alt,
        caption: image.caption,
      })),
    });
  };

  const onRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setAttributes({
      images: newImages,
    });
  };

  const onUpdateCaption = (index, newCaption) => {
    const newImages = images.map((img, idx) => {
      if (idx === index) {
        return { ...img, caption: newCaption };
      }
      return img;
    });
    setAttributes({ images: newImages });
  };

  const { className } = useBlockProps();

  return (
    <div {...useBlockProps()} className={`${className} hero`}>
      <MediaUploadCheck>
        <MediaUpload
          onSelect={onSelectImages}
          multiple
          allowedTypes={["image"]}
          render={({ open }) => <button onClick={open}>Select images</button>}
        />
      </MediaUploadCheck>
      <section className="hero">
        <div className="hero-images">
          {images.length &&
            images.map((image, index) => {
              return (
                <div
                  key={index}
                  className={`hero-image-wrapper ${
                    index === 0 ? "active" : ""
                  }`}
                >
                  <Button
                    onClick={() => onRemoveImage(index)}
                    icon={close} // Use the imported icon here
                    label={__("Delete image", "text-domain")}
                    className="remove-image-button"
                    isDestructive
                  />

                  <img
                    src={image.url}
                    alt={image.alt}
                    data-caption={image.caption}
                  />
                  <input
                    className="caption-input"
                    type="text"
                    value={image.caption}
                    onChange={(e) => onUpdateCaption(index, e.target.value)}
                    placeholder={__("Add caption", "hero")}
                  />
                </div>
              );
            })}
        </div>
        <div className={`controls ${images.length < 2 ? 'disabled' : ''}`}>
          <button>
            <span>Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#FFF"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button>
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#FFF"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
