import React from 'react';

import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Carousel from '../client/components/carousel.jsx';

configure({ adapter: new Adapter() });

//   const carouselProps = {
//   photoArray: [{}],
//   displayCarousel: true,
//   startingPhoto: 0,
//   closeCarousel: () => {},
//   closeSymbol: '&#x2715',
// };

describe('Carousel', () => {
  it('renders the carousel component', () => {
    const carouselProps = {
      photoArray: [{
        Image_id: 1,
        Image_url: 'https://restaurant-photo-carousel.s3.us-east-2.amazonaws.com/img0042.jpeg',
      }],
      displayCarousel: true,
      startingPhoto: 0,
      closeCarousel: () => {},
      closeSymbol: '&#x2715',
    };
    const carousel = shallow(<Carousel {...carouselProps}/>);
    expect(carousel.find('div').exists()).toEqual(true);
  });
  it('should return an empty wrapper if displayCarousel is false', () => {
    const carouselProps = {
      photoArray: [{
        Image_id: 1,
        Image_url: 'https://restaurant-photo-carousel.s3.us-east-2.amazonaws.com/img0042.jpeg',
      }],
      displayCarousel: false,
      startingPhoto: 0,
      closeCarousel: () => { },
      closeSymbol: '&#x2715',
    };
    const noDisplay = shallow(<Carousel {...carouselProps} />);
    expect(noDisplay.exists('div')).toEqual(false);
  });
});
