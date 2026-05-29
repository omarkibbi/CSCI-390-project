function Footer() {
    return (
        <footer className="footer">
            <p>Daft Punk Fan Project CSCI390</p>
            <p>
                Check out the official Daft Punk website:<br />
                <a href="https://www.daftpunk.com" target="_blank">Official Website</a>
            </p>
            <p>Social Media Accounts:</p>
            <div className="social-icons">
                <a href="https://www.facebook.com/daftpunk" target="_blank">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/daftpunk" target="_blank">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" />
                </a>
                <a href="https://www.youtube.com/user/daftpunkalive" target="_blank">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg" alt="YouTube" />
                </a>
                <a href="https://twitter.com/daftpunk" target="_blank">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" alt="X" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
