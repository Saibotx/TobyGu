
//Import components
import Hero from './presentational/Hero.jsx';
import Profile from './presentational/Profile.jsx';
import SplitSectionContainer from './functional/SplitSectionContainer.jsx';
// import LeftModal from './presentational/'

//Import Packages
import React from 'react';
import styled, { css } from 'react-emotion';
// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";

const LeftModal = styled('div')`
  position:fixed;
  z-index: 5;
  border-top: 100px solid orange;
  border-right: 50px solid transparent;
  height:100vh;
  width:100vw;
  left:${props=>props.left || '0%'}
`;

const RightModal = styled('div')`
  position:fixed;
  z-index: 5;
  border-top: 100px solid orange;
  border-right: 50px solid transparent;
  height:100vh;
  width:100vw;
  right:${props=>props.right || '0%'}
`;

const _disspearingDiv = styled('div')`
  max-height: ${props=>props.height};
  overflow: hidden;
  transition: all 1s;
  ${'' /* transition-timing-function: ease-in; */}
`

export default function Home(props) {
  return(
    <div>
      {
        <_disspearingDiv height={props.side ? '0vh' : '150vh'}>
          <Hero/>
          <Profile/>
        </_disspearingDiv>
      }

      <SplitSectionContainer
        onPickSide={props.onPickSide}
        side={props.side}
      />
      {/* <LeftModal/>
      <RightModal/> */}
    </div>
  );
}