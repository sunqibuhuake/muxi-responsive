/**
 * Created by sunqi on 2018/6/13.
 */
import React from 'react'
import DoubleImage from '../ImageBox/DoubleImage'
import SingleImage from '../ImageBox/SingleImage'
import {Row} from 'antd'
export default function(props) {
  let images = [];
  try{
    images = JSON.parse(props.images).arr;
  } catch(e) {
    console.error(e)
  }

  function getImageCount() {
    let hasImages = false;
    images.forEach(img => {
  
      if (img.type == 'full') {
        if (img.images && img.images[0] && img.images[0].name) {
          hasImages = true;
        }
      }

      if (img.type == 'half') {
        if (img.images && img.images[0] && images[1] && img.images[0].name && img.images[1].name) {
          hasImages = true
        }
      }
    })
    return hasImages;
  }

  const flag = getImageCount();
  if (!flag) {
    return null;
  }

  return (
    <Row style={{padding: '6px 0 12px'}}>
      {images.map(img => {

        if (img.images.length == 0) {
          return null;
        }

        if (img.type == 'full' || img.images.length == 1) {

          if (img.images[0].name) {
            return (
              <SingleImage
                {...img}
                key={Math.random()}
              ></SingleImage>
            )
          }

        }
        if (img.type == 'half') {

          if (img.images && img.images[0] && images[1] && img.images[0].name && img.images[1].name) {
            return (
              <DoubleImage
                {...img}
                key={Math.random()}
              ></DoubleImage>
            )
          }

        }
      })}
    </Row>
  )
}
