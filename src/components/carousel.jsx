import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css'

function TheCarousel () {
  return (
  <Carousel autoplay style={{
    textAlign: 'center',
    lineHeight: '720px', //this needs to be changed to a percentage
    background: '#364d79',
    overflow: 'hidden',
    // minHeight: 300,
    // width: 300
    }}>
      <div>
        <h3>1</h3>
        {/* pic of me? */}
      </div>
      <div>
        <h3>2</h3>
        {/* highlight CSE app */}
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Carousel>
  );

}



export default TheCarousel;
