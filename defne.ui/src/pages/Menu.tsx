import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Menu() {
  return (
    <div>
      <Header />
      <>
        <div className="page-header">
          <figure className="post-thumbnail">
            <img alt="" src="../images/menus/menus.jpg" />
          </figure>
          <h1 className="title">
            <span className="line-title">
              Speisekarte<i className="fa"></i>
            </span>
          </h1>
        </div>
        <div className="page-content">
          <div id="menus" className="menus">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <aside>
                    <h1 className="title">Unsere Speisekarte</h1>
                    <p>
                      Genießen Sie frische Mezze und herzhafte Gerichte, begleitet von
                      aromatischen Weinen aus der Region oder traditionell mit Raki.
                    </p>
                    <p>
                      Egal ob morgens zum Frühstück, mittags zur Stärkung oder abends
                      mit Freunden und Familie… von süß bis herzhaft ist zu jeder
                      Tageszeit ganz bestimmt das Richtige für Sie dabei.
                    </p>
                  </aside>
                </div>
              </div>
            </div>
            <div className="container">
              <div id="filter" className="filter">
                <button className="button" data-filter=".breakfast">
                  Frühstück
                </button>
                <button className="button" data-filter=".lunch_dinner">
                  Mittagessen &amp; Abendessen{" "}
                </button>
                <button className="button" data-filter=".special_days">
                  Besondere Anlässe
                </button>
              </div>
              <div className="menus-inner">
                <section id="breakfast" className="section menu-item breakfast">
                  <div className="row">
                    <div className="col-sm-6">
                      <h1 className="title">Frühstück</h1>
                      <figure className="menu-thumbnail">
                        <img alt="" src="../images/menus/breakfast.png" />
                      </figure>
                    </div>
                    <div className="col-sm-6">
                      <div className="menu-inner">
                        <aside
                          className="clearfix animated"
                          data-animate="fadeInRight"
                        >
                          Wir versüßen Ihnen den Morgen in Defne mit unseren frischen,
                          abwechslungsreichen und schmackhaften Produkten.
                        </aside>
                        <aside
                          className="clearfix animated animation-delay-25"
                          data-animate="fadeInRight"
                        >
                          Frisch, vielfältig und voller Genuss versüßen wir Ihnen die
                          Morgenstunden bei uns im Restaurant.
                        </aside>
                        <aside
                          className="clearfix animated animation-delay-50"
                          data-animate="fadeInRight"
                        >
                          Wir bieten Ihnen Belegte Brötchen, Suppen, Croissants,
                          diverse Marmeladen, Aufstriche sowie Wurst, Käse und
                          Eierspezialitäten. Natürlich begleitet von türkischem Tee
                          oder aromatischen Kaffees.
                        </aside>
                        <aside
                          className="clearfix animated animation-delay-75"
                          data-animate="fadeInRight"
                        >
                          Sonntags gestalten wir unser Frühstück in Buffetform – (All
                          you can eat), selbstverständlich auch mit veganen und
                          vegetarischen Varianten.
                        </aside>
                        <aside
                          className="clearfix animated animation-delay-100"
                          data-animate="fadeInRight"
                        >
                          Ab dem <strong>21.01.2024 </strong>ist das Frühstück von
                          Montag bis Samstag von 8:00 bis 11:30 Uhr erhältlich.
                        </aside>
                        <aside
                          className="clearfix animated animation-delay-150"
                          data-animate="fadeInRight"
                        >
                          Sonntags wird es in gemütlicher Atmosphäre von{" "}
                          <strong>10:00</strong> bis <strong>15:00</strong> Uhr
                          serviert.
                        </aside>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="lunch_dinner" className="section menu-item lunch_dinner">
                  <div className="row">
                    <div className="col-sm-6 col-sm-push-6">
                      <h1 className="title">Mittagessen &amp; Abendessen</h1>
                      <figure className="menu-thumbnail">
                        <img alt="" src="/images/menus/lunch.jpg" />
                      </figure>
                    </div>
                    <div className="col-sm-6 col-sm-pull-6">
                      <div className="menu-inner">
                        <aside
                          className="clearfix animated"
                          data-animate="fadeInLeft"
                        >
                          Neben einer sorgfältig ausgewählten, wöchentlich wechselnden
                          Auswahl an Gerichten werden angeboten.
                        </aside>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="special_days" className="section menu-item special_days">
                  <div className="row">
                    <div className="col-sm-6">
                      <h1 className="title">Besondere Anlässe</h1>
                      <figure className="menu-thumbnail">
                        <img
                          alt=""
                          src="/images/menus/special-day.jpg"
                        />
                      </figure>
                    </div>
                    <div className="col-sm-6">
                      <div className="menu-inner">
                        <aside
                          className="clearfix animated"
                          data-animate="fadeInRight"
                        >
                          Defne ist nicht nur ein Ort zum Essen, sondern auch ein Ort,
                          um besondere Momente zu feiern. Ob geschlossene
                          Gesellschaften, Hochzeiten, Henna, Geburtstage, besondere
                          Feste, Hochzeitsessen, Beerdigungen, Gedenkfeiern oder
                          Firmenveranstaltungen, unser Team sorgt dafür, dass Ihre
                          Veranstaltung unvergesslich wird.
                        </aside>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </>

      <Footer />
    </div>
  )
}