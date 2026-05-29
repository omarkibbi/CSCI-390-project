
import { useRef } from "react";
const SONGS = [
    { title: "Around the World",              img: "images/around the world.jpg",              src: "songs/Around the world.mp3" },
    { title: "Harder Better Faster Stronger", img: "images/Harder better faster stronger.jpg", src: "songs/Harder, Better,  Faster, Stronger.mp3" },
    { title: "Get Lucky",                     img: "images/Get Lucky.jpg",                     src: "songs/Get Lucky.mp3" },
    { title: "One More Time",                 img: "images/One more time.jpg",                 src: "songs/One More Time.mp3" },
    { title: "Digital Love",                  img: "images/Digital Love.jpg",                  src: "songs/Digital Love.mp3" },
    { title: "Technologic",                   img: "images/Technologic.jpg",                   src: "songs/Technologic.mp3" },
    { title: "Robot Rock",                    img: "images/Robot Rock.jpg",                    src: "songs/Robot Rock.mp3" },
    { title: "Lose Yourself to Dance",        img: "images/Lose yourself to dance.jpg",        src: "songs/Lose Yourself To Dance.mp3" },
    { title: "Instant Crush",                 img: "images/Instant Crush.jpg",                 src: "songs/Instant Crush.mp3" },
    { title: "Something About Us",            img: "images/Something about us.jpg",            src: "songs/Something About Us.mp3" },
];

function Songs() {
    const audiosRef = useRef([]);

    function handlePlay(index) {
        audiosRef.current.forEach((audio, i) => {
            if (audio && i !== index) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    }

    return (
        <main>
            <section>
                <h2>Songs</h2>
                {SONGS.map((song, i) => (
                    <div className="song" key={song.title}>
                        <img src={song.img} alt={song.title} />
                        <p>{song.title}</p>
                        <audio
                            controls
                            ref={el => audiosRef.current[i] = el}
                            onPlay={() => handlePlay(i)}
                        >
                            <source src={song.src} type="audio/mpeg" />
                        </audio>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Songs;
