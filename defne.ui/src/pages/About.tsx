import Footer from "../components/Footer";
import Header from "../components/Header";
//
export default function About() {
  return (
    <div>
      <Header />
      <>
        {/* <div class="page-about"> */}
        <div className="page-header">
          <figure className="post-thumbnail">
            <img alt="" src="../images/about/about.jpg" />
          </figure>
          <h1 className="title">
            <span className="line-title">
              über uns<i className="fa"></i>
            </span>
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <aside>
                  <h1 className="title">Willkommen im Restaurant DEFNE</h1>
                  <p>
                    Genießen Sie bei uns eine kulinarische Reise in die mediterrane
                    Küche. Unser Restaurant vereint die Aromen und
                    Geschmacksrichtungen der Mittelmeerregion und bietet Ihnen eine
                    vielfältige Auswahl an köstlichen Gerichten.
                  </p>
                </aside>
              </div>
            </div>
          </div>


          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-push-6">
                <section
                  className="section ourMission"
                  style={{
                    padding: "0px 0 0px",
                    backgroundImage: "url(../images/home/info/IMG_About.JPG)",
                    backgroundPosition: "right center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "50vh", 
                    width: "100%", 
                  }}
                >        </section>
              </div>
              <div className="col-sm-6 col-sm-pull-6">
                <aside>
                  <h1 className="title">Unsere Geschichte</h1>
                  <div className="content">
                    <p>
                      In der malerischen Stadt Hatay, bekannt für ihre reiche
                      Geschichte und kulturelle Vielfalt, wurzelt die Inspiration für
                      unser Restaurant Defne. Hatay, ein Schmelztiegel der
                      Zivilisationen, hat seit Jahrhunderten Reisende und Eroberer
                      angezogen, die alle ihre Spuren in der lokalen Küche
                      hinterlassen haben. Von den Hethitern über die Römer bis hin zu
                      den Osmanen, jeder hat ein Stück seines Herzens und seiner
                      Traditionen in Hatay gelassen.
                    </p>
                    <p>
                      f Defne, benannt nach dem türkischen Wort für Lorbeer, ist eine
                      Hommage an den Stadtkreis Defne in Hatay, wo Lorbeerblätter
                      nicht nur in der Küche, sondern auch in der Kultur und
                      Mythologie tief verwurzelt sind. Die Geschichte von Apollo und
                      Daphne, die eng mit der mediterranen Kultur verbunden ist,
                      Spiegelt die Magie des Bezirks wider. Apollo, der Gott des
                      Lichts und der Musik, verliebte sich einst in die Nymphe Daphne.
                      Daphne, die von Artemis, der Göttin der Jagd beschützt wurde,
                      wollte sich jedoch nicht auf eine romantische Beziehung
                      einlassen, floh vor der Liebe und verwandelte sich in einen
                      Lorbeerbaum. Seitdem ist der Lorbeerbaum ein Symbol für
                      Schönheit, Stärke und Unabhängigkeit.
                    </p>
                    <p>
                      Leider wurde das Gebiet am 6. Februar 2023 von einem Erdbeben
                      erschüttert, das große Zerstörung verursachte. Wir haben
                      beschlossen, unser Restaurant „Defne“ als Zeichen des
                      Wiederaufbaus zu eröffnen und den Namen der Region lebendig zu
                      halten, ausgehend von der Hoffnung, dass Gebäude zwar zerstört
                      werden, aber Erinnerungen, Liebe und Erfahrungen nicht
                      ausgelöscht werden können.
                    </p>
                    <p>
                      Unsere Speisen spiegeln die Essenz dieser historischen Region
                      wider, indem wir traditionelle Rezepte mit einem modernen Touch
                      neu interpretieren.
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
        <section className="section " style={{ padding: "25px 0 25px" }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center ">
                <aside>
                  <h1 className="title">Unsere Philosophie</h1>
                  <p>
                    Bei Defne glauben wir, dass gutes Essen Geschichten erzählt. Jedes
                    Gericht auf unserer Speisekarte ist eine Erzählung, zubereitet mit
                    den frischesten Zutaten und einer Prise mediterraner Leidenschaft.
                    Wir laden Sie ein, in eine Welt einzutauchen, in der Geschmack und
                    Geschichte Hand in Hand gehen.
                  </p>
                </aside>
              </div>
            </div>
          </div>
        </section>
        {/* </div> */}
      </>

      <Footer />
    </div >
  )
}