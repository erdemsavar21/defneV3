import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import HeaderBanner from "../components/HeaderBanner";


export default function Home() {
  return (
    <div id="wrap">
      <HeaderBanner />
      <div id="main-content" className="main-content">
        <section
          id="infoUs"
          className="section infoUs">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-push-6">
                <figure>
                  <img
                    alt=""
                    src="../images/home/info/IMG_1.jpg"
                    className="animated"
                    data-animate="fadeInRight animation animation-delay-50"
                  />
                  <img
                    alt=""
                    src="../images/home/info/IMG_2.JPG"
                    className="animated"
                    data-animate="fadeInRight animation animation-delay-25"
                  />
                </figure>
              </div>
              <div className="col-sm-6 col-sm-pull-6">
                <h1 className="title line-title">
                  Willkommen im Restaurant DEFNE<i className="fa"></i>
                </h1>
                <aside>
                  <p>
                    Genießen Sie bei uns eine kulinarische Reise in die mediterrane Küche. Unser Restaurant vereint die Aromen und Geschmacksrichtungen der
                    Mittelmeerregion und bietet Ihnen eine vielfältige Auswahl an köstlichen Gerichten.
                  </p>
                </aside>
              </div>
            </div>
          </div>
        </section>
        {/*       <section
          id="services"
          className="section services"
          style={{
            backgroundImage: "url(../images/home/services/bg_menu.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "100% auto"
          }}
        >
          <div className="container">
                <ul class="service-effect">
                    <li><img alt="" src="../images/home/services/service-1.png"  class="animated animation-duration-15" data-animate="fadeInLeft animation"></li>
                    <li><img alt="" src="../images/home/services/service-2.png"  class="animated animation-duration-15" data-animate="fadeInDown animation"></li>
                    <li><img alt="" src="../images/home/services/service-3.png"  class="animated animation-duration-15" data-animate="fadeInDown animation"></li>
                    <li><img alt="" src="../images/home/services/service-4.png"  class="animated animation-duration-15" data-animate="fadeInDown animation"></li>
                    <li><img alt="" src="../images/home/services/service-5.png"  class="animated animation-duration-15" data-animate="fadeInDown animation"></li>
                    <li><img alt="" src="../images/home/services/service-6.png"  class="animated animation-duration-15" data-animate="fadeInRight animation"></li>
                </ul>
            <ul id="services-item">
              <li className="service">
                <aside>
                  <div className="service-inner">
                    <h3>
                      <a href="menu.html#coffee" title="Coffee">
                        Coffee
                      </a>
                    </h3>
                    <p>
                      We the same levels of commitment to cocktail know-how from
                      all of the people we work with
                    </p>
                  </div>
                </aside>
                <em className="animated animation infinite bullets" />
              </li>
              <li className="service">
                <aside>
                  <div className="service-inner">
                    <h3>
                      <a href="menu.html#cocktail" title="Cocktail">
                        Cocktail
                      </a>
                    </h3>
                    <p>
                      We the same levels of commitment to cocktail know-how from
                      all of the people we work with
                    </p>
                  </div>
                </aside>
                <em className="animated animation infinite bullets animation-delay-50" />
              </li>
              <li className="service">
                <aside>
                  <div className="service-inner">
                    <h3>
                      <a href="menu.html#tea" title="Tea">
                        Tea
                      </a>
                    </h3>
                    <p>
                      We the same levels of commitment to cocktail know-how from
                      all of the people we work with
                    </p>
                  </div>
                </aside>
                <em className="animated animation infinite bullets animation-delay-100" />
              </li>
              <li className="service">
                <aside>
                  <div className="service-inner">
                    <h3>
                      <a href="menu.html#cake" title="Cake">
                        Cake
                      </a>
                    </h3>
                    <p>
                      We the same levels of commitment to cocktail know-how from
                      all of the people we work with
                    </p>
                  </div>
                </aside>
                <em className="animated animation infinite bullets animation-delay-150" />
              </li>
              <li className="service">
                <aside>
                  <div className="service-inner">
                    <h3>
                      <a href="menu.html#milk" title="Milk">
                        Milk
                      </a>
                    </h3>
                    <p>
                      We the same levels of commitment to cocktail know-how from
                      all of the people we work with
                    </p>
                  </div>
                </aside>
                <em className="animated animation infinite bullets animation-delay-200" />
              </li>
              <li className="service">
                <aside>
                  <div className="service-inner">
                    <h3>
                      <a href="menu.html#beverages" title="Beverages">
                        Beverages
                      </a>
                    </h3>
                    <p>
                      We the same levels of commitment to cocktail know-how from
                      all of the people we work with
                    </p>
                  </div>
                </aside>
                <em className="animated animation infinite bullets animation-delay-250" />
              </li>
            </ul>
          </div>
        </section> */}
        <section
          id="latest"
          className="section latest"
          style={{
            backgroundImage: "url(../images/home/latest/bg.png)",
            backgroundPosition: "right top",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-7">
                <h1 className="title line-title">
                  Unsere Services<i className="fa"></i>
                </h1>
                <ul className="posts_list">
                  <li>
                    <figure>
                      <a href="#">
                        {" "}
                        <img alt="" src="../images/home/gallery/img-5.jpg" />
                      </a>
                    </figure>
                    <aside>
                      <h4 className="title">
                        <a href="/">Frühstück</a>
                      </h4>
                      <p>
                        Wir bieten Ihnen Belegte Brötchen, Suppen, Croissants, diverse Marmeladen, Aufstriche sowie Wurst, Käse und Eierspezialitäten. Natürlich begleitet von türkischem Tee oder aromatischen Kaffees.
                      </p>
                    </aside>
                  </li>
                  <li>
                    <figure>
                      <a href="/galleries">
                        {" "}
                        <img alt="" src="../images/home/gallery/img-4.jpg" />
                      </a>
                    </figure>
                    <aside>
                      <h4 className="title">
                        <a href="/galleries">Mittagessen & Abendessen</a>
                      </h4>
                      <p>
                        Neben einer sorgfältig ausgewählten, wöchentlich wechselnden Auswahl an Gerichten werden angeboten..
                      </p>
                    </aside>
                  </li>
                  <li>
                    <figure>
                      <a href="/galleries">
                        {" "}
                        <img alt="" src="../images/home/gallery/img-3-new.JPG" />
                      </a>
                    </figure>
                    <aside>
                      <h4 className="title">
                        <a href="/galleries">Besondere Anlässe</a>
                      </h4>
                      <p>
                        Defne ist nicht nur ein Ort zum Essen, sondern auch ein Ort, um besondere Momente zu feiern. Ob geschlossene Gesellschaften, Hochzeiten, Henna, Geburtstage, Essen nach der Standesamtlichen Trauung, besondere Feste, Hochzeitsessen, Gedenkfeiern oder Firmenveranstaltungen, unser Team sorgt dafür, dass Ihre Veranstaltung unvergesslich wird.
                      </p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <h4 className="title">
                        <a href="/galleries">Parken</a>
                      </h4>
                      <p>
                      Auf unserem Restaurantgelände stehen kostenlose Parkplätze zur Verfügung.
                      </p>
                    </aside>
                  </li>
                </ul>
              </div>
              <div className="col-sm-5">
                <div className="widget-gallery">
                  <ul>
                    <li>
                      <figure>
                        <img
                          className="animated"
                          data-animate="zoomIn animation"
                          alt=""
                          src="../images/home/gallery/img-1.jpg"
                        />
                        <figcaption>
                          <a
                            className="gallery-ajax"
                            href="/galleries"
                            data-target="#myModal-1"
                          />
                        </figcaption>
                      </figure>
                    </li>
                    <li>
                      <figure>
                        <img
                          className="animated"
                          data-animate="zoomIn animation"
                          alt=""
                          src="../images/home/gallery/img-2.jpg"
                        />
                        <figcaption>
                          <a
                            className="gallery-ajax"
                            href="/galleries"
                            data-target="#myModal-2"
                          />
                        </figcaption>
                      </figure>
                    </li>
                    <li>
                      <figure>
                        <img
                          className="animated"
                          data-animate="zoomIn animation animation-delay-50"
                          alt=""
                          src="../images/home/gallery/img-3.jpg"
                        />
                        <figcaption>
                          <a
                            className="gallery-ajax"
                            href="/galleries"
                            data-target="#myModal-3"
                          />
                        </figcaption>
                      </figure>
                    </li>
                    <li>
                      <figure>
                        <img
                          className="animated"
                          data-animate="zoomIn animation animation-delay-50"
                          alt=""
                          src="../images/home/gallery/img-4.jpg"
                        />
                        <figcaption>
                          <a
                            className="gallery-ajax"
                            href="/galleries"
                            data-target="#myModal-4"
                          />
                        </figcaption>
                      </figure>
                    </li>
                    <li>
                      <figure>
                        <img
                          className="animated"
                          data-animate="zoomIn animation animation-delay-100"
                          alt=""
                          src="../images/home/gallery/img-5.jpg"
                        />
                        <figcaption>
                          <a
                            className="gallery-ajax"
                            href="/galleries"
                            data-target="#myModal-5"
                          />
                        </figcaption>
                      </figure>
                    </li>
                    <li>
                      <figure>
                        <img
                          className="animated"
                          data-animate="zoomIn animation animation-delay-100"
                          alt=""
                          src="../images/home/gallery/img-6.jpg"
                        />
                        <figcaption>
                          <a
                            className="gallery-ajax"
                            href="/galleries"
                            data-target="#myModal-6"
                          />
                        </figcaption>
                      </figure>
                    </li>
                  </ul>

                </div>
              </div>
            </div>


          </div>
          <div className="modal" id="myModal-1">
            <div className="modal-content">
              <div className="modal-header">
                <div className="container">
                  <button
                    aria-label="Close"
                    data-dismiss="modal"
                    className="close"
                    type="button"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
              <div className="modal-body" />
            </div>
            {/* /.modal-content */}
          </div>
          <div className="modal" id="myModal-2">
            <div className="modal-content">
              <div className="modal-header">
                <div className="container">
                  <button
                    aria-label="Close"
                    data-dismiss="modal"
                    className="close"
                    type="button"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
              <div className="modal-body" />
            </div>
            {/* /.modal-content */}
          </div>
          <div className="modal" id="myModal-3">
            <div className="modal-content">
              <div className="modal-header">
                <div className="container">
                  <button
                    aria-label="Close"
                    data-dismiss="modal"
                    className="close"
                    type="button"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
              <div className="modal-body" />
            </div>
            {/* /.modal-content */}
          </div>
          <div className="modal" id="myModal-4">
            <div className="modal-content">
              <div className="modal-header">
                <div className="container">
                  <button
                    aria-label="Close"
                    data-dismiss="modal"
                    className="close"
                    type="button"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
              <div className="modal-body" />
            </div>
            {/* /.modal-content */}
          </div>
          <div className="modal" id="myModal-5">
            <div className="modal-content">
              <div className="modal-header">
                <div className="container">
                  <button
                    aria-label="Close"
                    data-dismiss="modal"
                    className="close"
                    type="button"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
              <div className="modal-body" />
            </div>
            {/* /.modal-content */}
          </div>
          <div className="modal" id="myModal-6">
            <div className="modal-content">
              <div className="modal-header">
                <div className="container">
                  <button
                    aria-label="Close"
                    data-dismiss="modal"
                    className="close"
                    type="button"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
              <div className="modal-body" />
            </div>
            {/* /.modal-content */}
          </div>
        </section>
        <section id="info-recipe" className="section info-recipe">
          <div className="container">
            <div className="row">
              {/*    <div className="col-sm-7">
                <figure className="animated" data-animate="fadeInUp animation">
                  <img alt="" src="../images/home/info/info-img-3.png" />
                </figure>
                <aside>
                  <h4 className="title">
                    Do you want to Retation the video recipe?
                  </h4>
                  <p>
                    Coffee is a ritual, a small treat in the morning, “fuel”, a
                    break, chat, affair that makes up our lives. Making the coffee
                    better, we make our lives better.
                  </p>
                </aside>
              </div> */}
              <div className="col-sm-12">
                <ul className="nav video-recipe">
                  <li>
                    <div className="embed-responsive embed-responsive-4by3">
                      <video controls>
                        <source src="../images/IMG_2650.MOV" type="video/mp4"/>
                      </video>
                    </div>
                    <h5 className="title">
                    </h5>
                  </li>
                  <li>
                    <div className="embed-responsive embed-responsive-4by3">
                    <video controls>
                        <source src="../images/IMG_2174.MOV" type="video/mp4"/>
                      </video>
                    </div>
                    {/*  <h5 className="title">Gather more knowledge from coffee</h5> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="info-contact" className="section info-contact">
          <div className="container">

            <div className="col-sm-12">
              <ContactForm />
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}