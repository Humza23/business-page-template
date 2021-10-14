import { Carousel } from "react-carousel-minimal";
import { images_carousel } from "./carousel_images";
// import "./Slider/Slider.css";

const CarouselComponent = () => {
	const captionStyle = {
		fontSize: "2em",
		fontWeight: "bold",
	};
	return (
		<div className="carousel_container">
			<Carousel
				data={images_carousel}
				time={3000}
				width="100%"
				height="100vh"
				captionStyle={captionStyle}
				captionPosition="center"
				automatic={true}
				dots={true}
				pauseIconColor="white"
				pauseIconSize="40px"
				slideBackgroundColor="blue"
				slideImageFit="cover"
				style={{
					textAlign: "center",
					width: "100%",
					height: "100vh",
				}}
			/>
		</div>
	);
};

export default CarouselComponent;
