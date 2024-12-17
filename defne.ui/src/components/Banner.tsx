import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';

interface ImageData {
  path: string;
  name: string;
  format: string;
  uploadedAt: string;
}

interface Banner {
  id: number;
  image: ImageData;
  description: string;
  capture: string;
  createdAt: string;
}

const apiUrl = import.meta.env.VITE_API_URL;

export default function Banner() {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/banner`);
        setBanners(response.data.banners);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id="banner">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="slider-item">
            <img
              src={`${apiUrl}${banner.image.path}`}
              alt={banner.image.name}
            />
            <div className="caption">
              <h1 className="title">
                {banner.capture}
                <span></span>
              </h1>
              <p className="description">{banner.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
