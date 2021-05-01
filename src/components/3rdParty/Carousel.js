/* eslint-disable */
/* Source: https://bit.dev/limio/landing/carousel/~code#index.js */
import React from 'react';

export class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image_index: 0,
    };
  }

  // componentDidMount() {
  //   this.interval = setInterval(() => this.handleNext(), this.props.imageChangeInterval);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  handleNext() {
    const { image_index } = this.state;
    const new_index = image_index === (this.props.images.length - 1) ? 0 : image_index + 1;
    this.setState({ image_index: new_index });
    this.props.callback(this.props.images[new_index].filter);
  }

  handleBack() {
    const { image_index } = this.state;
    const new_index = image_index === 0 ? this.props.images.length - 1 : image_index - 1;
    this.setState({ image_index: new_index });
    this.props.callback(this.props.images[new_index].filter);
  }

  render() {
    return (
      <div className="CarouselContainer">
        <div className="CarouselArrow ArrowBack" onClick={() => this.handleBack()} style={{ height: `${this.props.height * 100}px`, lineHeight: `${this.props.height * 100}px` }}>
          <div className="CarouselArrowIcon"><span className="chevron left" /></div>
        </div>
        <div className="CarouselImage" style={{ height: `${this.props.height * 100}px` }}>
          {
            this.props.images.map((image, index) => (
              <div key={JSON.stringify(image) + index} className={`CarouselImageContainer ${index === this.state.image_index ? 'CarouselImageCurrent' : ''} ${image.filter}`} style={{ backgroundImage: `url(${image.url})` }}>
                {
                  image.headline
                  && (
                    <div className="CarouselImageLabel">
                      <h2>{image.headline}</h2>
                    </div>
                  )
                }
                {
                  image.subline
                  && (
                    <div className="CarouselImageSubline">
                      <h4>{image.subline}</h4>
                    </div>
                  )
                }
                {
                  (image.headline || image.subline)
                  && <div className="CarouselImageTextOverlay" />
                }
              </div>
            ))
          }
        </div>
        <div className="CarouselSteps">
          {
            this.props.images.map((image, index) => (
              <div key={JSON.stringify(image) + index} className={`CarouselStep${index === this.state.image_index ? ' CarouselCurrentStep' : ''}`} onClick={() => this.setState({ image_index: index })}>
                &#x25CF;
              </div>
            ))
          }
        </div>
        <div className="CarouselArrow ArrowNext" onClick={() => this.handleNext()} style={{ height: `${this.props.height * 100}px`, lineHeight: `${this.props.height * 100}px` }}>
          <div className="CarouselArrowIcon"><span className="chevron right" /></div>
        </div>
      </div>
    );
  }

  // static defaultProps = {
  //   imageChangeInterval: 5000,
  //   height: 3.5,
  //   images: [
  //     {
  //       headline: 'London',
  //       subline: 'Soho',
  //       url: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/07/10/11/Future-London.jpg'
  //     },
  //     {
  //       headline: 'Paris',
  //       subline: 'Marais',
  //       url: 'https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/paris-cityscape-overview-guide-xlarge.jpg'
  //     },
  //     {
  //       headline: 'Tokyo',
  //       subline: 'Chiyoda-ku',
  //       url: 'https://www.tokyoweekender.com/wp-content/uploads/2019/06/Tokyo-Tower-Summer-Tokyo-Weekender.jpg'
  //     },
  //     {
  //       headline: 'New York',
  //       subline: 'Upper West Side',
  //       url: 'https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-05/9dbea438bcd305129064e4a048cc6b52.jpeg?itok=d3L2A_Rd'
  //     }
  //   ]
  // };
}
