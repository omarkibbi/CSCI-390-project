const ALBUMS = [
    { title: "Homework", year: 1997, img: "images/album1.jpg" },
    { title: "Discovery", year: 2001, img: "images/album2.jpg" },
    { title: "Human After All", year: 2005, img: "images/album3.jpg" },
    { title: "Random Access Memories", year: 2013, img: "images/album4.jpg" },
];

function Albums() {
    return (
        <main>
            <section>
                <h2>Albums</h2>
                <div className="album-container">
                    {ALBUMS.map(album => (
                        <div className="album" key={album.title}>
                            <img src={album.img} alt={album.title} />
                            <h3>{album.title}</h3>
                            <p>Released in {album.year}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Albums;
