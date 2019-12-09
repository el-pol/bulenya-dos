import React from 'react'
import styled from 'styled-components'
import SeaImg from '../images/sea.jpg'
import SeaMask from '../images/sea-map.png'

const Background = styled.section`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${SeaImg});
  background-size: cover;
`
const Water = styled.div`
  position: absolute;
  background-image: url(${SeaMask});
  background-size: cover;
  top:0;
  left:0;
  height: 100%;
  width: 100%;
  filter: url("#turbulence");
`

const SeaBg = props => {
  return <Background>
    <Water />
    <svg>
      <filter id="turbulence" x="0" y="0" width="100%" height="100%">
        <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
        <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
        <animate xlinkHref="#sea-filter" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"/>
      </filter>
    </svg>
  </Background>
}

export default SeaBg