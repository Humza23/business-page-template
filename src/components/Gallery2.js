import React from "react";
import Gallery2Image from "./Gallery2Image";
import { v4 as uuid } from "uuid";

const Gallery2 = () => {
	const images = [
		{
			id: uuid(),
			src: "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			title: "Man standing",
			description: "A photo for the Man Standing by a Tree contest",
		},
		{
			id: uuid(),
			src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
			title: "Woman Taking Photo",
			description: "Photo of a photographer. Ironic.",
		},
		{
			id: uuid(),
			src: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIwcGhvdG8lMjAyMDE5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
			title: "Mountain Landscape",
			description: "Picturesque mountainscape in the Rockies.",
		},
		{
			id: uuid(),
			src: "https://images.unsplash.com/photo-1603755089999-8ce25221f34b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBob3Rvc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
			title: "Woman with Sparklers",
			description: "Sparklers! This was a fun shoot.",
		},
		{
			id: uuid(),
			src: "https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg",
			title: "Man with Best Friend",
			description: "The bond between a man and his dog is unbreakable.",
		},
		{
			id: uuid(),
			src: "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			title: "Man standing",
			description: "A photo for the Man Standing by a Tree contest",
		},
		{
			id: uuid(),
			src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
			title: "Woman Taking Photo",
			description: "Photo of a photographer. Ironic.",
		},
		{
			id: uuid(),
			src: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIwcGhvdG8lMjAyMDE5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
			title: "Mountain Landscape",
			description: "Picturesque mountainscape in the Rockies.",
		},
		{
			id: uuid(),
			src: "https://images.unsplash.com/photo-1603755089999-8ce25221f34b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBob3Rvc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
			title: "Woman with Sparklers",
			description: "Sparklers! This was a fun shoot.",
		},
		{
			id: uuid(),
			src: "https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg",
			title: "Man with Best Friend",
			description: "The bond between a man and his dog is unbreakable.",
		},
		{
			id: uuid(),
			src: "https://images.unsplash.com/photo-1603755089999-8ce25221f34b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBob3Rvc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
			title: "Woman with Sparklers",
			description: "Sparklers! This was a fun shoot.",
		},
		{
			id: uuid(),
			src: "https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg",
			title: "Man with Best Friend",
			description: "The bond between a man and his dog is unbreakable.",
		},
	];
	return (
		<section id="gallery2">
			<main>
				{images.map(image => (
					<Gallery2Image key={image.id} image={image} />
				))}
			</main>
		</section>
	);
};

export default Gallery2;
