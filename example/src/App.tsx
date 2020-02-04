import React, { useRef, useState } from 'react';

import PietileCarousel from 'pietile-carousel';

export function App(): JSX.Element {
  const carousel = useRef<PietileCarousel>(null);
  const [index, setIndex] = useState(0);

  const carouselStyle = {
    flex: 1,
    height: '100%',
    margin: '0 16px',
  };

  const itemStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <div className="app">
      <h1 className="header">Pietile Carousel</h1>

      <div className="carousel-container">
        <button
          className="button"
          type="button"
          onClick={(): void => {
            carousel.current?.moveLeft();
          }}
        >
          {'<'}
        </button>

        <PietileCarousel
          ref={carousel}
          style={carouselStyle}
          count={3}
          margin={24}
          draggable
          autoplayInterval={3000}
          onChange={(newIndex: number): void => {
            setIndex(newIndex);
          }}
        >
          <a draggable={false} target="_blank" rel="noopener noreferrer" href="https://google.com">
            <div style={{ ...itemStyle, backgroundColor: 'red' }} />
          </a>
          <div style={{ ...itemStyle, backgroundColor: 'orange' }} />
          <div style={{ ...itemStyle, backgroundColor: 'yellow' }} />
          <div style={{ ...itemStyle, backgroundColor: 'green' }} />
          <div style={{ ...itemStyle, backgroundColor: 'blue' }} />
          <div style={{ ...itemStyle, backgroundColor: 'indigo' }} />
          <div style={{ ...itemStyle, backgroundColor: 'violet' }} />
        </PietileCarousel>

        <button
          className="button"
          type="button"
          onClick={(): void => {
            carousel.current?.moveRight();
          }}
        >
          {'>'}
        </button>
      </div>

      <div className="index">{index}</div>
    </div>
  );
}
