/**
 * Created by sunqi on 2018/5/27.
 */
import React from 'react'

export default function({location, account}) {


  const styles = {
    seller: {
      width: '100%',
      marginTop: 16
    },
    store: {
      width: '90%',
      marginTop: 12
    }
  };

  let logo = null;
  if (account.ready) {

    logo = (
      <img style={styles.store} src={account.data.store.store_logo}/>
    )
    if (location.pathname == '/land') {
      logo = (
        <img style={styles.seller} src={account.data.seller.seller_logo}/>
      )
    }
    if (location.pathname == '/' ||  location.pathname == '/login') {
      logo = '';
    }

  } else {
    logo = ''
  }
  return (
    <span>{logo}</span>
  )
}
