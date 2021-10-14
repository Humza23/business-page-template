import React from 'react'

function Gallery2Image({ image }) {
    return (
        <div className="gallery-grid-content-container">
            <div className="gallery-grid-image-container">
                <div className="gallery-grid-image" style={{ backgroundImage: `url(${image.src})` }}></div>
            </div>
        </div>
    )
}

export default Gallery2Image
