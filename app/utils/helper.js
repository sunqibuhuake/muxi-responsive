/**
 * Created by sunqi on 2018/6/19.
 */
export default {
  changeLogoColor: () => {
    let colors = ['#1c9844', '#1a99fc', '#df272e', '#824d1f', '#f8c72e'];
    let rand = Math.floor(Math.random() * colors.length);
    $('header svg path').css('fill', colors[rand]);
    console.log('chang color')
  },
  getResSpan: (c, l) => {
    if (l == c) {
      return 24
    } else {
      return 0;
    }
  },
  getModeByLocation(pathname) {
    if (pathname == '/' || pathname.match('projects')) {
      return 'projects'
    }
    if (pathname.match('news')) {
      return 'news'
    }
    return ''
  }
}
