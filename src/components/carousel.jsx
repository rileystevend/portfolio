import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css'

function TheCarousel () {
  return (
  <Carousel autoplay style={{
    textAlign: 'center',
    height: '160px',
    lineHeight: '160px',
    background: '#364d79',
    overflow: 'hidden',
    // minHeight: 300,
    // width: 300
    }}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
  );

}



export default TheCarousel;
