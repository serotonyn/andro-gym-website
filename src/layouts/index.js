import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, navigate, StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Swipeable from 'react-swipeable';
import Transition from '../components/transition';

import Footer from '../components/Footer';
import FooterMob from '../components/FooterMob';

import './index.css';

const Header = ({ name, title, date }) => (
  <header>
    <Link to="/1">
      <span>Demo</span>
      <span>Tutoriel</span>
    </Link>
    <time>{date}</time>
  </header>
);

class TemplateWrapper extends Component {
  NEXT = [13, 32, 39];
  PREV = 37;

  swipeLeft = () => {
    this.navigate({ keyCode: this.NEXT[0] });
  };

  swipeRight = () => {
    this.navigate({ keyCode: this.PREV });
  };

  navigate = ({ keyCode }) => {
    const now = this.props.data.slide.index;
    const slidesLength = this.props.slidesLength;

    if (now) {
      if (keyCode === this.PREV && now === 1) {
        return false;
      } else if (this.NEXT.indexOf(keyCode) !== -1 && now === slidesLength) {
        return false;
      } else if (this.NEXT.indexOf(keyCode) !== -1) {
        navigate(`/${now + 1}`);
      } else if (keyCode === this.PREV) {
        navigate(`/${now - 1}`);
      }
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.navigate);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.navigate);
  }

  render() {
    const { location, children, site } = this.props;
    const {
      location: { pathname },
    } = this.props;

    const isFirstSlide = pathname === '/1';
    const isLastSlide = pathname === '/5';

    return (
      <div>
        <Helmet
          title={`${site.siteMetadata.title} — ${site.siteMetadata.name}`}
          content="#333"
        />
        {/* {isLastSlide && (
          <Header
            name={site.siteMetadata.name}
            title={site.siteMetadata.title}
            date={site.siteMetadata.date}
          />
        )} */}
        <Swipeable
          onSwipedLeft={this.swipeLeft}
          onSwipedRight={this.swipeRight}
        >
          <Transition location={location}>
            <div
              id="slide"
              style={{
                width: '100%',
                height: isFirstSlide ? '90vh' : '100vh',
                marginTop: isFirstSlide ? '0px' : 0,
              }}
            >
              {children}
              {isFirstSlide && <Footer />}
            </div>
          </Transition>
        </Swipeable>
        {isFirstSlide && <FooterMob />}
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
};

export default props => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            name
            title
            date
          }
        }
        allSlide {
          edges {
            node {
              id
            }
          }
        }
      }
    `}
    render={data => (
      <TemplateWrapper
        site={data.site}
        slidesLength={data.allSlide.edges.length}
        {...props}
      />
    )}
  />
);
