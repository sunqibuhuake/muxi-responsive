import React from 'react'
import api from '../../utils/api'
export default function ({img}) {
  const styles = {
    root: {
      width: 160,
      position: 'fixed',
      right: '15px',
      bottom: '15px',
      zIndex: 999
    }
  }
  return (

    <img style={styles.root} src={api.public + img}/>
  )
}
