import { v4 as uuidv4 } from "uuid";
import desertImg from "./desert_night.png";
import hamlet from "./hamlet.png";
import mountainMist from "./mountain_mist.png";
import mountainSide from "./mountainside.png";
import space from "./space.png";

const images = [
	{
		id: uuidv4(),
		image: desertImg,
		title: "Desert",
		text: "This is a Desert",
	},
	{
		id: uuidv4(),
		image: hamlet,
		title: "Hamlet",
		text: "This is a Hamlet",
	},
	{
		id: uuidv4(),
		image: mountainMist,
		title: "Mountain Mist",
		text: "This is a Mountain Mist",
	},
	{
		id: uuidv4(),
		image: mountainSide,
		title: "Mountain Side",
		text: "This is a Mountain Side",
	},
	{
		id: uuidv4(),
		image: space,
		title: "Space",
		text: "This is Space",
	},
];
const images_carousel = [
	{
		id: uuidv4(),
		image: desertImg,
		caption: `<div>
                  Desert
                  <br/>
                  This is a Desert
                </div>`,
	},
	{
		id: uuidv4(),
		image: hamlet,
		caption: `<div>
                  Hamlet
                  <br/>
                  This is a Hamlet
                </div>`,
	},
	{
		id: uuidv4(),
		image: mountainMist,
		caption: `<div>
                  Mountain Mist
                  <br/>
                  This is a Mountain Mist
                </div>`,
	},
	{
		id: uuidv4(),
		image: mountainSide,
		caption: `<div>
                  Mountain Side
                  <br/>
                  This is a Mountain Side
                </div>`,
	},
	{
		id: uuidv4(),
		image: space,
		caption: `<div>
                  Space
                  <br/>
                  This is Space
                </div>`,
	},
];

export { images, images_carousel };
