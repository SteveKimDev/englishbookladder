import * as React from 'react';
import { Row, Col } from 'react-bootstrap/';
import { StaticQuery, graphql } from 'gatsby';

import HeroSVG from '../../svg/library-membership-hero.svg';
import PhoneSVG from '../../svg/phone.svg';

import * as ProgramsStyle from './programs.module.css';

const HeroSection = () => (
  <StaticQuery
    query={graphql`
      query LibraryMembershipPageHeroEnglish {
        allContentfulLibraryMembershipPageAssembly {
          nodes {
            heroAssembly {
              heroTitleEnglish
              heroDescriptionEnglish {
                heroDescriptionEnglish
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className={`section-hero`}>
        <Row>
          <Col lg={7} className={`order-last order-lg-first`}>
            <div className={`hero-copy`}>
              <h1 className={`hero-title ${ProgramsStyle.libraryHeroTitle}`}>
                {
                  data.allContentfulLibraryMembershipPageAssembly.nodes[0]
                    .heroAssembly.heroTitleEnglish
                }
              </h1>
              <p className={`hero-description`}>
                {
                  data.allContentfulLibraryMembershipPageAssembly.nodes[0]
                    .heroAssembly.heroDescriptionEnglish.heroDescriptionEnglish
                }
              </p>
              <div>
                <a href='tel:03180225010' className={`cta-btn-shadow`}>
                  Call Us <PhoneSVG className={`cta-phone-icon`} />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={5} className={`order-first order-lg-last`}>
            <HeroSVG className={`hero-svg-height`} />
          </Col>
        </Row>
      </section>
    )}
  />
);

export default HeroSection;
