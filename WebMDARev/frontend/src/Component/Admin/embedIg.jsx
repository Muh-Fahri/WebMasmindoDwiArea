import { useEffect, useRef } from "react";

export default function EmbedInstagram({ url }) {
    const ref = useRef(null);

    useEffect(() => {
        if (window.instgrm && window.instgrm.Embeds) {
            window.instgrm.Embeds.process();
        }
    }, [url]);

    return (
        <div ref={ref} key={url}>
            <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ background: "#FFF", border: 0, margin: "1rem auto", width: "100%" }}
            />
        </div>
    );
}