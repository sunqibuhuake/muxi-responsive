export default function(str) {
    let htm = str.replace(/\r\n/g, '<br/>');
    htm = htm.replace(/\n/g, '<br/>'); //IE7-8
    htm = htm.replace(/\s/g, ' '); //空格处理
    return htm
}