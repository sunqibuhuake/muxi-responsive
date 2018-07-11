/**
 * Created by sunqi on 2018/6/13.
 */

export default function sort(list, order, lang) {

  if (list.length < 2) {
    return list;
  }
  if (order == 'date') {
    return sortByDate(list)
  } else {
    return sortByAlpha(list, order +'_' + lang, lang)
  }
}

function sortByDate(list) {
  // todo 先根据语言将标题排序
  //const arr = list.sort((a,b) => {
  //  return a[key].localeCompare(b[key],lang);
  //})

  return list.sort((a,b) => {
    return b.start - a.start
  })
}

function sortByAlpha(list, key,lang) {

  const arr = list.sort((a,b) => {
    return a[key].localeCompare(b[key],lang);
  })

  arr.forEach(a => console.log(a[key]));
  return arr;
}
