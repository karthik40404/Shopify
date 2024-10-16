function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="/" className="text-dark">Home</a></li>
              <li><a href="/about" className="text-dark">About</a></li>
              <li><a href="/contact" className="text-dark">Contact</a></li>
              <li><a href="/product" className="text-dark">Product</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com" className="text-dark">Facebook</a></li>
              <li><a href="https://twittter.com" className="text-dark">Twitter</a></li>
              <li><a href="https://instagram.com" className="text-dark">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-light">
        © 2024 Copyright:Shopify
      </div>
    </footer>
  )
}
export default Footer;
