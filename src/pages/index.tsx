import '../app/globals.css';
import Format from "../app/components/format";
import NextJsCarousel from "../app/components/NextJsCarousel";
import Video from "../app/components/Video";

export default function Home() {
    return (
        <Format>
            <NextJsCarousel />
            <Video/>
        </Format>
    )
}
