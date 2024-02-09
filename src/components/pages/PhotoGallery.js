import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import React, { useState, useCallback } from "react";

export default function PhotoGallery() {
   const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
 {
    src: "assets/images/gallery/1.jpg",
    width: 20,
    height: 20
  },
  {
    src: "assets/images/gallery/2.jpg",
    width: 20,
    height: 20
  },
  {
    src: "assets/images/gallery/3.jpg",
    width: 20,
    height: 20
  },
  {
    src: "assets/images/gallery/4.jpg",
    width: 20,
    height: 20
  },
  {
    src: "assets/images/gallery/5.jpg",
    width: 20,
    height: 20
  },
  {
    src: "assets/images/gallery/6.jpg",
    width: 20,
    height: 20
  }
  ];

  return (
    <div className="container bg-image hover-overla">
     <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
