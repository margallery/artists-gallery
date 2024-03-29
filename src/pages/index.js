import React, { useRef, useState } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled from "styled-components";
import { withPreview } from "gatsby-source-prismic";
import { ImageOrientation } from "../components/utils/image-orientation";
import { Helmet } from 'react-helmet';
import Div100vh from 'react-div-100vh';
import "../components/styles/index.css";
import Scrollspy from "react-scrollspy";
import burgerBlack from "../../public/icons/burger-black.png";
import exitBlack from "../../public/icons/exit-black.png";
import exitWhite from "../../public/icons/exit-white.png";


const Index = ({ data }) => {

  const About = () => {
    const document = data.prismicAboutPage.data;
    const [isActive, setActive] = useState("false");
    const hangleToggle = () => {
      setActive(!isActive);
    };
    return (
      <div>
        <div onClick={hangleToggle} className="about-button-con">
          <img src={burgerBlack} />
        </div>

        <div className={` about-con ${isActive ? "" : "active"}`}>
          <div onClick={hangleToggle} className="about-exit-button-con">
            <img src={exitWhite} />
          </div>
          <div className="about-text-con">  
            <div
               dangerouslySetInnerHTML={{
               __html: data.prismicAboutPage.data.about_content.html,
               }}
             />                   
          </div>
        </div>
      </div>
    );
  };

  const AlphabetNav = () => {
    return (
      <ul className="alphabet-nav">
        <li onClick={() =>
            document.querySelector("#group-0").scrollIntoView({
              behavior: "smooth", block: "start",})}>0</li>                
        <li onClick={() =>
            document.querySelector("#group-A").scrollIntoView({
              behavior: "smooth", block: "start",})}>A</li>
        <li onClick={() =>
            document.querySelector("#group-B").scrollIntoView({
              behavior: "smooth", block: "start",})}>B</li>
        <li onClick={() =>
            document.querySelector("#group-C").scrollIntoView({
              behavior: "smooth", block: "start",})}>C</li>
        <li onClick={() =>
            document.querySelector("#group-D").scrollIntoView({
              behavior: "smooth", block: "start",})}>D</li>
        <li onClick={() =>
            document.querySelector("#group-E").scrollIntoView({
              behavior: "smooth", block: "start",})}>E</li>
        <li onClick={() =>
            document.querySelector("#group-F").scrollIntoView({
              behavior: "smooth", block: "start",})}>F</li>
        <li onClick={() =>
            document.querySelector("#group-G").scrollIntoView({
              behavior: "smooth", block: "start",})}>G</li>
        <li onClick={() =>
            document.querySelector("#group-H").scrollIntoView({
              behavior: "smooth", block: "start",})}>H</li>
        <li onClick={() =>
            document.querySelector("#group-I").scrollIntoView({
              behavior: "smooth", block: "start",})}>I</li>
        <li onClick={() =>
            document.querySelector("#group-J").scrollIntoView({
              behavior: "smooth", block: "start",})}>J</li>
        <li onClick={() =>
            document.querySelector("#group-K").scrollIntoView({
              behavior: "smooth", block: "start",})}>K</li>
        <li onClick={() =>
            document.querySelector("#group-L").scrollIntoView({
              behavior: "smooth", block: "start",})}>L</li>
        <li onClick={() =>
            document.querySelector("#group-M").scrollIntoView({
              behavior: "smooth", block: "start",})}>M</li>
        <li onClick={() =>
            document.querySelector("#group-N").scrollIntoView({
              behavior: "smooth", block: "start",})}>N</li>
        <li onClick={() =>
            document.querySelector("#group-O").scrollIntoView({
              behavior: "smooth", block: "start",})}>O</li>
        <li onClick={() =>
            document.querySelector("#group-P").scrollIntoView({
              behavior: "smooth", block: "start",})}>P</li>
        <li onClick={() =>
            document.querySelector("#group-R").scrollIntoView({
              behavior: "smooth", block: "start",})}>Q</li>
        <li onClick={() =>
            document.querySelector("#group-R").scrollIntoView({
              behavior: "smooth", block: "start",})}>R</li>
        <li onClick={() =>
            document.querySelector("#group-S").scrollIntoView({
              behavior: "smooth", block: "start",})}>S</li> 
        <li onClick={() =>
            document.querySelector("#group-T").scrollIntoView({
              behavior: "smooth", block: "start",})}>T</li>                                                                                                                                                                                                                                            
        <li onClick={() =>
            document.querySelector("#group-U").scrollIntoView({
              behavior: "smooth", block: "start",})}>U</li>
        <li onClick={() =>
            document.querySelector("#group-V").scrollIntoView({
              behavior: "smooth", block: "start",})}>V</li>
        <li onClick={() =>
            document.querySelector("#group-W").scrollIntoView({
              behavior: "smooth", block: "start",})}>W</li>
        <li onClick={() =>
            document.querySelector("#group-X").scrollIntoView({
              behavior: "smooth", block: "start",})}>X</li>
        <li onClick={() =>
            document.querySelector("#group-Y").scrollIntoView({
              behavior: "smooth", block: "start",})}>Y</li>
        <li onClick={() =>
            document.querySelector("#group-Z").scrollIntoView({
              behavior: "smooth", block: "start",})}>Z</li>                                                                                
      </ul>
    );
  };


  const arrayThree = Object.values(data.allPrismicArtist.edges);


  const arrayFour = arrayThree.sort((a, b) =>  a.node.data.artist_title.text.localeCompare(b.node.data.artist_title.text, undefined, { numeric: true, sensitivity: 'base' }));
  console.log('heya');
  console.log(arrayFour);

  // https://stackoverflow.com/questions/51009090/sort-and-group-objects-alphabetically-by-first-letter-javascript
  let dataTwo = arrayFour.reduce((r, e) => {
    // get first letter of name of current element
    let group = e.node.data.artist_title.text[0];
    // https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number
    function isNumeric(num){
      return !isNaN(num)
    }
    if (isNumeric(group)) {   
      group = 0;
    }
    // if there is no property in accumulator with this letter create it
    if (!r[group]) r[group] = { group, children: [e] };
    // if there is push current element to children array for that letter
    else r[group].children.push(e);
    // return accumulator
    return r;
  }, {});

  // since data at this point is an object, to get array of values
  // we use Object.values method
  const result = Object.values(dataTwo);

  const finalResult = result.sort(
    (a, b) =>
      a.group.localeCompare(b.group, undefined, {
        numeric: true,
        sensitivity: "base",
      })
  );  

  // const SingleArtist = ({ index, data, content }) => {
  //   return (
  //     <a 
  //       className="artist-link" 
  //       href={content.node.uid}         
  //     >
  //       <h1 className="artist-title" id={content.node.data.artist_title.text}>
  //         {content.node.data.artist_title.text}
  //       </h1>
  //       <br />
  //     </a>
  //   );
  // };


  // const artistList = data.allPrismicArtist.edges.map((content, index) => {
  //   return (
  //     <SingleArtist
  //       key={`artist_${index}`}
  //       index={index}
  //       data={data}
  //       content={content}
  //     />
  //   );
  // });


  // SCROLL SPY
  const scrollSpyArtistsItemsArray = arrayFour.map(
    (content, index) => content.node.data.artist_title.text
  );

  // const scrollSpyArtistsListLi = arrayFour.map((content, index) => {
  const scrollSpyArtistsListLi = arrayFour.filter(content => content.node.data.index_image.fluid !== null)
  .map((content, index) => {
    return (

      <li key={index} className={content.node.data.artist_title.text}>
        <p className="artist-title">{content.node.data.artist_title.text}</p>        
          <Link 
            to={content.node.uid}
            className={`index-artist-img ${ImageOrientation(
              content.node.data.index_image
            )}`}            
            >
            <img            
              
              src={content.node.data.index_image.fluid.srcWebp}
            />    
          </Link>    
      </li>
    );
  });

  const alphabet = finalResult.map((content, index) => {
    const alphabetChildren = content.children.map((content, index) => {
      return (
        <div key={index}>
          <a 
            href={content.node.uid}
            // onClick={handleClick}
          >
            <h1
              className="artist-title"
              id={content.node.data.artist_title.text}
            >
              {" "}
              {content.node.data.artist_title.text}
            </h1>
          </a>
        </div>
      );
    });
    return (

        <div id={`group-${content.group}`} key={content.group}>
          {alphabetChildren}
        </div>

    );
  });  


  return (

      <>
        <Helmet>
            <title>Artists – Martinez Gallery</title>
          </Helmet>

          <About />
          <AlphabetNav />

          <div className="img-con">
            <Scrollspy
              items={scrollSpyArtistsItemsArray}
              currentClassName="is-current"
              // rootEl={'.artist-list-con'}
            >
              {scrollSpyArtistsListLi}
            </Scrollspy>
          </div>
          <div className="artist-list-con">
            <div className="artist-list">
            {alphabet}
                      
            </div>
            <h1 className='artist-title scrollSpyFix'>
              
            </h1>
          </div> 


      </>


  );
};

export default withPreview(Index);

export const query = graphql`
  {
    prismicAboutPage {
      data {
        about_content {
          text
          html
        }
      }
    }
    allPrismicArtist(sort: { order: ASC, fields: data___artist_title___text }) {
      edges {
        node {
          uid
          data {
            artist_title {
              html
              text
              raw
            }
            index_image {
              fluid {
                srcSetWebp
                srcWebp
              }
              dimensions {
                width
                height
              }
            }
            artist_location {
              html
            }
            artist_year {
              html
            }
            gallery {
              artist_image {
                fluid {
                  srcSetWebp
                  srcWebp
                }
              }
              artist_image_location {
                html
              }
              artist_image_year {
                html
              }
            }
          }
        }
      }
    }
  }
`;
