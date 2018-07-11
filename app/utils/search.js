/**
 * Created by sunqi on 2018/6/13.
 */
export default function (list, key) {

  const arr = key.split(' ').map(k => {
    if (k) {
      return k;
    }
  });

  const result = [];

  list.forEach(p => {
    const str = comb(p);
    let flag = true;
    arr.forEach((k) => {
      if (flag) {
        if (testIt(str,k)) {
          // do nothing
        } else {
          flag = false
        }
      }
    })
    if (flag) {
      result.push(p)
    }

  })

  return result;

}

function comb(p) {

  const filterHelper = {
    images: true,
    _id: true
  }
  let str = '';
  for (let prop in p) {
    if (!filterHelper[prop]) {
      str += p[prop]
    }
  }

  return str.toLowerCase();
}



function testIt(str, k) {
  return str.match(k.toLowerCase());
}
