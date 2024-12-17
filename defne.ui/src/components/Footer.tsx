export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-info">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <aside className="widget">
                <h3 className="title">Besuchen Sie uns</h3>
                <div className="widget-content contact-us">
                  <p>
                    Auf unserem Restaurantgelände stehen kostenlose Parkplätze zur Verfügung.
                  </p>
                  <p>
                    <i className="fa"></i>
                    <span>info@defnerestaurant.com</span>
                  </p>
                  <p>
                    <i className="fa"></i>
                    <span>+49 (0) 179 - 760 8332</span>
                  </p>
                  <p>
                    <i className="fa"></i>
                    <span>
                      Rolshover Str. 229/231, 51105 Köln
                    </span>
                  </p>
                </div>
              </aside>
            </div>
            <div className="col-sm-3">
              <aside className="widget">
                <h3 className="title">Unsere Öffnungszeiten</h3>
                <div className="widget-content">
                  <p>
                    Wir würden uns freuen, Sie bei Defne begrüßen zu dürfen, wo jede Mahlzeit eine Reise durch die Geschichte ist.
                  </p>
                  <div className="widget-text">
                    <div className="row">
                      <div className="col-xs-8 col-sm-7">Montag - Freitag</div>
                      <div className="col-xs-4 col-sm-5">10:00 - 15:00</div>
                      <div className="col-xs-8 col-sm-7">Samstag</div>
                      <div className="col-xs-4 col-sm-5">Ab 20:00 Uhr</div>
                      <div className="col-xs-8 col-sm-7">Sonntag</div>
                      <div className="col-xs-4 col-sm-5">10:00 - 15:00</div>
                    </div>

                  </div>
                </div>
              </aside>
            </div>
            <div className="col-sm-3">
              <aside className="widget">
              <h3 className="title">Folgen Sie uns</h3>
                        <div className="widget-content">
                            <p>Für tägliche Informationen und Updates, folgen Sie uns auf Social Media </p>
                            <ul className="social">
                                <li><a href="https://www.instagram.com/defnerestaurantkoeln" className="hvr-rectangle-out" target="_blank"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
              </aside>
            </div>
            <div className="col-sm-3">
              <aside className="widget">
              <h3 className="title">Rechtliches</h3>
                        <div className="widget-content">
                            <ul>
                                <li><a href="/policy" target="_blank">Datenschutz</a></li>
                            </ul>
                            <ul>
                                <li><a href="/impressum" target="_blank">Impressum</a></li>
                            </ul>
                        </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>
            Copyright © 2024{" "}
            <a href="">Defne Restaurant</a>. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}