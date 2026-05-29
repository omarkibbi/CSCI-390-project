import { useState } from "react";

const IMAGES = Array.from({ length: 11 }, (_, i) => `images/dp${i + 1}.jpg`);

function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleNext = (e) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % IMAGES.length);
        }
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + IMAGES.length) % IMAGES.length);
        }
    };

    return (
        <main>
            <section>
                <h2>Gallery</h2>
                <div className="gallery">
                    {IMAGES.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Daft Punk ${i + 1}`}
                            onClick={() => setSelectedIndex(i)}
                        />
                    ))}
                </div>
            </section>

            {selectedIndex !== null && (
                <div className="full-screen" onClick={() => setSelectedIndex(null)}>
                    <button className="arrow prev-arrow" onClick={handlePrev}>❮</button>
                    <img src={IMAGES[selectedIndex]} alt="Full size" />
                    <button className="arrow next-arrow" onClick={handleNext}>❯</button>
                    <p>Click anywhere to close</p>
                </div>
            )}
        </main>
    );
}

export default Gallery;
