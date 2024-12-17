import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Impressum() {
  return (
    <div>
      <Header />

      <>
        <div className="page-header">
          <figure className="post-thumbnail">
            <img alt="" src="../images/contact/contact.jpg" />
          </figure>
          <h1 className="title">
            <span className="line-title">
              Impressum<i className="fa"></i>
            </span>
          </h1>
        </div>
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-content">
                  <h3 className="title contact-title">Kontakt</h3>
                  <p className="contact-desc">Defne Restaurant</p>
                  <p className="contact-desc">Rolshover Str. 231, 51105 Köln</p>
                  <p className="contact-desc">info@defnerestaurant.com</p>
                  <p className="contact-desc">+49 (0) 179 - 760 8332</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-content">
                  <h3 className="title contact-title">Rechtliches</h3>
                  <p className="contact-desc">Inhaberin: Gülay Yilmaz</p>
                  <p className="contact-desc"></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="contact-content">
                <h3 className="title contact-title">Streitschlichtung</h3>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:
                  https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie
                  oben im Impressum. Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                  teilzunehmen.
                </p>
              </div>
              <div className="contact-content">
                <h3 className="title contact-title">Haftung für Inhalte</h3>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
                  auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
                  §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                  überwachen oder nach Umständen zu forschen, die auf eine
                  rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
                  oder Sperrung der Nutzung von Informationen nach den allgemeinen
                  Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                  jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                  Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                  Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>
              <div className="contact-content">
                <h3 className="title contact-title">Haftung für Links</h3>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren
                  Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                  fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                  der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                  Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                  erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
                  Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
                  nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                  derartige Links umgehend entfernen.
                </p>
              </div>
              <div className="contact-content">
                <h3 className="title contact-title">Urheberrecht</h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                  schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht
                  kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
                  Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                  Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                  gekennzeichnet. Sollten Sie trotzdem auf eine
                  Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                  entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                  werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>

      <Footer />
    </div >
  )
}