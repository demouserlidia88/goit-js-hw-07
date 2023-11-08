import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

function createGalleryItem(item) {
	const galleryItem = document.createElement("li");
	galleryItem.classList.add("gallery__item");

	const galleryLink = document.createElement("a");
	galleryLink.classList.add("gallery__link");
	galleryLink.href = item.original;

	const galleryImage = document.createElement("img");
	galleryImage.classList.add("gallery__image");
	galleryImage.src = item.preview;
	galleryImage.alt = item.description;
	galleryImage.setAttribute("data-source", item.original);

	galleryLink.appendChild(galleryImage);
	galleryItem.appendChild(galleryLink);

	return galleryItem;
}

galleryItems.forEach((item) => {
	const galleryItem = createGalleryItem(item);
	galleryList.appendChild(galleryItem);
});
galleryItems.forEach((item) => {
	const galleryItem = createGalleryItem(item);
	galleryList.appendChild(galleryItem);
});

let instance = null;

galleryList.addEventListener("click", (event) => {
	event.preventDefault();
	if (event.target.nodeName === "IMG") {
		const imageUrl = event.target.dataset.source;

		instance = basicLightbox.create(
			`<img src="${imageUrl}" width="800" height="600">`
		);

		instance.show();
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && instance) {
		instance.close();
	}
});