import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import { withPreview } from "gatsby-source-prismic";
import { Helmet } from 'react-helmet';
import Div100vh from 'react-div-100vh';
import { ImageOrientation } from "../components/utils/image-orientation";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import "../components/styles/artist.css";

import exitBlack from "../../public/icons/exit-black.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 1000,
  draggable: true,
  lazyLoad: 'ondemand'
};


const Artist = ({ data }) => {
  // back button that returns you to the right place on index
  const BackButton = () => {
    return (
      <div className="exit-artist-button-con">
        <img src={exitBlack} onClick={() => {window.history.back()}} />
      </div>     
    )
  }  

  const artistGallery = data.prismicArtist.data.gallery.filter(artist => artist.artist_image.fluid !== null)
    .map((artist, index) => (
    <img
      key={`artist_image_${index}`}
      className={`artist-artist-img ${ImageOrientation(
              artist.artist_image
            )}`}
      data-lazy={artist.artist_image.fluid.srcWebp}
      srcSet={artist.artist_image.fluid.srcSetWebp}
    />
  ));    

  return (  
    <>
    <div className='single-artist-page-con'>

      <Helmet>
          <html className='single-artist-html' />
          <body className="single-artist-body" />
          <title>{data.prismicArtist.data.artist_title.text} – Martinez Gallery</title>
      </Helmet>

      <BackButton />

      <div className="img-slider">
        <Slider {...settings}>
          {artistGallery}
        </Slider>
      </div>


    </div>
  
    </>
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
