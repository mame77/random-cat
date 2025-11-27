import { CatImage } from "./cat-image";
import { fetchImage } from "./fetch-images";


export default async function Home() {
    const image = await fetchImage();
    return <CatImage url={image.url} />;
}
