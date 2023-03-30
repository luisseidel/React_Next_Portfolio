import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function NextJsCarousel() {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://fruki.com.br/static/c23f0f7921676d9f45fe551dea73bc32/89d9a/banner-encontre-fruki.webp" alt="image1"/>
                </div>
                <div>
                    <img src="https://fruki.com.br/static/fc69a92625a5b07358562cef09313ac7/89d9a/banner-home-fruki.webp" alt="image2" />
                </div>
                <div>
                    <img src="https://fruki.com.br/static/afc087beb440670958a667301d820fed/0a83a/banner_1_desktop.webp" alt="image3"/>
                </div>
            </Carousel>
        </div>
    );
};