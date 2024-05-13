import { __ } from "@wordpress/i18n";
import { useBlockProps, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import { Button } from "@wordpress/components";
import { close } from "@wordpress/icons";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { image_url, image_alt } = attributes;

  const onSelectImage = (newImage) => {
    setAttributes({
      image_url: newImage.url,
      image_alt: newImage.alt || ''  // Ensuring a non-null value for alt attribute
    });
  };

  const onRemoveImage = () => {
    setAttributes({
      image_url: null,
      image_alt: null
    });
  };

  // Debug: Check if the image URL is being set correctly
  console.log("Current image URL: ", image_url);

  return (
    <div {...useBlockProps()}>
      <MediaUploadCheck>
        <MediaUpload
          onSelect={onSelectImage}
          allowedTypes={["image"]}
          value={image_url} // Assuming image_url is the ID of the image
          render={({ open }) => <Button onClick={open} isSecondary>Select image</Button>}
        />
      </MediaUploadCheck>
        {image_url && (
          <Fragment>
            <Button
              onClick={onRemoveImage}
              icon={close}
              label={__("Delete image", "text-domain")}
              className="remove-image-button"
              isDestructive
            />
            <img
              src={image_url}
              alt={image_alt}
              className="full-width-image__image"
            />
          </Fragment>
        )}
    </div>
  );
}
