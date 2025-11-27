type Image = {
    url: string;
};

export async function fetchImage(): Promise<Image>{
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const image = await res.json();
    console.log("fetchImage: 画像を取得しました",image.name)
    return image[0]
}
