function Footer() {
  return (
    <>
      <style>
        {`
          .footer {
            background: #111;
            color: white;
            text-align: center;
            padding: 25px;
            margin-top: 40px;
          }

          .footer h3 {
            margin-bottom: 8px;
            font-size: 20px;
          }

          .footer p {
            font-size: 14px;
            color: #ccc;
          }
        `}
      </style>

      <footer className="footer">
        <h3>FashionHub</h3>
        <p>© 2026 All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Footer;