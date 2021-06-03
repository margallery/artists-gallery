import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import { withPreview } from "gatsby-source-prismic";
import { Helmet } from 'react-helmet';
import Div100vh from 'react-div-100vh';
import { ImageOrientation } from "../components/utils/image-orientation";

import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../components/styles/artist.css";

import exitBlack from "../../public/icons/exit-black.png";






const Artist = ({ data }) => {
  // index image
  // src={data.prismicArtist.data.index_image.fluid.srcWebp}
  // srcSet={data.prismicArtist.data.index_image.fluid.srcSetWebp}  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(null);

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    setTotalSlides(data.prismicArtist.data.gallery.length);
  }, []);

  const updateCurrentSlide = index => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  // back button that returns you to the right place on index
  const BackButton = () => {
    return (
      <div className="exit-artist-button-con">
        <img src={exitBlack} onClick={() => {window.history.back()}} />
      </div>     
    )
  }  

  // console.log(data.prismicArtist.data.gallery);
    const artistGallery = data.prismicArtist.data.gallery.filter(artist => artist.artist_image.fluid !== null)
      .map((artist, index) => (
      <img
        key={`artist_image_${index}`}
        className={`artist-artist-img ${ImageOrientation(
                artist.artist_image
              )}`}
        src={artist.artist_image.fluid.srcWebp}
        srcSet={artist.artist_image.fluid.srcSetWebp}
        // alt={content.index_image.alt}
        // loading="lazy"
      />
    ));    

  return (  
    <div className='single-artist-page-con'>

      <Helmet>
          <html className='single-artist-html' />
          <body className="single-artist-body" />
          <title>{data.prismicArtist.data.artist_title.text} – Martinez Gallery</title>
      </Helmet>

      <BackButton />

    <Div100vh>
     <Carousel
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        transitionTime={0}
        showStatus={false}
        onChange={index => updateCurrentSlide(index)}
      >
        {artistGallery}
      </Carousel>  
    </Div100vh>


      <div className="artist-artist-title-and-counter-con">
        <p>
          {data.prismicArtist.data.artist_title.text} {" "}
          <span className='counter'>
            ({currentSlide + 1}/{totalSlides})
          </span>
        </p>
      </div>     
    </div>
  

  );
};

export default withPreview(Artist);

export const query = graphql`
  query Artists($uid: String!) {
    prismicArtist(uid: { eq: $uid }) {
      data {
        artist_title {
          html
          text
        }
        index_image {
          fluid {
            srcSetWebp
            srcWebp
          }
        }
        gallery {
          artist_image {
            fluid {
              srcSetWebp
              srcWebp
            }
            dimensions {
              width
              height
            }
          }
        }
      }
    }
  }
`;
