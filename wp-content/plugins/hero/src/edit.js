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

  console.log(attributes);

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
      <div className={"hero-images-grid"}>
        {images?.map((image, index) => (
          <div className="hero-image-wrapper">
            <Button
              onClick={() => onRemoveImage(index)}
              icon="no-alt"
              label="Delete image"
              className="remove-image-button"
              isDestructive
            />
            <img src={image.url} alt={image.alt} />
            <input
              type="text"
              value={image.caption}
              onChange={(e) => onUpdateCaption(index, e.target.value)}
              placeholder={__("Add caption", "hero")} />
          </div>
        ))}
      </div>
    </div>
  );
}
