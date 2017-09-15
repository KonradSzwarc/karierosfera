import React, { Component } from 'react';
import HeroCarousel from './HeroCarousel/HeroCarousel';
import About from './About/About';
import { Container } from '../../utils/constants/styledComponents';

export default class Home extends Component {
  changeRoute = (route) => {
    this.props.history.push(route);
  }

  render() {
    return (
      <div>
        <HeroCarousel changeRoute={this.changeRoute} />
        <Container>
          <About />
        </Container>
      </div>
    );
  }
}