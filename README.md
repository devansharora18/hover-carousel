# Hover-Carousel

Hover-Carousel is a versatile and interactive React component that enables users to effortlessly view a collection of images by simply hovering over the container and moving their mouse horizontally. The carousel provides a smooth scrolling experience, enhancing the overall user engagement and delight.

## Demo

Check out the live demo of Hover-Carousel in action: [Hover-Carousel Demo](https://hover-carousel-demo.vercel.app)

## Installation

You can install the Hover-Carousel component via NPM:

```bash
npm install hover-carousel
```
## Usage

Using Hover-Carousel is straightforward. Just follow these steps:

1. Install the package in your project as described in the installation section.
2. Import the Hover-Carousel component in your React application.
3. Prepare an array of image URLs that you want to showcase in the carousel.
4. Pass the array as a prop to the Hover-Carousel component.

Here's a simple example of how to use Hover-Carousel:

```jsx
import React from "react";
import HoverCarousel from "hover-carousel";

const MyImageCarousel = () => {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image URLs here
  ];

  return (
    <div>
      <HoverCarousel images={images} />
    </div>
  );
};

export default MyImageCarousel;
```
## Features

- **Hover-based Interaction:** Users can effortlessly hover over the carousel container to view the images without the need for manual navigation.
- **Smooth Scrolling:** The carousel offers a seamless and smooth scrolling experience, enhancing user satisfaction.
- **Responsive Design:** The component is designed to be responsive, ensuring optimal display across various devices and screen sizes.
- **Customizable:** Easily customize the carousel's appearance and behavior to suit your application's unique style and requirements.
- **Lightweight and Efficient:** Hover-Carousel is built to be lightweight and efficient, minimizing impact on performance.
## Contributions and Issues

Contributions to the Hover-Carousel project are highly appreciated! If you encounter any bugs, have suggestions for improvements, or want to contribute new features, feel free to open an issue or submit a pull request.

## License

Hover-Carousel is licensed under the MIT License. See the [LICENSE](https://github.com/ART3MISTICAL/hover-carousel/blob/main/LICENSE) file for more details.


