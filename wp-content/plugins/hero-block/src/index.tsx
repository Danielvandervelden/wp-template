import { registerBlockType } from "@wordpress/blocks";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import "./editor.scss";
import "./style.scss";
import "./hero";
import { Fragment } from "react/jsx-runtime";

interface Image {
    url: string;
    title: string;
}
interface Attributes {
    images: Image[];
}

registerBlockType<Attributes>("hero/hero-block", {
    title: "Hero Block",
    icon: "welcome-add-page",
    category: "layout",
    attributes: {
        images: {
            type: "array",
            default: [],
            source: "query",
            selector: "div.hero",
            query: {
                url: {
                    type: "string",
                    source: "attribute",
                    attribute: "data-images",
                },
                title: {
                    // Define how the title should be saved and restored
                    type: "string",
                    source: "text",
                    selector: "h2",
                },
            },
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const { images } = attributes;

        const onSelectImages = (newImages: { url: string }[]) => {
            setAttributes({
                images: newImages.map((image) => ({
                    url: image.url,
                    title: "",
                })),
            });
        };

        const updateTitle = (index: number, newTitle: string) => {
            const newImages = images.map((img, idx) => {
                if (idx === index) {
                    return { ...img, title: newTitle };
                }
                return img;
            });
            setAttributes({ images: newImages });
        };

        const removeImage = (indexToRemove: number) => {
            const newImages = images.filter((_, index) => index !== indexToRemove);
            setAttributes({ images: newImages });
        };

        return (
            <div>
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={(newImages) => onSelectImages(newImages as any)}
                        allowedTypes={["image"]}
                        multiple
                        render={({ open }) => (
                            <Button onClick={open}>Select Images</Button>
                        )}
                    />
                </MediaUploadCheck>
                <div className="images-grid">
                    {attributes.images.map((image, index) => (
                        <div key={index} className="image-grid-cell">
                            <Button
                                onClick={() => removeImage(index)}
                                icon="no-alt"
                                label="Delete image"
                                className="remove-image-button"
                                isDestructive
                            />
                            <img src={image.url} />
                            <input
                                type="text"
                                value={image.title}
                                onChange={(event) =>
                                    updateTitle(index, event.target.value)
                                }
                                placeholder="Enter title here"
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    },
    save: ({ attributes }) => {
        return (
            <section className="hero">
                <div className="hero-image-wrapper">
                    {attributes.images.map((image, index) => (
                        <Fragment>
                            <img className="hero-image" key={index} src={image.url} />
                            <span className="image-title">{image.title}</span>
                        </Fragment>
                    ))}
                </div>
            </section>
        );
    },
});
