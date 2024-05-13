/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
  const { image_url, image_alt } = attributes;

  // useBlockProps.save() provides the same functionality as useBlockProps()
  // but specifically for saving content. It ensures that any necessary attributes
  // like class are added to the block's wrapper element in the saved content.
  const blockProps = useBlockProps.save({
    className: 'full-width-image', // Ensure the class is the same as in the edit function
  });

  return (
    <div data-section {...blockProps}>
      {image_url && (
        <img
          src={image_url}
          alt={image_alt ? image_alt : ''}
          className="full-width-image__image"
        />
      )}
    </div>
  );
}
