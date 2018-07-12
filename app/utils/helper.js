/**
 * Created by sunqi on 2018/6/19.
 */
export default {
  changeLogoColor: () => {
    let colors = [
      '#00ffff',
      '#f5f5dc',
      '#0000ff',
      '#a52a2a',
      '#00ffff',
      '#00008b',
      '#008b8b',
      '#006400',
      '#bdb76b',
      '#8b008b',
      '#556b2f',
      '#ff8c00',
      '#9932cc',
      '#8b0000',
      '#e9967a',
      '#9400d3',
      '#ff00ff',
      '#ffd700',
      '#008000',
      '#4b0082',
      '#f0e68c',
      '#add8e6',
      '#e0ffff',
      '#90ee90',
      '#ffffe0',
      '#00ff00',
      '#ff00ff',
      '#800000',
      '#000080',
      '#808000',
      '#ffa500',
      '#800080',
      '#800080',
      '#ff0000',
      '#ffffff',
      '#ffff00'
    ];
    let rand = Math.floor(Math.random() * colors.length);
    $('.headerContainer svg path').css('fill', colors[rand]);
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
