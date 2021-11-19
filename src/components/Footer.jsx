function Footer() {

    const currentYear = new Date().getFullYear();

    return (

        <div className="Footer fixed-bottom text-center">

            <p>Copyright &#169; Faraz {currentYear}</p>

        </div>

    );
}

export default Footer;