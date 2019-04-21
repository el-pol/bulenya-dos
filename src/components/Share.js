import React from 'react'
import styled from 'styled-components'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share';
import PropTypes from 'prop-types';

const ShareButtonsWrapper = styled.section`
  display: flex;
  width: 60%;
  margin: 5rem auto;
  justify-content: space-evenly;
  h5 {
    color: grey;
  }
  div {
    margin: 0 0.1rem;
    &:hover {
      transform: scale(1.1);
      filter: contrast(140%);
      transition: all 0.3s ease-in-out;

    }
    transition: all 0.3s ease-in-out;
  }

`;

const Share = ({socialConfig}) => (
  <ShareButtonsWrapper>
    <FacebookShareButton alt="" url={socialConfig.config.url} quote={socialConfig.config.title}>
      <h5>Share on Facebook</h5>
      <FacebookIcon
        size={64}
        round 
      />
    </FacebookShareButton>
    <LinkedinShareButton url={socialConfig.config.url} title={socialConfig.config.title}>
    <h5>
      Share on LinkedIn
    </h5>
    <LinkedinIcon
        size={64}
        round 
      />
    </LinkedinShareButton>
    <TwitterShareButton url={socialConfig.config.url} title={socialConfig.config.title} via={socialConfig.twitterHandle}>
    <h5>
      Share on Twitter
    </h5>
      <TwitterIcon
        size={64}
        round 
      />
    </TwitterShareButton>
    <WhatsappShareButton url={socialConfig.config.url} title={socialConfig.config.title}>
    <h5>
      Share on Whatsapp
    </h5>
    <WhatsappIcon
        size={64}
        round 
      />
    </WhatsappShareButton>
  </ShareButtonsWrapper>
);


Share.propTypes = {
	socialConfig: PropTypes.shape({
		twitterHandle: PropTypes.string.isRequired,
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
};

export default Share;