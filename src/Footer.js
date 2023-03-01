import "./Footer.css"
function Footer(){
    return(
        <>
            <footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <div class="footer-widget">
          <h4 class="widget-title">Address</h4>
          <p>
            Assam
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="footer-widget">
          <h4 class="widget-title">Quick Links</h4>
          <ul class="list-unstyled">
            <li><a href="#">Rolling Notes</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="footer-widget">
          <h4 class="widget-title">DOWNLOAD OUR FREE APP ,NOW!!</h4>
          <p>Subscribe to our newsletter to get the latest news and offers.</p>
          <form>
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Enter your email"/>
            </div>
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="footer-widget">
          <h4 class="widget-title">Follow Us</h4>
          <ul class="list-inline">
            <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="footer-bottom">
          <p>© 2023 Rolling Notes All Rights Reserved. Developed by RollingNotes.in</p>
        </div>
      </div>
    </div>
  </div>
</footer>

        </>
    )
}


export default Footer;