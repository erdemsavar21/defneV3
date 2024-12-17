import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contacts() {
  return (
    <div id="wrap">
      <Header />
      <>
        <div className="page-header">
          <figure className="post-thumbnail">
            <img alt="" src="../images/contact/contact.jpg" />
          </figure>
          <h1 className="title">
            <span className="line-title">
              KONTAKTE<i className="fa"></i>
            </span>
          </h1>
        </div>
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="contact-content">
                  <h3 className="title contact-title">Besuchen Sie uns</h3>
                  <p className="contact-desc">
                    Sie können uns auch zu unseren regelmäßigen Veranstaltungen wie
                    Live-Musikabenden besuchen, um Ihren Abend noch spezieller zu
                    gestalten.
                  </p>
                  <p>
                    Auf unserem Restaurantgelände stehen kostenlose Parkplätze zur
                    Verfügung.
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
                    <span>Rolshover Str. 231, 51105 Köln</span>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sidebar">
                  <div className="widget">
                    <div className="widget-inner">
                      <h3 className="title">UNSERE ÖFFNUNGSZEITEN</h3>
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </>

      <Footer />
    </div>
  )
}