"use client";
import { useState } from "react";
import { fetchImage } from "./fetch-images";

type ciprops = {
    url: string
};

export function CatImage({url}: ciprops){

    const [imageUrl, setImageUrl] = useState(url);
    const refreshImage = async () => {
        setImageUrl("");
        const image = await fetchImage();
        setImageUrl(image.url);
    }
    return(
    <div>
    <button onClick={refreshImage}>次の可愛い猫ちゃん</button>
    {imageUrl && <img src={imageUrl} />}
    </div>
    );
}
