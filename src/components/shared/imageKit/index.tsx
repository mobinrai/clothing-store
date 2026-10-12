import { Image, type Transformation } from "@imagekit/react";

type ImageKitProps = {
    imageUrl: string;
    height?: number;
    width?: number;
    transformation?: Transformation[];
    loading?:'eager'|'lazy'
    style?:React.CSSProperties
};

const MyImageKit = ({
    imageUrl,
    height,
    width,
    transformation,
    loading='lazy',
    style
}: ImageKitProps) => {
    return (
        <Image
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_ENDPOINT}
        style={{ objectFit: "cover", width: "100%", height: "100%", ...style }}
        src={imageUrl}
        height={height ?? 400}
        width={width ?? 900}
        loading={loading}
        transformation={transformation}
        />
    );
};

export default MyImageKit;
