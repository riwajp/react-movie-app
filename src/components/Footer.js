const Footer = () => {
  return (
    <div className="footer_container">
      <span className="footer_title">MovieDB</span>
      <br />
      <div className="footer_icons">
        <img
          src="https://img.icons8.com/color/48/000000/facebook-new.png"
          className="icon"
          style={{ marginLeft: 10 }}
        />
        <img
          src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
          className="icon"
          style={{ marginLeft: 10 }}
        />
        <img
          src="https://img.icons8.com/color/48/000000/twitter.png"
          className="icon"
          style={{ marginLeft: 10 }}
        />
        <br />
        <br />
        &copy;<i> Riwaj Prasai</i>
      </div>
    </div>
  );
};

export default Footer;
