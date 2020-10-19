/*
* 格式化日期
* @params {
*     time: 时间戳，或者日期格式
*     format: 转换后的格式 yyyy-mm-dd hh:MM:ss
* }
* example: dateFormat(new Date(), 'yyyy-mm-dd hh:MM:ss');
*/
export const dateFormat = function dateFormat (time, format) {
    let times = new Date(time);
    let year = times.getFullYear(),
        month = (times.getMonth() + 1) < 10 ? '0' + (times.getMonth() + 1) : times.getMonth() + 1,
        date = times.getDate() < 10 ? '0' +  times.getDate() : times.getDate(),
        hour = times.getHours() < 10 ? '0' + times.getHours() : times.getHours(),
        min = times.getMinutes() < 10 ? '0' + times.getMinutes() : times.getMinutes(),
        second = times.getSeconds() < 10 ? '0' + times.getSeconds() : times.getSeconds();
    return format = format.replace(/^yyyy(.{1})mm(.{1})dd(\s{1})hh(.{1})MM(.{1})ss$/g, year + '$1' + month + '$2' + date + '$3' + hour + '$4' + min + '$5' + second);
}

/*
* 获取url参数
* @params {
*     variable: 参数名（键）
* }
* example: getQueryVariable('user_id');
*/
export const getQueryParams = function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}
