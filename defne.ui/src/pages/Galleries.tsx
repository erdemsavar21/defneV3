import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface GalleryItem {
  id: number;
  category: string[]; // Kategori listesi
  imageSrc: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, category: ["frühstück", "mittagessen", "besondere"], imageSrc: "../images/galleries/img-1.jpg" },
  { id: 2, category: ["frühstück", "mittagessen", "besondere"], imageSrc: "../images/galleries/img-2.jpg" },
  { id: 3, category: ["frühstück", "mittagessen", "besondere"], imageSrc: "../images/galleries/img-3.jpg" },
  { id: 4, category: ["frühstück", "mittagessen", "besondere"], imageSrc: "../images/galleries/img-4.jpg" },
  { id: 5, category: ["frühstück", "mittagessen", "besondere"], imageSrc: "../images/galleries/img-5.jpg" },
  { id: 6, category: ["frühstück", "mittagessen", "besondere"], imageSrc: "../images/galleries/img-6.jpg" },
  { id: 7, category: ["frühstück", "mittagessen", "besondere"], imageSrc: "../images/galleries/img-7.jpg" },
  { id: 8, category: ["frühstück", "mittagessen", "besondere"], imageSrc: "../images/galleries/img-8.jpg" },
];

export default function Galleries() {
  const [filter, setFilter] = useState<string>("*"); // Filtreleme için state

  const filteredData = galleryData.filter((item) => {
    if (filter === "*") return true; // Tüm öğeleri göster
    return item.category.includes(filter);
  });

  return (
    <div id="wrap">
      <Header />
      <div id="main-content" className="main-content">
        <div className="page-header">
          <figure className="post-thumbnail">
            <img alt="" src="../images/galleries/galleries.jpg" />
          </figure>
          <h1 className="title">
            <span className="line-title">
              EINIGE IMPRESSIONEN UNSERER RÄUMLICHKEITEN<i className="fa"></i>
            </span>
          </h1>
        </div>
        <div className="page-content">
          <div id="galleries" className="galleries galleries-v1">
            <div className="container">
              <div id="filter" className="filter">
                <button className={`button ${filter === "*" ? "active" : ""}`} onClick={() => setFilter("*")}>
                  Alle
                </button>
                <button className={`button ${filter === "frühstück" ? "active" : ""}`} onClick={() => setFilter("frühstück")}>
                  Frühstück
                </button>
                <button className={`button ${filter === "mittagessen" ? "active" : ""}`} onClick={() => setFilter("mittagessen")}>
                  Mittagessen
                </button>
                <button className={`button ${filter === "besondere" ? "active" : ""}`} onClick={() => setFilter("besondere")}>
                  Besondere Anlässe
                </button>
              </div>
              <div className="row">
                {filteredData.map((item) => (
                  <div key={item.id} className={`col-sm-6 col-xs-6 gallery-item`}>
                    <div className="inner">
                      <figure>
                        <img alt="" src={item.imageSrc} />
                      </figure>
                      <h4 className="title">
                        <a
                          className="gallery-ajax"
                          href="#"
                          data-url="../ajax/gallery-v1-1.html"
                        />
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}