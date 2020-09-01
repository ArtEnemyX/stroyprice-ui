!function(e,t){"use strict";var n;if("object"==typeof exports){try{n=require("moment")}catch(e){}module.exports=t(n)}else"function"==typeof define&&define.amd?define(function(e){try{n=e("moment")}catch(e){}return t(n)}):e.Pikaday=t(e.moment)}(this,function(n){"use strict";function i(e,t,n,i){h?e.addEventListener(t,n,!!i):e.attachEvent("on"+t,n)}function a(e,t,n,i){h?e.removeEventListener(t,n,!!i):e.detachEvent("on"+t,n)}function o(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")}function y(e){return/Array/.test(Object.prototype.toString.call(e))}function L(e){return/Date/.test(Object.prototype.toString.call(e))&&!isNaN(e.getTime())}function B(e,t){return[31,(n=e,n%4==0&&n%100!=0||n%400==0?29:28),31,30,31,30,31,31,30,31,30,31][t];var n}function P(e){L(e)&&e.setHours(0,0,0,0)}function V(e,t){var n=new Date(e.getTime()),i=new Date(t.getTime());return P(n),P(i),n.getTime()===i.getTime()}function s(e,t,n){var i;d.createEvent?((i=d.createEvent("HTMLEvents")).initEvent(t,!0,!1),i=u(i,n),e.dispatchEvent(i)):d.createEventObject&&(i=d.createEventObject(),i=u(i,n),e.fireEvent("on"+t,i))}function t(e){return e.month<0&&(e.year-=Math.ceil(Math.abs(e.month)/12),e.month+=12),11<e.month&&(e.year+=Math.floor(Math.abs(e.month)/12),e.month-=12),e}function r(e,t,n){for(t+=e.firstDay;7<=t;)t-=7;return n?e.i18n.weekdaysShort[t]:e.i18n.weekdays[t]}function J(e){var t=[],n="false";if(e.isEmpty){if(!e.showDaysInNextAndPreviousMonths)return'<td class="is-empty"></td>';t.push("is-outside-current-month"),e.enableSelectionDaysInNextAndPreviousMonths||t.push("is-selection-disabled")}return e.isDisabled&&t.push("is-disabled"),e.isToday&&t.push("is-today"),e.isSelected&&(t.push("is-selected"),n="true"),e.hasEvent&&t.push("has-event"),e.isInRange&&t.push("is-inrange"),e.isStartRange&&t.push("is-startrange"),e.isEndRange&&t.push("is-endrange"),'<td data-day="'+e.day+'" class="'+t.join(" ")+'" aria-selected="'+n+'"><button class="pika-button pika-day" type="button" data-pika-year="'+e.year+'" data-pika-month="'+e.month+'" data-pika-day="'+e.day+'">'+e.day+"</button></td>"}function g(e,t,n,i,a,s){var o,r,l,h,d,u=e._o,c=n===u.minYear,f=n===u.maxYear,m='<div id="'+s+'" class="pika-title" role="heading" aria-live="assertive">',g=!0,p=!0;for(l=[],o=0;o<12;o++)l.push('<option value="'+(n===a?o-t:12+o-t)+'"'+(o===i?' selected="selected"':"")+(c&&o<u.minMonth||f&&o>u.maxMonth?'disabled="disabled"':"")+">"+u.i18n.months[o]+"</option>");for(h='<div class="pika-label">'+u.i18n.months[i]+'<select class="pika-select pika-select-month" tabindex="-1">'+l.join("")+"</select></div>",r=y(u.yearRange)?(o=u.yearRange[0],u.yearRange[1]+1):(o=n-u.yearRange,1+n+u.yearRange),l=[];o<r&&o<=u.maxYear;o++)o>=u.minYear&&l.push('<option value="'+o+'"'+(o===n?' selected="selected"':"")+">"+o+"</option>");return d='<div class="pika-label">'+n+u.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+l.join("")+"</select></div>",u.showMonthAfterYear?m+=d+h:m+=h+d,c&&(0===i||u.minMonth>=i)&&(g=!1),f&&(11===i||u.maxMonth<=i)&&(p=!1),0===t&&(m+='<button class="pika-prev'+(g?"":" is-disabled")+'" type="button">'+u.i18n.previousMonth+"</button>"),t===e._o.numberOfMonths-1&&(m+='<button class="pika-next'+(p?"":" is-disabled")+'" type="button">'+u.i18n.nextMonth+"</button>"),m+"</div>"}function K(e,t,n){return'<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="'+n+'">'+function(e){var t,n=[];for(e.showWeekNumber&&n.push("<th></th>"),t=0;t<7;t++)n.push('<th scope="col"><abbr title="'+r(e,t)+'">'+r(e,t,!0)+"</abbr></th>");return"<thead><tr>"+(e.isRTL?n.reverse():n).join("")+"</tr></thead>"}(e)+("<tbody>"+t.join("")+"</tbody>")+"</table>"}function p(e,t,n,i,a){a=a||1;for(var s='<td><select class="pika-select '+n+'">',o=0;o<e;o+=a)s+='<option value="'+o+'" '+(o==t?"selected":"")+">"+i(o)+"</option>";return s+="</select></td>"}function e(e){var a=this,s=a.config(e);a._onMouseDown=function(e){if(a._v){var t=(e=e||window.event).target||e.srcElement;if(t){if(!o(t,"is-disabled"))if(!o(t,"pika-button")||o(t,"is-empty")||o(t.parentNode,"is-disabled"))o(t,"pika-prev")?a.prevMonth():o(t,"pika-next")&&a.nextMonth();else{var n=new Date(t.getAttribute("data-pika-year"),t.getAttribute("data-pika-month"),t.getAttribute("data-pika-day")),i=a._d||s.defaultDate;i&&L(i)&&s.showTime&&(n.setHours(i.getHours()),n.setMinutes(i.getMinutes()),s.showSeconds&&n.setSeconds(i.getSeconds())),a.setDate(n),s.bound&&D(function(){s.autoClose&&a.hide(),s.blurFieldOnSelect&&s.field&&s.field.blur()},100)}if(o(t,"pika-select"))a._c=!0;else{if(!e.preventDefault)return e.returnValue=!1;e.preventDefault()}}}},a._onChange=function(e){var t=(e=e||window.event).target||e.srcElement;t&&(o(t,"pika-select-month")?a.gotoMonth(t.value):o(t,"pika-select-year")?a.gotoYear(t.value):o(t,"pika-select-hour")?a.setTime(t.value):o(t,"pika-select-minute")?a.setTime(null,t.value):o(t,"pika-select-second")&&a.setTime(null,null,t.value))},a._onKeyChange=function(e){if(e=e||window.event,a.isVisible())switch(e.keyCode){case 13:case 27:s.field&&s.field.blur();break;case 37:e.preventDefault(),a.adjustDate("subtract",1);break;case 38:a.adjustDate("subtract",7);break;case 39:a.adjustDate("add",1);break;case 40:a.adjustDate("add",7)}},a._onInputChange=function(e){var t;e.firedBy!==a&&(t=s.parse?s.parse(s.field.value,s.format||s.inputFormats):l?(t=n(s.field.value,s.inputFormats,s.formatStrict))&&t.isValid()?t.toDate():null:new Date(Date.parse(s.field.value)),L(t)&&a.setDate(t),a._v||a.show())},a._onInputFocus=function(){a.show()},a._onInputClick=function(){a.show()},a._onInputBlur=function(){var e=d.activeElement;do{if(o(e,"pika-single"))return}while(e=e.parentNode);s.autoClose&&!a._c&&(a._b=D(function(){a.hide()},50)),a._c=!1},a._onClick=function(e){var t=(e=e||window.event).target||e.srcElement,n=t;if(t){!h&&o(t,"pika-select")&&(t.onchange||(t.setAttribute("onchange","return;"),i(t,"change",a._onChange)));do{if(o(n,"pika-single")||n===s.trigger||s.showTime&&o(n,"pika-time-container"))return}while(n=n.parentNode);a._v&&t!==s.trigger&&n!==s.trigger&&a.hide()}},a.el=d.createElement("div"),a.el.className="pika-single"+(s.isRTL?" is-rtl":"")+(s.theme?" "+s.theme:""),i(a.el,"mousedown",a._onMouseDown,!0),i(a.el,"touchend",a._onMouseDown,!0),i(a.el,"change",a._onChange),s.keyboardInput&&i(d,"keydown",a._onKeyChange),s.field&&(s.container?s.container.appendChild(a.el):s.bound?d.body.appendChild(a.el):s.field.parentNode.insertBefore(a.el,s.field.nextSibling),i(s.field,"change",a._onInputChange),s.defaultDate||(l&&s.field.value?s.defaultDate=n(s.field.value,s.inputFormats).toDate():s.defaultDate=new Date(Date.parse(s.field.value)),s.setDefaultDate=!0));var t=s.defaultDate;L(t)?s.setDefaultDate?a.setDate(t,!0):a.gotoDate(t):a.gotoDate(new Date),s.bound?(this.hide(),a.el.className+=" is-bound",i(s.trigger,"click",a._onInputClick),i(s.trigger,"focus",a._onInputFocus),i(s.trigger,"blur",a._onInputBlur)):this.show()}var l="function"==typeof n,h=!!window.addEventListener,d=window.document,D=window.setTimeout,u=function(e,t,n){var i,a;for(i in t)(a=void 0!==e[i])&&"object"==typeof t[i]&&null!==t[i]&&void 0===t[i].nodeName?L(t[i])?n&&(e[i]=new Date(t[i].getTime())):y(t[i])?n&&(e[i]=t[i].slice(0)):e[i]=u({},t[i],n):!n&&a||(e[i]=t[i]);return e},c={field:null,bound:void 0,ariaLabel:"Use the arrow keys to pick a date",position:"bottom left",reposition:!0,format:null,inputFormats:null,toString:null,parse:null,defaultDate:null,setDefaultDate:!1,firstDay:0,formatStrict:!1,minDate:null,maxDate:null,yearRange:10,showWeekNumber:!1,pickWholeWeek:!1,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,yearSuffix:"",showMonthAfterYear:!1,showDaysInNextAndPreviousMonths:!1,enableSelectionDaysInNextAndPreviousMonths:!1,numberOfMonths:1,showTime:!0,showMinutes:!0,showSeconds:!1,use24hour:!1,incrementHourBy:1,incrementMinuteBy:1,incrementSecondBy:1,timeLabel:null,autoClose:!0,mainCalendar:"left",container:void 0,blurFieldOnSelect:!0,i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],midnight:"Midnight",noon:"Noon"},theme:null,events:[],onSelect:null,onOpen:null,onClose:null,onDraw:null,keyboardInput:!0};return e.prototype={config:function(e){this._o||(this._o=u({},c,!0));var t=u(this._o,e,!0);t.isRTL=!!t.isRTL,t.autoClose=!!t.autoClose,t.field=t.field&&t.field.nodeName?t.field:null,t.theme="string"==typeof t.theme&&t.theme?t.theme:null,t.bound=!!(void 0!==t.bound?t.field&&t.bound:t.field),t.trigger=t.trigger&&t.trigger.nodeName?t.trigger:t.field,t.disableWeekends=!!t.disableWeekends,t.disableDayFn="function"==typeof t.disableDayFn?t.disableDayFn:null;var n=parseInt(t.numberOfMonths,10)||1;if(t.numberOfMonths=4<n?4:n,L(t.minDate)||(t.minDate=!1),L(t.maxDate)||(t.maxDate=!1),t.minDate&&t.maxDate&&t.maxDate<t.minDate&&(t.maxDate=t.minDate=!1),t.minDate&&this.setMinDate(t.minDate),t.maxDate&&this.setMaxDate(t.maxDate),y(t.yearRange)){var i=(new Date).getFullYear()-10;t.yearRange[0]=parseInt(t.yearRange[0],10)||i,t.yearRange[1]=parseInt(t.yearRange[1],10)||i}else t.yearRange=Math.abs(parseInt(t.yearRange,10))||c.yearRange,100<t.yearRange&&(t.yearRange=100);return null===t.format&&(t.format="YYYY-MM-DD",t.showTime&&(t.format+=" HH:mm:ss")),t.inputFormats||(t.inputFormats=t.format),t},toString:function(e){return e=e||this._o.format,L(this._d)?this._o.toString?this._o.toString(this._d,e):l?n(this._d).format(e):this._o.showTime?this._d.toString():this._d.toDateString():""},getMoment:function(){return l?n(this._d):null},setMoment:function(e,t){l&&n.isMoment(e)&&this.setDate(e.toDate(),t)},getDate:function(){return L(this._d)?new Date(this._d.getTime()):null},setTime:function(e,t,n){this._d||(this._d=new Date,this._d.setHours(0,0,0,0)),e&&this._d.setHours(e),t&&this._d.setMinutes(t),n&&this._d.setSeconds(n),this.setDate(this._d)},setDate:function(e,t){if(!e)return this._d=null,this._o.field&&(this._o.field.value="",s(this._o.field,"change",{firedBy:this})),this.draw();if("string"==typeof e&&(e=new Date(Date.parse(e))),L(e)){var n=this._o.minDate,i=this._o.maxDate;L(n)&&e<n?e=n:L(i)&&i<e&&(e=i),this._d=new Date(e.getTime()),this._o.showTime&&!this._o.showSeconds?this._d.setSeconds(0):this._o.showTime||P(this._d),this.gotoDate(this._d),this._o.field&&(this._o.field.value=this.toString(),s(this._o.field,"change",{firedBy:this})),t||"function"!=typeof this._o.onSelect||this._o.onSelect.call(this,this.getDate())}},gotoDate:function(e){var t=!0;if(L(e)){if(this.calendars){var n=new Date(this.calendars[0].year,this.calendars[0].month,1),i=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),a=e.getTime();i.setMonth(i.getMonth()+1),i.setDate(i.getDate()-1),t=a<n.getTime()||i.getTime()<a}t&&(this.calendars=[{month:e.getMonth(),year:e.getFullYear(),hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds()}],"right"===this._o.mainCalendar&&(this.calendars[0].month+=1-this._o.numberOfMonths)),this.adjustCalendars()}},adjustDate:function(e,t){var n,i=this.getDate()||new Date,a=24*parseInt(t)*60*60*1e3;"add"===e?n=new Date(i.valueOf()+a):"subtract"===e&&(n=new Date(i.valueOf()-a)),this.setDate(n)},adjustCalendars:function(){this.calendars[0]=t(this.calendars[0]);for(var e=1;e<this._o.numberOfMonths;e++)this.calendars[e]=t({month:this.calendars[0].month+e,year:this.calendars[0].year});this.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(e){isNaN(e)||(this.calendars[0].month=parseInt(e,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},gotoYear:function(e){isNaN(e)||(this.calendars[0].year=parseInt(e,10),this.adjustCalendars())},setMinDate:function(e){e instanceof Date?(this._o.showTime||P(e),this._o.minDate=e,this._o.minYear=e.getFullYear(),this._o.minMonth=e.getMonth()):(this._o.minDate=c.minDate,this._o.minYear=c.minYear,this._o.minMonth=c.minMonth,this._o.startRange=c.startRange),this.draw()},setMaxDate:function(e){e instanceof Date?(this._o.showTime||P(e),this._o.maxDate=e,this._o.maxYear=e.getFullYear(),this._o.maxMonth=e.getMonth()):(this._o.maxDate=c.maxDate,this._o.maxYear=c.maxYear,this._o.maxMonth=c.maxMonth,this._o.endRange=c.endRange),this.draw()},setStartRange:function(e){this._o.startRange=e},setEndRange:function(e){this._o.endRange=e},draw:function(e){if(this._v||e){var t,n,i,a,s,o,r=this._o,l=r.minYear,h=r.maxYear,d=r.minMonth,u=r.maxMonth,c="";this._y<=l&&(this._y=l,!isNaN(d)&&this._m<d&&(this._m=d)),this._y>=h&&(this._y=h,!isNaN(u)&&this._m>u&&(this._m=u)),t="pika-title-"+Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,2);for(var f=0;f<r.numberOfMonths;f++)c+='<div class="pika-lendar">'+g(this,f,this.calendars[f].year,this.calendars[f].month,this.calendars[0].year,t)+this.render(this.calendars[f].year,this.calendars[f].month,t)+"</div>";if(r.showTime){var m=this._d||this._o.defaultDate;c+='<div class="pika-time-container">'+(n=m&&L(m)?m.getHours():0,i=m&&L(m)?m.getMinutes():0,a=m&&L(m)?m.getSeconds():0,o='<table cellpadding="0" cellspacing="0" class="pika-time"><tbody><tr>'+(null!==(s=r).timeLabel?'<td class="pika-time-label">'+s.timeLabel+"</td>":"")+p(24,n,"pika-select-hour",function(e){if(s.use24hour)return e;var t=e%12+(e<12?" AM":" PM");return"0 AM"==t?s.i18n.midnight:"0 PM"==t?s.i18n.noon:t},s.incrementHourBy),s.showMinutes&&(o+="<td>:</td>"+p(60,i,"pika-select-minute",function(e){return e<10?"0"+e:e},s.incrementMinuteBy)),s.showSeconds&&(o+="<td>:</td>"+p(60,a,"pika-select-second",function(e){return e<10?"0"+e:e},s.incrementSecondBy)),o+"</tr></tbody></table>")+"</div>"}this.el.innerHTML=c,r.bound&&"hidden"!==r.field.type&&D(function(){r.trigger.focus()},1),"function"==typeof this._o.onDraw&&this._o.onDraw(this),r.bound&&r.field.setAttribute("aria-label",r.ariaLabel)}},adjustPosition:function(){var e,t,n,i,a,s,o,r,l,h;if(!this._o.container){if(this.el.style.position="absolute",t=e=this._o.trigger,n=this.el.offsetWidth,i=this.el.offsetHeight,a=window.innerWidth||d.documentElement.clientWidth,s=window.innerHeight||d.documentElement.clientHeight,o=window.pageYOffset||d.body.scrollTop||d.documentElement.scrollTop,"function"==typeof e.getBoundingClientRect)r=(h=e.getBoundingClientRect()).left+window.pageXOffset,l=h.bottom+window.pageYOffset;else for(r=t.offsetLeft,l=t.offsetTop+t.offsetHeight;t=t.offsetParent;)r+=t.offsetLeft,l+=t.offsetTop;(this._o.reposition&&a<r+n||-1<this._o.position.indexOf("right")&&0<r-n+e.offsetWidth)&&(r=r-n+e.offsetWidth),(this._o.reposition&&s+o<l+i||-1<this._o.position.indexOf("top")&&0<l-i-e.offsetHeight)&&(l=l-i-e.offsetHeight),this.el.style.left=r+"px",this.el.style.top=l+"px"}},render:function(e,t,n){var i=this._o,a=new Date,s=B(e,t),o=new Date(e,t,1).getDay(),r=[],l=[];i.showTime||P(a),0<i.firstDay&&(o-=i.firstDay)<0&&(o+=7);for(var h=0===t?11:t-1,d=11===t?0:t+1,u=0===t?e-1:e,c=11===t?e+1:e,f=B(u,h),m=s+o,g=m;7<g;)g-=7;m+=7-g;for(var p,y,D,v,_,b,w,M=i.minDate?new Date(i.minDate.getFullYear(),i.minDate.getMonth(),i.minDate.getDate()):null,k=i.maxDate?new Date(i.maxDate.getFullYear(),i.maxDate.getMonth(),i.maxDate.getDate()):null,x=!1,S=0,R=0;S<m;S++){var T=new Date(e,t,S-o+1),N=!!L(this._d)&&V(T,this._d),C=V(T,a),I=-1!==i.events.indexOf(T.toDateString()),Y=S<o||s+o<=S,E=S-o+1,O=t,j=e,F=i.startRange&&V(i.startRange,T),A=i.endRange&&V(i.endRange,T),H=i.startRange&&i.endRange&&i.startRange<T&&T<i.endRange;Y&&(j=S<o?(E=f+E,O=h,u):(E-=s,O=d,c));var W={day:E,month:O,year:j,hasEvent:I,isSelected:N,isToday:C,isDisabled:M&&T<M||k&&k<T||i.disableWeekends&&(0===(w=T.getDay())||6===w)||i.disableDayFn&&i.disableDayFn(T),isEmpty:Y,isStartRange:F,isEndRange:A,isInRange:H,showDaysInNextAndPreviousMonths:i.showDaysInNextAndPreviousMonths,enableSelectionDaysInNextAndPreviousMonths:i.enableSelectionDaysInNextAndPreviousMonths};i.pickWholeWeek&&N&&(x=!0),l.push(J(W)),7==++R&&(i.showWeekNumber&&l.unshift((D=S-o,v=t,_=e,b=void 0,b=new Date(_,0,1),'<td class="pika-week">'+Math.ceil(((new Date(_,v,D)-b)/864e5+b.getDay()+1)/7)+"</td>")),r.push((p=l,y=i.isRTL,'<tr class="pika-row'+(i.pickWholeWeek?" pick-whole-week":"")+(x?" is-selected":"")+'">'+(y?p.reverse():p).join("")+"</tr>")),R=0,x=!(l=[]))}return K(i,r,n)},isVisible:function(){return this._v},show:function(){var e,t,n;this.isVisible()||(this._v=!0,this.draw(),e=this.el,t="is-hidden",e.className=(n=(" "+e.className+" ").replace(" "+t+" "," ")).trim?n.trim():n.replace(/^\s+|\s+$/g,""),this._o.bound&&(i(d,"click",this._onClick),this.adjustPosition()),"function"==typeof this._o.onOpen&&this._o.onOpen.call(this))},hide:function(){var e,t,n=this._v;!1!==n&&(this._o.bound&&a(d,"click",this._onClick),this.el.style.position="static",this.el.style.left="auto",this.el.style.top="auto",e=this.el,o(e,t="is-hidden")||(e.className=""===e.className?t:e.className+" "+t),this._v=!1,void 0!==n&&"function"==typeof this._o.onClose&&this._o.onClose.call(this))},destroy:function(){var e=this._o;this.hide(),a(this.el,"mousedown",this._onMouseDown,!0),a(this.el,"touchend",this._onMouseDown,!0),a(this.el,"change",this._onChange),e.keyboardInput&&a(d,"keydown",this._onKeyChange),e.field&&(a(e.field,"change",this._onInputChange),e.bound&&(a(e.trigger,"click",this._onInputClick),a(e.trigger,"focus",this._onInputFocus),a(e.trigger,"blur",this._onInputBlur))),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}},e});

window.constants = {};
window.constants.coordinates = [55.755833, 37.617778];
window.constants.color = '#009688';
window.constants.font_size = 16;
window.constants.breakpoint_xs = window.constants.font_size * 20;
window.constants.breakpoint_sm = window.constants.font_size * 48;
window.constants.breakpoint_md = window.constants.font_size * 62;
window.constants.breakpoint_lg = window.constants.font_size * 75;
window.constants.breakpoint_hg = window.constants.font_size * 88;

window.get_token = function () {
    return {
        'key': 'token',
        'value': document.querySelector('meta[name=access-token]').content
    };
};
window.random_number = function (min, max) {
    min = min || 0;
    max = max || 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
window.unique_id = function (mixin) {
    var phrases = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliet', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu'];

    mixin = mixin || phrases[window.random_number(0, phrases.length - 1)];
    return mixin.trim().toLowerCase() + '-' + new Date().getTime() + '-' + window.random_number(10, 100);
};
window.parse_coordinates = function (coordinates) {
    var latitude, longitude;

    if (!coordinates) {
        return false;
    }
    if (typeof coordinates === 'string') {
        var split = coordinates.split(',');

        if (split[1] == undefined) split = coordinates.split(' ');
        latitude = split[0];
        longitude = split[1];
    } else if (typeof coordinates === 'object' && coordinates[0] && coordinates[1]) {
        latitude = coordinates[0];
        longitude = coordinates[1];
    } else {
        return false;
    }
    latitude = parseFloat(latitude);
    longitude = parseFloat(longitude);
    if (!isNaN(latitude) && !isNaN(longitude)) {
        return [latitude, longitude];
    } else {
        return false;
    }
};
window.parse_json = function (string) {
    try {
        return JSON.parse(string);
    } catch (e) {
        return {};
    }
};
window.trigger_event = function (event_name, params) {
    var tag_name = this['nodeName'];

    if (this instanceof Document) tag_name = 'DOCUMENT';
    if (!tag_name && this instanceof Window) tag_name = 'WINDOW';
    if (!event_name) {
        console.warn(tag_name + '.trigger_event', 'name is undefined');
        return;
    }
    params = params || null;
    if (window.CustomEvent) {
        //noinspection JSCheckFunctionSignatures,JSUnresolvedFunction
        this.dispatchEvent(new CustomEvent(event_name, {detail: params}));
    } else if (document.createEvent) {
        //noinspection JSUnresolvedFunction
        this.dispatchEvent(document.createEvent('HTMLEvents')['initEvent'](event_name, true, false, params));
    } else {
        //noinspection JSUnresolvedFunction
        this.fireEvent('on' + event_name);
    }
};
window.create_node = function (classes, tag_name, content) {
    classes = classes || '';
    if (typeof classes !== 'string' && !(classes instanceof Array)) {
        console.warn('String.create_node', 'classes is not a string or array');
        classes = '';
    }
    tag_name = tag_name || 'div';
    if (tag_name && typeof tag_name !== 'string') {
        console.warn('String.create_node', 'tag_name is not a string');
        tag_name = 'div';
    }
    content = content || '';
    var $node = document.createElement(tag_name);

    if (classes) {
        if (classes instanceof Array) {
            classes.map(function (class_name) {
                $node.classList.add(class_name);
            }, this);
        } else {
            $node.classList.add(classes);
        }
    }
    $node.innerHTML = content;
    return $node;
};
window.throttle = function (fn, threshold, scope) {
    threshold || (threshold = 250);
    var last, timer;

    return function () {
        var context = scope || this,
            now = +new Date,
            args = arguments;

        if (last && now < last + threshold) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, threshold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
};

Document.prototype.trigger_event = window.trigger_event;
Element.prototype.trigger_event = window.trigger_event;
Element.prototype.get_offset = function () {
    var box = this.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return {
        top: Math.round(top),
        left: Math.round(left)
    };
};
Element.prototype.show_loading = function () {
    if (this.node_loading) {
        return;
    }
    this.node_loading = {};
    this.classList.add('node-loading');
    this.node_loading.$spinner = window.create_node('node-loading__spinner');
    if (this.children.length > 0) {
        this.insertBefore(this.node_loading.$spinner, this.children[0]);
    } else {
        this.appendChild(this.node_loading.$spinner);
    }
};
Element.prototype.hide_loading = function () {
    this.classList.remove('node-loading');
    if (!this.node_loading) {
        this.node_loading = {};
        this.node_loading.$spinner = this.querySelector('.node-loading__spinner');
    }
    if (this.node_loading.$spinner && this.node_loading.$spinner.parentNode) {
        this.node_loading.$spinner.remove_node();
    }
    delete this.node_loading;
};
Element.prototype.detach_node = function () {
    var $parent = this.parentNode;

    if (!$parent) {
        return this;
    }
    return $parent.removeChild(this);
};
Element.prototype.insert_after = function ($node_after) {
    if (!$node_after) {
        console.warn(this.nodeName + '.insert_after', '$node_after is undefined');
        return false;
    }
    if (!($node_after instanceof Element)) {
        console.warn(this.nodeName + '.insert_after', 'is not node element');
        return false;
    }
    var $parent = $node_after.parentNode;

    if (!$parent) {
        console.warn(this.nodeName + '.insert_after', 'parentNode is undefined');
        return false;
    }
    var $sibling = $node_after.nextSibling;

    if (!$sibling) {
        console.warn(this.nodeName + '.insert_after', 'nextSibling is undefined');
        return false;
    }
    $parent.insertBefore(this, $sibling);
    return true;
};
Element.prototype.remove_node = function () {
    var $parent = this.parentNode;

    if (!$parent) {
        console.warn(this.nodeName + '.remove_node', 'parentNode is undefined');
        return false;
    }
    $parent.removeChild(this);
    return this;
};
Element.prototype.get_index = function () {
    var $parent = this.parentNode;

    if (!$parent) {
        console.warn(this.nodeName + '.get_index', 'parentNode is undefined');
        return false;
    }
    return Array.prototype.slice.call($parent.children).indexOf(this);
};
Element.prototype.get_parent = function (class_name) {
    var $node = this, parent_list = [];

    if (!class_name) {
        console.warn(this.nodeName + '.get_parent', 'class_name is undefined');
        return false;
    }
    while ($node) {
        parent_list.push($node);
        parent_list.reverse();
        $node = $node.parentNode;
        if (!$node || $node.classList === undefined) {
            break;
        }
        if ($node.classList.contains(class_name)) {
            return $node;
        }
    }
    return false;
};
Element.prototype.closest_node = function (selector) {
    if (Element.prototype.closest !== undefined) {
        return Element.prototype.closest.call(this, selector);
    } else {
        var $matches = (this.document || this.ownerDocument).querySelectorAll(selector),
            i, $element = this;
        do {
            i = $matches.length;
            while (--i >= 0 && $matches.item(i) !== $element) {
            }
        }
        while ((i < 0) && ($element = $element.parentElement));
        return $element;
    }
};
Element.prototype.get_string = function (parse_children) {
    var $node = this, object = {nodeType: $node.nodeType};

    if ($node.tagName) {
        object.tagName = $node.tagName.toLowerCase();
    } else if ($node.nodeName) {
        object.nodeName = $node.nodeName;
    }
    if ($node.nodeValue) {
        object.nodeValue = $node.nodeValue;
    }
    var attributes = $node.attributes;
    if (attributes) {
        var length = attributes.length;
        var arr = object.attributes = new Array(length);
        for (var i = 0; i < length; i++) {
            var attribute = attributes[i];
            arr[i] = [attribute.nodeName, attribute.nodeValue];
        }
    }
    var $child_nodes = $node.childNodes;
    if ($child_nodes && parse_children) {
        length = $child_nodes.length;
        arr = object.childNodes = new Array(length);
        for (i = 0; i < length; i++) {
            arr[i] = $child_nodes[i].get_string(false);
        }
    }
    return object;
};
Element.prototype.mount_instance = function (instance, emit_ready) {
    if (typeof instance !== 'object') {
        console.warn('Element.mount_instance', 'instance is not an object');
        return;
    }
    this.js_instance = instance;
    if (emit_ready) this.trigger_event('is-ready');
};
Element.prototype.unmount_instance = function (emit_ready) {
    if (typeof this.js_instance !== 'object') {
        console.warn('Element.unmount_instance', 'instance was not defined');
        return;
    }
    this.js_instance = null;
    if (emit_ready) this.trigger_event('is-destroyed');
};
Element.prototype.ready_instance = function (callback, self) {
    if (typeof callback !== 'function') {
        console.warn('Element.ready_instance', 'callback is not a function');
        return;
    }
    self = self || this;
    if (!this.js_instance) {
        this.addEventListener('is-ready', callback.bind(self, this.js_instance), false);
    } else {
        callback.call(self, this.js_instance);
    }
};
Element.prototype.get_instance = function () {
    if (this.js_instance) return this.js_instance;
    return false;
};
Element.prototype.delete_instance = function () {
    if (this.js_instance) {
        delete this.js_instance;
    }
};
Element.prototype.scroll_to_node = function (duration, $node, vertical) {
    if (duration <= 0) {
        return;
    }
    var $scrollable_node = $node || document.documentElement;
    var $element = this;
    var offset = $element.get_offset();
    var to = offset.top + $element.offsetHeight;
    var scroll_method = 'scrollTop';
    if (vertical) {
        to = offset.left + $element.offsetWidth;
        scroll_method = 'scrollLeft';
    }
    var difference = to - $scrollable_node[scroll_method];
    var perTick = difference / duration * 10;

    setTimeout(
        function () {
            $scrollable_node[scroll_method] = $scrollable_node[scroll_method] + perTick;
            if ($scrollable_node[scroll_method] === to) {
                return;
            }
            $scrollable_node.scroll_to_node(duration - 10, $scrollable_node, false);
        },
        10
    );
};
Object.defineProperty(Object.prototype, 'convert_to_string', {
    value: function () {
        var cache = [], result;

        try {
            result = JSON.stringify(
                this,
                function (key, value) {
                    if (typeof value === 'function') {
                        return '[function]';
                    } else if (value != null && typeof value === "object") {
                        if (cache.indexOf(value) !== -1) {
                            return '[circular]';
                        }
                        cache.push(value);
                    }
                    return value;
                },
                " "
            );
        } catch (e) {
            console.error('Object.convert_to_string', e);
            return '';
        }
        cache = null;
        return result;
    },
    enumerable: false
});

function Events() {
    //console.info('Events.constructor');
    this.events = {};
}

Events.prototype.on = function (event_name, listener) {
    if (typeof this.events[event_name] !== 'object') this.events[event_name] = [];
    this.events[event_name].push(listener);
};
Events.prototype.off = function (event_name, listener) {
    if (typeof this.events[event_name] !== 'object') {
        console.warn('Events.off', 'no such event', event_name);
        return;
    }
    var idx = this.events[event_name].indexOf(listener);

    if (idx > -1) {
        this.events[event_name].splice(idx, 1);
    }
};
Events.prototype.emit = function (event_name) {
    if (typeof this.events[event_name] !== 'object') {
        //console.warn('Events.emit', 'no such event', event_name);
        return;
    }
    var i, listeners, length, args = [].slice.call(arguments, 1);

    listeners = this.events[event_name].slice();
    length = listeners.length;

    for (i = 0; i < length; i++) {
        listeners[i].apply(this, args);
    }
};
Events.prototype.once = function (event_name, listener) {
    this.on(event_name, function g() {
        this.off(event_name, g);
        listener.apply(this, arguments);
    });
};

function XHR(input_options) {
    //console.info('XHR.constructor');
    this.e = new Events();
    // request-sent
    // request-success
    // request-upload-progress
    // request-errors
    // request-timeout
    // request-abort
    // response-success
    this.x = new XMLHttpRequest();
    this.options = {
        url: '/dev/null/',
        method: 'POST',
        data: {},
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        success_callback: null,
        errors_callback: null,
        progress_callback: null,
        finish_callback: null,
        postpone_time: 0
    };
    this.input_options = input_options;
    this.query = [];
    if (typeof this.input_options === 'object') {
        for (var option_key in this.options) {
            if (!this.options.hasOwnProperty(option_key)) continue;
            if (this.input_options[option_key]) this.options[option_key] = this.input_options[option_key];
        }
    }
}

XHR.prototype.on_state_change = function () {
    if (this.x.readyState !== 4) return;
    this.e.emit('request-success');
    if (this.x.status === 200) {
        this.e.emit('response-success');
        this.callback('success_callback', this.x.responseText);
    } else this.callback('errors_callback', this.x.responseText);
    this.callback('finish_callback');
};
XHR.prototype.on_upload_progress = function (e) {
    this.callback('progress_callback', e);
    this.e.emit('request-upload-progress');
};
XHR.prototype.on_errors = function () {
    this.e.emit('request-errors');
    this.callback('errors_callback', this.x.responseText);
    this.callback('finish_callback');
};
XHR.prototype.on_abort = function () {
    this.e.emit('request-abort');
    this.callback('finish_callback');
};
XHR.prototype.on_time_out = function () {
    this.e.emit('request-timeout');
    this.callback('finish_callback');
};
XHR.prototype.callback = function (callback_name) {
    if (typeof this.options[callback_name] !== 'function') {
        return;
    }
    var args = [].slice.call(arguments, 1);

    if (this.options.postpone_time > 0) {
        setTimeout(
            (function () {
                this.options[callback_name].apply(this.x, args);
            }).bind(this),
            this.options.postpone_time
        );
    } else {
        this.options[callback_name].apply(this.x, args);
    }
};
XHR.prototype.serialize = function (obj, prefix) {
    var str = [];
    for (var part in obj) {
        if (!obj.hasOwnProperty(part)) continue;
        var key = prefix ? prefix + "[" + part + "]" : part,
            val = obj[part];
        str.push((val !== null && typeof val === "object") ?
            this.serialize(val, key) :
            encodeURIComponent(key) + "=" + encodeURIComponent(val));
    }
    return str.join('&');
};
XHR.prototype.send = function () {
    /*if (window.location.origin === 'file://') {
        console.warn('XHR.send', 'Локальные запросы запрещены');
        return;
    }*/
    if (!this.options.data) this.options.data = {};
    let token = window.get_token();
    this.options.data[token['key']] = token['value'];
    this.query = this.serialize(this.options.data);
    if (this.options.method === 'GET') {
        this.options.url += (this.query.length ? '?' + this.query : '');
    }
    this.x.open(this.options.method, this.options.url, true);
    for (var header_key in this.options.headers) {
        if (!this.options.headers.hasOwnProperty(header_key)) continue;
        this.x.setRequestHeader(header_key, this.options.headers[header_key]);
    }
    if (!(this.options.data instanceof FormData)) {
        this.x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        this.options.data = this.query;
    }
    this.x['onreadystatechange'] = this.on_state_change.bind(this);
    this.x['upload']['onprogress'] = this.on_upload_progress.bind(this);
    this.x['onerror'] = this.on_errors.bind(this);
    this.x['onabort'] = this.on_abort.bind(this);
    this.x['ontimeout'] = this.on_time_out.bind(this);
    this.x['send'](this.options.data);
    this.e.emit('request-sent');
};

function Bus() {
    if (window.bus) {
        console.warn('Bus.constructor', 'Bus is already initiated');
        return {};
    }
    console.info('Bus.constructor');
    window.bus = new Events();
}

new Bus();

window.components = {};

!function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/IEMobile/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),q=function(a,b){return a.test(b)},r=function(a){var r=a||navigator.userAgent,s=r.split("[FBAN");return"undefined"!=typeof s[1]&&(r=s[0]),this.apple={phone:q(b,r),ipod:q(c,r),tablet:!q(b,r)&&q(d,r),device:q(b,r)||q(c,r)||q(d,r)},this.amazon={phone:q(g,r),tablet:!q(g,r)&&q(h,r),device:q(g,r)||q(h,r)},this.android={phone:q(g,r)||q(e,r),tablet:!q(g,r)&&!q(e,r)&&(q(h,r)||q(f,r)),device:q(g,r)||q(h,r)||q(e,r)||q(f,r)},this.windows={phone:q(i,r),tablet:q(j,r),device:q(i,r)||q(j,r)},this.other={blackberry:q(k,r),blackberry10:q(l,r),opera:q(m,r),firefox:q(o,r),chrome:q(n,r),device:q(k,r)||q(l,r)||q(m,r)||q(o,r)||q(n,r)},this.seven_inch=q(p,r),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},s=function(){var a=new r;return a.Class=r,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=r:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=s():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=s()):a.isMobile=s()}(this);

/**
 * Глобальная переменная приложения
 *
 * @class: App
 * @property {object} d — (DOM) Ссылки на часто используемые узлы
 * @property {object} h — (help) Вспомогательные функции
 * @property {object} c — (class) Классы инструментов и блоков
 * @property {object} window — Экземпляр класса, отвечающий за модальное окно
 * @property {object} xhr — Экземпляр класса, отвечающий за асинхронные запросы
 * @property {object} i — (instance) Коллекция экземпляров блоков
 *
 * @author ArtX
 */
var App = {
    d: {},
    h: {},
    c: {
        tools: {},
        blocks: {}
    },
    i: {}
};
window.onload = function () {
    console.info('window.onload event');
    /**
     * Window
     * @type {object}
     */
    App.d.w = window;
    /**
     * Документ
     * @type {object}
     */
    App.d.d = document;
    /**
     * Тег body
     * @type {object}
     */
    App.d.b = App.d.d.body;
    App.h.start_coordinates = [55.755833, 37.617778];
    App.h.primary_color = '#009688';
    /**
     * Возвращает текущий, используемый слой для карт leaflet
     *
     * @namespace App.h
     * @class get_tile
     *
     * @returns {{crs: *, tile: *}}
     */
    App.h.get_tile = function () {
        return {
            crs: L.CRS.EPSG3395, //only for yandex
            tile: L.tileLayer('https://vec{s}.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}', {
                minZoom: 5,
                maxZoom: 18,
                subdomains: ['01', '02', '03', '04'],
                reuseTiles: true,
                updateWhenIdle: false,
                attribution: '&copy; Яндекс&nbsp;<a href="https://yandex.ru/legal/maps_termsofuse/?lang=ru">Условия использования</a> | <a href="https://stroyprice.ru">StroyPrice</a>'
            })
        };
    };
    /**
     * Вызывает событие на указанном узле
     *
     * @namespace App.h
     * @class trigger
     *
     * @param {object} $element — DOM узел
     * @param {string} event_name — Название события
     */
    App.h.trigger = function ($element, event_name, params) {
        if (!$element || !event_name) return false;
        params = params || null;
        if (App.d.w.CustomEvent) {
            $element.dispatchEvent(new CustomEvent(event_name, {detail: params}));
        } else if (App.d.d.createEvent) {
            var ev = App.d.d.createEvent('HTMLEvents');

            ev.initEvent(event_name, true, false, params);
            $element.dispatchEvent(ev);
        } else {
            $element.fireEvent('on' + event_name);
        }
    };
    /**
     * Возвращает отформатированную строку даты
     * Формат ДД.ММ.ГГГГ
     *
     * @namespace App.h
     * @class get_date_string
     *
     * @param {(date|string)} date — Экземпляр даты или валидная строка в международном формате
     * @param {(boolean)} time - нужно ли возвращать время
     * @returns {string}
     */
    App.h.get_date_string = function (date, time = false) {
        if (!date || (typeof date == 'string' && date.trim() == '')) return null;
        date = new Date(date);
        let day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();

        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;
        let string = `${day}.${month}.${year}`;
        if (time) {
            let hour = date.getHours(),
                minute = date.getMinutes();
            if (hour < 10) hour = '0' + hour;
            if (minute < 10) minute = '0' + minute;
            string += ` ${hour}:${minute}`;
        }
        return string;
    };
    /**
     * Возвращает отформатированную строку даты для поля типа DATE
     * Формат ГГГГ-ММ-ДД
     *
     * @namespace App.h
     * @class get_date_input_string
     *
     * @param {(date|string)} date — Экземпляр даты или валидная строка в международном формате
     * @param {(boolean)} time - нужно ли возвращать время
     * @returns {string}
     */
    App.h.get_date_input_string = function (date, time = false) {
        if (!date || (typeof date == 'string' && date.trim() == '')) return null;
        date = new Date(date);
        let day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();
        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;
        let string = `${year}-${month}-${day}`;
        if (time) {
            let hour = date.getHours(),
                minute = date.getMinutes();
            if (hour < 10) hour = '0' + hour;
            if (minute < 10) minute = '0' + minute;
            string += `T${hour}:${minute}`;
        }
        return string;
    };
    /**
     * Возвращает отформатированную строку в процентах
     * Формат 42%
     *
     * @namespace App.h
     * @class get_percentage_string
     *
     * @param {(number|string)} value — Число или строка
     * @returns {string}
     */
    App.h.get_percentage_string = function (value) {
        value = Math.abs(parseInt(value));
        if (isNaN(value)) value = 0;
        if (value < 0) value = 0;
        if (value > 100) value = 100;
        return value + '%';
    };
    /**
     * Имеет ли указанный узел указанного предка
     *
     * @namespace App.h
     * @class has_parent
     *
     * @param {object} $node — Узел
     * @param {(object|string)} $parent — Узел или класс узла родителя
     * @returns {boolean}
     */
    App.h.has_parent = function ($node, $parent) {
        var parent_list = [], condition;

        if (typeof $parent == 'string') condition = 'class';
        else condition = 'node';
        while ($node) {
            if ($node == App.d.b) break;
            parent_list.push($node);
            parent_list.reverse();
            $node = $node.parentNode;
            if (condition == 'class') {
                if ($node.classList.contains($parent)) return true;
            } else if (condition == 'node') {
                if ($node == $parent) return true;
            }
        }
        return false;
    };
    /**
     * Возвращает новый узел
     *
     * @namespace App.h
     * @class get_node
     *
     * @param {string} class_name — Класс или строка из классов, разделённых пробелом
     * @param {*} value — Значение узла (строка, число, узел)
     * @param {string} tag — Тег узла
     * @returns {object}
     */
    App.h.get_node = function (class_name, value, tag) {
        class_name = class_name || null;
        value = value || null;
        tag = tag || 'div';
        var $node = App.d.d.createElement(tag);

        if (class_name) {
            var class_list = class_name.split(' ');

            for (var i = 0; i < class_list.length; i++) {
                $node.classList.add(class_list[i]);
            }
        }
        if (value) {
            if (value instanceof DocumentFragment) $node.appendChild(value);
            else $node.innerHTML = value;
        }
        return $node;
    };
    /**
     * Возвращает предка указанного узла по указанному классу
     *
     * @namespace App.h
     * @class get_parent
     *
     * @param {object} $node — Узел
     * @param {string} $parent — Класс узла родителя
     * @returns {object}
     */
    App.h.get_parent = function ($node, class_name) {
        var parent_list = [];

        if (!$node || !class_name) return false;
        while ($node) {
            if ($node == App.d.b) break;
            parent_list.push($node);
            parent_list.reverse();
            $node = $node.parentNode;
            if ($node.classList.contains(class_name)) return $node;
        }
        return false;
    };
    /**
     * Возвращает объект календаря
     *
     * @namespace App.h
     * @class make_calendar
     *
     * @param {object} $element — Поле типа DATE
     * @returns {object}
     */
    App.h.make_calendar = function ($element) {
        var self = {};

        self.dom = {};
        self.opt = {};
        self.dom.$native = $element;
        if (!self.dom.$native) return false;
        if (isMobile.any) {
            self.dom.$field = self.dom.$native.cloneNode(false);
            self.dom.$field.setAttribute('type', 'hidden');
            self.dom.$native.removeAttribute('name');
            self.dom.$native.parentNode.appendChild(self.dom.$field);
        } else {
            self.dom.$field = self.dom.$native.cloneNode(false);
            self.dom.$field.setAttribute('type', 'text');
            self.dom.$native.style.display = 'none';
            self.dom.$native.disabled = true;
            self.dom.$native.parentNode.appendChild(self.dom.$field);
            self.opt.pikaday = new Pikaday({
                field: self.dom.$field,
                onSelect: function () {
                    self.dom.$field.value = App.h.get_date_string(this.getDate());
                    self.dom.$native.value = App.h.get_date_input_string(this.getDate());
                    App.h.trigger(self.dom.$native, 'input');
                },
                firstDay: 1,
                i18n: {
                    previousMonth: 'Предыдущий месяц',
                    nextMonth: 'Следующий месяц',
                    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                    weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                    weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
                }
            });
            if (!self.dom.$native.value || self.dom.$native.value.trim().length == '') self.opt.pikaday.setDate(new Date());
            else self.opt.pikaday.setDate(new Date(self.dom.$native.value));
        }
        return self;
    };
    /**
     * Возвращает обработанный объект ошибок запроса или false
     *
     * @namespace App.h
     * @class parse_errors
     *
     * @param {object} error_object — Объект ответа запроса
     * @returns {(object|bollean)}
     */
    App.h.parse_errors = function (error_object) {
        var self = {};

        self.types = {};
        self.required_fields = [];
        if (error_object['result'] == 'error') {
            self.responses = error_object['response'];

            for (var response_i = 0; response_i < self.responses.length; response_i++) {
                var response = self.responses[response_i];

                if (response['name'] == 'required_fields') {
                    var fields = response['description'];

                    for (var field_i = 0; field_i < fields.length; field_i++) {
                        self.required_fields.push(fields[field_i]);
                    }
                }
                self.types[response['name']] = response['code'];
            }
            return self;
        } else return false;
    };
    /**
     * Показывает нотификацию с ошибкой (нужен рефакторинг)
     *
     * @namespace App.h
     * @class make_notification
     *
     * @param {object} $element — Узел нотификации
     * @param {string} type — Тип ошибки
     * @param {string} message — Название ошибки
     */
    App.h.make_notification = function ($element, type, message) {
        var $text, text;

        if (!$element || !type) return false;
        $text = $element.querySelector('.text');
        if ($element.hasAttribute('data-' + type + '-' + message)) text = $element.getAttribute('data-' + type + '-' + message);
        else {
            if (type == 'danger') text = $element.getAttribute('data-' + type + '-default') + message;
            else text = $element.getAttribute('data-' + type + '-default');
        }
        $text.textContent = text;
        $element.setAttribute('data-type', type);
        $element.style.display = 'block';
    };
    /**
     * Показывает нотификацию с ошибкой (нужен рефакторинг)
     *
     * @namespace App.h
     * @class show_notification
     *
     * @param {object} $element — Узел нотификации
     * @param {string} type — Тип ошибки
     * @param {string} message — Название ошибки
     * @param {string} code — Код ошибки
     */
    App.h.show_notification = function ($element, type, message, code) {
        var $text, text;

        if (!$element || !type) return false;
        $text = $element.querySelector('.text');
        if ($element.hasAttribute('data-' + type + '-' + message)) text = $element.getAttribute('data-' + type + '-' + message);
        else {
            if (type == 'danger') text = $element.getAttribute('data-' + type + '-default') + code;
            else text = $element.getAttribute('data-' + type + '-default');
        }
        $text.textContent = text;
        $element.setAttribute('data-type', type);
        $element.style.display = 'block';
    };
    /**
     * Возвращает новый массив, без указанного элемента
     *
     * @namespace App.h
     * @class remove_from_array
     *
     * @param {array} array — Массив
     * @param {*} value — Элемент массива
     * @returns {array}
     */
    App.h.remove_from_array = function (array, value) {
        var value_i = array.indexOf(value);

        if (value_i != -1) array.splice(value_i, 1);
        return array;
    };
    /**
     * Возвращает массив, состоящий из следующих за указанным узлов
     *
     * @namespace App.h
     * @class get_next_siblings
     *
     * @param {object} $node — Узел
     * @param {object} $node_to_skip — Узел, который не должен попасть в возращаемый массив
     * @returns {array}
     */
    App.h.get_next_siblings = function ($node, $node_to_skip) {
        var $children = [];

        for (; $node; $node = $node.nextSibling)
            if ($node.nodeType == 1 && $node != $node_to_skip)
                $children.push($node);
        return $children;
    };
    /**
     * Возвращает массив из всех соседних узлов указанного, без него самого
     *
     * @namespace App.h
     * @class get_siblings
     *
     * @param {object} $node — Узел
     * @returns {array}
     */
    App.h.get_siblings = function ($node) {
        return App.h.get_next_siblings($node.parentNode.firstChild, $node);
    };
    /**
     * Возвращает отформатированную строку цены
     * Формат 1 000 000
     *
     * @namespace App.h
     * @class format_cost
     *
     * @param {(number|string)} value — Значение
     * @param {string} separator — Разделитель тысячных
     * @returns {string}
     */
    App.h.format_cost = function (value, separator) {
        var value_length, value_formatted, count = 0;

        separator = separator || ' ';
        value = '' + (value || 0);
        value_length = value.length;
        value_formatted = value.split('');
        if (value_length > 3) {
            value = value_formatted;
            App.h.i(value, function (c, i) {
                if ((value_length - i) % 3 == 0) {
                    value_formatted.splice(i + count, 0, separator);
                    count++;
                }
            });
        }
        return value_formatted.join('').trim();
    };
    /**
     * Удаляет узел
     *
     * @namespace App.h
     * @class remove_node
     *
     * @param {object} $node — Узел
     */
    App.h.remove_node = function ($node) {
        if (!$node) return false;
        if ($node.parentNode) $node.parentNode.removeChild($node);
    };
    /**
     * Вызов нотификации с ошибкой. Попахивает костылём (нужен рефакторинг)
     *
     * @namespace App.h
     * @class show_notification_error
     *
     * @param {object} response_errors — Узел нотификации
     * @param {string} $notification — Тип ошибки
     */
    App.h.show_notification_error = function (response_errors, $notification) {
        for (var name_i in response_errors) {
            if (response_errors.hasOwnProperty(name_i)) {
                App.h.show_notification($notification, 'danger', name_i, response_errors[name_i]);
                break;
            }
        }
    };
    /**
     * Итерация по элементам массива или свойствам объекта
     * Возвращает false, если array не валиден
     *
     * @namespace App.h
     * @class i
     *
     * @param {(array|object)} array — Массив или объект
     * @param {function} callback — Функция, срабатываемая на каждой итерации (передаются значение и индекс текущей итерации)
     * @returns {boolean}
     */
    App.h.i = function (array, callback) {
        if (!array || typeof callback !== 'function') return false;
        var i;

        if (array instanceof Array || array instanceof HTMLCollection) {
            for (i = 0; i < array.length; i++) {
                //console.debug('i: item ', i, array[i]);
                callback(array[i], i);
            }
        } else if (array instanceof Object) {
            for (i in array) {
                // STUPID IOS8 BUG
                if (array.hasOwnProperty(i) && i != 'length') {
                    //console.debug('i: attribute ', i, array[i]);
                    callback(array[i], i);
                }
            }
        } else return false;
    };
    /**
     * Возвращает значения top, left узла от начала документа
     *
     * @namespace App.h
     * @class get_offset
     *
     * @param {object} $node — Узел
     * @returns {(object|boolean)}
     */
    App.h.get_offset = function ($node) {
        var self = {};

        self.opt = {};
        self.dom = {};
        self.dom.$node = $node;
        if (!self.dom.$node) return false;
        self.opt.node_bounds = self.dom.$node.getBoundingClientRect();
        self.dom.$document_element = App.d.d.documentElement;
        self.opt.scrollTop = App.d.w.pageYOffset || self.dom.$document_element.scrollTop || App.d.b.scrollTop;
        self.opt.scrollLeft = App.d.w.pageXOffset || self.dom.$document_element.scrollLeft || App.d.b.scrollLeft;
        self.opt.clientTop = self.dom.$document_element.clientTop || App.d.b.clientTop || 0;
        self.opt.clientLeft = self.dom.$document_element.clientLeft || App.d.b.clientLeft || 0;
        self.opt.top = self.opt.node_bounds.top + self.opt.scrollTop - self.opt.clientTop;
        self.opt.left = self.opt.node_bounds.left + self.opt.scrollLeft - self.opt.clientLeft;
        return {
            top: Math.round(self.opt.top),
            left: Math.round(self.opt.left)
        };
    };
    /**
     * Возвращает значения top, left узла от прямого предка
     *
     * @namespace App.h
     * @class get_position
     *
     * @param {object} $node — Узел
     * @returns {(object|boolean)}
     */
    App.h.get_position = function ($node) {
        var self = {};

        self.opt = {};
        self.dom = {};
        self.dom.$node = $node;
        if (!self.dom.$node) return false;
        self.dom.$parent = self.dom.$node.parentNode;
        if (!self.dom.$parent) return false;
        return {
            top: Math.round(App.h.get_offset(self.dom.$node).top - App.h.get_offset(self.dom.$parent).top),
            left: Math.round(App.h.get_offset(self.dom.$node).left - App.h.get_offset(self.dom.$parent).left)
        };
    };
    /**
     * Показывает индикатор загрузки данных поверх указанного узла
     * Внимание: подходит не каждый узел
     *
     * @namespace App.h
     * @class load_node
     *
     * @param {object} $node — Узел
     * @param {boolean} turn_off — Если false, включает индикатор и при true отключает
     * @returns {boolean}
     */
    App.h.load_node = function ($node, turn_off) {
        var self = {};

        self.opt = {};
        self.dom = {};
        self.change_top = function () {
            self.opt.scroll_amount = App.d.w.pageYOffset || App.d.d.documentElement.scrollTop;
            var window_near_point = self.opt.scroll_amount,
                window_far_point = self.opt.scroll_amount + self.opt.windows_height,
                node_near_point = self.opt.node_offsets.top,
                node_far_point = self.opt.node_offsets.top + self.opt.node_height,
                hidden_far = node_far_point - window_far_point,
                hidden_near = window_near_point - node_near_point;

            if (hidden_far <= 0) hidden_far = 0;
            if (hidden_near <= 0) hidden_near = 0;
            self.opt.top = (self.opt.node_height - hidden_far + hidden_near) / 2 - self.opt.loader_height / 2;
            if (self.opt.top <= self.opt.min_offset) self.opt.top = self.opt.min_offset;
            if (self.opt.top >= self.opt.max_offset) self.opt.top = self.opt.max_offset;
            self.dom.$load_node.style.top = self.opt.top + 'px';
        };
        self.turn_off = function () {
            setTimeout(function () {
                self.dom.$node.removeAttribute('data-load');
                if (!self.dom.$node.load_node) {
                    self.dom.$load_node = self.dom.$node.querySelector('.load-node');
                } else {
                    self.dom.$load_node = self.dom.$node.load_node.dom.$load_node;
                }
                if (self.dom.$load_node) App.h.remove_node(self.dom.$load_node); //self.dom.$node.removeChild(self.dom.$load_node);
                self.dom.$node.load_node = null;
            }, 300);
        };
        self.turn_on = function () {
            if (self.dom.$node.load_node) return false;
            self.dom.$node.setAttribute('data-load', '');
            self.dom.$load_node = App.h.get_node('load-icon');
            if (self.dom.$node.children.length > 0) self.dom.$node.insertBefore(self.dom.$load_node, self.dom.$node.children[0]);
            else self.dom.$node.appendChild(self.dom.$load_node);
            self.dom.$node.load_node = self;
            if (self.opt.node_height > self.opt.windows_height) {
                self.opt.loader_height = self.dom.$load_node.getBoundingClientRect().height;
                self.opt.node_offsets = App.h.get_offset(self.dom.$node);
                self.opt.min_offset = 50;
                self.opt.max_offset = self.opt.node_height - self.opt.min_offset - self.opt.loader_height;
                self.change_top();
                App.d.w.addEventListener('scroll', self.change_top, false);
            }
        };
        self.initiate = function () {
            self.dom.$node = $node;
            self.opt.turn_off = turn_off;
            if (!self.dom.$node) return false;
            self.opt.windows_height = App.d.w.innerHeight;
            self.opt.node_height = (self.dom.$node.getBoundingClientRect) ? self.dom.$node.getBoundingClientRect().height : null;
            if (self.opt.turn_off) {
                self.turn_off();
            } else {
                self.turn_on();
            }
        };
        self.initiate();
    };
    /**
     * Прокрутка документа до указанного узла или на конкретную позицию
     *
     * @namespace App.h
     * @class scroll_to
     *
     * @param {(number|object)} input — Узел или число
     * @param {number} Предыдущее значение прокрутки (необязательный параметр)
     * @returns {boolean}
     */
    App.h.scroll_to = function (input, previos_scroll_top) {
        var self = {};

        self.opt = {};
        self.dom = {};
        self.opt.previos_scroll_top = parseInt(previos_scroll_top) || null
        if (input instanceof Node) self.opt.to = App.h.get_offset(input).top;
        else if (typeof parseInt(input) === 'number') self.opt.to = parseInt(input);
        else return false;
        self.opt.difference = self.opt.to - App.d.b.scrollTop;
        self.opt.per_tick = self.opt.difference / 150 * 1000 / 60;

        self.opt.clock = setTimeout(function () {
            App.d.b.scrollTop = App.d.b.scrollTop + self.opt.per_tick;
            if ((self.opt.difference >= 0 && App.d.b.scrollTop > self.opt.to || self.opt.difference < 0 && App.d.b.scrollTop < self.opt.to) || self.opt.previos_scroll_top == App.d.b.scrollTop) {
                clearTimeout(self.opt.clock);
                return false;
            }
            self.opt.previos_scroll_top = App.d.b.scrollTop;
            App.h.scroll_to(self.opt.to, self.opt.previos_scroll_top);
        }, 1000 / 60);
    };
    /**
     * Добавляет после указанного узла другой
     *
     * @namespace App.h
     * @class insert_after
     *
     * @param {object} $node — Узел
     * @param {object} $after — Узел, который нужно вставить после указанного
     */
    App.h.insert_after = function ($node, $after) {
        if (!$node || !$after) return false;
        $after.parentNode.insertBefore($node, $after.nextSibling);
    };
    /**
     * Возвращает узел, выдернутый из DOM
     *
     * @namespace App.h
     * @class detach
     *
     * @param {object} $node — Узел
     * @returns {(object|boolean)}
     */
    App.h.detach = function ($node) {
        var $parent;

        if (!$node) return false;
        $parent = $node.parentNode;
        if (!$parent) return false;
        return $parent.removeChild($node);
    };
    /**
     * Возвращает случайное число из указанного диапазона
     *
     * @namespace App.h
     * @class get_random_int
     *
     * @param {number} min — Минимальное значение
     * @param {number} max — Максимальное
     * @returns {number}
     */
    App.h.get_random_int = function (min, max) {
        min = min || 0;
        max = max || 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    /**
     * Возвращает объект из json строки
     *
     * @namespace App.h
     * @class get_json
     *
     * @param {string} string — Минимальное значение
     * @returns {boolean}
     */
    App.h.get_json = function (string) {
        try {
            return JSON.parse(string);
        } catch (e) {
            return false;
        }
    };
    /**
     * Возвращает размер объект
     *
     * @namespace App.h
     * @class get_object_length
     *
     * @param {object} object — входящий объект
     * @returns {number|boolean}
     */
    App.h.get_object_length = function (object) {
        if (!object instanceof Object) return false;
        var length = 0;

        App.h.i(object, function (item) {
            length++;
        });
        return length;
    };
    /**
     * Возвращает искомый(ые) объекты
     *
     * @namespace App.h
     * @class find
     *
     * @param {object} list — входящий лист объектов
     * @param {object} search — входящий объект параметров поиска
     * @param {object} all — вернуть один или все найденные
     * @returns {object|boolean}
     */
    App.h.find = function (list, search, all) {
        /* list: object or array */
        /* search: {name1: value1, name2: value2, ... } */
        if (!list || !search) return false;
        all = (all) ? true : false;
        var result = (all) ? null : [],
            matches = App.h.get_object_length(search),
            found = false;

        App.h.i(list, function (item) {
            if (!found || all) {
                var item_matches = 0;

                App.h.i(search, function (search_value, search_name) {
                    if (item.hasOwnProperty(search_name) && item[search_name] == search_value) item_matches++;
                });
                if (item_matches == matches) {
                    if (!all) result = item;
                    else result.push(item);
                    found = true;
                }
            }
        });
        return result;
    };
    /**
     * Подмена url парметра на другое значение
     *
     * @namespace App.h
     * @class replace_param
     *
     * @param {string} url — входящий url
     * @param {string} param — название параметра
     * @param {string} value — новое значение
     * @returns {string}
     */
    App.h.replace_param = function (url, param, value) {
        if (value == null) value = '';
        var pattern = new RegExp('\\b(' + param + '=).*?(&|$)');

        if (url.search(pattern) >= 0) return url.replace(pattern, '$1' + value + '$2');
        else return url + (url.indexOf('?') > 0 ? '&' : '?') + param + '=' + value
    };
    /**
     * Возвращает уникальную строку
     *
     * @namespace App.h
     * @class get_uniqe_id
     *
     * @param {string} string — префикс
     * @returns {string}
     */
    App.h.get_uniqe_id = function (string) {
        var phrases = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliet', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu'];

        string = string || phrases[App.h.get_random_int(0, phrases.length - 1)];
        return string.trim().toLowerCase() + '-' + new Date().getTime() + '-' + App.h.get_random_int(10, 100);
    };
    /**
     * Возвращает массив координат
     *
     * @namespace App.h
     * @class get_coordinates
     *
     * @param {object|string} input — входные данные
     * @returns {object|boolean}
     */
    App.h.get_coordinates = function (input) {
        var coordinates, latitude, longitude;

        if (!input) return false;
        if (typeof input === 'string') {
            coordinates = input.split(',');
            if (coordinates[1] == undefined) coordinates = input.split(' ');
            latitude = coordinates[0];
            longitude = coordinates[1];
        } else if (typeof input === 'object' && input[0] && input[1]) {
            latitude = input[0];
            longitude = input[1];
        } else return false;
        latitude = parseFloat(latitude);
        longitude = parseFloat(longitude);
        if (!isNaN(latitude) && !isNaN(longitude)) return [latitude, longitude];
        else return false;
    };
    /**
     * Возвращает строку html node
     *
     * @namespace App.h
     * @class get_html_string
     *
     * @param {object} $node — html node
     * @param {boolean} clear_whitespace — удалять ли вайтспейсы
     * @returns {boolean|string}
     */
    App.h.get_html_string = function ($node, clear_whitespace) {
        var $temp_node = App.h.get_node(), result;

        if (!$node) return false;
        $temp_node.appendChild($node.cloneNode(true));
        result = $temp_node.innerHTML;
        if (clear_whitespace) result.replace(/\n/g, '').replace(/\t/g, '');
        return result
    };
    /**
     * Выполняет действие компонента после готовности последнего
     *
     * @namespace App.h
     * @class postponed_action
     *
     * @param {object} $node — html node
     * @param {string} action — действие
     * @param {string} argument — аргументы к действию
     */
    App.h.postponed_action = function ($node, action, argument) {
        if (!$node || !action) return false;
        if ($node.js) $node.js[action](argument);
        else $node.addEventListener('is-ready', function () {
            $node.js[action](argument);
        }, false);
    };
    App.h.remove_location_hash = function () {
        App.d.w.history.pushState("", App.d.d.title, App.d.w.location.pathname + App.d.w.location.search);
    };

    /**
     * XMLRequest транспорт
     * Отвечает за все асинхронные запросы
     *
     * @namespace App.c.tools
     * @class XHR
     * @returns {object}
     */
    App.c.tools.XHR = function () {
        var self = this;

        self.x = function () {
            if (typeof XMLHttpRequest !== 'undefined') {
                return new XMLHttpRequest();
            }
            var versions = [
                "MSXML2.XmlHttp.6.0",
                "MSXML2.XmlHttp.5.0",
                "MSXML2.XmlHttp.4.0",
                "MSXML2.XmlHttp.3.0",
                "MSXML2.XmlHttp.2.0",
                "Microsoft.XmlHttp"
            ];

            var xhr;
            for (var i = 0; i < versions.length; i++) {
                try {
                    xhr = new ActiveXObject(versions[i]);
                    break;
                } catch (e) {
                }
            }
            return xhr;
        };
        self.serialize = function (obj, prefix) {
            var str = [];
            for (var part in obj) {
                if (!obj.hasOwnProperty(part)) continue;
                var key = prefix ? prefix + "[" + part + "]" : part,
                    val = obj[part];
                str.push((val !== null && typeof val === "object") ?
                    this.serialize(val, key) :
                    encodeURIComponent(key) + "=" + encodeURIComponent(val));
            }
            return str.join('&');
        };
        self.send = function (url, callback, method, data, async) {
            if (async === undefined) {
                async = true;
            }
            var x = self.x();

            x.open(method, url, async);
            x.onreadystatechange = function () {
                if (x.readyState == 4 && typeof callback === 'function') {
                    callback(x.responseText)
                }
            };
            if (method == 'POST' && !data instanceof FormData) {
                x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            }
            /*if (App.d.w.location.origin == 'file://') {
                console.warn('XHR', 'Local requests are forbidden');
            } else {
                x.send(data);
            }*/
            x.send(data);
        };
        self.upload = function (url, data, method, on_end, on_progress) {
            var async = true;
            var x = self.x();

            x.open(method, url, async);
            x.onreadystatechange = function () {
                if (x.readyState == 4 && typeof on_end === 'function') {
                    on_end(x.responseText)
                }
            };
            x.upload.onprogress = function (e) {
                if (typeof on_progress === 'function') {
                    on_progress(e);
                }
            }
            x.send(data)
        };
        self.get = function (url, data, callback, async) {
            var query = [];
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
                }
            }
            self.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async)
        };
        self.post = function (url, data, callback, async) {
            var query = [];
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
                }
            }
            self.send(url, callback, 'POST', query.join('&'), async)
        };
    };
    /**
     * Элемент единичного выбора из выпадающего списка
     *
     * @namespace App.c.tools
     * @class SelectBlock
     * @returns {object}
     */
    App.c.tools.SelectBlock = function ($block) {
        var self = this;

        self.opt = {};
        self.dom = {};
        self.enable = function () {
            self.dom.$field.disabled = false;
            self.dom.$btn.disabled = false;
            App.h.trigger(self.dom.$block, 'is-enabled');
        };
        self.disable = function () {
            self.opt.is_shown = false;
            self.dom.$block.removeAttribute('data-is-shown');
            self.dom.$field.disabled = true;
            self.dom.$btn.disabled = true;
            App.h.trigger(self.dom.$block, 'is-disabled');
        };
        self.show = function () {
            self.opt.is_shown = true;
            self.dom.$block.setAttribute('data-is-shown', '');
            self.dom.$block.setAttribute('data-interacted', '');
            App.h.trigger(self.dom.$block, 'is-shown');
            if (self.opt.selected) {
                self.dom.$list.scrollTop = self.opt.selected.$node.offsetTop;
                self.opt.previous_value = self.opt.selected['data']['value'];
            }
        };
        self.hide = function () {
            self.opt.is_shown = false;
            self.dom.$block.removeAttribute('data-is-shown');
            App.h.trigger(self.dom.$block, 'is-hidden');
            if (self.opt.selected && self.opt.previous_value != self.opt.selected['data']['value']) {
                App.h.trigger(self.dom.$block, 'is-changed');
            }
        };
        self.toggle = function () {
            if (self.opt.is_shown) self.hide();
            else self.show();
        };
        self.on_native_select = function () {
            var value = self.dom.$field.value,
                selected_option = App.h.find(self.opt.options_data, {value: value});

            App.h.i(self.opt.options_data, function (option_data) {
                option_data['selected'] = false;
            });
            selected_option['selected'] = true;
            self.opt.selected = {
                data: {
                    value: selected_option.value,
                    title: selected_option.title,
                    url: selected_option.url,
                    params: selected_option.params,
                    options: selected_option.options
                }
            };
            self.dom.$btn_cap.textContent = selected_option.title;
            App.h.trigger(self.dom.$block, 'is-changed');
            App.h.trigger(self.dom.$block, 'is-selected');
        };
        self.on_select = function (e) {
            var option = this;

            if (!option) return false;
            App.h.i(self.opt.options, function (option_object) {
                option_object.$node.classList.remove('select-block__option-btn_selected');
            });
            option.$node.classList.add('select-block__option-btn_selected');
            self.opt.selected = option;
            self.dom.$btn_cap.textContent = option.data.title;
            self.dom.$field.value = option.data.value;
            App.h.trigger(self.dom.$block, 'is-selected');
            if (e && e.type == 'click') self.hide();
        };
        self.on_arrow_select = function (direction) {
            var index = self.opt.options.indexOf(self.opt.selected),
                new_index = index + ((direction == 'up') ? -1 : 1);

            if (!self.opt.selected || index == -1 || !self.opt.options[new_index]) {
                index = (direction == 'up') ? self.opt.options.length - 1 : 0;
                self.opt.selected = self.opt.options[index];
            } else {
                self.opt.selected = self.opt.options[new_index];
            }
            self.on_select.call(self.opt.selected);
        };
        self.on_key_down = function (e) {
            if (self.opt.is_shown) {
                if (e.which == 32) {
                    self.opt.search += ' ';
                    e.stopPropagation();
                    e.preventDefault();
                } else if ([9, 27].indexOf(parseInt(e.which)) != -1) {
                    self.hide();
                    self.dom.$btn.focus();
                    e.stopPropagation();
                    e.preventDefault();
                } else if (e.which == 38) {
                    self.on_arrow_select('up');
                    e.stopPropagation();
                    e.preventDefault();
                } else if (e.which == 40) {
                    self.on_arrow_select('down');
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
        };
        self.on_key_press = function (e) {
            if (self.opt.is_shown) {
                var char_code = (typeof e.which == "number") ? e.which : e.keyCode,
                    typed_char = String.fromCharCode(char_code);

                self.opt.search += typed_char;
                clearTimeout(self.opt.interval);
                self.opt.interval = setTimeout(function () {
                    self.search_option(self.opt.search);
                    self.opt.search = '';
                }, 300);
            }
        };
        self.on_outside_click = function (e) {
            if (!self.opt.is_shown) return false;
            var is_target_block = (e.target == self.dom.$block),
                has_target_block = App.h.has_parent(e.target, self.dom.$block);

            if (!is_target_block && !has_target_block) self.hide();
        };
        self.on_outside_key_down = function (e) {
            if (self.opt.is_shown) {
                if (e.which == 27) {
                    self.hide();
                    self.dom.$btn.focus();
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
        };
        self.search_option = function (search_phrase) {
            search_phrase = ('' + search_phrase).trim().toLocaleLowerCase();
            if (search_phrase.length == 0) return false;
            App.h.i(self.opt.options, function (option) {
                var title = option['data']['title'].trim().toLocaleLowerCase();

                if (title.indexOf(search_phrase) == 0) {
                    self.dom.$list.scrollTop = option.$node.offsetTop;
                }
            });
        };
        self.get_options = function (input) {
            if (!input) {
                input = [];
                App.h.i(self.dom.$field.children, function ($node) {
                    input.push({
                        title: $node.textContent,
                        value: $node.value,
                        selected: $node.selected,
                        url: $node.dataset['url'],
                        params: $node.dataset['params'],
                        options: $node.dataset['options']
                    });
                });
            } else input = App.h.get_json(input);
            if (input.length == 0) input = null;
            self.opt.options_data = input;
        };
        self.render_options = function () {
            if (!self.opt.options_data) self.disable();
            App.h.i(self.opt.options, function (option_object) {
                App.h.remove_node(option_object.$node);
                option_object = null;
            });
            self.opt.options = [];
            self.opt.selected = null;
            App.h.i(self.opt.options_data, function (option_data) {
                var option = {};

                option.data = option_data;
                option.$node = App.h.get_node('btn select-block__option-btn', '', 'button');
                option.$node.type = 'button';
                option.$node.tabIndex = '-1';
                option.$node.title = option.data.title || '';
                option.$node_cap = App.h.get_node('btn__cap', option.data.title, 'span');
                //option.$node.js = option;
                option.$node.appendChild(option.$node_cap);
                self.dom.$list.appendChild(option.$node);
                if (option.data.selected) {
                    option.$node.classList.add('select-block__option-btn_selected');
                    self.opt.selected = option;
                    self.dom.$btn_cap.textContent = option.data.title;
                    self.dom.$field.value = option.data.value;
                }
                self.opt.options.push(option);
                option.$node.addEventListener('click', self.on_select.bind(option), false);
            });
            if (!self.opt.selected) {
                self.opt.options[0].$node.classList.add('select-block__option-btn_selected');
                self.opt.selected = self.opt.options[0];
                self.dom.$btn_cap.textContent = self.opt.options[0].data.title;
                self.dom.$field.value = self.opt.options[0].data.value;
            }
        };
        self.render = function () {
            self.dom.$btn = self.dom.$block.querySelector('.select-block__btn');
            self.dom.$btn_cap = self.dom.$block.querySelector('.select-block__btn-cap');
            self.dom.$field = self.dom.$block.querySelector('.select-block__field');
            if (self.dom.$block.querySelector('.select-block__list')) {
                self.dom.$list = self.dom.$block.querySelector('.select-block__list');
                self.dom.$list.innerHTML = '';
            } else {
                self.dom.$list = App.h.get_node('select-block__list', '', '');
                self.dom.$block.querySelector('.select-block__grp').appendChild(self.dom.$list);
            }
            if (self.dom.$btn.disabled) self.disable();
            self.dom.$btn.onclick = self.toggle;
            self.dom.$field.addEventListener('errors-show', function (e) {
                self.dom.$btn.classList.add('field_is-error');
            });
            self.dom.$field.addEventListener('errors-hide', function (e) {
                self.dom.$btn.classList.remove('field_is-error');
            });
            self.dom.$block.addEventListener("keydown", self.on_key_down, false);
            App.d.d.addEventListener('click', self.on_outside_click, false);
            App.d.d.addEventListener("keydown", self.on_outside_key_down, false);
            App.d.d.addEventListener("keypress", self.on_key_press, false);
        };
        self.initiate = function () {
            self.dom.$block = $block;
            if (!self.dom.$block) {
                self = null;
                return false;
            }
            self.opt.previous_value = null;
            self.opt.interval = null;
            self.opt.search = '';
            self.opt.is_shown = false;
            self.opt.selected = null;
            self.opt.options = [];
            self.render();
            self.get_options();
            self.render_options();
            self.dom.$block.classList.add('select-block_desktop');
            self.dom.$block.js = self;
            App.h.trigger(self.dom.$block, 'is-ready');
        };
        self.initiate();
        return self;
    };
    /**
     * Элемент поля для ввода текса
     *
     * @namespace App.c.tools
     * @class InputBlock
     * @returns {object}
     */
    App.c.tools.InputBlock = function ($block) {
        var self = this;

        self.opt = {};
        self.dom = {};
        self.show_cap = function () {
            self.dom.$cap.classList.remove('input-block__cap_hide');
        };
        self.show = function () {
            self.dom.$field.placeholder = '';
            self.show_cap();
        };
        self.hide = function () {
            self.dom.$field.placeholder = self.dom.$cap.textContent;
            self.dom.$cap.classList.add('input-block__cap_hide');
        };
        self.initiate = function () {
            self.dom.$block = $block;
            if (!self.dom.$block) {
                self = null;
                return false;
            }
            self.dom.$cap = self.dom.$block.querySelector('.input-block__cap');
            self.dom.$field = self.dom.$block.querySelector('.input-block__field');
            self.dom.$grp = self.dom.$block.querySelector('.input-block__grp');
            self.dom.$field.addEventListener('errors-show', function (e) {
                if (self) {
                    self.dom.$grp.classList.add('field_is-error');
                } else {
                    if (e.target.closest_node('.input-block__grp')) {
                        e.target.closest_node('.input-block__grp').classList.add('field_is-error');
                    }
                }
            });
            self.dom.$field.addEventListener('errors-hide', function (e) {
                if (self) {
                    self.dom.$grp.classList.remove('field_is-error');
                } else {
                    if (e.target.closest_node('.input-block__grp')) {
                        e.target.closest_node('.input-block__grp').classList.remove('field_is-error');
                    }
                }
            });
            if (!self.dom.$cap || !self.dom.$field) {
                self = null;
                return false;
            }
            if (!self.dom.$block.classList.contains('input-block_calm')) {
                if (!self.dom.$field.value.replace(/^\s+|\s+$/g, '')) {
                    self.hide();
                }
                self.dom.$field.addEventListener('focus', function (e) {
                    self.show();
                });
                self.dom.$field.addEventListener('is-value-unset', function (e) {
                    self.hide();
                });
                self.dom.$field.addEventListener('is-value-set', function (e) {
                    self.show();
                });
                self.dom.$field.addEventListener('blur', function (e) {
                    if (!self.dom.$field.value.replace(/^\s+|\s+$/g, '')) {
                        self.hide();
                    }
                });
            }
            self.dom.$block.js = self;
        };
        self.initiate();
        return self;
    };
    /**
     * Элемент выбора адреса
     *
     * @namespace App.c.tools
     * @class AddressBlock
     * @returns {object}
     */
    App.c.tools.AddressBlock = function ($block) {
        var self = this;

        self.opt = {};
        self.dom = {};
        self.enable = function () {
            self.dom.$coordinates_field.disabled = false;
            self.dom.$field.disabled = false;
            if (self.dom.$btn) self.dom.$btn.disabled = false;
            App.h.trigger(self.dom.$block, 'is-enabled');
        };
        self.disable = function () {
            self.opt.is_shown = false;
            self.dom.$block.removeAttribute('data-is-shown');
            self.dom.$coordinates_field.disabled = true;
            self.dom.$field.disabled = true;
            if (self.dom.$btn) self.dom.$btn.disabled = true;
            //self.dom.$block.setAttribute('data-disabled', '');
            App.h.trigger(self.dom.$block, 'is-disabled');
        };
        self.show = function () {
            self.opt.is_shown = true;
            self.dom.$block.setAttribute('data-is-shown', '');
            App.h.trigger(self.dom.$block, 'is-shown');
        };
        self.hide = function () {
            self.opt.is_shown = false;
            self.dom.$block.removeAttribute('data-is-shown');
            App.h.trigger(self.dom.$block, 'is-hidden');
            self.on_blur();
        };
        self.on_blur = function () {
            if (!self.opt.selected) {
                self.dom.$coordinates_field.value = '';
                self.dom.$field.value = '';
                App.h.trigger(self.dom.$block, 'is-cleared');
            }
        };
        self.on_done_click = function () {
            if (self.opt.temp_place) {
                self.on_select.call(self.opt.temp_place);
            }
            self.on_map_hide();
        };
        self.on_close_click = function () {
            self.on_map_hide();
        };
        self.on_btn_click = function () {
            if (self.dom.$map_wrp.hasAttribute('data-is-shown')) {
                self.on_map_hide();
            } else {
                self.opt.location = null;
                self.get_location();
                self.dom.$map_wrp.setAttribute('data-is-shown', '');
                App.h.trigger(self.dom.$block, 'is-map-shown');
                self.opt.values = [];
                self.opt.values['coordinates'] = self.dom.$coordinates_field.value;
                self.opt.values['address'] = self.dom.$field.value;
                self.dom.$coordinates_field.value = '';
                self.dom.$field.value = '';
            }
        };
        self.on_map_hide = function () {
            if (self.dom.$coordinates_field.value === '' && self.dom.$field.value === '') {
                self.dom.$coordinates_field.value = self.opt.values['coordinates'];
                self.dom.$field.value = self.opt.values['address'];
            }
            self.dom.$field.focus();
            self.dom.$map_wrp.removeAttribute('data-is-shown');
            self.opt.temp_place = null;
            App.h.trigger(self.dom.$block, 'is-hidden');
        };
        self.on_map_select = function (e) {
            //console.log('AddressBlock:on_map_select', e.latlng);
            var xhr = self.opt.b24proxy.geocode(e.latlng);
            self.set_pin(e.latlng, 'Поиск...');
            xhr.addEventListener('load', function (e) {
                var response = JSON.parse(e.target.responseText);
                var address;
                L.geoJSON(response, {
                    onEachFeature: function (feature) {
                        var coordinates = App.h.get_coordinates(feature.properties.coordinates),
                            raw_coordinates = [coordinates[0], coordinates[1]],
                            string_coordinates = raw_coordinates.join(',');

                        self.dom.$done_btn.disabled = false;
                        //self.set_pin_address(feature.properties.address);
                        address = feature.properties.address;
                        self.opt.temp_place = {
                            data: feature.properties,
                            title: feature.properties.address,
                            raw_coordinates: raw_coordinates,
                            string_coordinates: string_coordinates
                        };
                        if (self.opt.immidiate_select) {
                            self.select(self.opt.temp_place);
                        }
                        if (self.opt.auto_fill) {
                            self.select(self.opt.temp_place);
                            self.opt.auto_fill = false;
                        }
                    }
                });
                self.set_pin_address(address);
            });
        };
        self.on_key_down = function (e) {
            if (self.opt.is_shown) {
                if (e.which == 27) {
                    e.stopPropagation();
                    e.preventDefault();
                    self.hide();
                    self.dom.$field.focus();
                } else if (e.which == 9) {
                    e.stopPropagation();
                    e.preventDefault();
                    self.hide();
                    if (self.dom.$btn) self.dom.$btn.focus();
                } else if (e.which == 38) {
                    e.stopPropagation();
                    e.preventDefault();
                    self.on_arrow_select('up');
                } else if (e.which == 40) {
                    e.stopPropagation();
                    e.preventDefault();
                    self.on_arrow_select('down');
                } else if (e.which == 13) {
                    e.stopPropagation();
                    e.preventDefault();
                    self.hide();
                }
            }
        };
        self.on_outside_click = function (e) {
            if (!self.opt.is_shown) return false;
            var is_target_block = (e.target == self.dom.$block),
                has_target_block = App.h.has_parent(e.target, self.dom.$block);

            if (!is_target_block && !has_target_block) self.hide();
        };
        self.on_outside_key_down = function (e) {
            if (self.opt.is_shown) {
                if (e.which == 27) {
                    self.hide();
                    self.dom.$field.focus();
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
        };
        self.on_input = function (e) {
            clearTimeout(self.opt.interval);
            if (self.dom.$field.value.trim() == '') {
                self.hide();
                self.clear_list();
                return false;
            }
            self.dom.$list.innerHTML = "<i class=\"load-icon\"></i>";
            self.dom.$list.setAttribute('data-load', '');
            self.opt.interval = setTimeout(function () {
                self.get_address(self.dom.$field.value.trim());
            }, 800);
        };
        self.on_select = function (e) {
            //console.info('on_select');
            var option = this;

            if (!option) return false;
            if (e && e.type == 'click') self.hide();
            App.h.i(self.opt.options, function (option_object) {
                option_object.$node.classList.remove('address-block__option-btn_selected');
            });
            if (option.$node) option.$node.classList.add('address-block__option-btn_selected');
            self.opt.selected = option;
            self.dom.$coordinates_field.value = option.string_coordinates;
            self.dom.$field.value = option.title;
        };
        self.on_arrow_select = function (direction) {
            var index = self.opt.options.indexOf(self.opt.selected),
                new_index = index + ((direction == 'up') ? -1 : 1);

            if (!self.opt.selected || index == -1 || !self.opt.options[new_index]) {
                index = (direction == 'up') ? self.opt.options.length - 1 : 0;
                self.opt.selected = self.opt.options[index];
            } else {
                self.opt.selected = self.opt.options[new_index];
            }
            self.on_select.call(self.opt.selected);
            self.set_pin(self.opt.selected.raw_coordinates);
        };
        self.get_address = function (address) {
            if (!address) return false;
            var xhr = self.opt.b24proxy.geocode(
                (self.opt.location) ? self.opt.location + ', ' + address : address,
                null,
                {pointAmount: 10}
            );
            xhr.addEventListener("load", function (e) {
                self.dom.$list.removeAttribute('data-load');
                self.render_options(JSON.parse(e.target.responseText), address);
            });
        };
        self.get_location = function (is_update) {
            var coordinates,
                location = ('' + self.dom.$block.getAttribute('data-location')).trim(),
                start_coordinates = App.h.get_coordinates(self.dom.$block.getAttribute('data-center'));

            //console.log('AddressBlock:get_location', location, start_coordinates);
            if (self.opt.location != '' && self.opt.location == location) {
                //console.warn('AddressBlock:get_location', 'location is the same');
                return false;
            }
            if (is_update) {
                self.dom.$field.value = '';
                self.dom.$coordinates_field.value = '';
            }
            self.opt.location = location;
            if (!self.opt.location || self.opt.location.trim() == '') {
                self.disable();
                self.opt.location = null;
                //console.warn('AddressBlock:get_location', 'location undefined');
                return false;
            } else {
                self.enable();
            }

            //console.log('AddressBlock:get_location', 'map initialization');
            if (start_coordinates) {
                self.initiate_map(start_coordinates);
            } else {
                var xhr = self.opt.b24proxy.geocode(
                    e.latlng,
                    e.target,
                    {
                        pointAmount: 1,
                        showAddress: true
                    }
                );
                xhr.addEventListener('load', function (e) {
                    var response = JSON.parse(e.target.responseText);
                    L.geoJSON(response, {
                        onEachFeature: function (feature) {
                            self.initiate_map(App.h.get_coordinates(feature.properties.coordinates));
                        }
                    });
                });
            }
        };
        self.set_pin = function (coordinates, address) {
            if (self.opt.map) {
                self.opt.b24proxy.clearMap(self.opt.map);
                self.opt.map_pin = new L.Marker(coordinates);
                self.opt.map.addLayer(self.opt.map_pin);
                self.set_pin_address(address);
                self.opt.map.setView(coordinates);
            }
        };
        self.set_pin_address = function (address) {
            if (self.opt.map_pin) {
                if (address && typeof (address) != "undefined") {
                    self.opt.map_pin.bindPopup(
                        self.opt.b24proxy.preparePopup({address: address}, {showAddress: true})
                    ).openPopup();
                } else {
                    self.opt.map_pin.closePopup().unbindPopup();
                }
            }
        };
        self.update_location = function () {
            self.get_location(true);
        };
        self.initiate_map = function (coordinates) {
            if (self.dom.$btn && !self.dom.$map_wrp) {
                console.error('AddressBlock: $map_wrp не найден');
                return false;
            }
            if (self.dom.$btn && self.dom.$map_wrp) {
                self.dom.$map = self.dom.$map_wrp.querySelector('.address-map__map');
                self.dom.$done_btn = self.dom.$map_wrp.querySelector('.address-map__done-btn');
                self.dom.$done_btn.addEventListener('click', self.on_done_click, false);
                self.dom.$close_btn = self.dom.$map_wrp.querySelector('.address-map__close-btn');
                if (self.dom.$close_btn) self.dom.$close_btn.addEventListener('click', self.on_close_click, false);
            } else {
                self.dom.$map = self.dom.$block.querySelector('.address-map__map');
            }
            if (!self.opt.map) {
                self.opt.selected = null;
                self.opt.options_data = null;
                self.opt.options = [];
                self.opt.interval = null;
                self.opt.map_pin = null;
                self.opt.temp_place = null;
                self.opt.map_id = App.h.get_uniqe_id('map');

                self.dom.$map.id = self.opt.map_id;
                self.dom.$map.setAttribute('id', self.dom.$map.id);
                self.opt.map = L.map(self.dom.$map.id, {
                    center: coordinates,
                    zoom: 12
                });
                var tileLayer = App.h.get_tile();
                if (tileLayer.crs) {
                    self.opt.map.options.crs = tileLayer.crs;
                }
                tileLayer.tile.addTo(self.opt.map);
                if (!self.dom.$map_wrp.classList.contains('address-map_demo')) {
                    self.opt.map.on('click', function (e) {
                        self.on_map_select(e);
                    });
                }
            }
            if (self.dom.$coordinates_field.value.trim() != '') {
                var string_coordinates = self.dom.$coordinates_field.value.trim(),
                    split_coordinates = App.h.get_coordinates(string_coordinates);
                if (split_coordinates != false) {
                    self.set_pin(split_coordinates, self.dom.$field.value);
                } else {
                    self.set_pin(coordinates, self.opt.location);
                }
            } else {
                self.set_pin(coordinates, self.opt.location);
            }
            //console.log('AddressBlock:initiate_map', 'map initialized');
            App.h.trigger(self.dom.$block, 'map-initiated');
        };
        self.clear_selected = function () {
            self.opt.selected = null;
            self.dom.$coordinates_field.value = '';
        };
        self.clear_list = function () {
            self.dom.$list.removeAttribute('data-load');
            self.dom.$list.innerHTML = '';
            self.opt.options = [];
            self.clear_selected();
        };
        self.render_options = function (input, address) {
            self.clear_list();
            if (input) self.opt.options_data = input;
            L.geoJSON(self.opt.options_data, {
                onEachFeature: function (feature) {
                    var option = {};

                    option.data = feature.properties;
                    option.title = option.data.address;
                    option.coordinates = App.h.get_coordinates(option.data.coordinates);
                    option.raw_coordinates = [option.coordinates[0], option.coordinates[1]];
                    option.string_coordinates = option.raw_coordinates.join(',');
                    option.$title = option.title.replace(new RegExp(address, 'gi'), '<b>' + address + '</b>');
                    option.$node = App.h.get_node('btn address-block__option-btn', '', 'button');
                    option.$node.type = 'button';
                    option.$node.tabIndex = '-1';
                    option.$node_cap = App.h.get_node('btn__cap', option.$title, 'span');
                    option.$node.appendChild(option.$node_cap);
                    self.dom.$list.appendChild(option.$node);
                    option.$node.onclick = function (e) {
                        self.on_select.call(option, e);
                        self.set_pin(option.raw_coordinates, option.title);
                    };
                    self.opt.options.push(option);
                }
            });
            self.show();
        };
        self.render = function () {
            self.opt.b24proxy = L.b24proxy();

            self.opt.is_shown = false;
            self.opt.location = null;
            self.opt.immidiate_select = false;
            self.dom.$map_wrp = self.dom.$block.querySelector('.address-map');
            self.dom.$field = self.dom.$block.querySelector('.address-block__field');
            self.dom.$coordinates_field = self.dom.$block.querySelector('.address-block__coordinates');
            self.dom.$btn = self.dom.$block.querySelector('.address-block__btn');
            if (self.dom.$block.querySelector('.address-block__list')) {
                self.dom.$block.querySelector('.address-block__list').innerHTML = '';
                self.dom.$list = self.dom.$block.querySelector('.address-block__list');
            } else {
                self.dom.$list = App.h.get_node('address-block__list', '', '');
                self.dom.$block.querySelector('.address-block__wrp').appendChild(self.dom.$list);
            }
            if (self.dom.$btn) self.dom.$btn.onclick = self.on_btn_click;
            self.dom.$field.addEventListener("input", self.on_input, false);
            self.dom.$field.addEventListener("keydown", self.on_key_down, false);
            App.d.d.addEventListener('click', self.on_outside_click, false);
            App.d.d.addEventListener("keydown", self.on_outside_key_down, false);
            self.opt.$prev_complete = self.dom.$block.closest_node('form');
            if (self.opt.$prev_complete) {
                self.opt.$prev_complete = self.opt.$prev_complete.querySelector('.complete-block');
                if (self.opt.$prev_complete) {
                    self.opt.$prev_complete.addEventListener('is-selected', function () {
                        self.dom.$field.value = '';
                        self.clear_selected();
                        self.dom.$block.dataset['center'] = self.opt.$prev_complete.dataset['coords'];
                        self.dom.$block.dataset['location'] = self.opt.$prev_complete.dataset['coords'];
                        self.update_location();
                    });
                }
            }
            self.dom.$block.js = self;
            App.h.trigger(self.dom.$block, 'is-ready');
        };
        self.initiate = function () {
            self.dom.$block = $block;
            if (!self.dom.$block) {
                self = null;
                return false;
            }
            self.render();
        };
        self.initiate();
        return self;
    };
    /**
     * Элемент ввода пароля
     *
     * @namespace App.c.tools
     * @class PasswordBlock
     * @returns {object}
     */
    App.c.tools.PasswordBlock = function ($block) {
        var self = this;

        self.opt = {};
        self.dom = {};
        self.show = function () {
            self.opt.is_shown = true;
            self.dom.$block.setAttribute('data-is-shown', '');
            self.dom.$field.type = 'text';
            App.h.trigger(self.dom.$block, 'is-shown');
        };
        self.hide = function () {
            self.opt.is_shown = false;
            self.dom.$block.removeAttribute('data-is-shown');
            self.dom.$field.type = 'password';
            App.h.trigger(self.dom.$block, 'is-hidden');
        };
        self.toggle = function () {
            if (self.opt.is_shown) self.hide();
            else self.show();
        };
        self.initiate = function () {
            self.dom.$block = $block;
            if (!self.dom.$block) {
                self = null;
                return false;
            }
            self.opt.is_shown = !!self.dom.$block.hasAttribute('data-is-shown');
            self.dom.$field = self.dom.$block.querySelector('.password-block__field');
            self.dom.$btn = self.dom.$block.querySelector('.password-block__btn');
            self.dom.$btn.addEventListener('click', self.toggle, false);
            self.dom.$block.js = self;
        };
        self.initiate();
        return self;
    };
    /**
     * Элемент с выпадающим списком действий
     *
     * @namespace App.c.tools
     * @class ActionsBlock
     * @returns {object}
     */
    App.c.tools.ActionsBlock = function ($block) {
        var self = this;

        self.opt = {};
        self.dom = {};
        self.enable = function () {
            self.dom.$btn.disabled = false;
            //self.dom.$block.removeAttribute('data-disabled');
            App.h.trigger(self.dom.$block, 'is-enabled');
        };
        self.disable = function () {
            self.opt.is_shown = false;
            self.dom.$block.removeAttribute('data-is-shown');
            self.dom.$btn.disabled = true;
            //self.dom.$block.setAttribute('data-disabled', '');
            App.h.trigger(self.dom.$block, 'is-disabled');
        };
        self.show = function () {
            self.opt.is_shown = true;
            self.dom.$block.setAttribute('data-is-shown', '');
            self.dom.$block.setAttribute('data-interacted', '');
            App.h.trigger(self.dom.$block, 'is-shown');
        };
        self.hide = function () {
            self.opt.is_shown = false;
            self.dom.$block.removeAttribute('data-is-shown');
            App.h.trigger(self.dom.$block, 'is-hidden');
        };
        self.toggle = function () {
            if (self.opt.is_shown) self.hide();
            else self.show();
        };
        self.on_key_down = function (e) {
            if (self.opt.is_shown && e.which == 27) {
                self.hide();
                self.dom.$btn.focus();
                e.stopPropagation();
                e.preventDefault();
            }
        };
        self.on_outside_click = function (e) {
            if (!self.opt.is_shown) return false;
            var is_target_block = (e.target == self.dom.$block),
                has_target_block = App.h.has_parent(e.target, self.dom.$block);

            if (!is_target_block && !has_target_block) self.hide();
        };
        self.render = function () {
            self.opt.is_shown = false;
            self.dom.$btn = self.dom.$block.querySelector('.actions-block__btn');
            self.dom.$btn.addEventListener('click', self.toggle, false);
            self.dom.$block.addEventListener("keydown", self.on_key_down, false);
            if (self.dom.$block.querySelector('.actions-block__list')) {
                [].slice.call(self.dom.$block.querySelectorAll('.actions-block__list .actions-block__options-btn[data-async]')).forEach(($link) => {
                    $link.addEventListener('click', (e) => {
                        e.preventDefault();
                        $link.setAttribute('data-load', '');
                        let url = $link.href,
                            params = window.parse_json($link.dataset['params']);
                        let xhr = new XHR({
                            url: url,
                            data: params,
                            success_callback: ((string) => {
                                let response = window.parse_json(string);
                                if (response['status'] === 'success') {
                                    $link.style.color = '#7CB342';
                                    setTimeout(() => {
                                        $link.removeAttribute('style');
                                    }, 3000);
                                    if (response['result'] && response['result']['actionsBlock']) {
                                        let actionsBlock = response['result']['actionsBlock'];
                                        if (actionsBlock && actionsBlock['link'] && actionsBlock['link']['url']) {
                                            if (actionsBlock['link']['name'] || actionsBlock['link']['params']) {
                                                window.open(
                                                    actionsBlock['link']['url'],
                                                    actionsBlock['link']['name'] || '',
                                                    actionsBlock['link']['params'] || '',
                                                );
                                            } else {
                                                window.location.href = actionsBlock['link']['url'];
                                            }
                                        }
                                    }
                                } else {
                                    $link.style.color = '#ef5350';
                                    setTimeout(() => {
                                        $link.removeAttribute('style');
                                    }, 3000);
                                }
                            }),
                            errors_callback: (() => {
                                $link.style.color = '#ef5350';
                                setTimeout(() => {
                                    $link.removeAttribute('style');
                                }, 3000);
                            }),
                            finish_callback: (() => {
                                $link.removeAttribute('data-load', '');
                            })
                        });
                        xhr.send();
                    });
                });
            }
            App.d.d.addEventListener('click', self.on_outside_click, false);
            App.d.d.addEventListener("keydown", self.on_key_down, false);
            if (self.dom.$btn.disabled) self.disable();
            self.dom.$block.js = self;
            App.h.trigger(self.dom.$block, 'is-ready');
        };
        self.initiate = function () {
            self.dom.$block = $block;
            if (!self.dom.$block) {
                self = null;
                return false;
            }
            self.render();
        };
        self.initiate();
        return self;
    };
    /**
     * Элемент ввода и выбора значения из предложенных
     *
     * @namespace App.c.tools
     * @class CompleteBlock
     * @returns {object}
     */
    App.c.tools.CompleteBlock = function ($block) {
        let self = this;

        self.opt = {};
        self.dom = {};
        self.enable = function () {
            self.dom.$field.disabled = false;
            self.dom.$value_field.disabled = false;
            //self.dom.$block.removeAttribute('data-disabled');
            App.h.trigger(self.dom.$block, 'is-enabled');
        };
        self.disable = function () {
            self.opt.is_shown = false;
            self.dom.$block.removeAttribute('data-is-shown');
            self.dom.$field.disabled = true;
            self.dom.$value_field.disabled = true;
            //self.dom.$block.setAttribute('data-disabled', '');
            App.h.trigger(self.dom.$block, 'is-disabled');
        };
        self.show = function () {
            self.opt.is_shown = true;
            self.dom.$block.setAttribute('data-is-shown', '');
            App.h.trigger(self.dom.$block, 'is-shown');
        };
        self.hide = function () {
            self.opt.is_shown = false;
            self.dom.$block.removeAttribute('data-is-shown');
            App.h.trigger(self.dom.$block, 'is-hidden');
            self.on_blur();
        };
        self.on_blur = function () {
            if (!self.opt.selected) {
                self.dom.$value_field.value = '';
                self.dom.$field.value = '';
                App.h.trigger(self.dom.$block, 'is-cleared');
            }
        };
        self.on_key_down = function (e) {
            if (self.opt.is_shown) {
                if (e.which == 27) {
                    self.hide();
                    //self.clear_selected();
                    self.dom.$field.focus();
                    e.stopPropagation();
                    e.preventDefault();
                } else
                /*if (e.which == 9) {
                 self.hide();
                 self.dom.$btn.focus();
                 e.stopPropagation();
                 e.preventDefault();
                 } else*/
                if (e.which == 38) {
                    self.on_arrow_select('up');
                    e.stopPropagation();
                    e.preventDefault();
                } else if (e.which == 40) {
                    self.on_arrow_select('down');
                    e.stopPropagation();
                    e.preventDefault();
                } else if (e.which == 13) {
                    self.hide();
                    App.h.trigger(self.dom.$block, 'is-entered');
                    App.h.trigger(self.dom.$block, 'is-selected');
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
        };
        self.on_outside_click = function (e) {
            if (!self.opt.is_shown) return false;
            var is_target_block = (e.target == self.dom.$block),
                has_target_block = App.h.has_parent(e.target, self.dom.$block);

            if (!is_target_block && !has_target_block) {
                self.hide();
                //self.clear_selected();
            }
        };
        self.on_outside_key_down = function (e) {
            if (self.opt.is_shown) {
                if (e.which == 27) {
                    self.hide();
                    //self.clear_selected();
                    self.dom.$field.focus();
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
        };
        self.on_response = function (response) {
            //setTimeout(function(){
            self.dom.$block.removeAttribute('data-is-loading');
            let value = this;

            response = JSON.parse(response);
            if (response['status'] == 'success') self.render_options(response['result']['list'], value);
            else self.hide();
            //}, 300);
        };
        self.on_input = function () {
            self.opt.selected = null;
            App.h.trigger(self.dom.$block, 'is-typing');
            let value = self.dom.$field.value.trim();

            clearTimeout(self.opt.interval);
            if (value == '') {
                App.h.trigger(self.dom.$block, 'is-cleared');
                self.clear_list();
                self.hide();
                return false;
            }
            self.opt.interval = setTimeout(function () {
                self.clear_list();
                self.dom.$block.setAttribute('data-is-loading', '');
                let select = false,
                    filter = [[self.opt.name, 'like', '%' + value + '%']];
                if (self.opt.filter) {
                    filter.push(self.opt.filter);
                }
                let data = {};
                if (self.opt.params) {
                    data = self.opt.params;
                    if (!data) {
                        data = {};
                    }
                }
                if (filter) {
                    data['filter'] = filter;
                }
                if (!data['order']) {
                    data['order'] = ['name', 'asc'];
                }
                if (self.opt.limit) {
                    data['limit'] = self.opt.limit;
                }
                if (self.opt.select) {
                    select = self.opt.select;
                }
                if (select) {
                    data['select'] = select;
                }
                if (self.opt.has) {
                    data['has'] = self.opt.has;
                }
                if (self.opt.with) {
                    data['with'] = self.opt.with;
                }
                let xhr = new XHR({
                    url: self.opt.url,
                    data: data,
                    success_callback: self.on_response.bind(value)
                });
                xhr.send();
            }, 800);
        };
        self.on_select = function (e) {
            let option = this;

            if (!option) return false;
            App.h.i(self.opt.options, function (option_object) {
                option_object.$node.classList.remove('complete-block__option-btn_selected');
            });
            option.$node.classList.add('complete-block__option-btn_selected');
            self.opt.selected = option;
            self.dom.$value_field.value = option.value;
            self.dom.$field.value = option.title;
            if (e && e.type == 'click') {
                if (option.data['coordinates']) {
                    self.dom.$block.dataset['coords'] = option.data['coordinates'];
                }
                /*e.preventDefault();
                 e.stopPropagation();*/
                self.dom.$field.focus();
                self.hide();
                App.h.trigger(self.dom.$block, 'is-selected');
            }
            App.h.trigger(self.dom.$block, 'is-changed');
        };
        self.on_arrow_select = function (direction) {
            let index = self.opt.options.indexOf(self.opt.selected),
                new_index = index + ((direction == 'up') ? -1 : 1);

            if (!self.opt.selected || index == -1 || !self.opt.options[new_index]) {
                index = (direction == 'up') ? self.opt.options.length - 1 : 0;
                self.opt.selected = self.opt.options[index];
            } else {
                self.opt.selected = self.opt.options[new_index];
            }
            self.on_select.call(self.opt.selected);
        };
        self.clear_selected = function () {
            self.opt.selected = null;
            self.dom.$value_field.value = '';
        };
        self.clear_list = function () {
            self.dom.$block.removeAttribute('data-is-loading');
            App.h.i(self.opt.options, function (option_object) {
                App.h.remove_node(option_object.$node);
                option_object = null;
            });
            self.opt.options = [];
            self.clear_selected();
        };
        self.render_options = function (input, value) {
            if (!input || input.length <= 0) {
                if (self.opt.options.length > 0) {
                    self.show();
                } else {
                    self.hide();
                }
                return;
            }
            self.clear_list();
            if (input) self.opt.options_data = input;
            //console.info('CompleteBlock', self.opt.options_data);
            App.h.i(self.opt.options_data, function (option_data, option_index) {
                if (option_index < self.opt.limit) {
                    let option = {};
                    option.data = option_data;
                    if (option.data['Section'] && option.data['Section']['name'] && option.data['Section']['name'] !== option.data['name']) {
                        option.title = option.data['Section']['name'] + ' ' + option.data['name'];
                    } else {
                        option.title = option.data['name'];
                    }
                    option.value = option.data['id'];
                    option.$title = option.title.replace(new RegExp(value, 'gi'), '<b>' + value + '</b>');
                    if (self.dom.$option) {
                        option.$node = self.dom.$option.cloneNode(true);
                        option.$node_cap = option.$node.querySelector('.btn__cap');
                        if (option.$node_cap) option.$node_cap.innerHTML = option.$title;
                    } else {
                        option.$node = App.h.get_node('btn complete-block__option-btn', '', 'button');
                        option.$node.type = 'button';
                        option.$node.tabIndex = '-1';
                        option.$node_cap = App.h.get_node('btn__cap', option.$title, 'span');
                    }
                    option.$node.title = option.title;
                    option.$node.appendChild(option.$node_cap);
                    self.dom.$list.appendChild(option.$node);
                    option.$node.addEventListener('click', self.on_select.bind(option), false);
                    self.opt.options.push(option);
                    App.h.trigger(self.dom.$block, 'new-option', option);
                }
            });
            if (!(self.opt.options_data.length > 0)) self.hide();
            else self.show();
        };
        self.render = function () {
            self.opt.url = self.dom.$block.getAttribute('data-url') || false;
            self.opt.options = App.h.get_json(self.dom.$block.getAttribute('data-options'));
            self.opt.params = App.h.get_json(self.dom.$block.getAttribute('data-params'));
            self.opt.name = (self.opt.options && self.opt.options['name']) ? self.opt.options['name'] : 'name';
            self.opt.limit = (self.opt.options && self.opt.options['limit']) ? parseInt(self.opt.options['limit']) : 20;
            self.opt.filter = (self.opt.options && self.opt.options['filter']) ? self.opt.options['filter'] : false;
            self.opt.select = (self.opt.options && self.opt.options['select']) ? self.opt.options['select'] : false;
            self.opt.has = (self.opt.options && self.opt.options['has']) ? self.opt.options['has'] : false;
            self.opt.with = (self.opt.options && self.opt.options['with']) ? self.opt.options['with'] : false;
            self.opt.options_data = [];
            self.opt.is_shown = false;
            self.opt.selected = null;
            self.opt.options = [];
            self.opt.interval = null;
            self.dom.$value_field = self.dom.$block.querySelector('.complete-block__value-field');
            self.dom.$field = self.dom.$block.querySelector('.complete-block__field');
            self.dom.$list = self.dom.$block.querySelector('.complete-block__list');
            self.dom.$option = null;
            if (!self.dom.$list) {
                self.dom.$list = App.h.get_node('complete-block__list', '', '');
                self.dom.$block.querySelector('.complete-block__grp').appendChild(self.dom.$list);
            } else {
                if (self.dom.$list.querySelector('.complete-block__option-btn')) {
                    self.dom.$option = App.h.detach(self.dom.$list.querySelector('.complete-block__option-btn'));
                }
            }
            self.dom.$field.addEventListener("keydown", self.on_key_down, false);
            //self.dom.$block.addEventListener("blur", self.on_blur, false);
            App.d.d.addEventListener('click', self.on_outside_click, false);
            App.d.d.addEventListener("keydown", self.on_outside_key_down, false);
            if (!self.opt.url) {
                self.disable();
            } else if (self.opt.url == 'javascript:void(0);') {

            } else {
                self.dom.$field.addEventListener("input", self.on_input, false);
            }
            self.dom.$block.js = self;
            self.dom.$block.addEventListener('to-hide', () => {
                self.hide();
            });
            self.dom.$block.addEventListener('to-show', () => {
                self.show();
            });
            App.h.trigger(self.dom.$block, 'is-ready');
        };
        self.initiate = function () {
            self.dom.$block = $block;
            if (!self.dom.$block) {
                self = null;
                return false;
            }
            self.render();
        };
        self.initiate();
        return self;
    };
    /**
     * Элемент для работы с полем выбора даты
     * @requires lib-calendar.js
     * @namespace App.c.tools
     * @class CalendarBlock
     * @returns {object}
     */
    App.c.tools.CalendarBlock = function ($block) {
        var self = this;

        self.dom = {};
        self.opt = {};
        self.disable = function () {
            self.dom.$native_field.disabled = true;
            self.dom.$field.disabled = true;
            self.dom.$btn.disabled = true;
            App.h.trigger(self.dom.$block, 'is-disabled');
        };
        self.enable = function () {
            self.opt.is_initialy_disabled = false;
            if (isMobile.any) {
                self.dom.$native_field.disabled = false;
                self.dom.$field.disabled = true;
            } else {
                self.dom.$field.disabled = false;
                self.dom.$native_field.disabled = false;
            }
            self.dom.$btn.disabled = false;
            App.h.trigger(self.dom.$block, 'is-enabled');
        };
        self.if_mobile = function () {
            self.dom.$native_field.disabled = false;
            self.dom.$native_field.tabIndex = 0;
            self.dom.$native_field.style.display = 'block';
            self.dom.$field.disabled = true;
            self.dom.$field.tabIndex = -1;
            self.dom.$field.style.display = 'none';
        };
        self.if_desktop = function () {
            self.dom.$field.disabled = false;
            self.dom.$native_field.disabled = false;
            self.dom.$native_field.tabIndex = -1;
            self.dom.$native_field.style.display = 'none';
        };
        self.initiate_calendar = function () {
            if (self.dom.$native_field.value.trim() != '') {
                self.opt.prefilled_native_value = self.dom.$native_field.value.trim();
            }
            self.opt.use_time = self.dom.$block.classList.contains('calendar-block_time');
            let pikaday = {
                field: self.dom.$field,
                onSelect: function () {
                    self.dom.$field.value = App.h.get_date_string(this.getDate(), self.opt.use_time);
                    self.dom.$native_field.value = App.h.get_date_input_string(this.getDate(), self.opt.use_time);
                    if (!self.opt.is_initialy_disabled) App.h.trigger(self.dom.$block, 'is-changed');
                },
                onOpen: function () {
                    if (!self.opt.use_time) {
                        if (self.opt.calendar.el.querySelector('.pika-time-container')) {
                            self.opt.calendar.el.querySelector('.pika-time-container').style.display = 'none';
                            self.opt.calendar.adjustPosition();
                        }
                    }
                },
                onClose: function () {
                    if (!self.opt.use_time) {
                        if (self.opt.calendar.el.querySelector('.pika-time-container')) {
                            self.opt.calendar.el.querySelector('.pika-time-container').removeAttribute('style');
                        }
                    }
                },
                firstDay: 1,
                i18n: {
                    previousMonth: '<',
                    nextMonth: '>',
                    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                    weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                    weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
                }
            };
            if (self.dom.$block.classList.contains('calendar-block_time')) {
                pikaday['showTime'] = true;
                pikaday['showMinutes'] = true;
                pikaday['use24hour'] = true;
                pikaday['incrementHourBy'] = 1;
                pikaday['incrementMinuteBy'] = 10;
                pikaday['timeLabel'] = 'Время:';
            }
            self.opt.calendar = new Pikaday(pikaday);
            if (self.opt.prefilled_native_value != '') {
                self.opt.calendar.setDate(new Date(self.opt.prefilled_native_value));
            } else {
                let date = new Date(),
                    day = date.getDate(),
                    month = date.getMonth() + 1,
                    year = date.getFullYear();
                if (day < 10) day = '0' + day;
                if (month < 10) month = '0' + month;
                let init = `${year}-${month}-${day}`;
                if (self.dom.$block.classList.contains('calendar-block_time')) {
                    init += 'T00:00';
                }
                self.opt.calendar.setDate(init);
                self.dom.$native_field.value = '';
                self.dom.$field.value = '';
            }
        };
        self.clear_field = function () {
            if (self.opt.calendar && typeof self.opt.calendar.setDate === 'function') self.opt.calendar.setDate(new Date());
            self.opt.prefilled_native_value = '';
            self.dom.$native_field.value = '';
            self.dom.$field.value = '';
        };
        self.render = function () {
            self.opt.calendar = null;
            self.opt.prefilled_native_value = '';
            self.dom.$native_field = self.dom.$block.querySelector('.calendar-block__native-field');
            self.dom.$field = self.dom.$block.querySelector('.calendar-block__field');
            self.dom.$btn = self.dom.$block.querySelector('.calendar-block__btn');
            self.dom.$btn.onclick = self.clear_field;
            self.opt.is_initialy_disabled = self.dom.$native_field.disabled;
            self.dom.$native_field.addEventListener('errors-show', function () {
                self.dom.$block.querySelector('.calendar-block__grp').classList.add('field_is-error');
            });
            if (isMobile.any) {
                self.if_mobile();
            } else {
                self.if_desktop();
                self.initiate_calendar();
            }
            if (self.opt.is_initialy_disabled) self.disable();
            self.dom.$block.js = self;
            App.h.trigger(self.dom.$block, 'is-ready');
        };
        self.initiate = function () {
            self.dom.$block = $block;
            if (!self.dom.$block) {
                self = null;
                return false;
            }
            self.render();
        };
        self.initiate();
        return self;
    };
    /**
     * Элемент табов
     *
     * @namespace App.c.tools
     * @class Tabs
     * @returns {object}
     */
    App.c.tools.Tabs = function ($block) {
        var self = this;

        self.opt = {};
        self.dom = {};
        self.reset_links = function () {
            App.h.i(self.dom.$links, function ($node) {
                $node.classList.remove('tabs__link_active');
            });
        };
        self.reset_tabs = function () {
            App.h.i(self.dom.$tabs, function ($node) {
                $node.classList.remove('tabs__tab_is-shown');
            });
        };
        self.on_click = function () {
            var $link = this;

            self.reset_links();
            self.reset_tabs();
            if (self.opt.togglable && self.opt.active_tab_id === $link.getAttribute('data-tab')) {
                self.opt.active_tab_id = false;
                self.dom.$active_tab = false;
            } else {
                self.opt.active_tab_id = $link.getAttribute('data-tab');
                self.dom.$active_tab = self.dom.$block.querySelector('[data-tab-id=' + self.opt.active_tab_id + ']');
                var $target = self.dom.$block;
                if (self.dom.$separate_links) $target = self.dom.$separate_links;
                App.h.i($target.querySelectorAll('[data-tab=' + self.opt.active_tab_id + ']'), function ($node) {
                    $node.classList.add('tabs__link_active');
                    App.h.trigger($node, 'is-tab-click');
                });
                if (!self.dom.$active_tab) {
                    console.error('Таб с таким data-tab-id не найден');
                    return false;
                }
                self.dom.$active_tab.classList.add('tabs__tab_is-shown');
            }
        };
        self.show_all = function () {
            App.h.i(self.dom.$tabs, function ($node) {
                $node.classList.add('tabs__tab_is-shown');
            });
            self.dom.$toggle_btn.style.display = 'none';
        };
        self.render = function () {
            self.opt.togglable = self.dom.$block.classList.contains('tabs_toggle');
            self.opt.active_tab_id = App.d.w.location.hash.replace(/[\s#]/, '') || false;

            self.dom.$separate_links = null;
            if (self.dom.$block.hasAttribute('data-tab-links')) {
                self.dom.$separate_links = document.querySelector('.' + self.dom.$block.getAttribute('data-tab-links'));
            }
            if (self.dom.$separate_links) {
                self.dom.$links = self.dom.$separate_links.querySelectorAll('.tabs__link');
            } else {
                self.dom.$links = self.dom.$block.querySelectorAll('.tabs__link');
            }
            self.dom.$tabs = self.dom.$block.querySelectorAll('.tabs__tab');
            self.dom.$toggle_btn = self.dom.$block.querySelector('.tabs__toggle-btn');
            if (self.dom.$separate_links) {
                self.dom.$active_link = self.dom.$separate_links.querySelector('[data-tab=' + self.opt.active_tab_id + ']');
            } else {
                self.dom.$active_link = self.dom.$block.querySelector('[data-tab=' + self.opt.active_tab_id + ']');
            }
            if (self.opt.active_tab_id && self.dom.$active_link) {
                App.h.remove_location_hash();
                self.reset_links();
                self.dom.$active_link.classList.add('tabs__link_active');
            } else {
                if (self.dom.$separate_links) {
                    self.dom.$active_link = self.dom.$separate_links.querySelector('.tabs__link_active');
                } else {
                    self.dom.$active_link = self.dom.$block.querySelector('.tabs__link_active');
                }
                if (self.dom.$active_link) {
                    self.opt.active_tab_id = self.dom.$active_link.getAttribute('data-tab');
                }
            }
            if (!self.dom.$active_link && !self.opt.togglable) {
                self.dom.$active_link = self.dom.$links[0];
                if (!self.dom.$active_link) {
                    console.error('Tabs', 'куда ты дел табы, Карл??');
                    return false;
                }
                self.dom.$active_link.classList.add('tabs__link_active');
                self.opt.active_tab_id = self.dom.$active_link.getAttribute('data-tab');
            }
            if (self.opt.active_tab_id) {
                self.dom.$active_tab = self.dom.$block.querySelector('[data-tab-id=' + self.opt.active_tab_id + ']');
                self.reset_tabs();
                self.dom.$active_tab.classList.add('tabs__tab_is-shown');
            }
            App.h.i(self.dom.$links, function ($node) {
                $node.addEventListener('click', self.on_click, false);
                $node.addEventListener('is-click', self.on_click, false);
            });
            if (self.dom.$toggle_btn) self.dom.$toggle_btn.addEventListener('click', self.show_all, false);
        };
        self.initiate = function () {
            self.dom.$block = $block;
            if (!self.dom.$block) {
                self = null;
                return false;
            }
            self.render();
            self.dom.$block.js = self;
        };
        self.initiate();
        return self;
    };
    /**
     * Элемент для работы с модальными окнами
     *
     * @namespace App.c.tools
     * @class ModalContainer
     * @returns {object}
     */
    App.c.tools.ModalContainer = function () {
        var self = this;

        self.opt = {};
        self.dom = {};
        self.append_modal = function () {
            var $modal = this;

            self.dom.$cell.appendChild($modal);
            $modal.is_moved = true;
            App.h.i($modal.querySelectorAll('.modal__close-action'), function ($node) {
                $node.addEventListener('click', self.hide, false);
            });
        };
        self.read_options = function () {
            var $modal = this;

            if ($modal.options.background_color) self.dom.$back.style.backgroundColor = $modal.options.background_color;
            else self.dom.$back.removeAttribute('style');
            if ($modal.options.close_on_outer_click == false) self.opt.close_on_outer_click = false;
            else self.opt.close_on_outer_click = true;
        };
        self.freeze_page = function () {
            self.opt.scroll_amount = App.d.w.pageYOffset;
            self.dom.$page.style.position = 'fixed';
            self.dom.$page.style.left = '0px';
            self.dom.$page.style.top = -1 * self.opt.scroll_amount + 'px';
            self.dom.$container.style.display = 'block';
            self.dom.$page.style.width = '100%';
            self.dom.$page.style.height = (self.opt.scroll_amount + self.opt.viewport_height) + 'px';
            self.dom.$page.style.overflow = 'hidden';
            self.dom.$page.style.zIndex = 1;
            //if (!no_calculating && !self.opt.reopen) {}
        };
        self.hide_modals = function () {
            App.h.i(self.dom.$cell.children, function ($node) {
                $node.style.display = 'none';
            });
        };
        self.show = function ($modal) {
            if (self.opt.is_blocked) return false;
            if (!$modal || !($modal instanceof HTMLElement)) {
                console.error('Modal: $modal не передан или не является node элементом');
                return false;
            }
            self.opt.is_blocked = true;
            if (!$modal.is_moved) self.append_modal.call($modal);
            if ($modal.options) self.read_options.call($modal);
            else self.read_options.call({options: {}});
            if (self.opt.is_shown && self.opt.$active_modal) {
                self.opt.modals_pull.push(self.opt.$active_modal);
                self.hide_modals();
            } else {
                self.freeze_page();
            }
            $modal.style.display = 'block';
            self.opt.$active_modal = $modal;
            App.d.w.scrollTo(0, 0);
            setTimeout(function () {
                self.dom.$container.setAttribute('data-is-shown', '');
                self.opt.is_shown = true;
                App.h.trigger($modal, 'is-shown');
                self.opt.is_blocked = false;
            }, 50);
        };
        self.hide = function (silent) {
            if (typeof silent !== Boolean) {
                silent = false;
            }
            if (self.opt.is_blocked) return false;
            if (self.opt.modals_pull.length > 0) {
                var last_index = self.opt.modals_pull.length - 1,
                    $modal = self.opt.modals_pull[last_index];

                self.hide_modals();
                App.h.trigger(self.opt.$active_modal, 'is-hidden');
                self.opt.$active_modal = null;
                self.opt.is_blocked = false;
                App.h.remove_from_array(self.opt.modals_pull, $modal);
                self.show($modal);
                return false;
            }
            self.opt.is_blocked = true;
            self.dom.$container.removeAttribute('data-is-shown');
            setTimeout(function () {
                self.hide_modals();
                self.dom.$container.style.display = 'none';
                self.dom.$page.removeAttribute('style');
                App.d.w.scrollTo(0, self.opt.scroll_amount);
                self.opt.is_shown = false;
                if (!silent) App.h.trigger(self.opt.$active_modal, 'is-hidden');
                self.opt.$active_modal = null;
                self.opt.is_blocked = false;
            }, 200);
        };
        self.on_out_click_start = function (e) {
            self.opt.click_out = !!(self.opt.is_shown && (e.target == self.dom.$wrp || e.target == self.dom.$cell));
        };
        self.on_out_click_end = function (e) {
            //console.debug(self.opt.close_on_outer_click, self.opt.click_out, self.opt.is_shown, e.target);
            if (e.which === 3 || e.button === 2) {
                self.opt.click_out = false;
            }
            if (self.opt.close_on_outer_click &&
                self.opt.click_out &&
                self.opt.is_shown &&
                (e.target == self.dom.$wrp || e.target == self.dom.$cell)
            ) self.hide();
            self.opt.click_out = false;
        };
        self.on_key_down = function (e) {
            if (self.opt.is_shown && e.which == 27) self.hide();
        };
        self.on_resize = function () {
            self.opt.viewport_height = App.d.w.innerHeight;
            if (self.opt.is_shown) self.dom.$container.style.minHeight = self.opt.viewport_height + 'px';
        };
        self.render = function () {
            self.dom.$page = App.d.d.getElementById('page');
            self.dom.$container = App.h.get_node('modal-container');
            self.dom.$back = App.h.get_node('modal-container__back');
            self.dom.$wrp = App.h.get_node('modal-container__wrp');
            self.dom.$cell = App.h.get_node('modal-container__cell');
            self.dom.$wrp.appendChild(self.dom.$cell);
            self.dom.$container.appendChild(self.dom.$back);
            self.dom.$container.appendChild(self.dom.$wrp);
            self.dom.$container.style.display = 'none';
            App.d.b.appendChild(self.dom.$container);
            if (isMobile.any) {
                App.d.b.addEventListener("touchstart", self.on_out_click_start, false);
                App.d.b.addEventListener("touchend", self.on_out_click_end, false);
                App.d.b.addEventListener("touchcancel", self.on_out_click_end, false);
            } else {
                App.d.b.addEventListener("mousedown", self.on_out_click_start, false);
                App.d.b.addEventListener("mouseup", self.on_out_click_end, false);
                App.d.d.addEventListener("keydown", self.on_key_down, false);
            }
            App.d.w.addEventListener('resize', self.on_resize, false);
        };
        self.initiate = function () {
            self.render();
            self.opt.is_shown = false;
            self.opt.click_out = false;
            self.opt.close_on_outer_click = true;
            self.opt.active_modal = null;
            self.opt.viewport_height = App.d.w.innerHeight;
            self.opt.scroll_amount = null;
            self.opt.is_blocked = false;
            self.opt.modals_pull = [];
        };
        self.initiate();
        return self;
    };
    /**
     * Рейтинг
     * Состоит из 5 звёзд. Баллы от 0 до 10. Заполненность звёзд зависит от кол-ва баллов
     *
     * @namespace App.c.tools
     * @class Rating
     * @returns {object}
     */
    App.c.tools.Rating = function ($block) {
        var self = this;

        self.opt = {};
        self.dom = {};
        /**
         * Возвращает SVG тег с указанным классом
         *
         * @namespace App.c.tools.Rating
         * @class get_svg_node
         *
         * @param {string} tag — Тег
         * @param {string} class_name — Класс
         * @returns {object}
         */
        self.get_svg_node = function (tag, class_name) {
            class_name = class_name || null;
            tag = tag || 'svg';
            var $node = App.d.d.createElementNS('http://www.w3.org/2000/svg', tag);

            if (class_name) $node.classList.add(class_name);
            return $node;
        };
        /**
         * Возвращает объект одной звезды, содержащий SVG узлы
         *
         * @namespace App.c.tools.Rating
         * @class get_star
         *
         * @param {number} value — Заполненность звезды
         * @param {number} index — Индекс звезды
         * @returns {object}
         */
        self.prepare_star = function (value) {
            var star = this;

            star.id = 'star-gradient-' + new Date().getTime() + '-' + App.h.get_random_int(10, 100) + star.index;
            star.$svg = star.$icon.querySelector('svg');
            star.$polygon = star.$svg.querySelector('polygon');
            star.$polygon.setAttribute('fill', 'url(#' + star.id + ')');
            star.$polygon.setAttribute('style', self.opt.$stroke);
            star.$gradient = self.get_svg_node('linearGradient');
            star.$gradient.setAttribute('id', star.id);
            star.$defs = self.get_svg_node('defs');
            if (star.star_percentage == 0) {
                star.$stop_1 = self.get_svg_node('stop');
                star.$stop_1.setAttribute('offset', '0%');
                star.$stop_1.setAttribute('style', 'stop-color:' + self.opt.bg_color + ';');
                star.$gradient.appendChild(star.$stop_1);
                star.$stop_2 = self.get_svg_node('stop');
                star.$stop_2.setAttribute('offset', '100%');
                star.$stop_2.setAttribute('style', 'stop-color:' + self.opt.bg_color + ';');
                star.$gradient.appendChild(star.$stop_2);
            } else if (star.star_percentage == 100) {
                star.$stop_1 = self.get_svg_node('stop');
                star.$stop_1.setAttribute('offset', '0%');
                star.$stop_1.setAttribute('style', 'stop-color:' + self.opt.fg_color + ';');
                star.$gradient.appendChild(star.$stop_1);
                star.$stop_2 = self.get_svg_node('stop');
                star.$stop_2.setAttribute('offset', '100%');
                star.$stop_2.setAttribute('style', 'stop-color:' + self.opt.fg_color + ';');
                star.$gradient.appendChild(star.$stop_2);
            } else {
                star.$stop_1 = self.get_svg_node('stop');
                star.$stop_1.setAttribute('offset', '0%');
                star.$stop_1.setAttribute('style', 'stop-color:' + self.opt.fg_color + ';');
                star.$gradient.appendChild(star.$stop_1);
                star.$stop_2 = self.get_svg_node('stop');
                star.$stop_2.setAttribute('offset', star.star_percentage + '%');
                star.$stop_2.setAttribute('style', 'stop-color:' + self.opt.fg_color + ';');
                star.$gradient.appendChild(star.$stop_2);
                star.$stop_3 = self.get_svg_node('stop');
                star.$stop_3.setAttribute('offset', star.star_percentage + '%');
                star.$stop_3.setAttribute('style', 'stop-color:' + self.opt.bg_color + ';');
                star.$gradient.appendChild(star.$stop_3);
                star.$stop_4 = self.get_svg_node('stop');
                star.$stop_4.setAttribute('offset', '100%');
                star.$stop_4.setAttribute('style', 'stop-color:' + self.opt.bg_color + ';');
                star.$gradient.appendChild(star.$stop_4);
            }
            star.$defs.appendChild(star.$gradient);
            star.$svg.appendChild(star.$defs);
        };
        /**
         * Очищает список звёзд
         *
         * @namespace App.c.tools.Rating
         * @class clear
         */
        self.clear = function () {
            self.opt.list = [];
        };
        /**
         * Создание и добавление звёзд в DOM древо
         *
         * @namespace App.c.tools.Rating
         * @class render_list
         */
        self.render_list = function () {
            self.clear();
            if (self.dom.$block.hasAttribute('data-monochrome')) {
                self.opt.bg_color = 'rgba(0,0,0,0)';
                self.opt.fg_color = '#333';
                self.opt.$stroke = 'stroke:#333;stroke-width:-1;'
            } else {
                self.opt.bg_color = '#b0bec5';
                self.opt.fg_color = '#ffc107';
                self.opt.$stroke = '';
            }
            self.opt.stars_amount = self.dom.$list.children.length;
            self.opt.max_rating = 10;
            self.opt.rating_percentage = 100 / self.opt.max_rating * self.opt.rating_value;
            self.opt.max_value_per_star = Math.round(100 / self.opt.stars_amount);
            App.h.i(self.dom.$list.children, function ($star, star_i) {
                var star = {};

                star.$icon = $star;
                star.index = star_i;
                if (self.opt.max_value_per_star <= self.opt.rating_percentage) {
                    star.star_value = self.opt.max_value_per_star;
                    self.opt.rating_percentage -= self.opt.max_value_per_star;
                } else {
                    star.star_value = self.opt.rating_percentage;
                    self.opt.rating_percentage = 0;
                }
                star.star_percentage = 100 / self.opt.max_value_per_star * star.star_value;
                self.prepare_star.call(star);
                self.opt.list.push(star);
            });
        };
        self.render = function () {
            if (isNaN(self.opt.rating_value)) return false;
            self.dom.$list = self.dom.$block.querySelector('.rating__stars');
            self.render_list();
        };
        self.initiate = function () {
            self.dom.$block = $block;
            if (!self.dom.$block) {
                self = null;
                return false;
            }
            self.opt.list = [];
            self.opt.rating_value = parseFloat(self.dom.$block.getAttribute('data-rating'));
            self.render();
            self.dom.$block.js = self;
        };
        self.initiate();
        return self;
    };
    /**
     * Заполненность
     * Процент от 0 до 100
     *
     * @namespace App.c.tools
     * @class Occupancy
     * @returns {object}
     */
    App.c.tools.Occupancy = function ($block) {
        var self = this;

        self.opt = {};
        self.dom = {};
        self.render = function () {
            self.dom.$position.style.width = self.opt.occupancy_value + '%';
        };
        self.initiate = function () {
            self.dom.$block = $block;
            if (!self.dom.$block) {
                self = null;
                return false;
            }
            self.opt.occupancy_value = parseFloat(self.dom.$block.getAttribute('data-percent'));
            self.dom.$position = self.dom.$block.querySelector('.occupancy__lvl-position');
            if (self.opt.occupancy_value <= 0) {
                return false;
            }
            self.render();
            self.dom.$block.js = self;
        };
        self.initiate();
        return self;
    };
    /**
     * Экземпляр класса, отвечающий за модальное окно
     *
     * @namespace App
     * @type {object} window
     */
    App.modal = new App.c.tools.ModalContainer();
    /**
     * Экземпляр класса, отвечающий за асинхронные запросы
     *
     * @namespace App
     * @type {object} xhr
     */
    App.xhr = new App.c.tools.XHR();
    /**
     * Набор функций, выполняющийся при загрузке каждой страницы
     *
     * @namespace App.c.blocks
     * @class PageStart
     * @returns {object}
     */
    App.c.blocks.PageStart = function () {
        var self = this;

        self.opt = {};
        self.dom = {};
        /**
         * Отменяет переадресацию по ссылке, если она отключена
         *
         * @namespace App.c.blocks.Preparing
         * @class fix_links
         *
         * @returns {boolean}
         */
        self.fix_links = function () {
            App.d.b.addEventListener('click', function (e) {
                if (e.target.tagName == 'A' && e.target.hasAttribute('data-disabled')) {
                    e.stopPropagation();
                    e.preventDefault();
                    return false;
                }
            }, false);
        };
        self.initiate = function () {
            try {
                self.fix_links();
            } catch (e) {
                console.error('PageStart: ' + e.message + ' / ', e);
            }
            try {
                App.h.i(App.d.d.querySelectorAll('.select-block'), function ($block) {
                    if ($block.classList.contains('lazyload')) {
                        $block.addEventListener('lazybeforeunveil', () => {
                            new App.c.tools.SelectBlock($block);
                        });
                    } else {
                        new App.c.tools.SelectBlock($block);
                    }
                });
            } catch (e) {
                console.error('PageStart: ' + e.message + ' / ', e);
            }
            try {
                App.h.i(App.d.d.querySelectorAll('.input-block'), function ($block) {
                    if ($block.classList.contains('lazyload')) {
                        $block.addEventListener('lazybeforeunveil', () => {
                            new App.c.tools.InputBlock($block)
                        });
                    } else {
                        new App.c.tools.InputBlock($block)
                    }
                });
            } catch (e) {
                console.error('PageStart: ' + e.message + ' / ', e);
            }
            try {
                App.h.i(App.d.d.querySelectorAll('.address-block'), function ($block) {
                    if ($block.classList.contains('lazyload')) {
                        $block.addEventListener('lazybeforeunveil', () => {
                            new App.c.tools.AddressBlock($block);
                        });
                    } else {
                        new App.c.tools.AddressBlock($block);
                    }
                });
            } catch (e) {
                console.error('PageStart: ' + e.message + ' / ', e);
            }
            try {
                App.h.i(App.d.d.querySelectorAll('.password-block'), function ($block) {
                    if ($block.classList.contains('lazyload')) {
                        $block.addEventListener('lazybeforeunveil', () => {
                            new App.c.tools.PasswordBlock($block);
                        });
                    } else {
                        new App.c.tools.PasswordBlock($block);
                    }
                });
            } catch (e) {
                console.error('PageStart: ' + e.message + ' / ', e);
            }
            try {
                App.h.i(App.d.d.querySelectorAll('.calendar-block'), function ($block) {
                    if ($block.classList.contains('lazyload')) {
                        $block.addEventListener('lazybeforeunveil', () => {
                            new App.c.tools.CalendarBlock($block);
                        });
                    } else {
                        new App.c.tools.CalendarBlock($block);
                    }
                });
            } catch (e) {
                console.error('PageStart: ' + e.message + ' / ', e);
            }
            try {
                App.h.i(App.d.d.querySelectorAll('.complete-block'), function ($block) {
                    if ($block.classList.contains('lazyload')) {
                        $block.addEventListener('lazybeforeunveil', () => {
                            new App.c.tools.CompleteBlock($block);
                        });
                    } else {
                        new App.c.tools.CompleteBlock($block);
                    }
                });
            } catch (e) {
                console.error('PageStart: ' + e.message + ' / ', e);
            }
            try {
                App.h.i(App.d.d.querySelectorAll('.actions-block'), function ($block) {
                    if ($block.classList.contains('lazyload')) {
                        $block.addEventListener('lazybeforeunveil', () => {
                            new App.c.tools.ActionsBlock($block);
                        });
                    } else {
                        new App.c.tools.ActionsBlock($block);
                    }
                });
            } catch (e) {
                console.error('PageStart: ' + e.message + ' / ', e);
            }
            try {
                App.h.i(App.d.d.querySelectorAll('.rating'), function ($block) {
                    if ($block.classList.contains('lazyload')) {
                        $block.addEventListener('lazybeforeunveil', () => {
                            new App.c.tools.Rating($block);
                        });
                    } else {
                        new App.c.tools.Rating($block);
                    }
                });
            } catch (e) {
                console.error('PageStart: ' + e.message + ' / ', e);
            }
            try {
                App.h.i(App.d.d.querySelectorAll('.occupancy'), function ($block) {
                    if ($block.classList.contains('lazyload')) {
                        $block.addEventListener('lazybeforeunveil', () => {
                            new App.c.tools.Occupancy($block);
                        });
                    } else {
                        new App.c.tools.Occupancy($block);
                    }
                });
            } catch (e) {
                console.error('PageStart: ' + e.message + ' / ', e);
            }
            try {
                App.h.i(App.d.d.querySelectorAll('.tabs'), function ($block) {
                    if ($block.classList.contains('lazyload')) {
                        $block.addEventListener('lazybeforeunveil', () => {
                            new App.c.tools.Tabs($block);
                        });
                    } else {
                        new App.c.tools.Tabs($block);
                    }
                });
            } catch (e) {
                console.error('PageStart: ' + e.message + ' / ', e);
            }
        };
        self.timing_setup = function () {
            if (!window.performance) {
                return;
            }
            let loadTime = (performance.now() / 1000).toFixed(2);
            self.timing_request('loadTime', loadTime);
            window.addEventListener('beforeunload', () => {
                self.timing_request('visitTime', (performance.now() / 1000 - loadTime).toFixed(2));
            });
        };
        self.timing_request = function (key, value) {
            setTimeout(function () {
                let requestID = document.getElementById('requestID'),
                    requestUrl = '/api/v1/metric/page/load/',
                    requestData,
                    requestSent = false;
                if (!requestID || !requestID.value || !key || !value) {
                    return;
                }
                key = 'element[' + key + ']';
                if (navigator.sendBeacon) {
                    requestData = new FormData();
                    requestData.append('element[id]', requestID.value);
                    requestData.append(key, value);
                    if (navigator.sendBeacon(requestUrl, requestData)) {
                        requestSent = true;
                    }
                }
                if (!requestSent) {
                    requestData = {
                        'element[id]': requestID.value,
                    };
                    requestData[key] = value;
                    new XHR({
                        url: requestUrl,
                        method: 'GET',
                        data: requestData
                    }).send();
                }
            }, 0);
        };
        self.initiate();
        self.timing_setup();
        return {self: self};
    };

    /**
     *  Отдельный метод генерации единичного checkbox
     */
    App.h.prepare_check = function () {
        var o = {};

        o.opt = {};
        o.dom = {};
        o.dom.$block = this;
        o.dom.$field = o.dom.$block.querySelector('.checkbox-block__field');
        o.disable = function () {
            o.dom.$field.disabled = true;
            o.dom.$block.disabled = true;
            o.dom.$block.setAttribute('data-disabled', '');
            App.h.trigger(o.dom.$block, 'is-disabled');
        };
        o.enable = function () {
            o.dom.$field.disabled = false;
            o.dom.$block.disabled = false;
            o.dom.$block.removeAttribute('data-disabled');
            App.h.trigger(o.dom.$block, 'is-disabled');
        };
        o.check = function () {
            o.opt.value = o.dom.$field.value;
            o.dom.$block.checked = true;
            App.h.trigger(o.dom.$block, 'is-checked');
        };
        o.uncheck = function () {
            o.opt.value = o.dom.$field.value;
            o.dom.$block.checked = false;
            App.h.trigger(o.dom.$block, 'is-unchecked');
        };
        o.on_check = function () {
            if (o.dom.$field.checked) o.check();
            else o.uncheck();
            //console.info('CheckboxBlocks: on check', o.dom.$field.checked, o.dom.$block.checked);
        };
        o.opt.value = o.dom.$field.value;
        if (o.dom.$field.disabled) o.disable();
        if (o.dom.$field.checked) o.dom.$block.checked = true;
        else o.dom.$block.checked = false;
        o.dom.$field.addEventListener('click', o.on_check, false);
        o.dom.$block.js = o;
        //console.info('CheckboxBlocks: on ready', o.dom.$field.checked, o.dom.$block.checked);
        App.h.trigger(o.dom.$block, 'is-ready');
    };

    /**
     * Класс, отвечающий за работу чекбоксов
     *
     * @namespace App.c.blocks
     * @class CheckboxBlocks
     * @returns {object}
     */
    App.c.blocks.CheckboxBlocks = function () {
        var self = this;

        self.opt = {};
        self.dom = {};
        self.render = function () {
            App.h.i(self.dom.$blocks, function ($node) {
                App.h.prepare_check.call($node);
            });
        };
        self.initiate = function () {
            self.dom.$blocks = App.d.d.querySelectorAll('.checkbox-block');
            if (!self.dom.$blocks || self.dom.$blocks.length == 0) {
                self = null;
                return false;
            }
            self.render();
        };
        self.initiate();
        return {self: self};
    };
    /**
     * Подтверждение номера телефона
     *
     * @namespace App.c.blocks
     * @class PhoneVerification
     * @returns {object}
     */
    App.c.blocks.PhoneVerification = function () {
        var self = this;

        self.opt = {};
        self.dom = {};
        self.on_timer_tick = function () {
            self.opt.delay -= 1000;
            var time = self.opt.delay;

            time = self.get_time(time);
            if (!time) {
                if (self.opt.interval) clearInterval(self.opt.interval);
                self.on_timer_stop();
                return false;
            }
            self.dom.$timer.textContent = time['minutes'] + ':' + time['seconds'];
        };
        self.on_timer_start = function () {
            self.opt.interval = null;
            if (self.dom.$timer) {
                self.opt.delay = self.opt.delay_default * 60 * 1000;
                self.on_timer_tick();
                self.opt.interval = setInterval(self.on_timer_tick, 1000);
                self.dom.$block.setAttribute('data-state', 'wait');
            }
        };
        self.on_timer_stop = function () {
            self.opt.verified_value = null;
            self.dom.$submit_btn.disabled = false;
            self.dom.$submit_btn.onclick = self.on_repeat_click;
            self.dom.$block.setAttribute('data-state', 'done');
        };
        self.on_repeat_click = function () {
            self.dom.$phone_field.disabled = false;
            self.dom.$phone_field.value = '';
            self.dom.$submit_btn.onclick = self.on_form_submit;
            self.dom.$block.setAttribute('data-state', 'idle');
            self.dom.$phone_field.focus();
            App.h.trigger(self.dom.$block, 'is-repeat');
        };
        self.on_form_success = function () {
            self.dom.$submit_btn.disabled = true;
            self.dom.$phone_field.disabled = true;
            self.opt.is_waiting = true;
            App.h.trigger(self.dom.$block, 'is-verified');
            self.on_timer_start();
        };
        self.on_form_errors = function (e) {
            self.opt.verified_value = null;
            self.dom.$phone_field.classList.add('field_is-error');
            self.dom.$phone_field.trigger_event('errors-show');
            self.dom.$phone_field.focus();
            self.dom.$phone_field.select();
        };
        self.on_form_submit = function (e) {
            e.preventDefault();
            if (!self.opt.form.options || !self.opt.form.options['phone_field_name']) {
                console.error('PhoneVerification: не переданы дополнительные опции');
                return false;
            }
            self.clear_errors();
            var phone_value = self.dom.$phone_field.value.trim().replace(/[^0-9]/g, '');

            if (phone_value == '') {
                self.on_form_errors();
                return false;
            }
            self.opt.verified_value = phone_value;
            self.opt.form.params[self.opt.form.options['phone_field_name']] = phone_value;
            App.h.trigger(self.dom.$form, 'fh:submit', self.opt.form);
        };
        self.stop_timer = function () {
            self.opt.delay = null;
            if (self.opt.interval) clearInterval(self.opt.interval);
            self.opt.verified_value = null;
            self.dom.$submit_btn.disabled = false;
            self.dom.$phone_field.disabled = false;
            self.dom.$submit_btn.onclick = self.on_form_submit;
            self.dom.$block.setAttribute('data-state', 'idle');
            self.dom.$phone_field.focus();
            self.dom.$phone_field.select();
        };
        self.get_time = function (input) {
            if (!input || !(input > 0)) return false;
            var minutes, seconds;

            minutes = '' + Math.floor(input / 60 / 1000);
            if (minutes.length == 1) minutes = '0' + minutes;
            seconds = '' + input / 1000 % 60;
            if (seconds.length == 1) seconds = '0' + seconds;
            return {
                minutes: minutes,
                seconds: seconds
            };
        };
        self.clear_errors = function () {
            self.dom.$phone_field.classList.remove('field_is-error');
            self.dom.$phone_field.trigger_event('errors-hide');
        };
        self.prepare = function () {
            self.dom.$block = this;
            self.opt.interval = null;
            self.opt.is_waiting = false;
            self.dom.$form = App.h.get_node('', '', 'form');
            self.dom.$submit_btn = self.dom.$block.querySelector('.phone-verification__btn');
            self.dom.$phone_field = self.dom.$block.querySelector('.phone-verification__field');
            self.dom.$timer = self.dom.$block.querySelector('.phone-verification__cap-timer');
            self.dom.$form.addEventListener('fh:success', self.on_form_success, false);
            self.dom.$form.addEventListener('fh:error', self.on_form_errors, false);
            self.opt.form = {};
            self.opt.form.url = self.dom.$submit_btn.getAttribute('data-url');
            self.opt.form.options = App.h.get_json(self.dom.$submit_btn.getAttribute('data-options'));
            self.opt.form.params = {};
            self.dom.$submit_btn.onclick = self.on_form_submit;
            self.opt.FH = new App.c.tools.FormHandler({
                $form: self.dom.$form,
                $submit_btn: self.dom.$submit_btn
            });
            self.opt.delay_default = self.opt.form.options['delay'] || 3;
            self.dom.$block.js = self;
            App.h.trigger(self.dom.$block, 'is-ready');
        };
        self.render = function () {
            App.h.i(self.dom.$blocks, function ($node) {
                self.prepare.call($node);
            });
        };
        self.initiate = function () {
            self.dom.$blocks = App.d.d.querySelectorAll('.phone-verification');
            if (!self.dom.$blocks || self.dom.$blocks.length == 0) {
                self = null;
                return false;
            }
            self.render();
        };
        self.initiate();
        return {self: self};
    };
    /* Инициализация. Получение экземпляров блоков. Блоки обособлены друг от друга */
    /* Несинтаксические ошибки будут глушиться и выводиться в консоль, не перекрывая работу других блоков */
    /* Блок с общими для всех страниц субинициализациями - App.c.blocks.Preparing */
    /* Инициализируются все блоки. Те, которые не удовлетворяют условиям будут равны null */
    for (var class_index in App.c.blocks) {
        if (App.c.blocks.hasOwnProperty(class_index)) {
            try {
                var instance = new App.c.blocks[class_index]();

                if (instance.self) {
                    //App.i[class_index] = instance;
                    console.info('class "' + class_index + '" is initiated');
                }
            } catch (e) {
                console.error('error in class "' + class_index + '" ', +e.message, e);
            }
        }
    }
    console.info('initiations end');
    window.bus.emit('common-init');
};

/**
 * Поле Drag'n'drop для загрузки единичного изображения
 *
 * @class SingleBlock
 */
class SingleBlock {
    constructor($node) {
        this.opt = {};
        this.dom = {};
        if (!($node instanceof Element)) {
            console.warn(this.class_name + '.construct', '$node не узел');
            return;
        }
        if ($node.get_instance()) {
            console.warn(this.class_name + '.construct', 'узел уже инициализирован');
            return $node.get_instance();
        }
        this.dom.$block = $node;
        this.handler();
        this.dom.$block.mount_instance(this, true);
    }

    handler() {
        this.dom.$dropzones = this.dom.$block.querySelectorAll(this.node_class + '__dropzone');
        this.dom.$cap = this.dom.$block.querySelector(this.node_class + '__cap');
        this.dom.$text = this.dom.$block.querySelector(this.node_class + '__text');
        this.dom.$field = this.dom.$block.querySelector(this.node_class + '__field');
        this.dom.$field.addEventListener('errors-show', () => {
            this.dom.$block.classList.add('field_is-error');
        });
        this.dom.$field.addEventListener('change', (e) => {
            if (!e) {
                console.warn(this.class_name + '$field.change', 'e не привязан');
                return;
            }
            let file = e.target.files[0],
                type = e.target.dataset['type'] || 'image';
            if (!file) return;

            switch (type) {
                case 'yml':
                    /*if(file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' && file.type !== 'application/vnd.ms-excel' && file.type !== 'application/msexcel' && file.type !== 'application/x-msexcel' && file.type !== 'application/x-ms-excel' && file.type !== 'application/x-excel' && file.type !== 'application/x-dos_ms_excel' && file.type !== 'application/xls' && file.type !== 'application/x-xls' && file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' && file.type !== 'application/msword') {
                        alert("Допустимые типы файлов: xls, xlsx, doc, docx");
                        return;
                    }*/
                    this.render(file, {'caption': file.name, 'preview': 'graphics-active-file.png'});
                    break;
                case 'excel':
                    /*if(file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' && file.type !== 'application/vnd.ms-excel' && file.type !== 'application/msexcel' && file.type !== 'application/x-msexcel' && file.type !== 'application/x-ms-excel' && file.type !== 'application/x-excel' && file.type !== 'application/x-dos_ms_excel' && file.type !== 'application/xls' && file.type !== 'application/x-xls') {
                        alert("Допустимые типы файлов: xls, xlsx");
                        return;
                    }*/
                    this.render(file, {'caption': file.name, 'preview': 'graphics-active-excel.png'});
                    break;
                case 'doc':
                    /*if(file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' && file.type !== 'application/msword') {
                        alert("Допустимые типы файлов: doc, docx");
                        return;
                    }*/
                    this.render(file, {'caption': file.name, 'preview': 'graphics-active-doc.png'});
                    break;
                case 'file':
                    /*if(file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' && file.type !== 'application/vnd.ms-excel' && file.type !== 'application/msexcel' && file.type !== 'application/x-msexcel' && file.type !== 'application/x-ms-excel' && file.type !== 'application/x-excel' && file.type !== 'application/x-dos_ms_excel' && file.type !== 'application/xls' && file.type !== 'application/x-xls' && file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' && file.type !== 'application/msword') {
                        alert("Допустимые типы файлов: xls, xlsx, doc, docx");
                        return;
                    }*/
                    this.render(file, {'caption': file.name, 'preview': 'graphics-active-file.png'});
                    break;
                case 'image':
                    /*if (file.type !== "image/jpeg" && file.type !== "image/png" && file.type !== "image/gif" && file.type !== "image/bmp") {
                        alert("Допустимые типы изображений: jpeg, jpg, png, gif, bmp");
                        return;
                    }*/
                    this.render(file, {});
                    break;
                default:
                    return;
            }
        }, false);
    }

    render(file, option) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            if (e.target.result) {
                Array.prototype.forEach.call(this.dom.$dropzones, (item) => {
                    if (typeof option === 'object') {
                        item = item.querySelector(this.node_class + '__image');
                        if (option.caption) this.dom.$cap.textContent = option.caption;
                        if (option.text) this.dom.$text.textContent = option.text;
                        if (option.preview) {
                            item.setAttribute('src', item.getAttribute('src').replace(/[a-z0-9-_]+\.[a-z0-9]+$/i, option.preview));
                        } else {
                            item.setAttribute('src', e.target.result);
                        }
                        App.h.trigger(this.dom.$block, 'preview-loaded', {data: e.target.result});
                    }
                });
            }
        };
    }
}

SingleBlock.prototype.class_name = 'SingleBlock';
SingleBlock.prototype.node_name = 'single-block';
SingleBlock.prototype.node_class = '.' + SingleBlock.prototype.node_name;

window.addEventListener('load', () => {
    try {
        console.info(SingleBlock.prototype.class_name + '.initiation');
        let $blocks = document.querySelectorAll(SingleBlock.prototype.node_class);

        for (let index in $blocks) {
            if (!$blocks.hasOwnProperty(index)) continue;
            new SingleBlock($blocks[index]);
        }
    } catch (errors) {
        console.error(SingleBlock.prototype.class_name + '.initiation', errors);
    }
}, false);

/**
 * Поле Drag'n'drop для множетсвенной загрузки изображений
 *
 * @class MultipleBlock
 */
class MultipleBlock {
    constructor($node) {
        this.opt = {};
        this.dom = {};
        if (!($node instanceof Element)) {
            console.warn(this.class_name + '.construct', '$node не узел');
            return;
        }
        if ($node.get_instance()) {
            console.warn(this.class_name + '.construct', 'узел уже инициализирован');
            return $node.get_instance();
        }
        this.dom.$block = $node;
        this.dom.$template = this.dom.$block.querySelector(this.node_class + '__template-item div');
        this.dom.$dropzone = this.dom.$block.querySelector(this.node_class + '__dropzone');
        this.dom.$field = this.dom.$block.querySelector(this.node_class + '__field');
        this.dom.$list = this.dom.$block.querySelector(this.node_class + '__list');
        this.dom.$items = [].slice.call(this.dom.$list.querySelectorAll(this.node_class + '__remove'));
        this.dom.$items.forEach(($node) => {
            $node.addEventListener('click', () => {
                let $item = $node.closest_node(this.node_class + '__item');
                $item.setAttribute('data-load', '');
                setTimeout(
                    (() => {
                        this.dom.$list.removeChild($item);
                    }),
                    800
                );
            });
        }, this);
        this.opt.name = this.dom.$field.name;
        this.list_control();
        this.handler();
        this.dom.$block.mount_instance(this, true);
    }

    list_control() {
        if (this.dom.$list.children.length > 0) {
            this.dom.$list.classList.remove(this.node_name + '__list_empty');
        } else {
            this.dom.$list.classList.add(this.node_name + '__list_empty');
        }
    }

    handler() {
        this.dom.$field.addEventListener('change', (e) => {
            if (!e) {
                console.warn(this.class_name + '$field.change', 'e не привязан');
                return;
            }
            if (e.target.files.length === 0) {
                return;
            }
            let $prev_uploaded = [].slice.call(this.dom.$list.querySelectorAll(this.node_class + '__uploaded'));
            $prev_uploaded.forEach(($node) => {
                this.dom.$list.removeChild($node);
                this.dom.$list.classList.add(this.node_name + '__list_empty');
            }, this);
            for (let i = 0; i < e.target.files.length; i++) {
                let file = e.target.files[i];
                if (file.type !== "image/jpeg" && file.type !== "image/png" && file.type !== "image/gif" && file.type !== "image/bmp") {
                    continue;
                }
                //Render result
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                    if (e.target.result) {
                        let $template = this.dom.$template.cloneNode(true);
                        $template.querySelector(this.node_class + '__img').src = e.target.result;
                        $template.querySelector(this.node_class + '__img').alt = file.name;
                        this.dom.$list.appendChild($template);
                        this.dom.$list.classList.remove(this.node_name + '__list_empty');
                    }
                };
            }
        }, false);
    }
}

MultipleBlock.prototype.class_name = 'MultipleBlock';
MultipleBlock.prototype.node_name = 'multiple-block';
MultipleBlock.prototype.node_class = '.' + MultipleBlock.prototype.node_name;

window.addEventListener('load', () => {
    try {
        console.info(MultipleBlock.prototype.class_name + '.initiation');
        let $blocks = document.querySelectorAll(MultipleBlock.prototype.node_class);
        for (let index in $blocks) {
            if (!$blocks.hasOwnProperty(index)) continue;
            new MultipleBlock($blocks[index]);
        }
    } catch (errors) {
        console.error(MultipleBlock.prototype.class_name + '.initiation', errors);
    }
}, false);

/**
 * Элемент выбора расстояния
 *
 * @namespace App.c.tools
 * @class DistanceBlock
 * @returns {object}
 */
App.c.tools.DistanceBlock = function ($block) {
    var self = this;

    self.opt = {};
    self.dom = {};
    self.enable = function () {
        App.h.i(self.dom.$inputs, function ($node) {
            $node.disabled = false;
        });
        self.dom.$block.removeAttribute('data-is-disabled');
        self.dom.$wrp.removeAttribute('data-disabled');
        App.h.trigger(self.dom.$block, 'is-enabled');
    };
    self.disable = function () {
        App.h.i(self.dom.$inputs, function ($node) {
            $node.disabled = true;
        });
        self.dom.$block.setAttribute('data-is-disabled', '');
        self.dom.$wrp.setAttribute('data-disabled', '');
        App.h.trigger(self.dom.$block, 'is-disabled');
    };
    self.change = function () {
        var $label = this,
            $input;

        if (!$label || !$label.classList || !$label.classList.contains('distance-block__point-wrp')) return false;
        $input = $label.querySelector('input');
        if ($input) {
            $input.checked = true;
            $input.focus();
            App.h.trigger(self.dom.$block, 'is-changed');
        }
    };
    self.on_mouse_move = function (e) {
        if (self.opt.is_mouse_down && e.target) {
            self.change.call(e.target);
        }
    };
    self.on_mouse_down = function (e) {
        self.opt.is_mouse_down = true;
        if (self.opt.is_mouse_down && e.target) {
            self.change.call(e.target);
        }
    };
    self.on_mouse_up = function (e) {
        self.opt.is_mouse_down = false;
        e.preventDefault();
    };
    self.on_map_hide = function () {
        self.dom.$btn.focus();
    };
    self.on_map_select = function (e) {
        var coordinates = e.get('coords');

        if (typeof coordinates === 'string') coordinates = App.h.get_coordinates(coordinates);
        if (!coordinates) return false;
        if (self.opt.map_pin) {
            self.opt.map_pin['geometry'].setCoordinates(coordinates);
        } else {
            self.opt.map_pin = new ymaps.Placemark(coordinates, {
                iconContent: 'Поиск...'
            }, {
                preset: 'islands#grayStretchyIcon',
                draggable: true
            });
            self.opt.map['geoObjects'].add(self.opt.map_pin);
            self.opt.map_pin['events'].add('dragend', function () {
                self.get_place(self.opt.map_pin['geometry'].getCoordinates());
            });
        }
        self.opt.map_pin['properties'].set('iconContent', 'Поиск...');
        self.get_place(coordinates);
    };
    self.on_btn_click = function () {
        App.modal.show(self.dom.$modal);
        if (App.d.w.innerWidth < 768) {
            var modal_height = self.dom.$modal.clientHeight,
                heading_height = self.dom.$modal.querySelector('.address-modal__line').clientHeight,
                map_height = modal_height - heading_height;

            self.dom.$modal.querySelector('.address-modal__map').style.height = map_height + 'px';
        }
    };
    self.on_done_click = function () {
        if (!self.opt.place) return false;
        self.dom.$coordinates_field.value = self.opt.place.string_coordinates;
        self.dom.$address_field.value = self.opt.place.title;
        self.enable();
        App.modal.hide();
    };
    self.initiate_map = function (coordinates) {
        coordinates = coordinates || App.h.start_coordinates;
        self.dom.$map = self.dom.$modal.querySelector('.address-modal__map');
        self.dom.$done_btn = self.dom.$modal.querySelector('.address-modal__done-btn');
        self.dom.$done_btn.onclick = self.on_done_click;
        self.dom.$map.id = self.opt.map_id;
        self.opt.map = new ymaps.Map(self.opt.map_id, {
            center: coordinates,
            zoom: 11,
            controls: ['fullscreenControl', 'zoomControl', 'searchControl', 'typeSelector']
        }, {
            searchControlProvider: 'yandex#search'
        });
        self.opt.map['events'].add('click', function (e) {
            self.on_map_select(e);
        });
        if (self.dom.$coordinates_field.value.trim() != '') self.on_map_select({
            get: function () {
                return self.dom.$coordinates_field.value.trim();
            }
        });
        App.h.trigger(self.dom.$block, 'map-initiated');
    };
    self.get_place = function (coordinates) {
        ymaps.geocode(coordinates, {results: 1}).then(function (res) {
            var place = res['geoObjects'].get(0);

            self.dom.$done_btn.disabled = false;
            self.opt.map_pin['properties'].set({
                iconContent: place['properties'].get('name'),
                balloonContent: place['properties'].get('text')
            });
            self.opt.place = {
                data: {
                    name: place['properties'].get('name'),
                    description: place['properties'].get('description')
                },
                title: place['properties'].get('name') + ', ' + place['properties'].get('description'),
                raw_coordinates: coordinates,
                string_coordinates: coordinates[0] + ',' + coordinates[1]
            };
            App.h.trigger(self.dom.$block, 'place-found');
        });
    };
    self.get_location = function () {
        self.opt.location = self.dom.$block.getAttribute('data-location');
        ymaps.ready(function () {
            if (!self.opt.location) self.initiate_map();
            else {
                ymaps.geocode(self.opt.location, {results: 1}).then(function (response) {
                    self.initiate_map(response.geoObjects.get(0).geometry.getCoordinates());
                });
            }
        });
    };
    self.update_location = function (location) {
        if (!location || location.trim() == '') return false;
        self.opt.map.destroy();
        self.get_location();
    };
    self.render = function () {
        self.opt.is_mouse_down = false;
        self.opt.location = null;
        self.opt.map_pin = null;
        self.opt.place = null;
        self.opt.map_id = App.h.get_uniqe_id('map');
        if (isMobile.any) {
            self.dom.$block.addEventListener('touchstart', self.on_mouse_down, {passive: true});
            self.dom.$block.addEventListener('touchmove', self.on_mouse_move, {passive: true});
            App.d.d.addEventListener('touchend touchcancel', self.on_mouse_up, {passive: true});
        } else {
            self.dom.$block.addEventListener('mousedown', self.on_mouse_down, false);
            self.dom.$block.addEventListener('mousemove', self.on_mouse_move, false);
            App.d.d.addEventListener('mouseup', self.on_mouse_up, false);
        }
        self.dom.$wrp = self.dom.$block.querySelector('.distance-block__wrp');
        self.dom.$inputs = self.dom.$block.querySelectorAll('.distance-block__field');
        self.dom.$modal = self.dom.$block.querySelector('.distance-block__modal');
        self.dom.$btn = self.dom.$block.querySelector('.distance-block__delivery-btn');
        if (self.dom.$modal) {
            //console.error('DistanceBlock: $modal не найден');
            if (self.dom.$btn) self.dom.$btn.onclick = self.on_btn_click;
            //todo fields & get_location has been commented
            self.dom.$address_field = null; //self.dom.$block.querySelector('.distance-block__address-field');
            self.dom.$coordinates_field = null; //self.dom.$block.querySelector('.distance-block__coordinates-field');
            self.dom.$modal.addEventListener('is-hidden', self.on_map_hide, false);
            if (self.dom.$coordinates_field && self.dom.$coordinates_field.value.trim() == '') self.disable();
        }
        //self.get_location();
        self.dom.$block.js = self;
        App.h.trigger(self.dom.$block, 'is-ready');
    };
    self.initiate = function () {
        self.dom.$block = $block;
        if (!self.dom.$block) {
            self = null;
            return false;
        }
        self.render();
    };
    self.initiate();
    return self;
};

/**
 * Функционал скрытия больших текстов
 * Интерфейс публичной части
 *
 * @namespace App.c.blocks
 * @class ReadMore
 * @returns {object}
 */
App.c.blocks.ReadMore = function () {
    let self = this;

    self.render = function ($block) {
        let $action = $block.querySelector('.read-more__trigger');
        if ($action) {
            if ($block.scrollHeight > $block.clientHeight || $block.scrollWidth > $block.clientWidth) {
                $action.addEventListener('click', () => {
                    $block.classList.add('read-more_show');
                    $action.remove_node();
                });
            } else {
                $action.remove_node();
            }
        }
        $block.classList.add('read-more_ready');
        $block.js = self;
        App.h.trigger($block, 'is-ready');
    };
    self.initiate = function () {
        let $blocks = App.d.d.querySelectorAll('.read-more');
        for (let index in $blocks) {
            if (!$blocks.hasOwnProperty(index)) continue;
            self.render($blocks[index]);
        }
    };
    self.initiate();
    return self;
};

/**
 * Слайдер
 *
 * @class Slider
 */
class Slider {
    constructor($node) {
        this.opt = {};
        this.dom = {};
        if (!($node instanceof Element)) {
            console.warn(this.class_name + '.construct', '$node не узел');
            return;
        }
        if ($node.get_instance()) {
            console.warn(this.class_name + '.construct', 'узел уже инициализирован');
            return $node.get_instance();
        }
        this.dom.$block = $node;

        if (this.dom.$block.classList.contains(this.node_name + '_content')) {
            this.init_content();
        }

        this.dom.$block.mount_instance(this, true);
    }

    init_content() {
        this.dom.$slider_wrp = this.dom.$block.querySelector(this.node_class + '__wrapper');
        this.dom.$slider_items = this.dom.$block.querySelectorAll(this.node_class + '__item');
        this.dom.$controls = this.dom.$block.querySelectorAll(this.node_class + '__control');
        this.dom.$control_left = this.dom.$block.querySelectorAll(this.node_class + '__control-left');
        this.dom.$control_right = this.dom.$block.querySelectorAll(this.node_class + '__control-right');

        this.opt.no_left_mixin = this.node_name + '_no-left';
        this.opt.no_right_mixin = this.node_name + '_no-right';

        this.refresh();
        this.setup_listeners();
    }

    refresh() {
        this.dom.$slider_wrp.removeAttribute('style');
        this.dom.$slider_items.forEach(($item, index) => {
            $item.removeAttribute('style');
        });

        if (this.dom.$block.classList.contains(this.opt.no_right_mixin)) {
            this.dom.$block.classList.remove(this.opt.no_right_mixin);
        }
        if (this.dom.$block.classList.contains(this.opt.no_left_mixin)) {
            this.opt.transform = 1;
            this.toggle_left_action();
        }

        this.opt.wrp_width = parseFloat(this.dom.$slider_wrp.offsetWidth);
        this.opt.item_width = parseFloat(this.dom.$slider_items[0].offsetWidth);
        this.opt.step = this.opt.item_width / this.opt.wrp_width * 100;
        this.opt.transform = 0;
        this.toggle_left_action();

        this.opt.position_left_item = 0;
        this.opt.items = [];
        this.opt.items_with = 0;
        this.dom.$slider_items.forEach(($item, index) => {
            this.opt.items_with += parseFloat($item.offsetWidth);
            this.opt.items.push({item: $item, position: index, transform: 0});
        });

        if (this.opt.items_with < this.opt.wrp_width) {
            this.dom.$block.classList.add(this.opt.no_right_mixin);
        } else {
            this.dom.$block.classList.remove(this.opt.no_right_mixin);
        }
    }

    position_get_item_min() {
        let indexItem = 0;
        this.opt.items.forEach((item, index) => {
            if (item.position < this.opt.items[indexItem].position) {
                indexItem = index;
            }
        });
        return indexItem;
    }

    position_get_item_max() {
        let indexItem = 0;
        this.opt.items.forEach((item, index) => {
            if (item.position > this.opt.items[indexItem].position) {
                indexItem = index;
            }
        });
        return indexItem;
    }

    position_get_min() {
        return this.opt.items[this.position_get_item_min()].position;
    }

    position_get_max() {
        return this.opt.items[this.position_get_item_max()].position;
    }

    transform_item(direction) {
        let nextItem;
        if (!this.is_element_visible(this.dom.$block)) {
            return;
        }
        if (direction === 'right') {
            this.opt.position_left_item++;
            if ((this.opt.position_left_item + this.opt.wrp_width / this.opt.item_width - 1) > this.position_get_max()) {
                nextItem = this.position_get_item_min();
                this.opt.items[nextItem].position = this.position_get_max() + 1;
                this.opt.items[nextItem].transform += this.opt.items.length * 100;
                this.opt.items[nextItem].item.style.transform = 'translateX(' + this.opt.items[nextItem].transform + '%)';
            }
            this.opt.transform -= this.opt.step;
        }
        if (direction === 'left') {
            this.opt.position_left_item--;
            if (this.opt.position_left_item < this.position_get_min()) {
                nextItem = this.position_get_item_max();
                this.opt.items[nextItem].position = this.position_get_min() - 1;
                this.opt.items[nextItem].transform -= this.opt.items.length * 100;
                this.opt.items[nextItem].item.style.transform = 'translateX(' + this.opt.items[nextItem].transform + '%)';
            }
            this.opt.transform += this.opt.step;
        }
        this.dom.$slider_wrp.style.transform = 'translateX(' + this.opt.transform + '%)';
        this.toggle_left_action();
    }

    toggle_left_action() {
        if (this.opt.transform === 0) {
            this.dom.$block.classList.add(this.opt.no_left_mixin);
        } else {
            this.dom.$block.classList.remove(this.opt.no_left_mixin);
        }
    }

    control_click(e) {
        if (e.target.classList.contains(this.node_name + '__control')) {
            e.preventDefault();
            let direction = e.target.classList.contains(this.node_name + '__control-right') ? 'right' : 'left';
            this.transform_item(direction);
        }
    };

    setup_listeners() {
        this.dom.$controls.forEach(($control) => {
            $control.addEventListener('click', (e) => {
                this.control_click(e);
            });
        });
        window.addEventListener('resize', () => {
            this.refresh();
        });
    }

    is_element_visible(element) {
        let rect = element.getBoundingClientRect(),
            vWidth = window.innerWidth || doc.documentElement.clientWidth,
            vHeight = window.innerHeight || doc.documentElement.clientHeight,
            elemFromPoint = (x, y) => {
                return document.elementFromPoint(x, y)
            };
        if (rect.right < 0 || rect.bottom < 0
            || rect.left > vWidth || rect.top > vHeight)
            return false;
        return (
            element.contains(elemFromPoint(rect.left, rect.top))
            || element.contains(elemFromPoint(rect.right, rect.top))
            || element.contains(elemFromPoint(rect.right, rect.bottom))
            || element.contains(elemFromPoint(rect.left, rect.bottom))
        );
    }
}

Slider.prototype.class_name = 'Slider';
Slider.prototype.node_name = 'slider';
Slider.prototype.node_class = '.' + Slider.prototype.node_name;

(function () {
    try {
        console.info(Slider.prototype.class_name + '.initiation');
        let $blocks = document.querySelectorAll(Slider.prototype.node_class);

        for (let index in $blocks) {
            if (!$blocks.hasOwnProperty(index)) continue;
            new Slider($blocks[index]);
        }
    } catch (errors) {
        console.error(Slider.prototype.class_name + '.initiation', errors);
    }
})();

/**
 * Обработчик форм и ошибок
 * Отвечает за большую часть форм на сайте
 * Интерфейс личного кабинета
 *
 * @class Responser
 */
class Responser {
    constructor(options) {
        this.opt = {};
        this.dom = {};
        if (!options || !options['$form']) {
            return;
        }
        this.dom.$block = options['$form'];
        this.dom.$submit_btn = options['$btn'];
        this.dom.$messages = options['$messages'];
        this.opt.on_load = options['on_load'] || function () {
        };
        this.opt.on_success = options['on_success'] || function () {
        };
        this.opt.on_errors = options['on_errors'] || function () {
        };
        this.opt.on_finish = options['on_finish'] || function () {
        };
        this.opt.test_count = 0;
        this.opt.in_porgress = false;
        this.opt.messages = null;
        if (this.dom.$messages) {
            this.opt.messages = new window.components['Messages'](this.dom.$messages);
        }
        this.dom.$block.mount_instance(this, true);
    }

    destroy() {
        delete this.opt;
        delete this.opt;
    }

    upload(e) {
        //TODO
        if (!e || !e['detail'] || !e['detail']['url']) {
            console.warn(this.class_name + '.upload', 'e не передан');
            return;
        }
        if (this.opt.in_porgress) {
            return;
        }
        this.opt.in_porgress = true;
        //this.on_send();
        let method = e['detail']['method'] || 'POST',
            form_data = new FormData(this.dom.$block);
        let token = App.d.w.get_token();
        if (!e['detail']['params']) e['detail']['params'] = {};
        e['detail']['params'][token['key']] = token['value'];
        App.h.i(e['detail']['params'], function (value, param) {
            form_data.append(param, value);
        });
        App.xhr.upload(e['detail']['url'], form_data, method, this.on_response, e['detail']['on_progress']);
    }

    serialize(obj, prefix) {
        let str = [];
        for (let part in obj) {
            if (!obj.hasOwnProperty(part)) continue;
            let key = prefix ? prefix + "[" + part + "]" : "[" + part + "]",
                val = obj[part];
            str.push((val !== null && typeof val === "object") ?
                this.serialize(val, key) :
                key + "=" + val);
        }
        return str.join('&');
    }

    get_data(form) {
        let form_data = new FormData(this.dom.$block),
            token = App.d.w.get_token();
        if (!form.params) form.params = {};
        form.params[token['key']] = token['value'];
        for (let index in form.params) {
            if (!form.params.hasOwnProperty(index)) continue;
            if (typeof form.params[index] === 'object') {
                this.serialize(form.params[index]).split('&').map(function (value) {
                    value = value.split('=', 2);
                    value[0] = index + value[0];
                    if (value[1] === 'null') value[1] = '';
                    form_data.append(value[0], value[1]);
                });
            } else {
                form_data.append(index, form.params[index]);
            }
        }
        return form_data;
    }

    send(form) {
        if (!form) {
            console.warn(this.class_name + '.send', 'form не передан');
            return;
        }
        if (!form || !form['url']) {
            console.warn(this.class_name + '.send', 'не были переданы необходимые параметры');
            return;
        }
        if (this.opt.in_porgress) {
            return;
        }
        this.opt.in_porgress = true;
        this.on_load();
        let test_delay = form['delay'] || 1000,
            test_success = form['success'] || '{"result":"success","response":{}}',
            test_errors = form['errors'] || '{"result":"errors","response":{}}',
            method = form['method'] || 'POST',
            url = form['url'];
        /*if (window.location.origin === 'file://' && typeof form_data.entries === 'function') {
            let values = {};
            //noinspection JSAnnotator
            for (let pair of form_data.entries()) {
                values[pair[0]] = pair[1];
            }
            console.info(this.class_name + '.send', values);
        }*/
        let xhr = new XHR({
            url: url,
            method: method,
            data: this.get_data(form),
            success_callback: ((string) => {
                let response = window.parse_json(string);
                if (!response) {
                    console.error(this.class_name + '.send', 'сервер ответил невалидной json строкой');
                    //this.on_errors({error_id: null}, null);
                    return;
                }
                if (response['status'] === 'success') {
                    this.on_success(response['result']);
                } else if (response['status'] === 'delay') {
                    //this.on_success(response);
                    console.warn('todo on_delay in responser');
                }
                /*else {
                    this.on_errors({error_id: null}, response);
                }*/
            }),
            errors_callback: ((string) => {
                let response = window.parse_json(string);
                if (!response) {
                    console.error(this.class_name + '.send', 'сервер ответил невалидной json строкой');
                    //this.on_errors({error_id: null}, null);
                    return;
                }
                if (response['status'] === 'error') {
                    this.on_errors({
                        name: response['error']['name'],
                        desc: response['error']['description']
                    }, response);
                    let errors = [];
                    if (response['error']['meta']) {
                        Object.keys(response['error']['meta']).map(function (key) {
                            Object.keys(response['error']['meta'][key]).map(function (k) {
                                errors.push(k);
                            });
                        });
                    }
                    if (errors) {
                        this.show_errors(errors);
                    }
                }
            }),
            finish_callback: (() => {
                this.on_finish();
            })
        });
        /*if (!this.opt.force_request && window.location.origin === 'file://') {
            setTimeout(
                (() => {
                    if (this.opt.test_count % 2 === 0) {
                        xhr.callback('success_callback', test_errors);
                    } else {
                        xhr.callback('success_callback', test_success);
                    }
                    xhr.callback('finish_callback');
                    this.opt.test_count++;
                }),
                test_delay
            );
        } else {
            xhr.send();
        }*/
        xhr.send();
    }

    hide_errors() {
        if (this.opt.messages) {
            this.opt.messages.hide_message();
        }
        for (let index in this.opt.fields) {
            if (!this.opt.fields.hasOwnProperty(index)) continue;
            let $field = this.opt.fields[index];
            $field.classList.remove('field_is-error');
            $field.trigger_event('errors-hide');
        }
        this.opt.fields = {};
    }

    show_errors(names) {
        if (!names) {
            console.warn(this.class_name + '.show_errors', 'names не передан');
            return;
        }
        this.opt.fields = {};
        names.forEach(function (name) {
            let $field = this.dom.$block.querySelector('[name="' + name + '"]');
            if ($field) {
                $field.classList.add('field_is-error');
                $field.trigger_event('errors-show');
                this.opt.fields[name] = $field;
            }
        }, this);
    }

    on_load() {
        this.hide_errors();
        if (this.opt.messages) {
            this.opt.messages.hide_message();
        }
        if (this.dom.$submit_btn) {
            this.dom.$submit_btn.show_loading();
        }
        this.opt.on_load();
    }

    on_finish() {
        if (this.dom.$submit_btn) {
            this.dom.$submit_btn.hide_loading();
        }
        this.opt.in_porgress = false;
        this.opt.on_finish();
    }

    on_success(response) {
        this.opt.on_success(response);
    }

    on_errors(errors, response) {
        if (!errors) {
            console.warn(this.class_name + '.on_errors', 'errors не передан');
            return;
        }
        if (this.opt.messages) {
            this.opt.messages.show_message({
                type: 'error',
                name: errors['name'],
                desc: errors['desc']
            });
        }
        this.opt.on_errors(errors, response);
    }
}

Responser.prototype.class_name = 'Responser';
window.components[Responser.prototype.class_name] = Responser;

/**
 * Модальное окно для чата поставщик - компания
 * Интерфейс публичной части
 *
 * @class ChatBoard
 */
class ChatBoard {
    constructor($node) {
        this.opt = {};
        this.dom = {};
        if (!($node instanceof Element)) {
            console.warn(this.class_name + '.construct', '$node не узел');
            return;
        }
        if ($node.get_instance()) {
            console.warn(this.class_name + '.construct', 'узел уже инициализирован');
            return $node.get_instance();
        }
        this.dom.$block = $node;
        this.dom.$form = this.dom.$block.querySelector(this.node_class + '__board-message');
        this.dom.$field = this.dom.$block.querySelector(this.node_class + '__board-message textarea');
        this.dom.$btn = this.dom.$block.querySelector(this.node_class + '__board-message .btn');
        this.dom.$tmp = App.h.detach(this.dom.$block.querySelector(this.node_class + '__message-tmp'));
        this.dom.$wrp = this.dom.$block.querySelector(this.node_class + '__board-wrp');
        this.dom.$content = this.dom.$block.querySelector(this.node_class + '__board-content');
        this.dom.$back = this.dom.$block.querySelector(this.node_class + '__board-back');
        this.dom.$label = this.dom.$block.querySelector(this.node_class + '__board-label');
        this.dom.$list = this.dom.$block.querySelector(this.node_class + '__list');
        if (this.dom.$list) {
            this.dom.$switch_tmp = App.h.detach(this.dom.$block.querySelector(this.node_class + '__switch-tmp'));
        }
        this.dom.$popup = this.dom.$block.querySelector(this.node_class + '__popup');
        if (this.dom.$popup) {
            this.dom.$popup = App.h.detach(this.dom.$popup);
        }
        this.opt.is_receiver = this.dom.$block.classList.contains(this.node_name + '_receiver');
        if (this.dom.$block.hasAttribute('data-chat-receiver')) {
            this.opt.is_receiver = this.dom.$block.getAttribute('data-chat-receiver');
            this.dom.$block.removeAttribute('data-chat-receiver');
        }
        this.opt.is_modal = this.dom.$block.classList.contains('modal');
        this.opt.is_app = this.dom.$block.classList.contains(this.node_name + '_app');
        this.opt.unseen = 0;
        this.opt.stream = [];
        if (this.dom.$tmp && this.dom.$content) {
            this.dom.$content_tmp = this.dom.$content.cloneNode(true);
            this.opt.$content = this.dom.$content;
            this.opt.$switch = null;
            this.opt.form = {};
            this.opt.data_chat_id = this.opt.is_receiver ? 'data-session-id' : 'data-company-id';
            if (this.dom.$block.hasAttribute('data-chat-id')) {
                this.opt.data_chat_id = this.dom.$block.getAttribute('data-chat-id');
                this.dom.$block.removeAttribute('data-chat-id');
            }
            if (!this.opt.is_receiver) {
                this.prepare_sender();
            } else if (this.opt.is_modal) {
                this.prepare_receiver();
            }
            if (this.dom.$list) {
                this.polyfill_prepend();
                this.prepare_stream();
            }
            this.dom.$block.addEventListener('to-prepare', () => {
                this.prepare_outer_events();
            });
            this.dom.$block.addEventListener('start-stream', () => {
                this.start_stream();
            });
            this.dom.$block.addEventListener('stop-stream', () => {
                this.stop_stream();
            });
            this.prepare_outer_events();
            this.prepare_responser();
            this.prepare_inner_events();
        }
        this.dom.$block.mount_instance(this, true);
    }

    remove_hide($node) {
        $node.classList.remove(this.node_name + '__hide');
    }

    add_hide($node) {
        $node.classList.add(this.node_name + '__hide');
    }

    prepare_sender() {
        this.dom.$person = this.dom.$block.querySelector(this.node_class + '__board-person');
        if (this.dom.$person) {
            this.dom.$person_img = this.dom.$block.querySelector(this.node_class + '__board-person-img');
            this.dom.$person_name = this.dom.$block.querySelector(this.node_class + '__board-person-contact-name > span');
            this.dom.$person_desc = this.dom.$block.querySelector(this.node_class + '__board-person-contact-desc');
            this.dom.$person_status = this.dom.$block.querySelector(this.node_class + '__board-person-contact-name > i');
            this.opt.person_img = this.dom.$person_img.src || '';
        }
        if (this.dom.$block.hasAttribute('data-params-sender')) {
            let sessionID = this.use_sender_storage('get');
            if (sessionID) {
                let params = App.h.get_json(this.dom.$block.getAttribute('data-params-sender'));
                if (params && params.element) {
                    params.element.sessionID = sessionID;
                    setTimeout(() => {
                        this.get_stream(params);
                        if (this.dom.$popup) {
                            this.dom.$popup.addEventListener('click', () => {
                                if (this.dom.$list) {
                                    this.remove_hide(this.dom.$list);
                                }
                                this.dom.$popup.querySelector('.btn__cap').textContent = this.dom.$popup.getAttribute('data-main');
                                App.modal.show(this.dom.$block);
                            });
                            let popup_event = () => {
                                let unseen = this.use_unseen('get');
                                if (unseen) {
                                    document.getElementById('page').appendChild(this.dom.$popup);
                                }
                                this.dom.$block.removeEventListener('unseen-updated', popup_event);
                            };
                            this.dom.$block.addEventListener('unseen-updated', popup_event);
                        }
                    }, 1000);
                }
            }
        }
    }

    prepare_receiver() {
        if (this.dom.$block.hasAttribute('data-params')) {
            setTimeout(() => {
                this.get_stream();
                if (this.dom.$popup) {
                    this.dom.$popup.addEventListener('click', () => {
                        if (!this.opt.$switch) {
                            let $switch = this.dom.$list.querySelector(this.node_class + '__switch' + "[" + this.opt.data_chat_id + "]");
                            if ($switch) {
                                $switch.click();
                            }
                        }
                        App.modal.show(this.dom.$block);
                    });
                    this.opt.is_popup = false;
                    this.dom.$block.addEventListener('unseen-updated', () => {
                        if (!this.opt.is_popup) {
                            document.getElementById('page').appendChild(this.dom.$popup);
                            this.opt.is_popup = true;
                        }
                        let unseen = this.use_unseen('get'),
                            $cap = this.dom.$popup.querySelector('.btn__cap');
                        if (unseen) {
                            $cap.textContent = this.dom.$popup.getAttribute('data-unseen');
                        } else {
                            $cap.textContent = this.dom.$popup.getAttribute('data-main');
                        }
                    });
                }
            }, 1000);
        }
    }

    use_sender_storage($method = 'get', value = null, name = null) {
        let result = null,
            date = new Date();
        if (!name) {
            name = this.class_name + 'LastSessionID'
        }
        switch ($method) {
            case 'get' : {
                value = null;
                result = localStorage.getItem(name);
                if (result) {
                    result = App.h.get_json(result);
                    if (result && result.expires) {
                        if (date.getTime() > new Date(result.expires).getTime()) {
                            this.use_sender_storage('remove');
                        } else {
                            value = result.value;
                        }
                    }
                }
                result = value;
                break;
            }
            case 'set' : {
                localStorage.setItem(name, JSON.stringify({
                    value: value,
                    expires: new Date(date.setMonth(date.getMonth() + 1))
                }));
                result = true;
                break;
            }
            case 'remove' : {
                localStorage.removeItem(name);
                result = true;
                break;
            }
        }
        //localStorage.clear();
        return result;
    }

    use_unseen($method = 'add', value = 0) {
        value = parseInt(value);
        if (isNaN(value) || value < 0) {
            value = 0;
        }
        let event = true;
        switch ($method) {
            case 'set' : {
                this.opt.unseen = value;
                break;
            }
            case 'add' : {
                this.opt.unseen += value;
                break;
            }
            case 'sub' : {
                this.opt.unseen -= value;
                break;
            }
            case 'get' : {
                event = false;
                break;
            }
        }
        if (isNaN(this.opt.unseen) || this.opt.unseen < 0) {
            this.opt.unseen = 0;
        }
        if (event) {
            App.h.trigger(this.dom.$block, 'unseen-updated');
        }
        return this.opt.unseen;
    }

    prepare_inner_events() {
        this.dom.$block.addEventListener('is-hidden', () => {
            this.opt.form.params = {};
        });
        if (this.dom.$field) {
            this.dom.$field.addEventListener('keypress', (e) => {
                let key = e.which || e.keyCode;
                if (key === 13) {
                    e.preventDefault();
                    this.send_message();
                }
            });
        }
        if (this.dom.$btn) {
            this.dom.$btn.addEventListener('click', (e) => {
                this.send_message();
            });
        }
        if (this.dom.$back) {
            if (this.dom.$back.querySelector('button')) {
                this.dom.$back.querySelector('button').addEventListener('click', (e) => {
                    if (this.dom.$list) {
                        this.remove_hide(this.dom.$list);
                    }
                });
                this.dom.$block.addEventListener('unseen-updated', () => {
                    let $counter = this.dom.$back.querySelector(this.node_class + '__switch-counter');
                    if ($counter) {
                        let unseen = this.use_unseen('get');
                        if (unseen > 0) {
                            $counter.textContent = unseen;
                            this.remove_hide($counter);
                        } else {
                            $counter.textContent = '';
                            this.add_hide($counter);
                        }
                    }
                });
            }
        }
        if (!this.opt.is_modal) {
            window.addEventListener('resize', () => {
                if (window.innerWidth < window.constants.breakpoint_sm) {
                    if (this.opt.$content.hasAttribute(this.opt.data_chat_id)) {
                        this.add_hide(this.dom.$list);
                    } else {
                        this.remove_hide(this.dom.$list);
                    }
                } else {
                    this.remove_hide(this.dom.$list);
                }
            });
        }
    }

    prepare_outer_events() {
        [].slice.call(document.querySelectorAll(this.node_class + '__btn-modal:not([data-chat-init])')).forEach(($action) => {
            let $parent = $action.closest_node(this.node_class);
            if (!$action.init && (!$parent || ($parent === this.dom.$block))) {
                $action.init = true;
                $action.setAttribute('data-chat-init', '');
                $action.addEventListener('click', (e) => {
                    $action.native = $action.classList.contains(this.node_name + '__switch');
                    if ($action.hasAttribute('data-params')) {
                        $action.params = window.parse_json($action.getAttribute('data-params'));
                        $action.removeAttribute('data-params');
                    }
                    if ($action.hasAttribute('data-options')) {
                        $action.options = window.parse_json($action.getAttribute('data-options'));
                        $action.removeAttribute('data-options');
                    }
                    if (!$action.params) {
                        return;
                    }

                    if (!this.opt.is_receiver && !$action.native) {
                        this.dom.$block.setAttribute('data-params', JSON.stringify($action.params));
                    }
                    e.preventDefault();
                    this.opt.form.params = $action.params;
                    if (!this.opt.form.params) {
                        this.opt.form.params = {};
                    }

                    let chat_id = null;
                    if ($action.native && $action.hasAttribute(this.opt.data_chat_id)) {
                        chat_id = $action.getAttribute(this.opt.data_chat_id);
                    }
                    if (!chat_id) {
                        if (!this.opt.is_receiver) {
                            if (this.opt.form.params && this.opt.form.params.element && this.opt.form.params.element.companyID) {
                                chat_id = this.opt.form.params.element.companyID;
                            }
                        } else {
                            if (this.opt.form.params && this.opt.form.params.element && this.opt.form.params.element.sessionID) {
                                chat_id = this.opt.form.params.element.sessionID;
                            } else if (this.opt.form.params && this.opt.form.params.element && this.opt.form.params.element.adminID) {
                                chat_id = this.opt.form.params.element.adminID;
                            }
                        }
                    }
                    let is_new = this.get_content(chat_id);
                    if (this.opt.$content === null) {
                        return;
                    }

                    if ($action.native) {
                        this.opt.$switch = null;
                        [].slice.call(this.dom.$block.querySelectorAll(this.node_class + '__switch')).forEach(($switch) => {
                            if ($switch === $action) {
                                $switch.classList.add(this.node_name + '__switch-selected');
                                this.opt.$switch = $switch;
                            } else {
                                $switch.classList.remove(this.node_name + '__switch-selected');
                            }
                        });
                    }

                    if ($action.options) {
                        this.prepare_person($action);
                        this.prepare_history($action, is_new);
                        if (this.dom.$label) {
                            this.dom.$label.innerHTML = '';
                            this.dom.$label.removeAttribute('title');
                            if (this.opt.$switch) {
                                this.dom.$label.innerHTML = this.opt.$switch.querySelector(this.node_class + '__switch-label').innerHTML;
                                this.dom.$label.title = this.opt.$switch.querySelector(this.node_class + '__switch-label').innerHTML;
                            }
                        }
                    }

                    if (this.dom.$list) {
                        if (!this.opt.is_modal) {
                            if (window.innerWidth < window.constants.breakpoint_sm) {
                                this.add_hide(this.dom.$list);
                            }
                        } else {
                            this.add_hide(this.dom.$list);
                        }
                    }

                    if (!$action.native && chat_id) {
                        let $switch = this.get_switch_by_id(chat_id);
                        if (!$switch) {
                            let label = 'Чат №' + chat_id;
                            if ($action.options && $action.options.person && $action.options.person.company) {
                                label = 'Чат c компанией ' + $action.options.person.company;
                            }
                            this.prepare_switch({
                                info: {
                                    chat: chat_id,
                                    label: label,
                                    last: '',
                                    text: '...',
                                    date: 'сегодня'
                                },
                                options: $action.options,
                                params: $action.params
                            });
                        } else {
                            $switch.click();
                        }
                    }

                    this.opt.form.options = $action.options;
                    if (!this.opt.form.options) {
                        this.opt.form.options = {};
                    }

                    if (this.opt.is_modal && !$action.native) {
                        App.modal.show(this.dom.$block);
                        if (this.dom.$field) {
                            this.dom.$field.focus();
                        }
                    }
                });
            }
        }, this);
        return true;
    }

    get_content(chat_id) {
        let $content = null;
        [].slice.call(this.dom.$wrp.querySelectorAll(this.node_class + '__board-content')).forEach(($block) => {
            if (chat_id === null) {
                if ($block.hasAttribute(this.opt.data_chat_id)) {
                    this.add_hide($block);
                } else {
                    this.remove_hide($block);
                    $content = $block;
                }
            } else {
                if ($block.getAttribute(this.opt.data_chat_id) == chat_id) {
                    this.remove_hide($block);
                    $content = $block;
                } else {
                    this.add_hide($block);
                }
            }
        });
        let is_new = false;
        if (chat_id !== null) {
            if ($content === null) {
                $content = this.dom.$content_tmp.cloneNode(true);
                $content.setAttribute(this.opt.data_chat_id, chat_id);
                this.dom.$wrp.appendChild($content);
                is_new = true;
            }
        } else {
            $content = this.dom.$content;
        }
        this.opt.$content = $content;
        return is_new;
    }

    prepare_history($action, is_new = false) {
        if (!$action.options || !$action.options.history || !$action.options.history.length) {
            return;
        }
        let view = [];
        $action.options.history.forEach((message) => {
            if ($action.native || (!$action.native && message.id) || is_new) {
                if (message.text) {
                    this.show_message(message.text, message.my || false, message.date || null);
                }
                if (!message.my && !message.view && message.id) {
                    view.push(message.id);
                }
            }
        });
        $action.options.history = [];
        if (view.length) {
            this.prepare_view(view, $action);
        }
    }

    prepare_person($action) {
        if (!this.dom.$person) {
            return;
        }
        this.remove_hide(this.dom.$person);
        if (this.dom.$person_status) {
            let $status = $action.querySelector('i');
            if ($status) {
                if ($status.classList.contains(this.node_name + '__btn-modal-icon_green')) {
                    this.dom.$person_status.classList.remove(this.node_name + '__btn-modal-icon_grey');
                    this.dom.$person_status.classList.add(this.node_name + '__btn-modal-icon_green');
                } else {
                    this.dom.$person_status.classList.remove(this.node_name + '__btn-modal-icon_green');
                    this.dom.$person_status.classList.add(this.node_name + '__btn-modal-icon_grey');
                }
            }
        }
        if ($action.options && $action.options.person) {
            this.dom.$person_img.src = this.opt.person_img;
            if ($action.options.person.src) {
                this.dom.$person_img.src = $action.options.person.src;
            }
            this.dom.$person_name.innerHTML = 'Менеджер';
            if ($action.options.person.name) {
                this.dom.$person_name.innerHTML = $action.options.person.name;
            }
            this.dom.$person_img.alt = this.dom.$person_name.innerHTML;
            this.dom.$person_desc.innerHTML = '';
            if ($action.options.person.desc) {
                this.dom.$person_desc.innerHTML = $action.options.person.desc;
            }
        }
        if (!$action.options) {
            this.add_hide(this.dom.$person);
        }
    }

    send_message() {
        if (!this.dom.$field || this.dom.$field.value.trim() === '') {
            this.dom.$field.focus();
            return;
        }
        this.opt.form.params['element[local]'] = this.get_local_time();
        this.opt.responser.send(this.opt.form);
        this.show_message(this.dom.$field.value);
        this.dom.$field.value = '';
    }

    show_message(text, my = true, date = null) {
        if (!text) {
            return false;
        }
        let $message = this.dom.$tmp.cloneNode(true),
            $text = $message.querySelector(this.node_class + '__message-text');
        if (my) {
            $message.classList.add(this.node_name + '__message_my');
        }
        if (date !== null) {
            $message.title = date;
        }
        $text.innerHTML = text;
        this.opt.$content.appendChild($message);
        this.opt.$content.scrollTop = this.opt.$content.scrollHeight;
        return true;
    }

    prepare_view(view, $action = null) {
        let success = () => {
            this.use_unseen('sub', view.length);
            if ($action !== null) {
                let $counter = $action.querySelector(this.node_class + '__switch-counter');
                if ($counter) {
                    this.add_hide($counter);
                    $counter.textContent = '';
                }
            }
        };
        if (!view || !this.dom.$block.hasAttribute('data-view')) {
            //success();
            return;
        }
        let xhr = new XHR({
            url: this.dom.$block.getAttribute('data-view'),
            data: {
                element: {
                    id: view
                }
            },
            success_callback: (response) => success()
        });
        xhr.send();
    }

    prepare_responser() {
        if (!this.dom.$btn || !this.dom.$field || !this.dom.$form) {
            return;
        }
        let answer_message = () => {
            if (this.opt.form && this.opt.form.options && this.opt.form.options.answer) {
                setTimeout(() => {
                    this.show_message(this.opt.form.options.answer, false);
                    this.opt.form.options.answer = null;
                }, 300);
            }
        };
        this.opt.form.url = this.dom.$btn.getAttribute('data-url');
        this.opt.form.params = {};
        this.opt.form.options = {};
        this.opt.responser = new window.components['Responser']({
            $form: this.dom.$form,
            $submit_btn: this.dom.$btn,
            on_success: (response) => {
                if (response && response.list && response.list.element) {
                    let element = response.list.element,
                        chat_id;
                    if (!this.opt.is_receiver) {
                        if (element.companyID) {
                            chat_id = element.companyID;
                        }
                    }
                    if (chat_id && element.id) {
                        this.opt.stream[chat_id] = element.id;
                    }
                    if (this.opt.$switch && element.message) {
                        this.opt.$switch.querySelector(this.node_class + '__switch-text').textContent = element.message;
                    }
                    if (!this.opt.is_receiver && element.sessionID) {
                        this.use_sender_storage('set', element.sessionID);
                    }
                    answer_message();
                }
            },
            on_errors: () => {
                answer_message();
            },
            on_load: () => {
                App.h.load_node(this.dom.$btn);
            },
            on_finish: () => {
                App.h.load_node(this.dom.$btn, true);
                this.dom.$field.focus();
            }
        });
    }

    prepare_stream(interval = 7000) {
        //todo cтоит ли через какое-то кол-во итераций обновления полностью отключать обновление?
        if (!this.opt.is_modal) {
            this.get_stream();
            this.start_stream(interval);
        } else {
            this.dom.$block.addEventListener('is-shown', () => {
                this.get_stream();
                this.start_stream(interval);
            });
            this.dom.$block.addEventListener('is-hidden', () => {
                this.stop_stream();
            });
        }
    }

    start_stream(interval = 7000) {
        this.opt.stream_id = setInterval(() => {
            if (this.opt.process === null) {
                this.stop_stream();
            } else {
                this.get_stream();
            }
        }, interval);
    }

    stop_stream() {
        clearInterval(this.opt.stream_id);
    }

    get_switch_by_id(chat_id) {
        return this.dom.$list.querySelector(this.node_class + '__switch' + "[" + this.opt.data_chat_id + " = '" + chat_id + "']");
    }

    prepare_switch(options) {
        if (!this.dom.$switch_tmp) {
            return;
        }
        let $switch;
        if (options.info.last) {
            this.opt.stream[options.info.chat] = options.info.last;
        }
        $switch = this.get_switch_by_id(options.info.chat);
        if (!$switch) {
            $switch = this.dom.$switch_tmp.cloneNode(true);
            $switch.setAttribute(this.opt.data_chat_id, options.info.chat);
            $switch.setAttribute('data-params', JSON.stringify(options.params));
            this.prepare_switch_actions($switch, options.options.actions || null);
            if (options.options.actions) {
                options.options.actions = [];
            }
            if ($switch) {
                try {
                    this.dom.$list.prepend($switch);
                } catch (e) {
                    this.dom.$list.appendChild($switch);
                }
            }
        }
        if (options.info.label) {
            $switch.title = options.info.label;
            $switch.querySelector(this.node_class + '__switch-label').textContent = options.info.label;
        }
        if (options.info.text) {
            $switch.querySelector(this.node_class + '__switch-text').textContent = options.info.text;
        }
        let $counter = $switch.querySelector(this.node_class + '__switch-counter');
        if ($counter) {
            if (options.info.counter && options.info.counter > 0) {
                $counter.textContent = options.info.counter;
                this.remove_hide($counter);
            } else {
                this.add_hide($counter);
                $counter.textContent = '';
            }
        }
        if (options.info.date) {
            let $date = $switch.querySelector(this.node_class + '__switch-date');
            if ($date) {
                $date.textContent = options.info.date;
            }
        }
        if (options.options && options.options.person && options.options.person.src) {
            $switch.querySelector(this.node_class + '__switch-img').src = options.options.person.src;
        }
        if (options.options && options.options.history && options.options.history.length) {
            let current_options = $switch.options;
            if (!current_options && $switch.hasAttribute('data-options')) {
                current_options = App.h.get_json($switch.getAttribute('data-options'));
            }
            if (current_options && current_options.history && current_options.history.length) {
                options.options.history.forEach((message) => {
                    current_options.history.push(message);
                });
                options.options.history = current_options.history;
            }
        }
        $switch.setAttribute('data-options', JSON.stringify(options.options));
    }

    prepare_switch_actions($switch, actions = null) {
        let $actions_block = $switch.querySelector(this.node_class + '__switch-actions');
        if (!$actions_block) {
            return;
        }
        if (actions && actions.length) {
            let $actions_option = $actions_block.querySelector('.actions-block__options-btn');
            if ($actions_option) {
                let $actions_list = $actions_block.querySelector('.actions-block__list');
                $actions_option = App.h.detach($actions_option);
                [].slice.call(actions).forEach((action) => {
                    if (action.url) {
                        let $action = $actions_option.cloneNode(true);
                        $action.querySelector('.link__cap').innerHTML = action.title;
                        $action.href = action.url;
                        if (action.async) {
                            $action.setAttribute('data-async', '');
                        } else {
                            $action.setAttribute('data-sync', '');
                            $action.addEventListener('click', (e) => {
                                let win = window.open(e.target.href, '_blank');
                                win.focus();
                            });
                        }
                        if (action.params) {
                            $action.setAttribute('data-params', JSON.stringify(action.params));
                        }
                        $actions_list.appendChild($action);
                    }
                });
                new App.c.tools.ActionsBlock($actions_block);
            } else {
                $actions_block.remove_node();
            }
        } else {
            $actions_block.remove_node();
        }
    }

    get_stream(params) {
        if (this.opt.process || this.opt.process === null) {
            return;
        }
        this.opt.process = true;
        let url = this.dom.$block.getAttribute('data-stream'),
            param = 'element[stream]';
        if (!params) {
            params = App.h.get_json(this.dom.$block.getAttribute('data-params'));
        }
        if (this.opt.stream && Object.keys(this.opt.stream).length > 0) {
            params[param] = this.opt.stream;
        }

        let xhr = new XHR({
            url: url,
            data: params,
            errors_callback: () => {
                if (this.opt.process) {
                    this.opt.process = null;
                }
            },
            progress_callback: () => {
            },
            finish_callback: () => {
                if (this.opt.process) {
                    this.opt.process = false;
                }
            },
            success_callback: (response) => {
                if (response) {
                    response = App.h.get_json(response);
                    if (response && response.result && response.result.list) {
                        response.result.list.forEach((options) => {
                            if (options.info && options.info.chat) {
                                this.prepare_switch(options);
                            }
                        });
                        if (this.prepare_outer_events() && response.result.list.length) {
                            if (this.dom.$back && this.dom.$back.classList.contains(this.node_name + '__hide')) {
                                this.remove_hide(this.dom.$back);
                            }
                            let $switch;
                            if (this.opt.$content.hasAttribute(this.opt.data_chat_id)) {
                                $switch = this.dom.$list.querySelector(this.node_class + '__switch' + "[" + this.opt.data_chat_id + " = '" + this.opt.$content.getAttribute(this.opt.data_chat_id) + "']");
                            }
                            if (!this.opt.is_modal) {
                                if (window.innerWidth < window.constants.breakpoint_sm && !this.opt.is_app) {
                                    $switch = null;
                                } else {
                                    if (!$switch && !this.opt.is_app) {
                                        $switch = this.dom.$list.querySelector(this.node_class + '__switch' + "[" + this.opt.data_chat_id + "]");
                                    }
                                }
                            } else {
                                if ($switch && !this.dom.$list.classList.contains(this.node_name + '__hide')) {
                                    $switch = null;
                                }
                            }
                            if ($switch) {
                                $switch.click();
                            }
                        }
                    }
                    let amount = 0;
                    [].slice.call(this.dom.$list.querySelectorAll(this.node_class + '__switch-counter:not(' + this.node_class + '__hide' + ')')).forEach(($counter) => {
                        let value = parseInt($counter.textContent);
                        if (!isNaN(value) && value > 0) {
                            amount += value;
                        }
                    });
                    this.use_unseen('set', amount);
                }
            }
        });
        xhr.send();
    }

    get_local_time() {
        let date = new Date();
        let m = ('0' + (1 + date.getMonth())).replace(/.?(\d{2})/, '$1');
        return date.toString().replace(/^[^\s]+\s([^\s]+)\s([^\s]+)\s([^\s]+)\s([^\s]+)\s.*$/ig, '$3-' + m + '-$2 $4');
    }

    polyfill_prepend() {
        (function (arr) {
            arr.forEach(function (item) {
                if (item.hasOwnProperty('prepend')) {
                    return;
                }
                Object.defineProperty(item, 'prepend', {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    value: function prepend() {
                        var argArr = Array.prototype.slice.call(arguments),
                            docFrag = document.createDocumentFragment();

                        argArr.forEach(function (argItem) {
                            var isNode = argItem instanceof Node;
                            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                        });

                        this.insertBefore(docFrag, this.firstChild);
                    }
                });
            });
        })([Element.prototype, Document.prototype, DocumentFragment.prototype]);
    }
}

ChatBoard.prototype.class_name = 'ChatBoard';
ChatBoard.prototype.node_name = 'chat-board';
ChatBoard.prototype.node_class = '.' + ChatBoard.prototype.node_name;

window.bus.on('common-init', () => {
    try {
        console.info(ChatBoard.prototype.class_name + '.initiation');
        let $blocks = document.querySelectorAll(ChatBoard.prototype.node_class);
        for (let index in $blocks) {
            if (!$blocks.hasOwnProperty(index)) continue;
            if ($blocks[index].classList.contains('lazyload') || $blocks[index].classList.contains('lazyloaded')) {
                $blocks[index].addEventListener('lazybeforeunveil', (e) => {
                    [].slice.call($blocks).forEach(($block) => {
                        if ($block == e.target) {
                            if (e.target.get_instance()) {
                                App.h.trigger($block, 'start-stream');
                            } else {
                                new ChatBoard(e.target);
                            }
                        } else {
                            if ($block.classList.contains('lazyloaded')) {
                                $block.classList.remove('lazyloaded');
                                $block.classList.add('lazyload');
                                App.h.trigger($block, 'stop-stream');
                            }
                        }
                    });
                });
                if ($blocks[index].classList.contains('lazyloaded')) {
                    new ChatBoard($blocks[index]);
                }
            } else {
                new ChatBoard($blocks[index]);
            }
        }
    } catch (errors) {
        console.error(ChatBoard.prototype.class_name + '.initiation', errors);
    }
});

/* @preserve
 * Leaflet 1.3.1, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2017 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i(t.L={})}(this,function(t){"use strict";function i(t){var i,e,n,o;for(e=1,n=arguments.length;e<n;e++){o=arguments[e];for(i in o)t[i]=o[i]}return t}function e(t,i){var e=Array.prototype.slice;if(t.bind)return t.bind.apply(t,e.call(arguments,1));var n=e.call(arguments,2);return function(){return t.apply(i,n.length?n.concat(e.call(arguments)):arguments)}}function n(t){return t._leaflet_id=t._leaflet_id||++ti,t._leaflet_id}function o(t,i,e){var n,o,s,r;return r=function(){n=!1,o&&(s.apply(e,o),o=!1)},s=function(){n?o=arguments:(t.apply(e,arguments),setTimeout(r,i),n=!0)}}function s(t,i,e){var n=i[1],o=i[0],s=n-o;return t===n&&e?t:((t-o)%s+s)%s+o}function r(){return!1}function a(t,i){var e=Math.pow(10,void 0===i?6:i);return Math.round(t*e)/e}function h(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function u(t){return h(t).split(/\s+/)}function l(t,i){t.hasOwnProperty("options")||(t.options=t.options?Qt(t.options):{});for(var e in i)t.options[e]=i[e];return t.options}function c(t,i,e){var n=[];for(var o in t)n.push(encodeURIComponent(e?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(i&&-1!==i.indexOf("?")?"&":"?")+n.join("&")}function _(t,i){return t.replace(ii,function(t,e){var n=i[e];if(void 0===n)throw new Error("No value provided for variable "+t);return"function"==typeof n&&(n=n(i)),n})}function d(t,i){for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1}function p(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}function m(t){var i=+new Date,e=Math.max(0,16-(i-oi));return oi=i+e,window.setTimeout(t,e)}function f(t,i,n){if(!n||si!==m)return si.call(window,e(t,i));t.call(i)}function g(t){t&&ri.call(window,t)}function v(){}function y(t){if("undefined"!=typeof L&&L&&L.Mixin){t=ei(t)?t:[t];for(var i=0;i<t.length;i++)t[i]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}}function x(t,i,e){this.x=e?Math.round(t):t,this.y=e?Math.round(i):i}function w(t,i,e){return t instanceof x?t:ei(t)?new x(t[0],t[1]):void 0===t||null===t?t:"object"==typeof t&&"x"in t&&"y"in t?new x(t.x,t.y):new x(t,i,e)}function P(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function b(t,i){return!t||t instanceof P?t:new P(t,i)}function T(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function z(t,i){return t instanceof T?t:new T(t,i)}function M(t,i,e){if(isNaN(t)||isNaN(i))throw new Error("Invalid LatLng object: ("+t+", "+i+")");this.lat=+t,this.lng=+i,void 0!==e&&(this.alt=+e)}function C(t,i,e){return t instanceof M?t:ei(t)&&"object"!=typeof t[0]?3===t.length?new M(t[0],t[1],t[2]):2===t.length?new M(t[0],t[1]):null:void 0===t||null===t?t:"object"==typeof t&&"lat"in t?new M(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===i?null:new M(t,i,e)}function Z(t,i,e,n){if(ei(t))return this._a=t[0],this._b=t[1],this._c=t[2],void(this._d=t[3]);this._a=t,this._b=i,this._c=e,this._d=n}function S(t,i,e,n){return new Z(t,i,e,n)}function E(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t,i){var e,n,o,s,r,a,h="";for(e=0,o=t.length;e<o;e++){for(n=0,s=(r=t[e]).length;n<s;n++)a=r[n],h+=(n?"L":"M")+a.x+" "+a.y;h+=i?Xi?"z":"x":""}return h||"M0 0"}function I(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}function A(t,i,e,n){return"touchstart"===i?O(t,e,n):"touchmove"===i?W(t,e,n):"touchend"===i&&H(t,e,n),this}function B(t,i,e){var n=t["_leaflet_"+i+e];return"touchstart"===i?t.removeEventListener(Qi,n,!1):"touchmove"===i?t.removeEventListener(te,n,!1):"touchend"===i&&(t.removeEventListener(ie,n,!1),t.removeEventListener(ee,n,!1)),this}function O(t,i,n){var o=e(function(t){if("mouse"!==t.pointerType&&t.MSPOINTER_TYPE_MOUSE&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE){if(!(ne.indexOf(t.target.tagName)<0))return;$(t)}j(t,i)});t["_leaflet_touchstart"+n]=o,t.addEventListener(Qi,o,!1),se||(document.documentElement.addEventListener(Qi,R,!0),document.documentElement.addEventListener(te,D,!0),document.documentElement.addEventListener(ie,N,!0),document.documentElement.addEventListener(ee,N,!0),se=!0)}function R(t){oe[t.pointerId]=t,re++}function D(t){oe[t.pointerId]&&(oe[t.pointerId]=t)}function N(t){delete oe[t.pointerId],re--}function j(t,i){t.touches=[];for(var e in oe)t.touches.push(oe[e]);t.changedTouches=[t],i(t)}function W(t,i,e){var n=function(t){(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons)&&j(t,i)};t["_leaflet_touchmove"+e]=n,t.addEventListener(te,n,!1)}function H(t,i,e){var n=function(t){j(t,i)};t["_leaflet_touchend"+e]=n,t.addEventListener(ie,n,!1),t.addEventListener(ee,n,!1)}function F(t,i,e){function n(t){var i;if(Ui){if(!Pi||"mouse"===t.pointerType)return;i=re}else i=t.touches.length;if(!(i>1)){var e=Date.now(),n=e-(s||e);r=t.touches?t.touches[0]:t,a=n>0&&n<=h,s=e}}function o(t){if(a&&!r.cancelBubble){if(Ui){if(!Pi||"mouse"===t.pointerType)return;var e,n,o={};for(n in r)e=r[n],o[n]=e&&e.bind?e.bind(r):e;r=o}r.type="dblclick",i(r),s=null}}var s,r,a=!1,h=250;return t[ue+ae+e]=n,t[ue+he+e]=o,t[ue+"dblclick"+e]=i,t.addEventListener(ae,n,!1),t.addEventListener(he,o,!1),t.addEventListener("dblclick",i,!1),this}function U(t,i){var e=t[ue+ae+i],n=t[ue+he+i],o=t[ue+"dblclick"+i];return t.removeEventListener(ae,e,!1),t.removeEventListener(he,n,!1),Pi||t.removeEventListener("dblclick",o,!1),this}function V(t,i,e,n){if("object"==typeof i)for(var o in i)G(t,o,i[o],e);else for(var s=0,r=(i=u(i)).length;s<r;s++)G(t,i[s],e,n);return this}function q(t,i,e,n){if("object"==typeof i)for(var o in i)K(t,o,i[o],e);else if(i)for(var s=0,r=(i=u(i)).length;s<r;s++)K(t,i[s],e,n);else{for(var a in t[le])K(t,a,t[le][a]);delete t[le]}return this}function G(t,i,e,o){var s=i+n(e)+(o?"_"+n(o):"");if(t[le]&&t[le][s])return this;var r=function(i){return e.call(o||t,i||window.event)},a=r;Ui&&0===i.indexOf("touch")?A(t,i,r,s):!Vi||"dblclick"!==i||!F||Ui&&Si?"addEventListener"in t?"mousewheel"===i?t.addEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):"mouseenter"===i||"mouseleave"===i?(r=function(i){i=i||window.event,ot(t,i)&&a(i)},t.addEventListener("mouseenter"===i?"mouseover":"mouseout",r,!1)):("click"===i&&Ti&&(r=function(t){st(t,a)}),t.addEventListener(i,r,!1)):"attachEvent"in t&&t.attachEvent("on"+i,r):F(t,r,s),t[le]=t[le]||{},t[le][s]=r}function K(t,i,e,o){var s=i+n(e)+(o?"_"+n(o):""),r=t[le]&&t[le][s];if(!r)return this;Ui&&0===i.indexOf("touch")?B(t,i,s):!Vi||"dblclick"!==i||!U||Ui&&Si?"removeEventListener"in t?"mousewheel"===i?t.removeEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):t.removeEventListener("mouseenter"===i?"mouseover":"mouseleave"===i?"mouseout":i,r,!1):"detachEvent"in t&&t.detachEvent("on"+i,r):U(t,s),t[le][s]=null}function Y(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,nt(t),this}function X(t){return G(t,"mousewheel",Y),this}function J(t){return V(t,"mousedown touchstart dblclick",Y),G(t,"click",et),this}function $(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Q(t){return $(t),Y(t),this}function tt(t,i){if(!i)return new x(t.clientX,t.clientY);var e=i.getBoundingClientRect(),n=e.width/i.offsetWidth||1,o=e.height/i.offsetHeight||1;return new x(t.clientX/n-e.left-i.clientLeft,t.clientY/o-e.top-i.clientTop)}function it(t){return Pi?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/ce:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}function et(t){_e[t.type]=!0}function nt(t){var i=_e[t.type];return _e[t.type]=!1,i}function ot(t,i){var e=i.relatedTarget;if(!e)return!0;try{for(;e&&e!==t;)e=e.parentNode}catch(t){return!1}return e!==t}function st(t,i){var e=t.timeStamp||t.originalEvent&&t.originalEvent.timeStamp,n=pi&&e-pi;n&&n>100&&n<500||t.target._simulatedClick&&!t._simulated?Q(t):(pi=e,i(t))}function rt(t){return"string"==typeof t?document.getElementById(t):t}function at(t,i){var e=t.style[i]||t.currentStyle&&t.currentStyle[i];if((!e||"auto"===e)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);e=n?n[i]:null}return"auto"===e?null:e}function ht(t,i,e){var n=document.createElement(t);return n.className=i||"",e&&e.appendChild(n),n}function ut(t){var i=t.parentNode;i&&i.removeChild(t)}function lt(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function ct(t){var i=t.parentNode;i.lastChild!==t&&i.appendChild(t)}function _t(t){var i=t.parentNode;i.firstChild!==t&&i.insertBefore(t,i.firstChild)}function dt(t,i){if(void 0!==t.classList)return t.classList.contains(i);var e=gt(t);return e.length>0&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(e)}function pt(t,i){if(void 0!==t.classList)for(var e=u(i),n=0,o=e.length;n<o;n++)t.classList.add(e[n]);else if(!dt(t,i)){var s=gt(t);ft(t,(s?s+" ":"")+i)}}function mt(t,i){void 0!==t.classList?t.classList.remove(i):ft(t,h((" "+gt(t)+" ").replace(" "+i+" "," ")))}function ft(t,i){void 0===t.className.baseVal?t.className=i:t.className.baseVal=i}function gt(t){return void 0===t.className.baseVal?t.className:t.className.baseVal}function vt(t,i){"opacity"in t.style?t.style.opacity=i:"filter"in t.style&&yt(t,i)}function yt(t,i){var e=!1,n="DXImageTransform.Microsoft.Alpha";try{e=t.filters.item(n)}catch(t){if(1===i)return}i=Math.round(100*i),e?(e.Enabled=100!==i,e.Opacity=i):t.style.filter+=" progid:"+n+"(opacity="+i+")"}function xt(t){for(var i=document.documentElement.style,e=0;e<t.length;e++)if(t[e]in i)return t[e];return!1}function wt(t,i,e){var n=i||new x(0,0);t.style[pe]=(Oi?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(e?" scale("+e+")":"")}function Lt(t,i){t._leaflet_pos=i,Ni?wt(t,i):(t.style.left=i.x+"px",t.style.top=i.y+"px")}function Pt(t){return t._leaflet_pos||new x(0,0)}function bt(){V(window,"dragstart",$)}function Tt(){q(window,"dragstart",$)}function zt(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(Mt(),ve=t,ye=t.style.outline,t.style.outline="none",V(window,"keydown",Mt))}function Mt(){ve&&(ve.style.outline=ye,ve=void 0,ye=void 0,q(window,"keydown",Mt))}function Ct(t,i){if(!i||!t.length)return t.slice();var e=i*i;return t=kt(t,e),t=St(t,e)}function Zt(t,i,e){return Math.sqrt(Rt(t,i,e,!0))}function St(t,i){var e=t.length,n=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(e);n[0]=n[e-1]=1,Et(t,n,i,0,e-1);var o,s=[];for(o=0;o<e;o++)n[o]&&s.push(t[o]);return s}function Et(t,i,e,n,o){var s,r,a,h=0;for(r=n+1;r<=o-1;r++)(a=Rt(t[r],t[n],t[o],!0))>h&&(s=r,h=a);h>e&&(i[s]=1,Et(t,i,e,n,s),Et(t,i,e,s,o))}function kt(t,i){for(var e=[t[0]],n=1,o=0,s=t.length;n<s;n++)Ot(t[n],t[o])>i&&(e.push(t[n]),o=n);return o<s-1&&e.push(t[s-1]),e}function It(t,i,e,n,o){var s,r,a,h=n?Se:Bt(t,e),u=Bt(i,e);for(Se=u;;){if(!(h|u))return[t,i];if(h&u)return!1;a=Bt(r=At(t,i,s=h||u,e,o),e),s===h?(t=r,h=a):(i=r,u=a)}}function At(t,i,e,n,o){var s,r,a=i.x-t.x,h=i.y-t.y,u=n.min,l=n.max;return 8&e?(s=t.x+a*(l.y-t.y)/h,r=l.y):4&e?(s=t.x+a*(u.y-t.y)/h,r=u.y):2&e?(s=l.x,r=t.y+h*(l.x-t.x)/a):1&e&&(s=u.x,r=t.y+h*(u.x-t.x)/a),new x(s,r,o)}function Bt(t,i){var e=0;return t.x<i.min.x?e|=1:t.x>i.max.x&&(e|=2),t.y<i.min.y?e|=4:t.y>i.max.y&&(e|=8),e}function Ot(t,i){var e=i.x-t.x,n=i.y-t.y;return e*e+n*n}function Rt(t,i,e,n){var o,s=i.x,r=i.y,a=e.x-s,h=e.y-r,u=a*a+h*h;return u>0&&((o=((t.x-s)*a+(t.y-r)*h)/u)>1?(s=e.x,r=e.y):o>0&&(s+=a*o,r+=h*o)),a=t.x-s,h=t.y-r,n?a*a+h*h:new x(s,r)}function Dt(t){return!ei(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function Nt(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Dt(t)}function jt(t,i,e){var n,o,s,r,a,h,u,l,c,_=[1,4,2,8];for(o=0,u=t.length;o<u;o++)t[o]._code=Bt(t[o],i);for(r=0;r<4;r++){for(l=_[r],n=[],o=0,s=(u=t.length)-1;o<u;s=o++)a=t[o],h=t[s],a._code&l?h._code&l||((c=At(h,a,l,i,e))._code=Bt(c,i),n.push(c)):(h._code&l&&((c=At(h,a,l,i,e))._code=Bt(c,i),n.push(c)),n.push(a));t=n}return t}function Wt(t,i){var e,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],u=i&&i.pointToLayer,l=i&&i.coordsToLatLng||Ht;if(!a&&!r)return null;switch(r.type){case"Point":return e=l(a),u?u(t,e):new Xe(e);case"MultiPoint":for(o=0,s=a.length;o<s;o++)e=l(a[o]),h.push(u?u(t,e):new Xe(e));return new qe(h);case"LineString":case"MultiLineString":return n=Ft(a,"LineString"===r.type?0:1,l),new tn(n,i);case"Polygon":case"MultiPolygon":return n=Ft(a,"Polygon"===r.type?1:2,l),new en(n,i);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=Wt({geometry:r.geometries[o],type:"Feature",properties:t.properties},i);c&&h.push(c)}return new qe(h);default:throw new Error("Invalid GeoJSON object.")}}function Ht(t){return new M(t[1],t[0],t[2])}function Ft(t,i,e){for(var n,o=[],s=0,r=t.length;s<r;s++)n=i?Ft(t[s],i-1,e):(e||Ht)(t[s]),o.push(n);return o}function Ut(t,i){return i="number"==typeof i?i:6,void 0!==t.alt?[a(t.lng,i),a(t.lat,i),a(t.alt,i)]:[a(t.lng,i),a(t.lat,i)]}function Vt(t,i,e,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(i?Vt(t[s],i-1,e,n):Ut(t[s],n));return!i&&e&&o.push(o[0]),o}function qt(t,e){return t.feature?i({},t.feature,{geometry:e}):Gt(e)}function Gt(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}function Kt(t,i){return new nn(t,i)}function Yt(t,i){return new dn(t,i)}function Xt(t){return Yi?new fn(t):null}function Jt(t){return Xi||Ji?new xn(t):null}var $t=Object.freeze;Object.freeze=function(t){return t};var Qt=Object.create||function(){function t(){}return function(i){return t.prototype=i,new t}}(),ti=0,ii=/\{ *([\w_-]+) *\}/g,ei=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},ni="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",oi=0,si=window.requestAnimationFrame||p("RequestAnimationFrame")||m,ri=window.cancelAnimationFrame||p("CancelAnimationFrame")||p("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)},ai=(Object.freeze||Object)({freeze:$t,extend:i,create:Qt,bind:e,lastId:ti,stamp:n,throttle:o,wrapNum:s,falseFn:r,formatNum:a,trim:h,splitWords:u,setOptions:l,getParamString:c,template:_,isArray:ei,indexOf:d,emptyImageUrl:ni,requestFn:si,cancelFn:ri,requestAnimFrame:f,cancelAnimFrame:g});v.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},n=e.__super__=this.prototype,o=Qt(n);o.constructor=e,e.prototype=o;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&"__super__"!==s&&(e[s]=this[s]);return t.statics&&(i(e,t.statics),delete t.statics),t.includes&&(y(t.includes),i.apply(null,[o].concat(t.includes)),delete t.includes),o.options&&(t.options=i(Qt(o.options),t.options)),i(o,t),o._initHooks=[],o.callInitHooks=function(){if(!this._initHooksCalled){n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,i=o._initHooks.length;t<i;t++)o._initHooks[t].call(this)}},e},v.include=function(t){return i(this.prototype,t),this},v.mergeOptions=function(t){return i(this.prototype.options,t),this},v.addInitHook=function(t){var i=Array.prototype.slice.call(arguments,1),e="function"==typeof t?t:function(){this[t].apply(this,i)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(e),this};var hi={on:function(t,i,e){if("object"==typeof t)for(var n in t)this._on(n,t[n],i);else for(var o=0,s=(t=u(t)).length;o<s;o++)this._on(t[o],i,e);return this},off:function(t,i,e){if(t)if("object"==typeof t)for(var n in t)this._off(n,t[n],i);else for(var o=0,s=(t=u(t)).length;o<s;o++)this._off(t[o],i,e);else delete this._events;return this},_on:function(t,i,e){this._events=this._events||{};var n=this._events[t];n||(n=[],this._events[t]=n),e===this&&(e=void 0);for(var o={fn:i,ctx:e},s=n,r=0,a=s.length;r<a;r++)if(s[r].fn===i&&s[r].ctx===e)return;s.push(o)},_off:function(t,i,e){var n,o,s;if(this._events&&(n=this._events[t]))if(i){if(e===this&&(e=void 0),n)for(o=0,s=n.length;o<s;o++){var a=n[o];if(a.ctx===e&&a.fn===i)return a.fn=r,this._firingCount&&(this._events[t]=n=n.slice()),void n.splice(o,1)}}else{for(o=0,s=n.length;o<s;o++)n[o].fn=r;delete this._events[t]}},fire:function(t,e,n){if(!this.listens(t,n))return this;var o=i({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var r=0,a=s.length;r<a;r++){var h=s[r];h.fn.call(h.ctx||this,o)}this._firingCount--}}return n&&this._propagateEvent(o),this},listens:function(t,i){var e=this._events&&this._events[t];if(e&&e.length)return!0;if(i)for(var n in this._eventParents)if(this._eventParents[n].listens(t,i))return!0;return!1},once:function(t,i,n){if("object"==typeof t){for(var o in t)this.once(o,t[o],i);return this}var s=e(function(){this.off(t,i,n).off(t,s,n)},this);return this.on(t,i,n).on(t,s,n)},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[n(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[n(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,i({layer:t.target,propagatedFrom:t.target},t),!0)}};hi.addEventListener=hi.on,hi.removeEventListener=hi.clearAllEventListeners=hi.off,hi.addOneTimeEventListener=hi.once,hi.fireEvent=hi.fire,hi.hasEventListeners=hi.listens;var ui=v.extend(hi),li=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};x.prototype={clone:function(){return new x(this.x,this.y)},add:function(t){return this.clone()._add(w(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(w(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new x(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new x(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=li(this.x),this.y=li(this.y),this},distanceTo:function(t){var i=(t=w(t)).x-this.x,e=t.y-this.y;return Math.sqrt(i*i+e*e)},equals:function(t){return(t=w(t)).x===this.x&&t.y===this.y},contains:function(t){return t=w(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+a(this.x)+", "+a(this.y)+")"}},P.prototype={extend:function(t){return t=w(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new x((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new x(this.min.x,this.max.y)},getTopRight:function(){return new x(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var i,e;return(t="number"==typeof t[0]||t instanceof x?w(t):b(t))instanceof P?(i=t.min,e=t.max):i=e=t,i.x>=this.min.x&&e.x<=this.max.x&&i.y>=this.min.y&&e.y<=this.max.y},intersects:function(t){t=b(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>=i.x&&n.x<=e.x,r=o.y>=i.y&&n.y<=e.y;return s&&r},overlaps:function(t){t=b(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>i.x&&n.x<e.x,r=o.y>i.y&&n.y<e.y;return s&&r},isValid:function(){return!(!this.min||!this.max)}},T.prototype={extend:function(t){var i,e,n=this._southWest,o=this._northEast;if(t instanceof M)i=t,e=t;else{if(!(t instanceof T))return t?this.extend(C(t)||z(t)):this;if(i=t._southWest,e=t._northEast,!i||!e)return this}return n||o?(n.lat=Math.min(i.lat,n.lat),n.lng=Math.min(i.lng,n.lng),o.lat=Math.max(e.lat,o.lat),o.lng=Math.max(e.lng,o.lng)):(this._southWest=new M(i.lat,i.lng),this._northEast=new M(e.lat,e.lng)),this},pad:function(t){var i=this._southWest,e=this._northEast,n=Math.abs(i.lat-e.lat)*t,o=Math.abs(i.lng-e.lng)*t;return new T(new M(i.lat-n,i.lng-o),new M(e.lat+n,e.lng+o))},getCenter:function(){return new M((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new M(this.getNorth(),this.getWest())},getSouthEast:function(){return new M(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof M||"lat"in t?C(t):z(t);var i,e,n=this._southWest,o=this._northEast;return t instanceof T?(i=t.getSouthWest(),e=t.getNorthEast()):i=e=t,i.lat>=n.lat&&e.lat<=o.lat&&i.lng>=n.lng&&e.lng<=o.lng},intersects:function(t){t=z(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>=i.lat&&n.lat<=e.lat,r=o.lng>=i.lng&&n.lng<=e.lng;return s&&r},overlaps:function(t){t=z(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>i.lat&&n.lat<e.lat,r=o.lng>i.lng&&n.lng<e.lng;return s&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,i){return!!t&&(t=z(t),this._southWest.equals(t.getSouthWest(),i)&&this._northEast.equals(t.getNorthEast(),i))},isValid:function(){return!(!this._southWest||!this._northEast)}},M.prototype={equals:function(t,i){return!!t&&(t=C(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===i?1e-9:i))},toString:function(t){return"LatLng("+a(this.lat,t)+", "+a(this.lng,t)+")"},distanceTo:function(t){return _i.distance(this,C(t))},wrap:function(){return _i.wrapLatLng(this)},toBounds:function(t){var i=180*t/40075017,e=i/Math.cos(Math.PI/180*this.lat);return z([this.lat-i,this.lng-e],[this.lat+i,this.lng+e])},clone:function(){return new M(this.lat,this.lng,this.alt)}};var ci={latLngToPoint:function(t,i){var e=this.projection.project(t),n=this.scale(i);return this.transformation._transform(e,n)},pointToLatLng:function(t,i){var e=this.scale(i),n=this.transformation.untransform(t,e);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var i=this.projection.bounds,e=this.scale(t);return new P(this.transformation.transform(i.min,e),this.transformation.transform(i.max,e))},infinite:!1,wrapLatLng:function(t){var i=this.wrapLng?s(t.lng,this.wrapLng,!0):t.lng;return new M(this.wrapLat?s(t.lat,this.wrapLat,!0):t.lat,i,t.alt)},wrapLatLngBounds:function(t){var i=t.getCenter(),e=this.wrapLatLng(i),n=i.lat-e.lat,o=i.lng-e.lng;if(0===n&&0===o)return t;var s=t.getSouthWest(),r=t.getNorthEast();return new T(new M(s.lat-n,s.lng-o),new M(r.lat-n,r.lng-o))}},_i=i({},ci,{wrapLng:[-180,180],R:6371e3,distance:function(t,i){var e=Math.PI/180,n=t.lat*e,o=i.lat*e,s=Math.sin((i.lat-t.lat)*e/2),r=Math.sin((i.lng-t.lng)*e/2),a=s*s+Math.cos(n)*Math.cos(o)*r*r,h=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*h}}),di={R:6378137,MAX_LATITUDE:85.0511287798,project:function(t){var i=Math.PI/180,e=this.MAX_LATITUDE,n=Math.max(Math.min(e,t.lat),-e),o=Math.sin(n*i);return new x(this.R*t.lng*i,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var i=180/Math.PI;return new M((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*i,t.x*i/this.R)},bounds:function(){var t=6378137*Math.PI;return new P([-t,-t],[t,t])}()};Z.prototype={transform:function(t,i){return this._transform(t.clone(),i)},_transform:function(t,i){return i=i||1,t.x=i*(this._a*t.x+this._b),t.y=i*(this._c*t.y+this._d),t},untransform:function(t,i){return i=i||1,new x((t.x/i-this._b)/this._a,(t.y/i-this._d)/this._c)}};var pi,mi,fi,gi,vi=i({},_i,{code:"EPSG:3857",projection:di,transformation:function(){var t=.5/(Math.PI*di.R);return S(t,.5,-t,.5)}()}),yi=i({},vi,{code:"EPSG:900913"}),xi=document.documentElement.style,wi="ActiveXObject"in window,Li=wi&&!document.addEventListener,Pi="msLaunchUri"in navigator&&!("documentMode"in document),bi=I("webkit"),Ti=I("android"),zi=I("android 2")||I("android 3"),Mi=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Ci=Ti&&I("Google")&&Mi<537&&!("AudioNode"in window),Zi=!!window.opera,Si=I("chrome"),Ei=I("gecko")&&!bi&&!Zi&&!wi,ki=!Si&&I("safari"),Ii=I("phantom"),Ai="OTransition"in xi,Bi=0===navigator.platform.indexOf("Win"),Oi=wi&&"transition"in xi,Ri="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!zi,Di="MozPerspective"in xi,Ni=!window.L_DISABLE_3D&&(Oi||Ri||Di)&&!Ai&&!Ii,ji="undefined"!=typeof orientation||I("mobile"),Wi=ji&&bi,Hi=ji&&Ri,Fi=!window.PointerEvent&&window.MSPointerEvent,Ui=!(!window.PointerEvent&&!Fi),Vi=!window.L_NO_TOUCH&&(Ui||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),qi=ji&&Zi,Gi=ji&&Ei,Ki=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Yi=!!document.createElement("canvas").getContext,Xi=!(!document.createElementNS||!E("svg").createSVGRect),Ji=!Xi&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(t){return!1}}(),$i=(Object.freeze||Object)({ie:wi,ielt9:Li,edge:Pi,webkit:bi,android:Ti,android23:zi,androidStock:Ci,opera:Zi,chrome:Si,gecko:Ei,safari:ki,phantom:Ii,opera12:Ai,win:Bi,ie3d:Oi,webkit3d:Ri,gecko3d:Di,any3d:Ni,mobile:ji,mobileWebkit:Wi,mobileWebkit3d:Hi,msPointer:Fi,pointer:Ui,touch:Vi,mobileOpera:qi,mobileGecko:Gi,retina:Ki,canvas:Yi,svg:Xi,vml:Ji}),Qi=Fi?"MSPointerDown":"pointerdown",te=Fi?"MSPointerMove":"pointermove",ie=Fi?"MSPointerUp":"pointerup",ee=Fi?"MSPointerCancel":"pointercancel",ne=["INPUT","SELECT","OPTION"],oe={},se=!1,re=0,ae=Fi?"MSPointerDown":Ui?"pointerdown":"touchstart",he=Fi?"MSPointerUp":Ui?"pointerup":"touchend",ue="_leaflet_",le="_leaflet_events",ce=Bi&&Si?2*window.devicePixelRatio:Ei?window.devicePixelRatio:1,_e={},de=(Object.freeze||Object)({on:V,off:q,stopPropagation:Y,disableScrollPropagation:X,disableClickPropagation:J,preventDefault:$,stop:Q,getMousePosition:tt,getWheelDelta:it,fakeStop:et,skipped:nt,isExternalTarget:ot,addListener:V,removeListener:q}),pe=xt(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),me=xt(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),fe="webkitTransition"===me||"OTransition"===me?me+"End":"transitionend";if("onselectstart"in document)mi=function(){V(window,"selectstart",$)},fi=function(){q(window,"selectstart",$)};else{var ge=xt(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);mi=function(){if(ge){var t=document.documentElement.style;gi=t[ge],t[ge]="none"}},fi=function(){ge&&(document.documentElement.style[ge]=gi,gi=void 0)}}var ve,ye,xe=(Object.freeze||Object)({TRANSFORM:pe,TRANSITION:me,TRANSITION_END:fe,get:rt,getStyle:at,create:ht,remove:ut,empty:lt,toFront:ct,toBack:_t,hasClass:dt,addClass:pt,removeClass:mt,setClass:ft,getClass:gt,setOpacity:vt,testProp:xt,setTransform:wt,setPosition:Lt,getPosition:Pt,disableTextSelection:mi,enableTextSelection:fi,disableImageDrag:bt,enableImageDrag:Tt,preventOutline:zt,restoreOutline:Mt}),we=ui.extend({run:function(t,i,e,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=e||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Pt(t),this._offset=i.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=f(this._animate,this),this._step()},_step:function(t){var i=+new Date-this._startTime,e=1e3*this._duration;i<e?this._runFrame(this._easeOut(i/e),t):(this._runFrame(1),this._complete())},_runFrame:function(t,i){var e=this._startPos.add(this._offset.multiplyBy(t));i&&e._round(),Lt(this._el,e),this.fire("step")},_complete:function(){g(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),Le=ui.extend({options:{crs:vi,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,i){i=l(this,i),this._initContainer(t),this._initLayout(),this._onResize=e(this._onResize,this),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),void 0!==i.zoom&&(this._zoom=this._limitZoom(i.zoom)),i.center&&void 0!==i.zoom&&this.setView(C(i.center),i.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this.callInitHooks(),this._zoomAnimated=me&&Ni&&!qi&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),V(this._proxy,fe,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,n){return e=void 0===e?this._zoom:this._limitZoom(e),t=this._limitCenter(C(t),e,this.options.maxBounds),n=n||{},this._stop(),this._loaded&&!n.reset&&!0!==n&&(void 0!==n.animate&&(n.zoom=i({animate:n.animate},n.zoom),n.pan=i({animate:n.animate,duration:n.duration},n.pan)),this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan))?(clearTimeout(this._sizeTimer),this):(this._resetView(t,e),this)},setZoom:function(t,i){return this._loaded?this.setView(this.getCenter(),t,{zoom:i}):(this._zoom=t,this)},zoomIn:function(t,i){return t=t||(Ni?this.options.zoomDelta:1),this.setZoom(this._zoom+t,i)},zoomOut:function(t,i){return t=t||(Ni?this.options.zoomDelta:1),this.setZoom(this._zoom-t,i)},setZoomAround:function(t,i,e){var n=this.getZoomScale(i),o=this.getSize().divideBy(2),s=(t instanceof x?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),r=this.containerPointToLatLng(o.add(s));return this.setView(r,i,{zoom:e})},_getBoundsCenterZoom:function(t,i){i=i||{},t=t.getBounds?t.getBounds():z(t);var e=w(i.paddingTopLeft||i.padding||[0,0]),n=w(i.paddingBottomRight||i.padding||[0,0]),o=this.getBoundsZoom(t,!1,e.add(n));if((o="number"==typeof i.maxZoom?Math.min(i.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var s=n.subtract(e).divideBy(2),r=this.project(t.getSouthWest(),o),a=this.project(t.getNorthEast(),o);return{center:this.unproject(r.add(a).divideBy(2).add(s),o),zoom:o}},fitBounds:function(t,i){if(!(t=z(t)).isValid())throw new Error("Bounds are not valid.");var e=this._getBoundsCenterZoom(t,i);return this.setView(e.center,e.zoom,i)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,i){return this.setView(t,this._zoom,{pan:i})},panBy:function(t,i){if(t=w(t).round(),i=i||{},!t.x&&!t.y)return this.fire("moveend");if(!0!==i.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new we,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),i.noMoveStart||this.fire("movestart"),!1!==i.animate){pt(this._mapPane,"leaflet-pan-anim");var e=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,e,i.duration||.25,i.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,i,e){function n(t){var i=(g*g-m*m+(t?-1:1)*x*x*v*v)/(2*(t?g:m)*x*v),e=Math.sqrt(i*i+1)-i;return e<1e-9?-18:Math.log(e)}function o(t){return(Math.exp(t)-Math.exp(-t))/2}function s(t){return(Math.exp(t)+Math.exp(-t))/2}function r(t){return o(t)/s(t)}function a(t){return m*(s(w)/s(w+y*t))}function h(t){return m*(s(w)*r(w+y*t)-o(w))/x}function u(t){return 1-Math.pow(1-t,1.5)}function l(){var e=(Date.now()-L)/b,n=u(e)*P;e<=1?(this._flyToFrame=f(l,this),this._move(this.unproject(c.add(_.subtract(c).multiplyBy(h(n)/v)),p),this.getScaleZoom(m/a(n),p),{flyTo:!0})):this._move(t,i)._moveEnd(!0)}if(!1===(e=e||{}).animate||!Ni)return this.setView(t,i,e);this._stop();var c=this.project(this.getCenter()),_=this.project(t),d=this.getSize(),p=this._zoom;t=C(t),i=void 0===i?p:i;var m=Math.max(d.x,d.y),g=m*this.getZoomScale(p,i),v=_.distanceTo(c)||1,y=1.42,x=y*y,w=n(0),L=Date.now(),P=(n(1)-w)/y,b=e.duration?1e3*e.duration:1e3*P*.8;return this._moveStart(!0,e.noMoveStart),l.call(this),this},flyToBounds:function(t,i){var e=this._getBoundsCenterZoom(t,i);return this.flyTo(e.center,e.zoom,i)},setMaxBounds:function(t){return(t=z(t)).isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},setMinZoom:function(t){var i=this.options.minZoom;return this.options.minZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var i=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,i){this._enforcingBounds=!0;var e=this.getCenter(),n=this._limitCenter(e,this._zoom,z(t));return e.equals(n)||this.panTo(n,i),this._enforcingBounds=!1,this},invalidateSize:function(t){if(!this._loaded)return this;t=i({animate:!1,pan:!0},!0===t?{animate:!0}:t);var n=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var o=this.getSize(),s=n.divideBy(2).round(),r=o.divideBy(2).round(),a=s.subtract(r);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(e(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:n,newSize:o})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=i({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var n=e(this._handleGeolocationResponse,this),o=e(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(n,o,t):navigator.geolocation.getCurrentPosition(n,o,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var i=t.code,e=t.message||(1===i?"permission denied":2===i?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:i,message:"Geolocation error: "+e+"."})},_handleGeolocationResponse:function(t){var i=new M(t.coords.latitude,t.coords.longitude),e=i.toBounds(t.coords.accuracy),n=this._locateOptions;if(n.setView){var o=this.getBoundsZoom(e);this.setView(i,n.maxZoom?Math.min(o,n.maxZoom):o)}var s={latlng:i,bounds:e,timestamp:t.timestamp};for(var r in t.coords)"number"==typeof t.coords[r]&&(s[r]=t.coords[r]);this.fire("locationfound",s)},addHandler:function(t,i){if(!i)return this;var e=this[t]=new i(this);return this._handlers.push(e),this.options[t]&&e.enable(),this},remove:function(){if(this._initEvents(!0),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),ut(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)ut(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,i){var e=ht("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),i||this._mapPane);return t&&(this._panes[t]=e),e},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new T(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,i,e){t=z(t),e=w(e||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),a=t.getSouthEast(),h=this.getSize().subtract(e),u=b(this.project(a,n),this.project(r,n)).getSize(),l=Ni?this.options.zoomSnap:1,c=h.x/u.x,_=h.y/u.y,d=i?Math.max(c,_):Math.min(c,_);return n=this.getScaleZoom(d,n),l&&(n=Math.round(n/(l/100))*(l/100),n=i?Math.ceil(n/l)*l:Math.floor(n/l)*l),Math.max(o,Math.min(s,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new x(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,i){var e=this._getTopLeftPoint(t,i);return new P(e,e.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,i){var e=this.options.crs;return i=void 0===i?this._zoom:i,e.scale(t)/e.scale(i)},getScaleZoom:function(t,i){var e=this.options.crs;i=void 0===i?this._zoom:i;var n=e.zoom(t*e.scale(i));return isNaN(n)?1/0:n},project:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.latLngToPoint(C(t),i)},unproject:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.pointToLatLng(w(t),i)},layerPointToLatLng:function(t){var i=w(t).add(this.getPixelOrigin());return this.unproject(i)},latLngToLayerPoint:function(t){return this.project(C(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(C(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(z(t))},distance:function(t,i){return this.options.crs.distance(C(t),C(i))},containerPointToLayerPoint:function(t){return w(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return w(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var i=this.containerPointToLayerPoint(w(t));return this.layerPointToLatLng(i)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)))},mouseEventToContainerPoint:function(t){return tt(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var i=this._container=rt(t);if(!i)throw new Error("Map container not found.");if(i._leaflet_id)throw new Error("Map container is already initialized.");V(i,"scroll",this._onScroll,this),this._containerId=n(i)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&Ni,pt(t,"leaflet-container"+(Vi?" leaflet-touch":"")+(Ki?" leaflet-retina":"")+(Li?" leaflet-oldie":"")+(ki?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var i=at(t,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Lt(this._mapPane,new x(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(pt(t.markerPane,"leaflet-zoom-hide"),pt(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,i){Lt(this._mapPane,new x(0,0));var e=!this._loaded;this._loaded=!0,i=this._limitZoom(i),this.fire("viewprereset");var n=this._zoom!==i;this._moveStart(n,!1)._move(t,i)._moveEnd(n),this.fire("viewreset"),e&&this.fire("load")},_moveStart:function(t,i){return t&&this.fire("zoomstart"),i||this.fire("movestart"),this},_move:function(t,i,e){void 0===i&&(i=this._zoom);var n=this._zoom!==i;return this._zoom=i,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),(n||e&&e.pinch)&&this.fire("zoom",e),this.fire("move",e)},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return g(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){Lt(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[n(this._container)]=this;var i=t?q:V;i(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress",this._handleDOMEvent,this),this.options.trackResize&&i(window,"resize",this._onResize,this),Ni&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){g(this._resizeRequest),this._resizeRequest=f(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,i){for(var e,o=[],s="mouseout"===i||"mouseover"===i,r=t.target||t.srcElement,a=!1;r;){if((e=this._targets[n(r)])&&("click"===i||"preclick"===i)&&!t._simulated&&this._draggableMoved(e)){a=!0;break}if(e&&e.listens(i,!0)){if(s&&!ot(r,t))break;if(o.push(e),s)break}if(r===this._container)break;r=r.parentNode}return o.length||a||s||!ot(r,t)||(o=[this]),o},_handleDOMEvent:function(t){if(this._loaded&&!nt(t)){var i=t.type;"mousedown"!==i&&"keypress"!==i||zt(t.target||t.srcElement),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,n){if("click"===t.type){var o=i({},t);o.type="preclick",this._fireDOMEvent(o,o.type,n)}if(!t._stopped&&(n=(n||[]).concat(this._findEventTargets(t,e))).length){var s=n[0];"contextmenu"===e&&s.listens(e,!0)&&$(t);var r={originalEvent:t};if("keypress"!==t.type){var a=s.getLatLng&&(!s._radius||s._radius<=10);r.containerPoint=a?this.latLngToContainerPoint(s.getLatLng()):this.mouseEventToContainerPoint(t),r.layerPoint=this.containerPointToLayerPoint(r.containerPoint),r.latlng=a?s.getLatLng():this.layerPointToLatLng(r.layerPoint)}for(var h=0;h<n.length;h++)if(n[h].fire(e,r,!0),r.originalEvent._stopped||!1===n[h].options.bubblingMouseEvents&&-1!==d(this._mouseEvents,e))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,i=this._handlers.length;t<i;t++)this._handlers[t].disable()},whenReady:function(t,i){return this._loaded?t.call(i||this,{target:this}):this.on("load",t,i),this},_getMapPanePos:function(){return Pt(this._mapPane)||new x(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,i){return(t&&void 0!==i?this._getNewPixelOrigin(t,i):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,i){var e=this.getSize()._divideBy(2);return this.project(t,i)._subtract(e)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return this.project(t,i)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return b([this.project(t.getSouthWest(),i)._subtract(n),this.project(t.getNorthWest(),i)._subtract(n),this.project(t.getSouthEast(),i)._subtract(n),this.project(t.getNorthEast(),i)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,i,e){if(!e)return t;var n=this.project(t,i),o=this.getSize().divideBy(2),s=new P(n.subtract(o),n.add(o)),r=this._getBoundsOffset(s,e,i);return r.round().equals([0,0])?t:this.unproject(n.add(r),i)},_limitOffset:function(t,i){if(!i)return t;var e=this.getPixelBounds(),n=new P(e.min.add(t),e.max.add(t));return t.add(this._getBoundsOffset(n,i))},_getBoundsOffset:function(t,i,e){var n=b(this.project(i.getNorthEast(),e),this.project(i.getSouthWest(),e)),o=n.min.subtract(t.min),s=n.max.subtract(t.max);return new x(this._rebound(o.x,-s.x),this._rebound(o.y,-s.y))},_rebound:function(t,i){return t+i>0?Math.round(t-i)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(i))},_limitZoom:function(t){var i=this.getMinZoom(),e=this.getMaxZoom(),n=Ni?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(i,Math.min(e,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){mt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,i){var e=this._getCenterOffset(t)._trunc();return!(!0!==(i&&i.animate)&&!this.getSize().contains(e))&&(this.panBy(e,i),!0)},_createAnimProxy:function(){var t=this._proxy=ht("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var i=pe,e=this._proxy.style[i];wt(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),e===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",function(){var t=this.getCenter(),i=this.getZoom();wt(this._proxy,this.project(t,i),this.getZoomScale(i,1))},this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){ut(this._proxy),delete this._proxy},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,i,e){if(this._animatingZoom)return!0;if(e=e||{},!this._zoomAnimated||!1===e.animate||this._nothingToAnimate()||Math.abs(i-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(i),o=this._getCenterOffset(t)._divideBy(1-1/n);return!(!0!==e.animate&&!this.getSize().contains(o))&&(f(function(){this._moveStart(!0,!1)._animateZoom(t,i,!0)},this),!0)},_animateZoom:function(t,i,n,o){this._mapPane&&(n&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=i,pt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:i,noUpdate:o}),setTimeout(e(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&mt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),f(function(){this._moveEnd(!0)},this))}}),Pe=v.extend({options:{position:"topright"},initialize:function(t){l(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var i=this._map;return i&&i.removeControl(this),this.options.position=t,i&&i.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var i=this._container=this.onAdd(t),e=this.getPosition(),n=t._controlCorners[e];return pt(i,"leaflet-control"),-1!==e.indexOf("bottom")?n.insertBefore(i,n.firstChild):n.appendChild(i),this},remove:function(){return this._map?(ut(this._container),this.onRemove&&this.onRemove(this._map),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),be=function(t){return new Pe(t)};Le.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){function t(t,o){var s=e+t+" "+e+o;i[t+o]=ht("div",s,n)}var i=this._controlCorners={},e="leaflet-",n=this._controlContainer=ht("div",e+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)ut(this._controlCorners[t]);ut(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Te=Pe.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,i,e,n){return e<n?-1:n<e?1:0}},initialize:function(t,i,e){l(this,e),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in i)this._addLayer(i[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Pe.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,i){return this._addLayer(t,i),this._map?this._update():this},addOverlay:function(t,i){return this._addLayer(t,i,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var i=this._getLayer(n(t));return i&&this._layers.splice(this._layers.indexOf(i),1),this._map?this._update():this},expand:function(){pt(this._container,"leaflet-control-layers-expanded"),this._form.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._form.clientHeight?(pt(this._form,"leaflet-control-layers-scrollbar"),this._form.style.height=t+"px"):mt(this._form,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return mt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",i=this._container=ht("div",t),e=this.options.collapsed;i.setAttribute("aria-haspopup",!0),J(i),X(i);var n=this._form=ht("form",t+"-list");e&&(this._map.on("click",this.collapse,this),Ti||V(i,{mouseenter:this.expand,mouseleave:this.collapse},this));var o=this._layersLink=ht("a",t+"-toggle",i);o.href="#",o.title="Layers",Vi?(V(o,"click",Q),V(o,"click",this.expand,this)):V(o,"focus",this.expand,this),e||this.expand(),this._baseLayersList=ht("div",t+"-base",n),this._separator=ht("div",t+"-separator",n),this._overlaysList=ht("div",t+"-overlays",n),i.appendChild(n)},_getLayer:function(t){for(var i=0;i<this._layers.length;i++)if(this._layers[i]&&n(this._layers[i].layer)===t)return this._layers[i]},_addLayer:function(t,i,n){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:i,overlay:n}),this.options.sortLayers&&this._layers.sort(e(function(t,i){return this.options.sortFunction(t.layer,i.layer,t.name,i.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;lt(this._baseLayersList),lt(this._overlaysList),this._layerControlInputs=[];var t,i,e,n,o=0;for(e=0;e<this._layers.length;e++)n=this._layers[e],this._addItem(n),i=i||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=i&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var i=this._getLayer(n(t.target)),e=i.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;e&&this._map.fire(e,i)},_createRadioElement:function(t,i){var e='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(i?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=e,n.firstChild},_addItem:function(t){var i,e=document.createElement("label"),o=this._map.hasLayer(t.layer);t.overlay?((i=document.createElement("input")).type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=o):i=this._createRadioElement("leaflet-base-layers",o),this._layerControlInputs.push(i),i.layerId=n(t.layer),V(i,"click",this._onInputClick,this);var s=document.createElement("span");s.innerHTML=" "+t.name;var r=document.createElement("div");return e.appendChild(r),r.appendChild(i),r.appendChild(s),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){var t,i,e=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=e.length-1;s>=0;s--)t=e[s],i=this._getLayer(t.layerId).layer,t.checked?n.push(i):t.checked||o.push(i);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,i,e=this._layerControlInputs,n=this._map.getZoom(),o=e.length-1;o>=0;o--)t=e[o],i=this._getLayer(t.layerId).layer,t.disabled=void 0!==i.options.minZoom&&n<i.options.minZoom||void 0!==i.options.maxZoom&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expand:function(){return this.expand()},_collapse:function(){return this.collapse()}}),ze=Pe.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"&#x2212;",zoomOutTitle:"Zoom out"},onAdd:function(t){var i="leaflet-control-zoom",e=ht("div",i+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,i+"-in",e,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,i+"-out",e,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),e},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,i,e,n,o){var s=ht("a",e,n);return s.innerHTML=t,s.href="#",s.title=i,s.setAttribute("role","button"),s.setAttribute("aria-label",i),J(s),V(s,"click",Q),V(s,"click",o,this),V(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,i="leaflet-disabled";mt(this._zoomInButton,i),mt(this._zoomOutButton,i),(this._disabled||t._zoom===t.getMinZoom())&&pt(this._zoomOutButton,i),(this._disabled||t._zoom===t.getMaxZoom())&&pt(this._zoomInButton,i)}});Le.mergeOptions({zoomControl:!0}),Le.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ze,this.addControl(this.zoomControl))});var Me=Pe.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var i=ht("div","leaflet-control-scale"),e=this.options;return this._addScales(e,"leaflet-control-scale-line",i),t.on(e.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,i,e){t.metric&&(this._mScale=ht("div",i,e)),t.imperial&&(this._iScale=ht("div",i,e))},_update:function(){var t=this._map,i=t.getSize().y/2,e=t.distance(t.containerPointToLatLng([0,i]),t.containerPointToLatLng([this.options.maxWidth,i]));this._updateScales(e)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var i=this._getRoundNum(t),e=i<1e3?i+" m":i/1e3+" km";this._updateScale(this._mScale,e,i/t)},_updateImperial:function(t){var i,e,n,o=3.2808399*t;o>5280?(i=o/5280,e=this._getRoundNum(i),this._updateScale(this._iScale,e+" mi",e/i)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,i,e){t.style.width=Math.round(this.options.maxWidth*e)+"px",t.innerHTML=i},_getRoundNum:function(t){var i=Math.pow(10,(Math.floor(t)+"").length-1),e=t/i;return e=e>=10?10:e>=5?5:e>=3?3:e>=2?2:1,i*e}}),Ce=Pe.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){l(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=ht("div","leaflet-control-attribution"),J(this._container);for(var i in t._layers)t._layers[i].getAttribution&&this.addAttribution(t._layers[i].getAttribution());return this._update(),this._container},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var i in this._attributions)this._attributions[i]&&t.push(i);var e=[];this.options.prefix&&e.push(this.options.prefix),t.length&&e.push(t.join(", ")),this._container.innerHTML=e.join(" | ")}}});Le.mergeOptions({attributionControl:!0}),Le.addInitHook(function(){this.options.attributionControl&&(new Ce).addTo(this)});Pe.Layers=Te,Pe.Zoom=ze,Pe.Scale=Me,Pe.Attribution=Ce,be.layers=function(t,i,e){return new Te(t,i,e)},be.zoom=function(t){return new ze(t)},be.scale=function(t){return new Me(t)},be.attribution=function(t){return new Ce(t)};var Ze=v.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Ze.addTo=function(t,i){return t.addHandler(i,this),this};var Se,Ee={Events:hi},ke=Vi?"touchstart mousedown":"mousedown",Ie={mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},Ae={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"},Be=ui.extend({options:{clickTolerance:3},initialize:function(t,i,e,n){l(this,n),this._element=t,this._dragStartTarget=i||t,this._preventOutline=e},enable:function(){this._enabled||(V(this._dragStartTarget,ke,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Be._dragging===this&&this.finishDrag(),q(this._dragStartTarget,ke,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(!t._simulated&&this._enabled&&(this._moved=!1,!dt(this._element,"leaflet-zoom-anim")&&!(Be._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(Be._dragging=this,this._preventOutline&&zt(this._element),bt(),mi(),this._moving)))){this.fire("down");var i=t.touches?t.touches[0]:t;this._startPoint=new x(i.clientX,i.clientY),V(document,Ae[t.type],this._onMove,this),V(document,Ie[t.type],this._onUp,this)}},_onMove:function(t){if(!t._simulated&&this._enabled)if(t.touches&&t.touches.length>1)this._moved=!0;else{var i=t.touches&&1===t.touches.length?t.touches[0]:t,e=new x(i.clientX,i.clientY).subtract(this._startPoint);(e.x||e.y)&&(Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||($(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=Pt(this._element).subtract(e),pt(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),pt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(e),this._moving=!0,g(this._animRequest),this._lastEvent=t,this._animRequest=f(this._updatePosition,this,!0)))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),Lt(this._element,this._newPos),this.fire("drag",t)},_onUp:function(t){!t._simulated&&this._enabled&&this.finishDrag()},finishDrag:function(){mt(document.body,"leaflet-dragging"),this._lastTarget&&(mt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null);for(var t in Ae)q(document,Ae[t],this._onMove,this),q(document,Ie[t],this._onUp,this);Tt(),fi(),this._moved&&this._moving&&(g(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,Be._dragging=!1}}),Oe=(Object.freeze||Object)({simplify:Ct,pointToSegmentDistance:Zt,closestPointOnSegment:function(t,i,e){return Rt(t,i,e)},clipSegment:It,_getEdgeIntersection:At,_getBitCode:Bt,_sqClosestPointOnSegment:Rt,isFlat:Dt,_flat:Nt}),Re=(Object.freeze||Object)({clipPolygon:jt}),De={project:function(t){return new x(t.lng,t.lat)},unproject:function(t){return new M(t.y,t.x)},bounds:new P([-180,-90],[180,90])},Ne={R:6378137,R_MINOR:6356752.314245179,bounds:new P([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var i=Math.PI/180,e=this.R,n=t.lat*i,o=this.R_MINOR/e,s=Math.sqrt(1-o*o),r=s*Math.sin(n),a=Math.tan(Math.PI/4-n/2)/Math.pow((1-r)/(1+r),s/2);return n=-e*Math.log(Math.max(a,1e-10)),new x(t.lng*i*e,n)},unproject:function(t){for(var i,e=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,u=.1;h<15&&Math.abs(u)>1e-7;h++)i=s*Math.sin(a),i=Math.pow((1-i)/(1+i),s/2),a+=u=Math.PI/2-2*Math.atan(r*i)-a;return new M(a*e,t.x*e/n)}},je=(Object.freeze||Object)({LonLat:De,Mercator:Ne,SphericalMercator:di}),We=i({},_i,{code:"EPSG:3395",projection:Ne,transformation:function(){var t=.5/(Math.PI*Ne.R);return S(t,.5,-t,.5)}()}),He=i({},_i,{code:"EPSG:4326",projection:De,transformation:S(1/180,1,-1/180,.5)}),Fe=i({},ci,{projection:De,transformation:S(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,i){var e=i.lng-t.lng,n=i.lat-t.lat;return Math.sqrt(e*e+n*n)},infinite:!0});ci.Earth=_i,ci.EPSG3395=We,ci.EPSG3857=vi,ci.EPSG900913=yi,ci.EPSG4326=He,ci.Simple=Fe;var Ue=ui.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[n(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[n(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var i=t.target;if(i.hasLayer(this)){if(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents){var e=this.getEvents();i.on(e,this),this.once("remove",function(){i.off(e,this)},this)}this.onAdd(i),this.getAttribution&&i.attributionControl&&i.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),i.fire("layeradd",{layer:this})}}});Le.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var i=n(t);return this._layers[i]?this:(this._layers[i]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var i=n(t);return this._layers[i]?(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[i],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return!!t&&n(t)in this._layers},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},_addLayers:function(t){for(var i=0,e=(t=t?ei(t)?t:[t]:[]).length;i<e;i++)this.addLayer(t[i])},_addZoomLimit:function(t){!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[n(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var i=n(t);this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,i=-1/0,e=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom)}this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=t===1/0?void 0:t,e!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ve=Ue.extend({initialize:function(t,i){l(this,i),this._layers={};var e,n;if(t)for(e=0,n=t.length;e<n;e++)this.addLayer(t[e])},addLayer:function(t){var i=this.getLayerId(t);return this._layers[i]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var i=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[i]&&this._map.removeLayer(this._layers[i]),delete this._layers[i],this},hasLayer:function(t){return!!t&&(t in this._layers||this.getLayerId(t)in this._layers)},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var i,e,n=Array.prototype.slice.call(arguments,1);for(i in this._layers)(e=this._layers[i])[t]&&e[t].apply(e,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return n(t)}}),qe=Ve.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Ve.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Ve.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new T;for(var i in this._layers){var e=this._layers[i];t.extend(e.getBounds?e.getBounds():e.getLatLng())}return t}}),Ge=v.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0]},initialize:function(t){l(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,i){var e=this._getIconUrl(t);if(!e){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(e,i&&"IMG"===i.tagName?i:null);return this._setIconStyles(n,t),n},_setIconStyles:function(t,i){var e=this.options,n=e[i+"Size"];"number"==typeof n&&(n=[n,n]);var o=w(n),s=w("shadow"===i&&e.shadowAnchor||e.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+i+" "+(e.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,i){return i=i||document.createElement("img"),i.src=t,i},_getIconUrl:function(t){return Ki&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}}),Ke=Ge.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return Ke.imagePath||(Ke.imagePath=this._detectIconPath()),(this.options.imagePath||Ke.imagePath)+Ge.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){var t=ht("div","leaflet-default-icon-path",document.body),i=at(t,"background-image")||at(t,"backgroundImage");return document.body.removeChild(t),i=null===i||0!==i.indexOf("url")?"":i.replace(/^url\(["']?/,"").replace(/marker-icon\.png["']?\)$/,"")}}),Ye=Ze.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Be(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),pt(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&mt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var i=this._marker,e=i._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=L.DomUtil.getPosition(i._icon),r=e.getPixelBounds(),a=e.getPixelOrigin(),h=b(r.min._subtract(a).add(o),r.max._subtract(a).subtract(o));if(!h.contains(s)){var u=w((Math.max(h.max.x,s.x)-h.max.x)/(r.max.x-h.max.x)-(Math.min(h.min.x,s.x)-h.min.x)/(r.min.x-h.min.x),(Math.max(h.max.y,s.y)-h.max.y)/(r.max.y-h.max.y)-(Math.min(h.min.y,s.y)-h.min.y)/(r.min.y-h.min.y)).multiplyBy(n);e.panBy(u,{animate:!1}),this._draggable._newPos._add(u),this._draggable._startPos._add(u),L.DomUtil.setPosition(i._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=f(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup().fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(g(this._panRequest),this._panRequest=f(this._adjustPan.bind(this,t)))},_onDrag:function(t){var i=this._marker,e=i._shadow,n=Pt(i._icon),o=i._map.layerPointToLatLng(n);e&&Lt(e,n),i._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,i.fire("move",t).fire("drag",t)},_onDragEnd:function(t){g(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Xe=Ue.extend({options:{icon:new Ke,interactive:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",bubblingMouseEvents:!1},initialize:function(t,i){l(this,i),this._latlng=C(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var i=this._latlng;return this._latlng=C(t),this.update(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,i="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),e=t.icon.createIcon(this._icon),n=!1;e!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(e.title=t.title),"IMG"===e.tagName&&(e.alt=t.alt||"")),pt(e,i),t.keyboard&&(e.tabIndex="0"),this._icon=e,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex});var o=t.icon.createShadow(this._shadow),s=!1;o!==this._shadow&&(this._removeShadow(),s=!0),o&&(pt(o,i),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&s&&this.getPane("shadowPane").appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),ut(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&ut(this._shadow),this._shadow=null},_setPos:function(t){Lt(this._icon,t),this._shadow&&Lt(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(i)},_initInteraction:function(){if(this.options.interactive&&(pt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Ye)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Ye(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;vt(this._icon,t),this._shadow&&vt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}}),Je=Ue.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return l(this,t),this._renderer&&this._renderer._updateStyle(this),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+this._renderer.options.tolerance}}),$e=Je.extend({options:{fill:!0,radius:10},initialize:function(t,i){l(this,i),this._latlng=C(t),this._radius=this.options.radius},setLatLng:function(t){return this._latlng=C(t),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var i=t&&t.radius||this._radius;return Je.prototype.setStyle.call(this,t),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,i=this._radiusY||t,e=this._clickTolerance(),n=[t+e,i+e];this._pxBounds=new P(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}}),Qe=$e.extend({initialize:function(t,e,n){if("number"==typeof e&&(e=i({},n,{radius:e})),l(this,e),this._latlng=C(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new T(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Je.prototype.setStyle,_project:function(){var t=this._latlng.lng,i=this._latlng.lat,e=this._map,n=e.options.crs;if(n.distance===_i.distance){var o=Math.PI/180,s=this._mRadius/_i.R/o,r=e.project([i+s,t]),a=e.project([i-s,t]),h=r.add(a).divideBy(2),u=e.unproject(h).lat,l=Math.acos((Math.cos(s*o)-Math.sin(i*o)*Math.sin(u*o))/(Math.cos(i*o)*Math.cos(u*o)))/o;(isNaN(l)||0===l)&&(l=s/Math.cos(Math.PI/180*i)),this._point=h.subtract(e.getPixelOrigin()),this._radius=isNaN(l)?0:h.x-e.project([u,t-l]).x,this._radiusY=h.y-r.y}else{var c=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=e.latLngToLayerPoint(this._latlng),this._radius=this._point.x-e.latLngToLayerPoint(c).x}this._updateBounds()}}),tn=Je.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,i){l(this,i),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var i,e,n=1/0,o=null,s=Rt,r=0,a=this._parts.length;r<a;r++)for(var h=this._parts[r],u=1,l=h.length;u<l;u++){var c=s(t,i=h[u-1],e=h[u],!0);c<n&&(n=c,o=s(t,i,e))}return o&&(o.distance=Math.sqrt(n)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a=this._rings[0],h=a.length;if(!h)return null;for(t=0,i=0;t<h-1;t++)i+=a[t].distanceTo(a[t+1])/2;if(0===i)return this._map.layerPointToLatLng(a[0]);for(t=0,n=0;t<h-1;t++)if(o=a[t],s=a[t+1],e=o.distanceTo(s),(n+=e)>i)return r=(n-i)/e,this._map.layerPointToLatLng([s.x-r*(s.x-o.x),s.y-r*(s.y-o.y)])},getBounds:function(){return this._bounds},addLatLng:function(t,i){return i=i||this._defaultShape(),t=C(t),i.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new T,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return Dt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var i=[],e=Dt(t),n=0,o=t.length;n<o;n++)e?(i[n]=C(t[n]),this._bounds.extend(i[n])):i[n]=this._convertLatLngs(t[n]);return i},_project:function(){var t=new P;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t);var i=this._clickTolerance(),e=new x(i,i);this._bounds.isValid()&&t.isValid()&&(t.min._subtract(e),t.max._add(e),this._pxBounds=t)},_projectLatlngs:function(t,i,e){var n,o,s=t[0]instanceof M,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),e.extend(o[n]);i.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],i,e)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else{var i,e,n,o,s,r,a,h=this._parts;for(i=0,n=0,o=this._rings.length;i<o;i++)for(e=0,s=(a=this._rings[i]).length;e<s-1;e++)(r=It(a[e],a[e+1],t,e,!0))&&(h[n]=h[n]||[],h[n].push(r[0]),r[1]===a[e+1]&&e!==s-2||(h[n].push(r[1]),n++))}},_simplifyPoints:function(){for(var t=this._parts,i=this.options.smoothFactor,e=0,n=t.length;e<n;e++)t[e]=Ct(t[e],i)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,i){var e,n,o,s,r,a,h=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(e=0,s=this._parts.length;e<s;e++)for(n=0,o=(r=(a=this._parts[e]).length)-1;n<r;o=n++)if((i||0!==n)&&Zt(t,a[o],a[n])<=h)return!0;return!1}});tn._flat=Nt;var en=tn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a,h,u=this._rings[0],l=u.length;if(!l)return null;for(s=r=a=0,t=0,i=l-1;t<l;i=t++)e=u[t],n=u[i],o=e.y*n.x-n.y*e.x,r+=(e.x+n.x)*o,a+=(e.y+n.y)*o,s+=3*o;return h=0===s?u[0]:[r/s,a/s],this._map.layerPointToLatLng(h)},_convertLatLngs:function(t){var i=tn.prototype._convertLatLngs.call(this,t),e=i.length;return e>=2&&i[0]instanceof M&&i[0].equals(i[e-1])&&i.pop(),i},_setLatLngs:function(t){tn.prototype._setLatLngs.call(this,t),Dt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Dt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,i=this.options.weight,e=new x(i,i);if(t=new P(t.min.subtract(e),t.max.add(e)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var n,o=0,s=this._rings.length;o<s;o++)(n=jt(this._rings[o],t,!0)).length&&this._parts.push(n)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var i,e,n,o,s,r,a,h,u=!1;if(!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(s=0,r=(h=(i=this._parts[o]).length)-1;s<h;r=s++)e=i[s],n=i[r],e.y>t.y!=n.y>t.y&&t.x<(n.x-e.x)*(t.y-e.y)/(n.y-e.y)+e.x&&(u=!u);return u||tn.prototype._containsPoint.call(this,t,!0)}}),nn=qe.extend({initialize:function(t,i){l(this,i),this._layers={},t&&this.addData(t)},addData:function(t){var i,e,n,o=ei(t)?t:t.features;if(o){for(i=0,e=o.length;i<e;i++)((n=o[i]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var r=Wt(t,s);return r?(r.feature=Gt(t),r.defaultOptions=r.options,this.resetStyle(r),s.onEachFeature&&s.onEachFeature(t,r),this.addLayer(r)):this},resetStyle:function(t){return t.options=i({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this},setStyle:function(t){return this.eachLayer(function(i){this._setLayerStyle(i,t)},this)},_setLayerStyle:function(t,i){"function"==typeof i&&(i=i(t.feature)),t.setStyle&&t.setStyle(i)}}),on={toGeoJSON:function(t){return qt(this,{type:"Point",coordinates:Ut(this.getLatLng(),t)})}};Xe.include(on),Qe.include(on),$e.include(on),tn.include({toGeoJSON:function(t){var i=!Dt(this._latlngs),e=Vt(this._latlngs,i?1:0,!1,t);return qt(this,{type:(i?"Multi":"")+"LineString",coordinates:e})}}),en.include({toGeoJSON:function(t){var i=!Dt(this._latlngs),e=i&&!Dt(this._latlngs[0]),n=Vt(this._latlngs,e?2:i?1:0,!0,t);return i||(n=[n]),qt(this,{type:(e?"Multi":"")+"Polygon",coordinates:n})}}),Ve.include({toMultiPoint:function(t){var i=[];return this.eachLayer(function(e){i.push(e.toGeoJSON(t).geometry.coordinates)}),qt(this,{type:"MultiPoint",coordinates:i})},toGeoJSON:function(t){var i=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===i)return this.toMultiPoint(t);var e="GeometryCollection"===i,n=[];return this.eachLayer(function(i){if(i.toGeoJSON){var o=i.toGeoJSON(t);if(e)n.push(o.geometry);else{var s=Gt(o);"FeatureCollection"===s.type?n.push.apply(n,s.features):n.push(s)}}}),e?qt(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});var sn=Kt,rn=Ue.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,i,e){this._url=t,this._bounds=z(i),l(this,e)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(pt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){ut(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&ct(this._image),this},bringToBack:function(){return this._map&&_t(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=z(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,i=this._image=t?this._url:ht("img");pt(i,"leaflet-image-layer"),this._zoomAnimated&&pt(i,"leaflet-zoom-animated"),this.options.className&&pt(i,this.options.className),i.onselectstart=r,i.onmousemove=r,i.onload=e(this.fire,this,"load"),i.onerror=e(this._overlayOnError,this,"error"),this.options.crossOrigin&&(i.crossOrigin=""),this.options.zIndex&&this._updateZIndex(),t?this._url=i.src:(i.src=this._url,i.alt=this.options.alt)},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),e=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;wt(this._image,e,i)},_reset:function(){var t=this._image,i=new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),e=i.getSize();Lt(t,i.min),t.style.width=e.x+"px",t.style.height=e.y+"px"},_updateOpacity:function(){vt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)}}),an=rn.extend({options:{autoplay:!0,loop:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,i=this._image=t?this._url:ht("video");if(pt(i,"leaflet-image-layer"),this._zoomAnimated&&pt(i,"leaflet-zoom-animated"),i.onselectstart=r,i.onmousemove=r,i.onloadeddata=e(this.fire,this,"load"),t){for(var n=i.getElementsByTagName("source"),o=[],s=0;s<n.length;s++)o.push(n[s].src);this._url=n.length>0?o:[i.src]}else{ei(this._url)||(this._url=[this._url]),i.autoplay=!!this.options.autoplay,i.loop=!!this.options.loop;for(var a=0;a<this._url.length;a++){var h=ht("source");h.src=this._url[a],i.appendChild(h)}}}}),hn=Ue.extend({options:{offset:[0,7],className:"",pane:"popupPane"},initialize:function(t,i){l(this,t),this._source=i},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&vt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&vt(this._container,1),this.bringToFront()},onRemove:function(t){t._fadeAnimated?(vt(this._container,0),this._removeTimeout=setTimeout(e(ut,void 0,this._container),200)):ut(this._container)},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=C(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ct(this._container),this},bringToBack:function(){return this._map&&_t(this._container),this},_updateContent:function(){if(this._content){var t=this._contentNode,i="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof i)t.innerHTML=i;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(i)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),i=w(this.options.offset),e=this._getAnchor();this._zoomAnimated?Lt(this._container,t.add(e)):i=i.add(t).add(e);var n=this._containerBottom=-i.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+i.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}}),un=hn.extend({options:{maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t.openPopup(this),this},onAdd:function(t){hn.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Je||this._source.on("preclick",Y))},onRemove:function(t){hn.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Je||this._source.off("preclick",Y))},getEvents:function(){var t=hn.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t="leaflet-popup",i=this._container=ht("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),e=this._wrapper=ht("div",t+"-content-wrapper",i);if(this._contentNode=ht("div",t+"-content",e),J(e),X(this._contentNode),V(e,"contextmenu",Y),this._tipContainer=ht("div",t+"-tip-container",i),this._tip=ht("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=ht("a",t+"-close-button",i);n.href="#close",n.innerHTML="&#215;",V(n,"click",this._onCloseButtonClick,this)}},_updateLayout:function(){var t=this._contentNode,i=t.style;i.width="",i.whiteSpace="nowrap";var e=t.offsetWidth;e=Math.min(e,this.options.maxWidth),e=Math.max(e,this.options.minWidth),i.width=e+1+"px",i.whiteSpace="",i.height="";var n=t.offsetHeight,o=this.options.maxHeight;o&&n>o?(i.height=o+"px",pt(t,"leaflet-popup-scrolled")):mt(t,"leaflet-popup-scrolled"),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();Lt(this._container,i.add(e))},_adjustPan:function(){if(!(!this.options.autoPan||this._map._panAnim&&this._map._panAnim._inProgress)){var t=this._map,i=parseInt(at(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+i,n=this._containerWidth,o=new x(this._containerLeft,-e-this._containerBottom);o._add(Pt(this._container));var s=t.layerPointToContainerPoint(o),r=w(this.options.autoPanPadding),a=w(this.options.autoPanPaddingTopLeft||r),h=w(this.options.autoPanPaddingBottomRight||r),u=t.getSize(),l=0,c=0;s.x+n+h.x>u.x&&(l=s.x+n-u.x+h.x),s.x-l-a.x<0&&(l=s.x-a.x),s.y+e+h.y>u.y&&(c=s.y+e-u.y+h.y),s.y-c-a.y<0&&(c=s.y-a.y),(l||c)&&t.fire("autopanstart").panBy([l,c])}},_onCloseButtonClick:function(t){this._close(),Q(t)},_getAnchor:function(){return w(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});Le.mergeOptions({closePopupOnClick:!0}),Le.include({openPopup:function(t,i,e){return t instanceof un||(t=new un(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),Ue.include({bindPopup:function(t,i){return t instanceof un?(l(t,i),this._popup=t,t._source=this):(this._popup&&!i||(this._popup=new un(i,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t,i){if(t instanceof Ue||(i=t,t=this),t instanceof qe)for(var e in this._layers){t=this._layers[e];break}return i||(i=t.getCenter?t.getCenter():t.getLatLng()),this._popup&&this._map&&(this._popup._source=t,this._popup.update(),this._map.openPopup(this._popup,i)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(t){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var i=t.layer||t.target;this._popup&&this._map&&(Q(t),i instanceof Je?this.openPopup(t.layer||t.target,t.latlng):this._map.hasLayer(this._popup)&&this._popup._source===i?this.closePopup():this.openPopup(i,t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});var ln=hn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(t){hn.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(t){hn.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var t=hn.prototype.getEvents.call(this);return Vi&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=ht("div",t)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var i=this._map,e=this._container,n=i.latLngToContainerPoint(i.getCenter()),o=i.layerPointToContainerPoint(t),s=this.options.direction,r=e.offsetWidth,a=e.offsetHeight,h=w(this.options.offset),u=this._getAnchor();"top"===s?t=t.add(w(-r/2+h.x,-a+h.y+u.y,!0)):"bottom"===s?t=t.subtract(w(r/2-h.x,-h.y,!0)):"center"===s?t=t.subtract(w(r/2+h.x,a/2-u.y+h.y,!0)):"right"===s||"auto"===s&&o.x<n.x?(s="right",t=t.add(w(h.x+u.x,u.y-a/2+h.y,!0))):(s="left",t=t.subtract(w(r+u.x-h.x,a/2-u.y-h.y,!0))),mt(e,"leaflet-tooltip-right"),mt(e,"leaflet-tooltip-left"),mt(e,"leaflet-tooltip-top"),mt(e,"leaflet-tooltip-bottom"),pt(e,"leaflet-tooltip-"+s),Lt(e,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&vt(this._container,t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(i)},_getAnchor:function(){return w(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});Le.include({openTooltip:function(t,i,e){return t instanceof ln||(t=new ln(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:this.addLayer(t)},closeTooltip:function(t){return t&&this.removeLayer(t),this}}),Ue.include({bindTooltip:function(t,i){return t instanceof ln?(l(t,i),this._tooltip=t,t._source=this):(this._tooltip&&!i||(this._tooltip=new ln(i,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var i=t?"off":"on",e={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?e.add=this._openTooltip:(e.mouseover=this._openTooltip,e.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(e.mousemove=this._moveTooltip),Vi&&(e.click=this._openTooltip)),this[i](e),this._tooltipHandlersAdded=!t}},openTooltip:function(t,i){if(t instanceof Ue||(i=t,t=this),t instanceof qe)for(var e in this._layers){t=this._layers[e];break}return i||(i=t.getCenter?t.getCenter():t.getLatLng()),this._tooltip&&this._map&&(this._tooltip._source=t,this._tooltip.update(),this._map.openTooltip(this._tooltip,i),this._tooltip.options.interactive&&this._tooltip._container&&(pt(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(mt(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(t){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_openTooltip:function(t){var i=t.layer||t.target;this._tooltip&&this._map&&this.openTooltip(i,this._tooltip.options.sticky?t.latlng:void 0)},_moveTooltip:function(t){var i,e,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),e=this._map.containerPointToLayerPoint(i),n=this._map.layerPointToLatLng(e)),this._tooltip.setLatLng(n)}});var cn=Ge.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;if(i.innerHTML=!1!==e.html?e.html:"",e.bgPos){var n=w(e.bgPos);i.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}});Ge.Default=Ke;var _n=Ue.extend({options:{tileSize:256,opacity:1,updateWhenIdle:ji,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){l(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),ut(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ct(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(_t(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=o(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof x?t:new x(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var i,e=this.getPane().children,n=-t(-1/0,1/0),o=0,s=e.length;o<s;o++)i=e[o].style.zIndex,e[o]!==this._container&&i&&(n=t(n,+i));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Li){vt(this._container,this.options.opacity);var t=+new Date,i=!1,e=!1;for(var n in this._tiles){var o=this._tiles[n];if(o.current&&o.loaded){var s=Math.min(1,(t-o.loaded)/200);vt(o.el,s),s<1?i=!0:(o.active?e=!0:this._onOpaqueTile(o),o.active=!0)}}e&&!this._noPrune&&this._pruneTiles(),i&&(g(this._fadeFrame),this._fadeFrame=f(this._updateOpacity,this))}},_onOpaqueTile:r,_initContainer:function(){this._container||(this._container=ht("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,i=this.options.maxZoom;if(void 0!==t){for(var e in this._levels)this._levels[e].el.children.length||e===t?(this._levels[e].el.style.zIndex=i-Math.abs(t-e),this._onUpdateLevel(e)):(ut(this._levels[e].el),this._removeTilesAtZoom(e),this._onRemoveLevel(e),delete this._levels[e]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=ht("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=i,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),n.el.offsetWidth,this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:r,_onRemoveLevel:r,_onCreateLevel:r,_pruneTiles:function(){if(this._map){var t,i,e=this._map.getZoom();if(e>this.options.maxZoom||e<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(i=this._tiles[t]).retain=i.current;for(t in this._tiles)if((i=this._tiles[t]).current&&!i.active){var n=i.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var i in this._tiles)this._tiles[i].coords.z===t&&this._removeTile(i)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)ut(this._levels[t].el),this._onRemoveLevel(t),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,i,e,n){var o=Math.floor(t/2),s=Math.floor(i/2),r=e-1,a=new x(+o,+s);a.z=+r;var h=this._tileCoordsToKey(a),u=this._tiles[h];return u&&u.active?(u.retain=!0,!0):(u&&u.loaded&&(u.retain=!0),r>n&&this._retainParent(o,s,r,n))},_retainChildren:function(t,i,e,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*i;s<2*i+2;s++){var r=new x(o,s);r.z=e+1;var a=this._tileCoordsToKey(r),h=this._tiles[a];h&&h.active?h.retain=!0:(h&&h.loaded&&(h.retain=!0),e+1<n&&this._retainChildren(o,s,e+1,n))}},_resetView:function(t){var i=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),i,i)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var i=this.options;return void 0!==i.minNativeZoom&&t<i.minNativeZoom?i.minNativeZoom:void 0!==i.maxNativeZoom&&i.maxNativeZoom<t?i.maxNativeZoom:t},_setView:function(t,i,e,n){var o=this._clampZoom(Math.round(i));(void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom)&&(o=void 0);var s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),e||this._pruneTiles(),this._noPrune=!!e),this._setZoomTransforms(t,i)},_setZoomTransforms:function(t,i){for(var e in this._levels)this._setZoomTransform(this._levels[e],t,i)},_setZoomTransform:function(t,i,e){var n=this._map.getZoomScale(e,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i,e)).round();Ni?wt(t.el,o,n):Lt(t.el,o)},_resetGrid:function(){var t=this._map,i=t.options.crs,e=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=i.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,i.wrapLng[0]],n).x/e.x),Math.ceil(t.project([0,i.wrapLng[1]],n).x/e.y)],this._wrapY=i.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([i.wrapLat[0],0],n).y/e.x),Math.ceil(t.project([i.wrapLat[1],0],n).y/e.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var i=this._map,e=i._animatingZoom?Math.max(i._animateToZoom,i.getZoom()):i.getZoom(),n=i.getZoomScale(e,this._tileZoom),o=i.project(t,this._tileZoom).floor(),s=i.getSize().divideBy(2*n);return new P(o.subtract(s),o.add(s))},_update:function(t){var i=this._map;if(i){var e=this._clampZoom(i.getZoom());if(void 0===t&&(t=i.getCenter()),void 0!==this._tileZoom){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),s=o.getCenter(),r=[],a=this.options.keepBuffer,h=new P(o.getBottomLeft().subtract([a,-a]),o.getTopRight().add([a,-a]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var l=this._tiles[u].coords;l.z===this._tileZoom&&h.contains(new x(l.x,l.y))||(this._tiles[u].current=!1)}if(Math.abs(e-this._tileZoom)>1)this._setView(t,e);else{for(var c=o.min.y;c<=o.max.y;c++)for(var _=o.min.x;_<=o.max.x;_++){var d=new x(_,c);if(d.z=this._tileZoom,this._isValidTile(d)){var p=this._tiles[this._tileCoordsToKey(d)];p?p.current=!0:r.push(d)}}if(r.sort(function(t,i){return t.distanceTo(s)-i.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));var m=document.createDocumentFragment();for(_=0;_<r.length;_++)this._addTile(r[_],m);this._level.el.appendChild(m)}}}}},_isValidTile:function(t){var i=this._map.options.crs;if(!i.infinite){var e=this._globalTileRange;if(!i.wrapLng&&(t.x<e.min.x||t.x>e.max.x)||!i.wrapLat&&(t.y<e.min.y||t.y>e.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return z(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var i=this._map,e=this.getTileSize(),n=t.scaleBy(e),o=n.add(e);return[i.unproject(n,t.z),i.unproject(o,t.z)]},_tileCoordsToBounds:function(t){var i=this._tileCoordsToNwSe(t),e=new T(i[0],i[1]);return this.options.noWrap||(e=this._map.wrapLatLngBounds(e)),e},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var i=t.split(":"),e=new x(+i[0],+i[1]);return e.z=+i[2],e},_removeTile:function(t){var i=this._tiles[t];i&&(Ci||i.el.setAttribute("src",ni),ut(i.el),delete this._tiles[t],this.fire("tileunload",{tile:i.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){pt(t,"leaflet-tile");var i=this.getTileSize();t.style.width=i.x+"px",t.style.height=i.y+"px",t.onselectstart=r,t.onmousemove=r,Li&&this.options.opacity<1&&vt(t,this.options.opacity),Ti&&!zi&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,i){var n=this._getTilePos(t),o=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),e(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&f(e(this._tileReady,this,t,null,s)),Lt(s,n),this._tiles[o]={el:s,coords:t,current:!0},i.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,i,n){if(this._map){i&&this.fire("tileerror",{error:i,tile:n,coords:t});var o=this._tileCoordsToKey(t);(n=this._tiles[o])&&(n.loaded=+new Date,this._map._fadeAnimated?(vt(n.el,0),g(this._fadeFrame),this._fadeFrame=f(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),i||(pt(n.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:n.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Li||!this._map._fadeAnimated?f(this._pruneTiles,this):setTimeout(e(this._pruneTiles,this),250)))}},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var i=new x(this._wrapX?s(t.x,this._wrapX):t.x,this._wrapY?s(t.y,this._wrapY):t.y);return i.z=t.z,i},_pxBoundsToTileRange:function(t){var i=this.getTileSize();return new P(t.min.unscaleBy(i).floor(),t.max.unscaleBy(i).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}}),dn=_n.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(t,i){this._url=t,(i=l(this,i)).detectRetina&&Ki&&i.maxZoom>0&&(i.tileSize=Math.floor(i.tileSize/2),i.zoomReverse?(i.zoomOffset--,i.minZoom++):(i.zoomOffset++,i.maxZoom--),i.minZoom=Math.max(0,i.minZoom)),"string"==typeof i.subdomains&&(i.subdomains=i.subdomains.split("")),Ti||this.on("tileunload",this._onTileRemove)},setUrl:function(t,i){return this._url=t,i||this.redraw(),this},createTile:function(t,i){var n=document.createElement("img");return V(n,"load",e(this._tileOnLoad,this,i,n)),V(n,"error",e(this._tileOnError,this,i,n)),this.options.crossOrigin&&(n.crossOrigin=""),n.alt="",n.setAttribute("role","presentation"),n.src=this.getTileUrl(t),n},getTileUrl:function(t){var e={r:Ki?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var n=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=n),e["-y"]=n}return _(this._url,i(e,this.options))},_tileOnLoad:function(t,i){Li?setTimeout(e(t,this,null,i),0):t(null,i)},_tileOnError:function(t,i,e){var n=this.options.errorTileUrl;n&&i.getAttribute("src")!==n&&(i.src=n),t(e,i)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,i=this.options.maxZoom,e=this.options.zoomReverse,n=this.options.zoomOffset;return e&&(t=i-t),t+n},_getSubdomain:function(t){var i=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[i]},_abortLoading:function(){var t,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((i=this._tiles[t].el).onload=r,i.onerror=r,i.complete||(i.src=ni,ut(i),delete this._tiles[t]))}}),pn=dn.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var n=i({},this.defaultWmsParams);for(var o in e)o in this.options||(n[o]=e[o]);var s=(e=l(this,e)).detectRetina&&Ki?2:1,r=this.getTileSize();n.width=r.x*s,n.height=r.y*s,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var i=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[i]=this._crs.code,dn.prototype.onAdd.call(this,t)},getTileUrl:function(t){var i=this._tileCoordsToNwSe(t),e=this._crs,n=b(e.project(i[0]),e.project(i[1])),o=n.min,s=n.max,r=(this._wmsVersion>=1.3&&this._crs===He?[o.y,o.x,s.y,s.x]:[o.x,o.y,s.x,s.y]).join(","),a=L.TileLayer.prototype.getTileUrl.call(this,t);return a+c(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+r},setParams:function(t,e){return i(this.wmsParams,t),e||this.redraw(),this}});dn.WMS=pn,Yt.wms=function(t,i){return new pn(t,i)};var mn=Ue.extend({options:{padding:.1,tolerance:0},initialize:function(t){l(this,t),n(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&pt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,i){var e=this._map.getZoomScale(i,this._zoom),n=Pt(this._container),o=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,i),r=this._map.project(t,i).subtract(s),a=o.multiplyBy(-e).add(n).add(o).subtract(r);Ni?wt(this._container,a,e):Lt(this._container,a)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,i=this._map.getSize(),e=this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();this._bounds=new P(e,e.add(i.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),fn=mn.extend({getEvents:function(){var t=mn.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){mn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");V(t,"mousemove",o(this._onMouseMove,32,this),this),V(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),V(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_destroyContainer:function(){delete this._ctx,ut(this._container),q(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){this._redrawBounds=null;for(var t in this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){this._drawnLayers={},mn.prototype._update.call(this);var t=this._bounds,i=this._container,e=t.getSize(),n=Ki?2:1;Lt(i,t.min),i.width=n*e.x,i.height=n*e.y,i.style.width=e.x+"px",i.style.height=e.y+"px",Ki&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){mn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[n(t)]=t;var i=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=i),this._drawLast=i,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var i=t._order,e=i.next,n=i.prev;e?e.prev=n:this._drawLast=n,n?n.next=e:this._drawFirst=e,delete t._order,delete this._layers[L.stamp(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(t.options.dashArray){var i,e=t.options.dashArray.split(","),n=[];for(i=0;i<e.length;i++)n.push(Number(e[i]));t.options._dashArray=n}},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||f(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var i=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new P,this._redrawBounds.extend(t._pxBounds.min.subtract([i,i])),this._redrawBounds.extend(t._pxBounds.max.add([i,i]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var i=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,i.x,i.y)}else this._ctx.clearRect(0,0,this._container.width,this._container.height)},_draw:function(){var t,i=this._redrawBounds;if(this._ctx.save(),i){var e=i.getSize();this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,e.x,e.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,i){if(this._drawing){var e,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(this._drawnLayers[t._leaflet_id]=t,h.beginPath(),e=0;e<a;e++){for(n=0,o=r[e].length;n<o;n++)s=r[e][n],h[n?"lineTo":"moveTo"](s.x,s.y);i&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){if(this._drawing&&!t._empty()){var i=t._point,e=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;this._drawnLayers[t._leaflet_id]=t,1!==o&&(e.save(),e.scale(1,o)),e.beginPath(),e.arc(i.x,i.y/o,n,0,2*Math.PI,!1),1!==o&&e.restore(),this._fillStroke(e,t)}},_fillStroke:function(t,i){var e=i.options;e.fill&&(t.globalAlpha=e.fillOpacity,t.fillStyle=e.fillColor||e.color,t.fill(e.fillRule||"evenodd")),e.stroke&&0!==e.weight&&(t.setLineDash&&t.setLineDash(i.options&&i.options._dashArray||[]),t.globalAlpha=e.opacity,t.lineWidth=e.weight,t.strokeStyle=e.color,t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.stroke())},_onClick:function(t){for(var i,e,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(n)&&!this._map._draggableMoved(i)&&(e=i);e&&(et(t),this._fireEvent([e],t))},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var i=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,i)}},_handleMouseOut:function(t){var i=this._hoveredLayer;i&&(mt(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseout"),this._hoveredLayer=null)},_handleMouseHover:function(t,i){for(var e,n,o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(i)&&(n=e);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(pt(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t)},_fireEvent:function(t,i,e){this._map._fireDOMEvent(i,e||i.type,t)},_bringToFront:function(t){var i=t._order,e=i.next,n=i.prev;e&&(e.prev=n,n?n.next=e:e&&(this._drawFirst=e),i.prev=this._drawLast,this._drawLast.next=i,i.next=null,this._drawLast=i,this._requestRedraw(t))},_bringToBack:function(t){var i=t._order,e=i.next,n=i.prev;n&&(n.next=e,e?e.prev=n:n&&(this._drawLast=n),i.prev=null,i.next=this._drawFirst,this._drawFirst.prev=i,this._drawFirst=i,this._requestRedraw(t))}}),gn=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),vn={_initContainer:function(){this._container=ht("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(mn.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var i=t._container=gn("shape");pt(i,"leaflet-vml-shape "+(this.options.className||"")),i.coordsize="1 1",t._path=gn("path"),i.appendChild(t._path),this._updateStyle(t),this._layers[n(t)]=t},_addPath:function(t){var i=t._container;this._container.appendChild(i),t.options.interactive&&t.addInteractiveTarget(i)},_removePath:function(t){var i=t._container;ut(i),t.removeInteractiveTarget(i),delete this._layers[n(t)]},_updateStyle:function(t){var i=t._stroke,e=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(i||(i=t._stroke=gn("stroke")),o.appendChild(i),i.weight=n.weight+"px",i.color=n.color,i.opacity=n.opacity,n.dashArray?i.dashStyle=ei(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):i.dashStyle="",i.endcap=n.lineCap.replace("butt","flat"),i.joinstyle=n.lineJoin):i&&(o.removeChild(i),t._stroke=null),n.fill?(e||(e=t._fill=gn("fill")),o.appendChild(e),e.color=n.fillColor||n.color,e.opacity=n.fillOpacity):e&&(o.removeChild(e),t._fill=null)},_updateCircle:function(t){var i=t._point.round(),e=Math.round(t._radius),n=Math.round(t._radiusY||e);this._setPath(t,t._empty()?"M0 0":"AL "+i.x+","+i.y+" "+e+","+n+" 0,23592600")},_setPath:function(t,i){t._path.v=i},_bringToFront:function(t){ct(t._container)},_bringToBack:function(t){_t(t._container)}},yn=Ji?gn:E,xn=mn.extend({getEvents:function(){var t=mn.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=yn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=yn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){ut(this._container),q(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_onZoomStart:function(){this._update()},_update:function(){if(!this._map._animatingZoom||!this._bounds){mn.prototype._update.call(this);var t=this._bounds,i=t.getSize(),e=this._container;this._svgSize&&this._svgSize.equals(i)||(this._svgSize=i,e.setAttribute("width",i.x),e.setAttribute("height",i.y)),Lt(e,t.min),e.setAttribute("viewBox",[t.min.x,t.min.y,i.x,i.y].join(" ")),this.fire("update")}},_initPath:function(t){var i=t._path=yn("path");t.options.className&&pt(i,t.options.className),t.options.interactive&&pt(i,"leaflet-interactive"),this._updateStyle(t),this._layers[n(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){ut(t._path),t.removeInteractiveTarget(t._path),delete this._layers[n(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var i=t._path,e=t.options;i&&(e.stroke?(i.setAttribute("stroke",e.color),i.setAttribute("stroke-opacity",e.opacity),i.setAttribute("stroke-width",e.weight),i.setAttribute("stroke-linecap",e.lineCap),i.setAttribute("stroke-linejoin",e.lineJoin),e.dashArray?i.setAttribute("stroke-dasharray",e.dashArray):i.removeAttribute("stroke-dasharray"),e.dashOffset?i.setAttribute("stroke-dashoffset",e.dashOffset):i.removeAttribute("stroke-dashoffset")):i.setAttribute("stroke","none"),e.fill?(i.setAttribute("fill",e.fillColor||e.color),i.setAttribute("fill-opacity",e.fillOpacity),i.setAttribute("fill-rule",e.fillRule||"evenodd")):i.setAttribute("fill","none"))},_updatePoly:function(t,i){this._setPath(t,k(t._parts,i))},_updateCircle:function(t){var i=t._point,e=Math.max(Math.round(t._radius),1),n="a"+e+","+(Math.max(Math.round(t._radiusY),1)||e)+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(i.x-e)+","+i.y+n+2*e+",0 "+n+2*-e+",0 ";this._setPath(t,o)},_setPath:function(t,i){t._path.setAttribute("d",i)},_bringToFront:function(t){ct(t._path)},_bringToBack:function(t){_t(t._path)}});Ji&&xn.include(vn),Le.include({getRenderer:function(t){var i=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return i||(i=this._renderer=this.options.preferCanvas&&Xt()||Jt()),this.hasLayer(i)||this.addLayer(i),i},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var i=this._paneRenderers[t];return void 0===i&&(i=xn&&Jt({pane:t})||fn&&Xt({pane:t}),this._paneRenderers[t]=i),i}});var wn=en.extend({initialize:function(t,i){en.prototype.initialize.call(this,this._boundsToLatLngs(t),i)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=z(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});xn.create=yn,xn.pointsToPath=k,nn.geometryToLayer=Wt,nn.coordsToLatLng=Ht,nn.coordsToLatLngs=Ft,nn.latLngToCoords=Ut,nn.latLngsToCoords=Vt,nn.getFeature=qt,nn.asFeature=Gt,Le.mergeOptions({boxZoom:!0});var Ln=Ze.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){V(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){q(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){ut(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),mi(),bt(),this._startPoint=this._map.mouseEventToContainerPoint(t),V(document,{contextmenu:Q,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=ht("div","leaflet-zoom-box",this._container),pt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var i=new P(this._point,this._startPoint),e=i.getSize();Lt(this._box,i.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(ut(this._box),mt(this._container,"leaflet-crosshair")),fi(),Tt(),q(document,{contextmenu:Q,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(e(this._resetState,this),0);var i=new T(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend",{boxZoomBounds:i})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}});Le.addInitHook("addHandler","boxZoom",Ln),Le.mergeOptions({doubleClickZoom:!0});var Pn=Ze.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var i=this._map,e=i.getZoom(),n=i.options.zoomDelta,o=t.originalEvent.shiftKey?e-n:e+n;"center"===i.options.doubleClickZoom?i.setZoom(o):i.setZoomAround(t.containerPoint,o)}});Le.addInitHook("addHandler","doubleClickZoom",Pn),Le.mergeOptions({dragging:!0,inertia:!zi,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var bn=Ze.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Be(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}pt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){mt(this._map._container,"leaflet-grab"),mt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var i=z(this._map.options.maxBounds);this._offsetLimit=b(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var i=this._lastTime=+new Date,e=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(e),this._times.push(i),this._prunePositions(i)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),i=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=i.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,i){return t-(t-i)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),i=this._offsetLimit;t.x<i.min.x&&(t.x=this._viscousLimit(t.x,i.min.x)),t.y<i.min.y&&(t.y=this._viscousLimit(t.y,i.min.y)),t.x>i.max.x&&(t.x=this._viscousLimit(t.x,i.max.x)),t.y>i.max.y&&(t.y=this._viscousLimit(t.y,i.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,i=Math.round(t/2),e=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-i+e)%t+i-e,s=(n+i+e)%t-i-e,r=Math.abs(o+e)<Math.abs(s+e)?o:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(t){var i=this._map,e=i.options,n=!e.inertia||this._times.length<2;if(i.fire("dragend",t),n)i.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,r=e.easeLinearity,a=o.multiplyBy(r/s),h=a.distanceTo([0,0]),u=Math.min(e.inertiaMaxSpeed,h),l=a.multiplyBy(u/h),c=u/(e.inertiaDeceleration*r),_=l.multiplyBy(-c/2).round();_.x||_.y?(_=i._limitOffset(_,i.options.maxBounds),f(function(){i.panBy(_,{duration:c,easeLinearity:r,noMoveStart:!0,animate:!0})})):i.fire("moveend")}}});Le.addInitHook("addHandler","dragging",bn),Le.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Tn=Ze.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),V(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),q(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,i=document.documentElement,e=t.scrollTop||i.scrollTop,n=t.scrollLeft||i.scrollLeft;this._map._container.focus(),window.scrollTo(n,e)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var i,e,n=this._panKeys={},o=this.keyCodes;for(i=0,e=o.left.length;i<e;i++)n[o.left[i]]=[-1*t,0];for(i=0,e=o.right.length;i<e;i++)n[o.right[i]]=[t,0];for(i=0,e=o.down.length;i<e;i++)n[o.down[i]]=[0,t];for(i=0,e=o.up.length;i<e;i++)n[o.up[i]]=[0,-1*t]},_setZoomDelta:function(t){var i,e,n=this._zoomKeys={},o=this.keyCodes;for(i=0,e=o.zoomIn.length;i<e;i++)n[o.zoomIn[i]]=t;for(i=0,e=o.zoomOut.length;i<e;i++)n[o.zoomOut[i]]=-t},_addHooks:function(){V(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){q(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var i,e=t.keyCode,n=this._map;if(e in this._panKeys){if(n._panAnim&&n._panAnim._inProgress)return;i=this._panKeys[e],t.shiftKey&&(i=w(i).multiplyBy(3)),n.panBy(i),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds)}else if(e in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else{if(27!==e||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}Q(t)}}});Le.addInitHook("addHandler","keyboard",Tn),Le.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var zn=Ze.extend({addHooks:function(){V(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){q(this._map._container,"mousewheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var i=it(t),n=this._map.options.wheelDebounceTime;this._delta+=i,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var o=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(e(this._performZoom,this),o),Q(t)},_performZoom:function(){var t=this._map,i=t.getZoom(),e=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=e?Math.ceil(o/e)*e:o,r=t._limitZoom(i+(this._delta>0?s:-s))-i;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(i+r):t.setZoomAround(this._lastMousePos,i+r))}});Le.addInitHook("addHandler","scrollWheelZoom",zn),Le.mergeOptions({tap:!0,tapTolerance:15});var Mn=Ze.extend({addHooks:function(){V(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){q(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if($(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],n=i.target;this._startPos=this._newPos=new x(i.clientX,i.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&pt(n,"leaflet-active"),this._holdTimeout=setTimeout(e(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),this._simulateEvent("mousedown",i),V(document,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),q(document,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],e=i.target;e&&e.tagName&&"a"===e.tagName.toLowerCase()&&mt(e,"leaflet-active"),this._simulateEvent("mouseup",i),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var i=t.touches[0];this._newPos=new x(i.clientX,i.clientY),this._simulateEvent("mousemove",i)},_simulateEvent:function(t,i){var e=document.createEvent("MouseEvents");e._simulated=!0,i.target._simulatedClick=!0,e.initMouseEvent(t,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),i.target.dispatchEvent(e)}});Vi&&!Ui&&Le.addInitHook("addHandler","tap",Mn),Le.mergeOptions({touchZoom:Vi&&!zi,bounceAtZoomLimits:!0});var Cn=Ze.extend({addHooks:function(){pt(this._map._container,"leaflet-touch-zoom"),V(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){mt(this._map._container,"leaflet-touch-zoom"),q(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),"center"!==i.options.touchZoom&&(this._pinchStartLatLng=i.containerPointToLatLng(e.add(n)._divideBy(2))),this._startDist=e.distanceTo(n),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),V(document,"touchmove",this._onTouchMove,this),V(document,"touchend",this._onTouchEnd,this),$(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var i=this._map,n=i.mouseEventToContainerPoint(t.touches[0]),o=i.mouseEventToContainerPoint(t.touches[1]),s=n.distanceTo(o)/this._startDist;if(this._zoom=i.getScaleZoom(s,this._startZoom),!i.options.bounceAtZoomLimits&&(this._zoom<i.getMinZoom()&&s<1||this._zoom>i.getMaxZoom()&&s>1)&&(this._zoom=i._limitZoom(this._zoom)),"center"===i.options.touchZoom){if(this._center=this._startLatLng,1===s)return}else{var r=n._add(o)._divideBy(2)._subtract(this._centerPoint);if(1===s&&0===r.x&&0===r.y)return;this._center=i.unproject(i.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(i._moveStart(!0,!1),this._moved=!0),g(this._animRequest);var a=e(i._move,i,this._center,this._zoom,{pinch:!0,round:!1});this._animRequest=f(a,this,!0),$(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,g(this._animRequest),q(document,"touchmove",this._onTouchMove),q(document,"touchend",this._onTouchEnd),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}});Le.addInitHook("addHandler","touchZoom",Cn),Le.BoxZoom=Ln,Le.DoubleClickZoom=Pn,Le.Drag=bn,Le.Keyboard=Tn,Le.ScrollWheelZoom=zn,Le.Tap=Mn,Le.TouchZoom=Cn;var Zn=window.L;window.L=t,Object.freeze=$t,t.version="1.3.1",t.noConflict=function(){return window.L=Zn,this},t.Control=Pe,t.control=be,t.Browser=$i,t.Evented=ui,t.Mixin=Ee,t.Util=ai,t.Class=v,t.Handler=Ze,t.extend=i,t.bind=e,t.stamp=n,t.setOptions=l,t.DomEvent=de,t.DomUtil=xe,t.PosAnimation=we,t.Draggable=Be,t.LineUtil=Oe,t.PolyUtil=Re,t.Point=x,t.point=w,t.Bounds=P,t.bounds=b,t.Transformation=Z,t.transformation=S,t.Projection=je,t.LatLng=M,t.latLng=C,t.LatLngBounds=T,t.latLngBounds=z,t.CRS=ci,t.GeoJSON=nn,t.geoJSON=Kt,t.geoJson=sn,t.Layer=Ue,t.LayerGroup=Ve,t.layerGroup=function(t,i){return new Ve(t,i)},t.FeatureGroup=qe,t.featureGroup=function(t){return new qe(t)},t.ImageOverlay=rn,t.imageOverlay=function(t,i,e){return new rn(t,i,e)},t.VideoOverlay=an,t.videoOverlay=function(t,i,e){return new an(t,i,e)},t.DivOverlay=hn,t.Popup=un,t.popup=function(t,i){return new un(t,i)},t.Tooltip=ln,t.tooltip=function(t,i){return new ln(t,i)},t.Icon=Ge,t.icon=function(t){return new Ge(t)},t.DivIcon=cn,t.divIcon=function(t){return new cn(t)},t.Marker=Xe,t.marker=function(t,i){return new Xe(t,i)},t.TileLayer=dn,t.tileLayer=Yt,t.GridLayer=_n,t.gridLayer=function(t){return new _n(t)},t.SVG=xn,t.svg=Jt,t.Renderer=mn,t.Canvas=fn,t.canvas=Xt,t.Path=Je,t.CircleMarker=$e,t.circleMarker=function(t,i){return new $e(t,i)},t.Circle=Qe,t.circle=function(t,i,e){return new Qe(t,i,e)},t.Polyline=tn,t.polyline=function(t,i){return new tn(t,i)},t.Polygon=en,t.polygon=function(t,i){return new en(t,i)},t.Rectangle=wn,t.rectangle=function(t,i){return new wn(t,i)},t.Map=Le,t.map=function(t,i){return new Le(t,i)}});
/**
 * Leaflet plugin for work with geoObjects
 * @author artX
 */
L.B24XHR=L.Class.extend({options:{url:null,method:"GET",data:{},successCallback:null,async:!0},initialize:function(t){L.setOptions(this,t)},xhr:function(){if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;for(var t,o=["MSXML2.XmlHttp.6.0","MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"],e=0;e<o.length;e++)try{t=new ActiveXObject(o[e]);break}catch(t){}return t},send:function(){var t=this.xhr(),o=this.options.url,e=this.options.successCallback,n=this.options.method,i=this.options.data,r=this.options.async;if(o){var s=[];for(var a in i)i.hasOwnProperty(a)&&s.push(encodeURIComponent(a)+"="+encodeURIComponent(i[a]));return"GET"==n?(o+=s.length?"?"+s.join("&"):"",i=null):i=s.join("&"),t.open(n,o,r),t.onreadystatechange=function(){200==t.status&&4==t.readyState&&"function"==typeof e&&e(JSON.parse(t.responseText))},"POST"==n&&!i instanceof FormData&&t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.send(i),t}console.error("url not found!")}}),L.B24proxy=L.Class.extend({options:{server:"https://geo.b24host.ru/",sourceID:null},initialize:function(t){L.setOptions(this,t)},prepareLatLng:function(t){return t.lat&&t.lng?t.lat+","+t.lng:t},prepareData:function(t){return t||(t={}),this.options.sourceID&&(t.SOURCE=this.options.sourceID),t},preparePopup:function(t,o){var e="";return t.title&&(e+=t.title),t.desc&&(e+=t.desc),o.showAddress&&t.address&&(e+="<span>"+t.address+"</span>"),o.showCoordinate&&t.coordinate&&(e+="<span>"+t.coordinate+"</span>"),e},clearMap:function(t){t.eachLayer(function(o){o._url||t.removeLayer(o)})},makeRequest:function(t){return new L.B24XHR(t).send()},geocode:function(t,o,e){o&&this.clearMap(o);var n=!1;e&&(e.commonTitle||e.commonDesc||e.showAddress||e.showCoordinate)&&(n=!0);var i=function(t,o){if(n){var i=this.preparePopup({title:e.commonTitle,desc:e.commonDesc,address:t.properties.address,coordinate:t.properties.coordinates},{showAddress:e.showAddress,showCoordinate:e.showCoordinate});""!==i&&("tooltip"===e.popupType?o.bindTooltip(i):o.bindPopup(i))}}.bind(this);return this.makeRequest({url:this.options.server,data:this.prepareData({method:"geocode",place:this.prepareLatLng(t)}),successCallback:function(t){if(o){var e=L.geoJSON(t,{coordsToLatLng:function(t){return t},onEachFeature:i}).addTo(o);o.fitBounds(e.getBounds(),{maxZoom:o.options.zoom})}}})},route:function(t,o,e){o&&this.clearMap(o);var n=!1,i=function(t,o){var i=L.marker(o),r=null,s="",a="";return n?e&&e.endPoint&&(s=this.preparePopup({title:!!e.endPoint.title&&e.endPoint.title,desc:!!e.endPoint.desc&&e.endPoint.desc,coordinate:t.properties.coordinates},{showCoordinate:!!e.endPoint.showCoordinate&&e.endPoint.showCoordinate}),e.endPoint.icon&&(r=e.endPoint.icon),e.endPoint.popupType&&(a=e.endPoint.popupType)):(n=!0,e&&e.startPoint&&(s=this.preparePopup({title:!!e.startPoint.title&&e.startPoint.title,desc:!!e.startPoint.desc&&e.startPoint.desc,coordinate:t.properties.coordinates},{showCoordinate:!!e.startPoint.showCoordinate&&e.startPoint.showCoordinate}),e.startPoint.icon&&(r=e.startPoint.icon),e.startPoint.popupType&&(a=e.startPoint.popupType))),r&&r.iconUrl&&r.iconSize&&i.setIcon(L.icon(r)),""!==s&&("tooltip"===a?i.bindTooltip(s):i.bindPopup(s)),i}.bind(this);return this.makeRequest({url:this.options.server,data:this.prepareData({method:"direction",places:t.join("|")}),successCallback:function(t){if(!o)return t;var n=L.geoJSON(t,{coordsToLatLng:function(t){return t},style:function(t){if("LineString"===t.geometry.type&&e&&e.style)return e.style},pointToLayer:i}).addTo(o);o.fitBounds(n.getBounds(),{maxZoom:o.options.zoom})}})}}),L.b24proxy=function(t){return new L.B24proxy(t)};


/**
 * Яндекс.Метрика
 *
 * @namespace App.c.blocks
 * @class Metrika
 * @returns {object}
 */
App.c.blocks.Metrika = function() {
	var self = this;

	self.opt = {};
	self.dom = {};
	self.execute = function() {
		//console.info('Metrika:execute');
		try {
			App.d.w.yaCounter38047745 = new Ya.Metrika({
				id:38047745,
				clickmap:true,
				trackLinks:true,
				accurateTrackBounce:true,
				webvisor:true,
				trackHash:true
			});
			if (App.d.d.location.hostname == 'develop.stroyprice.ru') {
				console.info('Metrika: metrika test');
				try {
					var yaCounter42293654 = new Ya.Metrika({
						id:42293654,
						clickmap:true,
						trackLinks:true,
						accurateTrackBounce:true,
						ut:"noindex"
					});
				} catch(e) { }
			}
		} catch(e) {
			console.error('Metrika:', e);
		}
	};
	self.render = function() {
		setTimeout(self.execute, 0);
	};
	self.initiate = function() {
		if (App.d.d.location.protocol == "file:") {
			self = null;
			return false;
		}
		self.render();
	};
	self.initiate();
	return {self: self};
};

/**
 * Основное меню ЛК
 *
 * @namespace App.c.blocks
 * @class Header
 * @returns {object}
 */
App.c.blocks.MenuWide = function () {
    let self = this;

    self.opt = {};
    self.dom = {};
    self.render = function () {
        if (self.dom.$block.hasAttribute('data-url')) {
            self.dom.$unseens = [].slice.call(self.dom.$block.querySelectorAll('.menu-wide__link-unseen'));
            if (self.dom.$unseens) {
                self.opt.process = false;
                self.prepare_unseen();
                self.dom.$block.addEventListener('to-request', () => {
                    self.prepare_unseen();
                });
            }
        }
    };
    self.handle_more_action = ($node) => {
        let $wrp = $node.closest_node('.menu-wide__nav-links'), show_class = 'menu-wide__nav-links_open';
        if ($wrp) {
            $node.removeAttribute('style');
            let action_width = $node.offsetWidth;
            $node = App.h.detach($node);
            let $nodes = [].slice.call($wrp.querySelectorAll('.menu-wide__link'));
            let remove_action = () => {
                    let $action = $wrp.querySelector('.menu-wide__link-more');
                    if ($action) {
                        $action.remove_node();
                    }
                },
                insert_action = (key) => {
                    if ($nodes.hasOwnProperty(key)) {
                        let $action = $node.cloneNode(true);
                        $action.addEventListener('click', () => {
                            $wrp.classList.add(show_class);
                            remove_action();
                        });
                        $wrp.insertBefore($action, $nodes[key]);
                    }
                },
                show_action = () => {
                    if ($wrp.classList.contains(show_class)) {
                        remove_action();
                    } else if (window.innerWidth >= window.constants.breakpoint_sm && window.innerWidth < window.constants.breakpoint_lg) {
                        remove_action();
                        let width = $wrp.offsetWidth, total = 0;
                        for (let index in $nodes) {
                            if (!$nodes.hasOwnProperty(index)) continue;
                            let style = $nodes[index].currentStyle || window.getComputedStyle($nodes[index]),
                                w = $nodes[index].offsetWidth,
                                m = parseFloat(style.marginLeft);
                            total += w + m;
                            if (width - total <= 0) {
                                if (width - total - action_width > 0) {
                                    insert_action(index);
                                } else {
                                    insert_action(index - 1);
                                }
                                break;
                            }
                        }
                    } else {
                        remove_action();
                    }
                };
            show_action();
            window.addEventListener('resize', () => {
                show_action();
            });
        }
    };
    self.prepare_unseen = function () {
        if (!self.dom.$unseens || !self.dom.$block.hasAttribute('data-params') || self.opt.process) {
            return;
        }
        self.opt.process = true;
        setTimeout(() => {
            let xhr = new XHR({
                url: self.dom.$block.getAttribute('data-url'),
                data: window.parse_json(self.dom.$block.getAttribute('data-params')),
                finish_callback: () => {
                    self.opt.process = false;
                },
                success_callback: ((string) => {
                    let response = window.parse_json(string);
                    if (!response['result'] || !response['result']['list']) {
                        return;
                    }
                    response = response['result']['list'];
                    let key, has_unseen = 0;
                    for (key in response) {
                        if (response.hasOwnProperty(key)) {
                            let value = parseInt(response[key]);
                            if (!isNaN(value) && value > 0) {
                                if (value > 99) {
                                    value = '99+';
                                }
                                [].slice.call(document.querySelectorAll('.menu-wide__link-unseen-' + key)).forEach(($unseen) => {
                                    if ($unseen.classList.contains('menu-wide__hide')) {
                                        $unseen.classList.remove('menu-wide__hide');
                                        $unseen.classList.remove('menu-wide__link-unseen-' + key);
                                    } else {
                                        let $label = $unseen.querySelector('.menu-wide__new-label');
                                        if ($label) {
                                            $label.classList.remove('menu-wide__hide');
                                            $label.innerHTML = value;
                                            has_unseen += value;
                                        }
                                    }
                                });
                            } else {
                                [].slice.call(document.querySelectorAll('.menu-wide__link-unseen-' + key)).forEach(($unseen) => {
                                    let $label = $unseen.querySelector('.menu-wide__new-label');
                                    if ($label) {
                                        $label.classList.add('menu-wide__hide');
                                        $label.innerHTML = '';
                                    }
                                });
                            }
                        }
                    }
                    if (has_unseen > 0) {
                        self.dom.$block.trigger_event('has-unseen');
                    }
                })
            });
            xhr.send();
        }, 500);
    };
    self.initiate = function () {
        self.dom.$block = App.d.d.querySelector('.menu-wide');
        if (!self.dom.$block) {
            self = null;
            return false;
        }
        self.render();
        [].slice.call(App.d.d.querySelectorAll('.menu-wide__link-more')).forEach(($node) => self.handle_more_action($node));
    };
    self.initiate();
    return {self: self};
};

/**
 * Генератор аватарок
 *
 * @class Avatar
 */
class Avatar {
    constructor($node) {
        this.opt = {};
        this.dom = {};
        if (!($node instanceof Element)) {
            console.warn(this.class_name + '.construct', '$node не узел');
            return;
        }
        if ($node.get_instance()) {
            console.warn(this.class_name + '.construct', 'узел уже инициализирован');
            return $node.get_instance();
        }
        this.dom.$block = $node;
        // 48 width / 20 font size
        this.opt.ratio = 20 / 48;
        this.opt.defaults = {
            textAlign: "center",
            fillStyle: "#FFF"
        };
        this.opt.colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];
        if (['CANVAS', 'IMG'].indexOf(this.dom.$block.tagName) === -1) {
            return;
        }
        if (this.dom.$block.tagName === 'IMG') {
            this.dom.$canvas = window.create_node('', 'canvas', '');
            this.dom.$canvas.width = this.dom.$block.width;
            this.dom.$canvas.height = this.dom.$block.height;
        } else {
            this.dom.$canvas = this.dom.$block;
        }
        this.opt.context = this.dom.$canvas.getContext("2d");
        let width = this.dom.$canvas.width,
            height = this.dom.$canvas.height,
            name = this.dom.$block.dataset['name'];
        if (name.length === 0) {
            return;
        }
        let split = name.split(" ");
        if (split[0] === '') {
            return;
        }
        let initials;
        if (split[1] && split[1] !== '') {
            initials = split[0].charAt(0).toUpperCase() + split[1].charAt(0).toUpperCase();
        } else {
            initials = split[0].charAt(0).toUpperCase();
        }
        if (this.dom.$block.hasAttribute('data-fill')) {
            this.opt.context.fillStyle = this.dom.$block.getAttribute('data-fill');
        } else {
            let color_index = (initials.charCodeAt(0) - 65) % this.opt.colors.length;
            this.opt.context.fillStyle = this.opt.colors[color_index];
        }
        this.opt.context.fillRect(0, 0, width, height);
        Object.assign(this.opt.context, this.opt.defaults, {
            font: width * this.opt.ratio + "px Arial"
        });
        this.opt.context.fillText(initials, width / 2, height / 1.5);
        if (this.dom.$block.tagName === 'IMG') {
            this.dom.$block.src = this.dom.$canvas.toDataURL();
        }
        this.dom.$block.mount_instance(this, true);
    }
}

Avatar.prototype.class_name = 'Avatar';
Avatar.prototype.node_name = 'avatar';
Avatar.prototype.node_class = '.' + Avatar.prototype.node_name;
window.components[Avatar.prototype.class_name] = Avatar;

(function () {
    try {
        console.info(Avatar.prototype.class_name + '.initiation');
        let $blocks = document.querySelectorAll(Avatar.prototype.node_class);
        for (let index in $blocks) {
            if (!$blocks.hasOwnProperty(index)) continue;
            new Avatar($blocks[index]);
        }
    } catch (errors) {
        console.error(Avatar.prototype.class_name + '.initiation', errors);
    }
})();

/**
 * Типовая шапка сайта
 *
 * @namespace App.c.blocks
 * @class HeaderActual
 * @returns {object}
 */
App.c.blocks.HeaderActual = function () {
    let self = this;

    self.opt = {};
    self.dom = {};
    self.render = function () {
        self.dom.$row = self.dom.$block.querySelector('.header-actual__row');
        self.dom.$wrp = self.dom.$block.querySelector('.header-actual__block');
        self.dom.$hamburger = self.dom.$block.querySelector('.header-actual__hamburger-field');
        self.dom.$shadow = self.dom.$block.querySelector('.header-actual__hamburger-box-shadow');
        self.dom.$menu = self.dom.$block.querySelector('.menu-wide');
        if (self.dom.$menu) {
            self.dom.$menu.addEventListener('has-unseen', () => {
                if (self.dom.$avatar) {
                    self.dom.$avatar.classList.add('header-actual__user-avatar_unseen')
                }
            });
        }
        self.dom.$body = document.querySelector('body');
        self.dom.$avatar = self.dom.$block.querySelector('.header-actual__user-avatar');
        if (self.dom.$shadow) {
            let shadow_event = () => {
                if (!self.dom.$hamburger.checked) {
                    return;
                }
                self.dom.$hamburger.checked = false;
                self.dom.$hamburger.trigger_event('change');
            };
            self.dom.$shadow.addEventListener('click', () => {
                shadow_event();
            });
            self.dom.$shadow.addEventListener('touch', () => {
                shadow_event();
            });
            self.dom.$shadow.addEventListener('touchstart', () => {
                shadow_event();
            });
            self.dom.$block.addEventListener('to-hide', () => {
                shadow_event();
            });
        }
        if (self.dom.$hamburger) {
            document.addEventListener('click', self.on_outside_click.bind(this), false);
            document.addEventListener('touch', self.on_outside_click.bind(this), false);
            document.addEventListener('touchstart', self.on_outside_click.bind(this), false);
            document.addEventListener('keydown', self.on_outside_key_down.bind(this), false);
            self.dom.$hamburger.addEventListener('change', () => {
                if (self.dom.$hamburger.checked) {
                    self.dom.$block.trigger_event('is-shown');
                }
                self.freeze_page();
            });
            self.opt.is_fixed = self.dom.$block.hasAttribute('data-fixed');
            self.check_fixed();
            self.hide_on_scroll();
            window.addEventListener('resize', () => {
                self.freeze_page();
                self.check_fixed();
            });
            self.dom.$block.addEventListener('check-fixed', () => {
                self.check_fixed();
                self.dom.$wrp.removeAttribute('style');
            });
        }
    };
    self.hide_on_scroll = () => {
        if (!self.opt.is_fixed) {
            return;
        }
        let prev_scroll = window.pageYOffset;
        window.addEventListener('scroll', () => {
            if (window.innerWidth < window.constants.breakpoint_md) {
                let cur_scroll = window.pageYOffset;
                if (cur_scroll > self.dom.$row.offsetHeight / 2) {
                    if (prev_scroll > cur_scroll) {
                        self.dom.$wrp.style.top = '0';
                    } else {
                        self.dom.$wrp.style.top = '-' + self.dom.$row.offsetHeight + 'px';
                    }
                    prev_scroll = cur_scroll;
                }
            } else {
                self.dom.$wrp.removeAttribute('style');
            }
        });
    };
    self.check_fixed = () => {
        if (!self.opt.is_fixed) {
            return;
        }
        if (window.innerWidth < window.constants.breakpoint_md) {
            self.dom.$block.removeAttribute('style');
            self.dom.$block.style.height = self.dom.$row.offsetHeight + 'px';
            self.dom.$block.classList.add('header-actual_fixed');
        } else {
            self.dom.$block.classList.remove('header-actual_fixed');
            self.dom.$block.removeAttribute('style');
        }
    };
    self.freeze_page = () => {
        if (!self.dom.$hamburger) {
            return;
        }
        if (window.innerWidth < window.constants.breakpoint_sm) {
            if (self.dom.$hamburger.checked) {
                self.dom.$body.style.overflow = 'hidden';
            } else {
                self.dom.$body.removeAttribute('style');
            }
        } else {
            self.dom.$body.removeAttribute('style');
        }
    };
    self.on_outside_click = (e) => {
        if (!self.dom.$hamburger.checked) {
            return;
        }
        let is_target_block = (e.target == this.dom.$block),
            has_target_block = App.h.has_parent(e.target, self.dom.$block);
        if (!is_target_block && !has_target_block) {
            self.dom.$hamburger.checked = false;
            self.dom.$hamburger.trigger_event('change');
        }
    };
    self.on_outside_key_down = (e) => {
        if (!self.dom.$hamburger.checked) {
            return;
        }
        if (e.which == 27) {
            self.dom.$hamburger.checked = false;
            self.dom.$hamburger.trigger_event('change');
            e.stopPropagation();
            e.preventDefault();
        }
    };
    self.initiate = function () {
        self.dom.$block = App.d.d.querySelector('.header-actual');
        if (!self.dom.$block) {
            self = null;
            return false;
        }
        self.render();
    };
    self.initiate();
    return {self: self};
};

/**
 * Комбинированная форма поиска
 * Интерфейс публичной части
 *
 * @class CompleteBlockMultilevel
 */
class CompleteBlockMultilevel {
    constructor($node) {
        this.opt = {};
        this.dom = {};
        if (!($node instanceof Element)) {
            console.warn(this.class_name + '.construct', '$node не узел');
            return;
        }
        if ($node.get_instance()) {
            console.warn(this.class_name + '.construct', 'узел уже инициализирован');
            return $node.get_instance();
        }
        this.dom.$block = $node;
        this.dom.$multilevel = this.dom.$block.querySelector('.multilevel-select');
        if (this.dom.$multilevel) {
            this.dom.$multilevel_btn = this.dom.$multilevel.querySelector('.multilevel-select__btn');
            this.dom.$multilevel_list = this.dom.$multilevel.querySelector('.multilevel-select__list');
        }
        this.dom.$complete = this.dom.$block.querySelector('.complete-block');
        if (this.dom.$complete) {
            this.dom.$complete_hamburger = this.dom.$complete.querySelector('.complete-block__hamburger');
            this.dom.$complete_field = this.dom.$complete.querySelector('.complete-block__field');
            if (this.dom.$complete_field) {
                this.dom.$complete_field.value = '';
            }
        }
        if (!this.dom.$complete) {
            return;
        }
        this.dom.$block.addEventListener('to-clear', () => {
            if (this.dom.$complete_field) {
                this.dom.$complete_field.value = '';
            }
        });
        this.opt.options = {};
        if (this.dom.$block.hasAttribute('data-options')) {
            this.opt.options = window.parse_json(this.dom.$block.getAttribute('data-options'));
            this.dom.$block.removeAttribute('data-options');
        }
        this.opt.is_shown = false;
        if (!this.dom.$block.hasAttribute('data-delay')) {
            this.prepare_block();
        } else {
            let get_started = (() => {
                this.dom.$block.removeAttribute('data-delay');
                this.prepare_block();
                this.dom.$block.removeEventListener('get-started', get_started);
            });
            this.dom.$block.addEventListener('get-started', get_started);
        }
        document.addEventListener('click', this.on_outside_click.bind(this), false);
        document.addEventListener("keydown", this.on_outside_key_down.bind(this), false);
        this.dom.$block.mount_instance(this, true);
    }

    prepare_block() {
        this.multilevel_handle();
        this.complete_handle();
    }

    multilevel_handle() {
        if (!this.dom.$multilevel) {
            return;
        }
        if (this.dom.$multilevel.hasAttribute('data-delay')) {
            let multilevel_init = (() => {
                //console.log('multilevel init');
                this.trigger_event(this.dom.$multilevel, 'get-started');
                this.dom.$block.removeEventListener('mouseover', multilevel_init);
            });
            this.dom.$block.addEventListener('mouseover', multilevel_init);
        }
        this.dom.$multilevel.addEventListener('is-filled', () => {
            /*if (!this.dom.$complete.js.opt.is_shown) {
                this.show_multilevel();
            }*/
            //console.log('multilevel filled!');
            this.dom.$complete_hamburger.addEventListener('click', () => {
                //console.log('hamburger click');
                if (this.dom.$complete.js.opt.is_shown) {
                    this.hide_complete();
                } else {
                    this.toggle_multilevel();
                }
            });
            this.dom.$complete_field.addEventListener('click', () => {
                //console.log('field click');
                if (!this.dom.$complete.js.opt.is_shown) {
                    this.show_multilevel();
                }
            });
        });
        this.dom.$multilevel.addEventListener('is-shown', () => {
            this.hide_complete();
            //console.log('multilevel shown');
            this.show();
        });
        this.dom.$multilevel.addEventListener('is-hidden', () => {
            //console.log('multilevel hidden');
            this.hide();
        });
        window.bus.on('multilevel.product-set', ((data, target) => {
            if (target.dom.$block === this.dom.$multilevel) {
                //console.log(data);
                this.dom.$complete_field.value = data['name'];
                this.redirect({
                    type: 'catalog',
                    id: data.id,
                    code: data.code,
                    name: data.name
                });
            }
        }));
    }

    complete_handle() {
        if (!this.dom.$complete) {
            return;
        }

        let is_shown = (() => {
            this.hide_multilevel();
            //console.log('complete shown');
            this.show();
        });
        this.dom.$complete.addEventListener('is-shown', is_shown);
        this.dom.$complete.addEventListener('is-loading', is_shown);
        this.dom.$complete_field.addEventListener('is-changed', is_shown);
        this.dom.$complete.addEventListener('is-hidden', () => {
            //console.log('complete hidden');
            this.hide();
        });
        this.dom.$complete_field.addEventListener('input', () => {
            if (!this.dom.$complete.js.opt.is_shown && this.dom.$complete.js.opt.options_data.length > 0 && this.dom.$complete_field.value.trim() !== '') {
                this.trigger_event(this.dom.$complete, 'to-show');
            }
        });
        let on_search = ((use_first = false) => {
            let selected_data = null;
            if (this.dom.$complete.js && this.dom.$complete.js.opt) {
                if (this.dom.$complete.js.opt.selected && this.dom.$complete.js.opt.selected.data) {
                    selected_data = this.dom.$complete.js.opt.selected.data;
                } else if (use_first && selected_data === null && this.dom.$complete.js.opt.options && this.dom.$complete.js.opt.options.length > 0) {
                    selected_data = this.dom.$complete.js.opt.options[0].data;
                }
            }
            if (selected_data !== null) {
                let type = 'product';
                if (selected_data.productType && selected_data.productType == 'section') {
                    type = 'catalog';
                }
                this.redirect({
                    type: type,
                    id: selected_data.id,
                    code: selected_data.code,
                    name: selected_data.name
                });
            }
        });
        this.dom.$complete.addEventListener('is-selected', () => {
            on_search();
        });
        this.dom.$complete.addEventListener('is-entered', () => {
            on_search(true);
        });
        this.dom.$complete.addEventListener('new-option', (e) => {
            if (!e.detail || !e.detail.$node || !e.detail.data || !e.detail.data.productType) {
                return;
            }
            let desc = e.detail.$node.querySelector('.complete-block__option-btn-desc');
            if (!desc) return;
            if (e.detail.data.productType == 'item') {
                desc.classList.add(this.node_name + '__text-item');
                desc.innerHTML = 'товар';
            } else if (e.detail.data.productType == 'section') {
                desc.classList.add(this.node_name + '__text-section');
                desc.innerHTML = 'категория';
            } else {
                desc.innerHTML = '';
            }
        });
    }

    toggle() {
        if (!this.dom.$complete_hamburger) {
            return;
        }
        if (this.dom.$complete_hamburger.hasAttribute('data-is-shown')) {
            this.hide();
        } else {
            this.show();
        }
    }

    show() {
        if (!this.dom.$complete_hamburger || this.dom.$complete_hamburger.hasAttribute('data-is-shown')) {
            return;
        }
        this.opt.is_shown = true;
        this.dom.$complete_hamburger.setAttribute('data-is-shown', '');
        //console.log('show');
        this.trigger_event(this.dom.$block, 'is-shown');
    }

    hide() {
        if (!this.dom.$complete_hamburger || !this.dom.$complete_hamburger.hasAttribute('data-is-shown')) {
            return;
        }
        this.opt.is_shown = false;
        this.dom.$complete_hamburger.removeAttribute('data-is-shown', '');
        //console.log('hide');
        this.trigger_event(this.dom.$block, 'is-hidden');
    }

    toggle_multilevel() {
        if (!this.dom.$multilevel) {
            return;
        }
        if (this.dom.$multilevel.get_instance()) {
            if (this.dom.$multilevel.get_instance().opt.is_shown) {
                //console.log('toggle: toggle_multilevel - hide');
                this.hide_multilevel();
            } else {
                //console.log('toggle: toggle_multilevel - show');
                this.show_multilevel();
            }
        }
    }

    show_multilevel() {
        if (!this.dom.$multilevel) {
            return;
        }
        if (this.dom.$multilevel.get_instance()) {
            if (!this.dom.$multilevel.get_instance().opt.is_shown) {
                this.trigger_event(this.dom.$multilevel, 'to-show');
                //console.log('trigger: show_multilevel');
            }
        }
    }

    hide_multilevel() {
        if (!this.dom.$multilevel) {
            return;
        }
        if (this.dom.$multilevel.get_instance()) {
            if (this.dom.$multilevel.get_instance().opt.is_shown) {
                this.trigger_event(this.dom.$multilevel, 'to-hide');
                //console.log('trigger: hide_multilevel');
            }
        }
    }

    hide_complete() {
        if (this.dom.$complete.js.opt.is_shown) {
            this.trigger_event(this.dom.$complete, 'to-hide');
            //console.log('trigger: hide_complete');
        }
    }

    redirect(params) {
        if (!params || !params['type'] || !params['id'] || !params['code'] || !this.opt.options) {
            return;
        }
        let localityID = (this.opt.options.locality) ? this.opt.options.locality.id : '',
            localityCode = (this.opt.options.locality) ? this.opt.options.locality.code : '',
            type = params['type'],
            id = params['id'],
            code = params['code'],
            redirectType = (this.opt.options.redirect) ? this.opt.options.redirect.type : null,
            href = null;
        switch (redirectType) {
            case 'order' : {
                let product = null;
                if (params['type'] === 'catalog') {
                    product = 'productSectionID';
                } else if (params['type'] === 'product') {
                    product = 'productItemID';
                }
                if (product !== null) {
                    href = `/order/new/?placeLocalityID=${localityID}&${product}=${id}`;
                    window.location.href = href;
                }
                break;
            }
            case 'app' : {
                this.trigger_event(this.dom.$block, 'is-selected', params);
                break;
            }
            default : {
                href = `/transit/${type}/?locality=${localityCode}&code=${code}-${id}`;
                window.location.href = href;
            }
        }
    }

    trigger_event($node, event, params) {
        App.h.trigger($node, event, params);
    }

    on_outside_click(e) {
        if (!this.opt.is_shown) return false;
        let is_target_block = (e.target == this.dom.$block),
            has_target_block = App.h.has_parent(e.target, this.dom.$block);
        if (!is_target_block && !has_target_block) {
            //console.log('on_outside_click - hide_multilevel');
            this.hide_multilevel();
        }
    }

    on_outside_key_down(e) {
        if (this.opt.is_shown) {
            if (e.which == 27) {
                //console.log('on_outside_key_down - hide_multilevel');
                this.hide_multilevel();
            }
        }
    }
}

CompleteBlockMultilevel.prototype.class_name = 'CompleteBlockMultilevel';
CompleteBlockMultilevel.prototype.node_name = 'complete-block_multilevel';
CompleteBlockMultilevel.prototype.node_class = '.' + CompleteBlockMultilevel.prototype.node_name;

window.addEventListener('load', function () {
    try {
        console.info(CompleteBlockMultilevel.prototype.class_name + '.initiation');
        let $blocks = document.querySelectorAll(CompleteBlockMultilevel.prototype.node_class);
        for (let index in $blocks) {
            if (!$blocks.hasOwnProperty(index)) continue;
            new CompleteBlockMultilevel($blocks[index]);
        }
    } catch (errors) {
        console.error(CompleteBlockMultilevel.prototype.class_name + '.initiation', errors);
    }
}, false);

/**
 * Модальное окно древовидного выбора
 *
 * @class ModalSelector
 */
class ModalSelector {
    constructor($node) {
        this.opt = {};
        this.dom = {};
        if (!($node instanceof Element)) {
            console.warn(this.class_name + '.construct', '$node не node-элемент');
            return;
        }
        if ($node.get_instance()) {
            //console.warn(this.class_name + '.construct', 'узел уже инициализирован');
            return $node.get_instance();
        }
        if ($node.hasAttribute('data-delay')) {
            $node.addEventListener('is-shown', () => {
                if ($node.hasAttribute('data-delay')) {
                    this.block_prepare($node);
                }
            });
        } else {
            this.block_prepare($node);
        }
        $node.mount_instance(this, true);
    }

    block_prepare($node) {
        this.dom.$block = $node;

        this.dom.$hierarchy = this.dom.$block.querySelector(this.node_class + '__hierarchy');
        this.dom.$list = this.dom.$block.querySelector(this.node_class + '__hierarchy > ul');
        this.dom.$rows = [].slice.call(this.dom.$block.querySelectorAll(this.node_class + '__hierarchy > ul > li'));
        this.dom.$field = this.dom.$block.querySelector(this.node_class + '__input-block .input-block__field');
        if (this.dom.$field) {
            this.dom.$field.addEventListener('input', this.on_input.bind(this));
            this.dom.$field_close = this.dom.$block.querySelector(this.node_class + '__input-block .input-block__postfix-btn');
            if (this.dom.$field_close) {
                this.dom.$field_close.addEventListener('click', () => {
                    this.clear_input();
                    if (this.dom.$field) {
                        this.dom.$field.focus();
                    }
                });
            }
        }
        if (this.dom.$block.hasAttribute('data-delay')) {
            this.dom.$block.removeAttribute('data-delay');
        }

        this.dom.$async_item_tmp = this.dom.$block.querySelector(this.node_class + '__hierarchy-item-tmp');
        if (this.dom.$async_item_tmp) {
            this.dom.$async_item_tmp = App.h.detach(this.dom.$async_item_tmp);
            this.dom.$async_item_tmp.classList.add(this.node_name + '__hierarchy-item');
            this.dom.$async_item_tmp.classList.remove(this.node_name + '__hierarchy-item-tmp');
        }
        this.dom.$async_label_tmp = this.dom.$block.querySelector(this.node_class + '__hierarchy-label-tmp');
        if (this.dom.$async_label_tmp) {
            this.dom.$async_label_tmp = App.h.detach(this.dom.$async_label_tmp);
            this.dom.$async_label_tmp.classList.remove(this.node_name + '__hierarchy-label-tmp');
        }

        if (this.dom.$block.hasAttribute('data-async')) {
            this.opt.async = window.parse_json(this.dom.$block.getAttribute('data-async'));
            this.dom.$block.removeAttribute('data-async');
            this.block_fill_async();
        } else {
            this.prepare_interactive();
        }

        this.dom.$block.mount_instance(this, true);
    }

    block_fill_async() {
        App.h.load_node(this.dom.$block);
        let xhr = new XHR({
            url: this.opt.async.url,
            data: this.opt.async.params,
            success_callback: ((string) => {
                let response = window.parse_json(string);
                if (response && response.result && response.result.list && response.result.list.length) {
                    this.fill_recursive(this.dom.$list, response.result.list, 1);
                }
                this.dom.$rows = [].slice.call(this.dom.$block.querySelectorAll(this.node_class + '__hierarchy > ul > li'));
                this.prepare_interactive();
            }),
            finish_callback: (() => {
                App.h.load_node(this.dom.$block, true);
            })
        });
        xhr.send();
    }

    fill_recursive($wrp, list, level) {
        if (!this.opt.async) {
            return;
        }
        list.forEach((item) => {
            let $li = window.create_node(((item['ChildrenChain'] && item['ChildrenChain'].length) ? this.node_name + '__hierarchy-sub' : ''), 'li');
            if (this.opt.async.start > level) {
                let $label = this.dom.$async_label_tmp.cloneNode(true);
                $label.querySelector(this.node_class + '__hierarchy-label').innerHTML = item['name'];
                $label.querySelector(this.node_class + '__hierarchy-label').title = item['name'];
                $li.appendChild($label);
            } else {
                let $item = this.dom.$async_item_tmp.cloneNode(true);
                $item.querySelector('.checkbox-block__field').name = this.opt.async.name[level];
                $item.querySelector('.checkbox-block__field').value = item['id'];
                $item.querySelector('.checkbox-block__field').title = item['name'];
                $item.querySelector('.checkbox-block__label').title = item['name'];
                $item.querySelector('.checkbox-block__label').innerHTML = item['name'];
                $item.setAttribute('data-id', item['id']);
                $li.appendChild($item);
            }
            if (item['ChildrenChain'] && item['ChildrenChain'].length) {
                let $ul = window.create_node('', 'ul');
                this.fill_recursive($ul, item['ChildrenChain'], level + 1);
                $li.appendChild($ul);
            }
            $wrp.appendChild($li);
        });
    }

    prepare_interactive() {
        if (this.dom.$async_item_tmp) {
            this.dom.$async_actions = [].slice.call(this.dom.$block.querySelectorAll(this.node_class + '__hierarchy-sub[data-url][data-params]'));
        }
        this.opt.selected = [];
        this.prepare_labels();
        this.prepare_rows();
        this.prepare_open();
        this.prepare_check();
        this.prepare_async();
        this.dom.$block.addEventListener('is-shown', () => {
            if (this.dom.$field) {
                this.dom.$field.focus();
            }
        });
        this.dom.$block.addEventListener('to-close-all', () => {
            [].slice.call(this.dom.$hierarchy.querySelectorAll(this.node_class + '__hierarchy-sub-open')).forEach(($open) => {
                $open.classList.remove(this.node_name + '__hierarchy-sub-open');
            });
        });
        this.dom.$block.addEventListener('to-clear-search', () => {
            this.clear_input();
        });
    }

    clear_input() {
        this.dom.$field.value = '';
        this.on_input();
    }

    on_input() {
        let value = this.dom.$field.value.trim();
        if (this.dom.$select_wrp) {
            if (value !== '') {
                this.dom.$select_wrp.style.display = 'none';
            } else {
                this.dom.$select_wrp.removeAttribute('style');
            }
        }
        for (let row = 0, row_length = this.dom.$rows.length; row < row_length; row++) {
            let $labels = this.dom.$rows[row].dom.$labels;

            this.dom.$rows[row].classList.remove(this.node_name + '__hierarchy-sub-open');
            for (let sub = 0, sub_length = this.dom.$rows[row].dom.$sub.length; sub < sub_length; sub++) {
                this.dom.$rows[row].dom.$sub[sub].classList.remove(this.node_name + '__hierarchy-sub-open');
            }
            for (let item = 0, item_length = this.dom.$rows[row].dom.$items.length; item < item_length; item++) {
                this.dom.$rows[row].dom.$items[item].classList.remove(this.node_name + '__hide');
            }

            for (let label = 0, label_length = $labels.length; label < label_length; label++) {
                if ($labels[label].innerHTML !== $labels[label].getAttribute('data-label')) {
                    $labels[label].innerHTML = $labels[label].getAttribute('data-label');
                }
                if (value) {
                    let check = new RegExp(value, 'gi').test($labels[label].textContent);
                    if (check) {
                        $labels[label].innerHTML = $labels[label].textContent.replace(new RegExp(value, 'gi'), '<b>' + value + '</b>');
                    } else {
                        if (!$labels[label].opt.$item.classList.contains(this.node_name + '__hide')) {
                            $labels[label].opt.$item.classList.add(this.node_name + '__hide');
                        }
                    }
                    for (let parent = 0, parent_length = $labels[label].opt.$parents.length; parent < parent_length; parent++) {
                        if (check) {
                            $labels[label].opt.$parents[parent].classList.add(this.node_name + '__hierarchy-sub-open');
                            $labels[label].opt.$parents[parent].querySelector(this.node_class + '__hierarchy-item').classList.remove(this.node_name + '__hide');
                        }
                    }
                }
            }
        }
    }

    async_request($node) {
        let $wrp = $node.querySelector('ul > li');
        App.h.load_node($node);
        $node.opt.init = true;
        let xhr = new XHR({
            url: $node.dataset['url'],
            data: window.parse_json($node.dataset['params']),
            success_callback: ((string) => {
                let response = window.parse_json(string);
                response['result']['list'].forEach((item) => {
                    let $clone = this.dom.$async_item_tmp.cloneNode(true);
                    $clone.querySelector('.checkbox-block__field').value = item['productSectionID'] + '-' + item['id'];
                    $clone.querySelector('.checkbox-block__field').title = item['name'];
                    $clone.querySelector('.checkbox-block__label').innerHTML = item['name'];
                    $clone.setAttribute('data-id', item['productSectionID'] + '-' + item['id']);
                    $wrp.appendChild($clone);
                });
                let parents = this.get_parents($wrp, this.node_class + '__hierarchy-sub');
                if (parents.length > 0) {
                    this.prepare_labels($wrp);
                    this.prepare_row(parents[parents.length - 1]);
                    this.prepare_open(parents[parents.length - 1]);
                    this.prepare_check(parents[parents.length - 1]);
                }
            }),
            finish_callback: (() => {
                App.h.load_node($node, true);
                $node.removeAttribute('data-url');
                $node.removeAttribute('data-params');
            })
        });
        xhr.send();
    }

    prepare_async() {
        if (!this.dom.$async_actions) {
            return;
        }
        this.dom.$async_actions.forEach(($node) => {
            $node.opt = {};
            $node.opt.init = false;
            $node.addEventListener('mouseover', () => {
                if (!$node.opt.init) {
                    this.async_request($node);
                }
            });
            $node.addEventListener('click', () => {
                if (!$node.opt.init) {
                    this.async_request($node);
                }
            });
        });
    }

    prepare_labels($wrp) {
        if (!$wrp) {
            $wrp = this.dom.$list;
        }
        let $labels = [].slice.call($wrp.querySelectorAll(this.node_class + '__hierarchy-label'));
        for (let i = 0, len = $labels.length; i < len; i++) {
            if ($labels[i].hasAttribute('data-label')) continue;
            $labels[i].setAttribute('data-label', $labels[i].textContent);
            $labels[i].opt = {};
            $labels[i].opt.$item = $labels[i].closest_node(this.node_class + '__hierarchy-item');
            $labels[i].opt.$parents = this.get_parents($labels[i], this.node_class + '__hierarchy-sub');
        }
    }

    prepare_rows() {
        for (let row = 0, row_length = this.dom.$rows.length; row < row_length; row++) {
            if (!this.dom.$rows[row].dom) {
                this.prepare_row(this.dom.$rows[row]);
            }
        }
    }

    prepare_row($row) {
        $row.dom = {};
        $row.dom.$sub = [].slice.call($row.querySelectorAll(this.node_class + '__hierarchy-sub'));
        $row.dom.$items = [].slice.call($row.querySelectorAll(this.node_class + '__hierarchy-item'));
        $row.dom.$labels = [].slice.call($row.querySelectorAll(this.node_class + '__hierarchy-label'));
    }

    get_parents(elem, selector) {

        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (s) {
                    let matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) {
                    }
                    return i > -1;
                };
        }

        // Set up a parent array
        let parents = [];

        // Push each parent element to the array
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (selector) {
                if (elem.matches(selector)) {
                    parents.push(elem);
                }
                continue;
            }
            parents.push(elem);
        }

        // Return our parent array
        return parents;
    }

    prepare_open($wrp) {
        if (!$wrp) {
            $wrp = this.dom.$block;
        }
        [].slice.call($wrp.querySelectorAll(this.node_class + '__hierarchy-sub > ' + this.node_class + '__hierarchy-item')).forEach(($item) => {
            if (!$item.init) {
                $item.init = true;
                $item.addEventListener('click', () => {
                    if ($item.parentNode.classList.contains(this.node_name + '__hierarchy-sub-open')) {
                        $item.parentNode.classList.remove(this.node_name + '__hierarchy-sub-open');
                    } else {
                        $item.parentNode.classList.add(this.node_name + '__hierarchy-sub-open');
                    }
                });
            }
        }, this);
    }

    toggle_check_all(checked = true) {
        let event = (checked) ? 'is-checked' : 'is-unchecked';
        [].slice.call(this.dom.$block.querySelector(this.node_class + '__hierarchy').querySelectorAll(this.node_class + '__checkbox-block')).forEach(($checkbox) => {
            App.h.trigger($checkbox, event);
        });
    }

    prepare_check_all() {
        this.dom.$block.addEventListener('to-check-all', () => {
            this.toggle_check_all(true);
        });
        this.dom.$block.addEventListener('to-uncheck-all', () => {
            this.toggle_check_all(false);
        });
        if (!this.dom.$block.querySelector(this.node_class + '__all-select-wrp') || this.dom.$select_wrp) {
            return;
        }
        this.dom.$select_wrp = this.dom.$block.querySelector(this.node_class + '__all-select-wrp');
        this.dom.$select_all = this.dom.$select_wrp.querySelector(this.node_class + '__all-select-check');
        this.dom.$unselect_all = this.dom.$select_wrp.querySelector(this.node_class + '__all-select-uncheck');
        this.dom.$select_all_checkbox = this.dom.$select_all.querySelector(this.node_class + '__checkbox-block');
        this.dom.$unselect_all_checkbox = this.dom.$unselect_all.querySelector(this.node_class + '__checkbox-block');
        this.opt.select_last = null;
        if (this.dom.$select_all && this.dom.$select_all_checkbox) {
            this.dom.$select_all.addEventListener('click', (e) => {
                if (!this.opt.select_last || this.opt.select_last == 'uncheck') {
                    this.dom.$select_all_checkbox.js.dom.$field.checked = true;
                    this.opt.select_last = 'check';
                    this.toggle_check_all(true);
                    setTimeout(() => {
                        this.dom.$select_wrp.setAttribute('data-mode', 'uncheck');
                        this.dom.$select_all_checkbox.js.dom.$field.checked = false;
                    }, 300);
                    e.preventDefault();
                }
            });
        }
        if (this.dom.$unselect_all && this.dom.$unselect_all_checkbox) {
            this.dom.$unselect_all.addEventListener('click', (e) => {
                if (this.opt.select_last == 'check') {
                    this.dom.$unselect_all_checkbox.js.dom.$field.checked = true;
                    this.opt.select_last = 'uncheck';
                    this.toggle_check_all(false);
                    setTimeout(() => {
                        this.dom.$select_wrp.setAttribute('data-mode', 'check');
                        this.dom.$unselect_all_checkbox.js.dom.$field.checked = false;
                    }, 300);
                    e.preventDefault();
                }
            });
        }
    }

    prepare_check($wrp) {
        if (!$wrp) {
            $wrp = this.dom.$block.querySelector(this.node_class + '__hierarchy');
        }
        this.prepare_check_all();
        [].slice.call($wrp.querySelectorAll(this.node_class + '__checkbox-block')).forEach(($checkbox) => {
            if (!$checkbox.init) {
                if ($checkbox.js == null) {
                    new App.c.blocks.CheckboxBlocks($checkbox);
                }
                $checkbox.addEventListener('is-checked', () => {
                    if (this.opt.selected.indexOf($checkbox.js.opt.value) === -1) {
                        this.opt.selected.push($checkbox.js.opt.value);
                        let $parents = this.get_parents($checkbox, this.node_class + '__hierarchy-sub');
                        App.h.trigger(this.dom.$block, 'is-selected', {
                            block: $checkbox,
                            parents: $parents
                        });
                    }
                    $checkbox.js.dom.$block.checked = true;
                    $checkbox.js.dom.$field.checked = true;
                    let $sibling = $checkbox.closest(this.node_class + '__hierarchy-item').nextElementSibling;
                    if ($sibling && !$sibling.hasAttribute('data-id')) {
                        [].slice.call($sibling.querySelectorAll(this.node_class + '__checkbox-block')).forEach(($block) => {
                            if (this.opt.selected.indexOf($block.js.opt.value) !== -1) {
                                this.opt.selected.splice(this.opt.selected.indexOf($block.js.opt.value), 1);
                            }
                            $block.js.dom.$block.checked = true;
                            $block.js.dom.$field.checked = true;
                        });
                    }
                });
                $checkbox.addEventListener('is-unchecked', () => {
                    if (this.opt.selected.indexOf($checkbox.js.opt.value) !== -1) {
                        this.opt.selected.splice(this.opt.selected.indexOf($checkbox.js.opt.value), 1);
                    }
                    $checkbox.js.dom.$block.checked = false;
                    $checkbox.js.dom.$field.checked = false;
                    let $sibling = $checkbox.closest(this.node_class + '__hierarchy-item').nextElementSibling;
                    if ($sibling && !$sibling.hasAttribute('data-id')) {
                        [].slice.call($sibling.querySelectorAll(this.node_class + '__checkbox-block')).forEach(($block) => {
                            if (this.opt.selected.indexOf($block.js.opt.value) !== -1) {
                                this.opt.selected.splice(this.opt.selected.indexOf($block.js.opt.value), 1);
                            }
                            $block.js.dom.$block.checked = false;
                            $block.js.dom.$field.checked = false;
                        });
                    }
                });
                if ($checkbox.js.dom.$block.checked && !$checkbox.init) {
                    App.h.trigger($checkbox, 'is-checked');
                }
                $checkbox.init = true;
            }
        }, this);
    }
}

ModalSelector.prototype.class_name = 'ModalSelector';
ModalSelector.prototype.node_name = 'modal-selector';
ModalSelector.prototype.node_class = '.' + ModalSelector.prototype.node_name;

window.addEventListener('load', function () {
    try {
        console.info(ModalSelector.prototype.class_name + '.initiation');
        let $blocks = document.querySelectorAll(ModalSelector.prototype.node_class);

        for (let index in $blocks) {
            if (!$blocks.hasOwnProperty(index)) continue;
            new ModalSelector($blocks[index]);
        }
    } catch (errors) {
        console.error(ModalSelector.prototype.class_name + '.initiation', errors);
    }
}, false);

/**
 * Блок для синхронной работы с модальным окном выбора из иерархического списка
 *
 * @class CompleteBlockSelector
 */
var CompleteBlockSelector = function ($node) {
    this.opt = {};
    this.dom = {};
    if (!($node instanceof Element)) {
        console.warn(this.class_name + '.construct', '$node не node-элемент');
        return;
    }
    if ($node.get_instance()) {
        //console.warn(this.class_name + '.construct', 'узел уже инициализирован');
        return $node.get_instance();
    }
    this.dom.$block = $node;
    this.dom.$complete = this.dom.$block.querySelector('.complete-block');
    this.dom.$modal_btn = this.dom.$block.querySelector(this.node_class + '__modal-btn');
    this.dom.$tags = this.dom.$block.querySelector(this.node_class + '__tags');
    this.dom.$hidden = this.dom.$block.querySelector(this.node_class + '__hidden-wrp');
    this.dom.$modal = this.dom.$hidden.querySelector(this.node_class + '__modal');
    this.dom.$tag_tmp = App.h.detach(this.dom.$hidden.querySelector(this.node_class + '__tag'));
    this.opt.tags_type = 'section';
    if (this.dom.$tags.hasAttribute('data-type')) {
        this.opt.tags_type = this.dom.$tags.getAttribute('data-type');
        this.dom.$tags.removeAttribute('data-type');
    }
    this.prepare_tags();
    this.handlers();
    this.dom.$block.mount_instance(this, true);
};
CompleteBlockSelector.prototype.class_name = 'CompleteBlockSelector';
CompleteBlockSelector.prototype.node_name = 'complete-block-selector';
CompleteBlockSelector.prototype.node_class = '.' + CompleteBlockSelector.prototype.node_name;
CompleteBlockSelector.prototype.handlers = function () {
    if (this.dom.$modal_btn) {
        this.dom.$modal_btn.addEventListener('click', function () {
            if (!this.dom.$modal) {
                return;
            }
            App.modal.show(this.dom.$modal);
            this.dom.$modal.focus();
        }.bind(this));
        if (this.dom.$modal) {
            this.dom.$modal.addEventListener('is-hidden', function (e) {
                var instance = e.target.get_instance(),
                    selected = instance.opt.selected,
                    $fields = this.dom.$tags.querySelectorAll(this.node_class + '__tag'),
                    params = {};
                for (var field = 0, field_length = $fields.length; field < field_length; field++) {
                    if (selected.indexOf($fields[field].getAttribute('data-id')) !== -1) {
                        if ($fields[field].hasAttribute('data-params')) {
                            params[$fields[field].getAttribute('data-id')] = $fields[field].getAttribute('data-params');
                        }
                        $fields[field].remove_node();
                    } else {
                        $fields[field].removeAttribute('style');
                    }
                }
                if (selected.length > 0) {
                    for (var index = 0, selected_length = selected.length; index < selected_length; index++) {
                        var $field = this.dom.$modal.querySelector("[data-id='" + selected[index] + "'] input[type=checkbox]:checked");
                        this.make_tag(
                            $field.value,
                            $field.title,
                            $field.name,
                            params[$field.value],
                            ''
                        );
                    }
                    this.prepare_tags();
                }
            }.bind(this));
            App.h.trigger(this.dom.$modal, 'is-hidden');
        }
    }
    if (this.dom.$complete) {
        this.dom.$complete.addEventListener('is-selected', function (e) {
            let name = null,
                id_prefix = '';
            if(this.dom.$block.getAttribute('data-type') === 'sectionID') {
                name = 'element[productSectionID]';
            } else if (e.target.js.opt.selected.data.depth) {
                switch (e.target.js.opt.selected.data.depth) {
                    case 1 :
                        name = 'element[productSectionID]';
                        break;
                    case 2 :
                        name = 'element[productCategoryID]';
                        break;
                    case 3 :
                        name = 'element[productSubcategoryID]';
                        break;
                }
            } else {
                if (e.target.js.opt.selected.data.placeType) {
                    name = 'element[' + e.target.js.opt.selected.data.placeType + ']';
                    id_prefix = e.target.js.opt.selected.data.placeType + '-';
                } else {
                    name = 'element[placeLocalityID]';
                    id_prefix = 'placeLocalityID-';
                }
            }
            this.make_tag(
                e.target.js.opt.selected.value,
                e.target.js.opt.selected.title,
                name,
                null,
                id_prefix
            );
            e.target.js.dom.$field.value = '';
            this.prepare_tags();
        }.bind(this));
    }
};
CompleteBlockSelector.prototype.prepare_tags = function () {
    if (this.dom.$tags) {
        [].slice.call(this.dom.$tags.querySelectorAll(this.node_class + '__tag')).forEach(function ($tag) {
            this.prepare_tag($tag);
            this.modal_checkbox_trigger('is-checked', $tag.getAttribute('data-id'));
        }, this);
    }
};
CompleteBlockSelector.prototype.prepare_tag = function ($tag) {
    if ($tag.init) {
        return;
    }
    $tag.init = true;
    $tag.addEventListener('click', function () {
        $tag.setAttribute('data-load', 'true');
        if ($tag.hasAttribute('data-params')) {
            var params = window.parse_json($tag.getAttribute('data-params'));
            this.fetch_url(params['url'], {
                'element[id]': params['id'],
                'element[companyID]': params['companyID']
            }, function () {
                $tag.remove_node();
                this.modal_checkbox_trigger('is-unchecked', $tag.getAttribute('data-id'));
            }.bind(this));
        } else {
            $tag.remove_node();
            this.modal_checkbox_trigger('is-unchecked', $tag.getAttribute('data-id'));
        }
    }.bind(this));
};
CompleteBlockSelector.prototype.fetch_url = function (url, data, callback) {
    if (!url) {
        //console.warn(this.class_name + '.fetch_url', 'url не передан');
        return;
    }
    var xhr = new XHR({
        url: url,
        data: data,
        success_callback: (function (string) {
            var response = window.parse_json(string);
            if (response['status'] === 'success') {
                callback(response['result']['list']);
            }
        }).bind(this)
    });
    xhr.send();
};
CompleteBlockSelector.prototype.make_tag = function (value, title, name, params, id_prefix) {
    var id = value;
    if (id_prefix && this.opt.tags_type === 'locality') {
        id = id_prefix + id;
    }
    if (!this.dom.$tags.querySelector("[data-id='" + id + "']")) {
        var $tag = this.dom.$tag_tmp.cloneNode(true);
        if (params) {
            $tag.setAttribute('data-params', params);
        }
        $tag.querySelector('.tag').name = name;
        $tag.querySelector('.tag').value = id;
        $tag.setAttribute('data-id', id);
        $tag.querySelector('.tag__cap').innerHTML = title;
        this.prepare_tag($tag);
        this.dom.$tags.appendChild($tag);
    }
};
CompleteBlockSelector.prototype.modal_checkbox_trigger = function (event, id) {
    App.h.trigger(this.dom.$modal.querySelector("[data-id='" + id + "'] > .checkbox-block"), event);
};

window.addEventListener('load', function () {
    try {
        var $blocks = document.querySelectorAll(CompleteBlockSelector.prototype.node_class);
        for (var index in $blocks) {
            if (!$blocks.hasOwnProperty(index)) continue;
            new CompleteBlockSelector($blocks[index]);
        }
    } catch (errors) {
        console.error(CompleteBlockSelector.prototype.class_name + '.initiation', errors);
    }
}, false);

/**
 * Компонент множественного select'a
 *
 * @namespace windows.components
 * @class MultiSelect
 */
class MultiSelect {
    constructor($node) {
        if ($node.classList.contains(this.node_name + '_delay')) {
            return;
        }
        this.opt = {};
        this.dom = {};
        if (!($node instanceof Element)) {
            console.warn(this.class_name + '.construct', '$node is not a node');
            return;
        }
        this.dom.$block = $node;
        this.opt.mode = this.dom.$block.getAttribute('data-mode');
        this.opt.show_attribute = 'data-is-shown';
        this.opt.is_shown = this.dom.$block.hasAttribute(this.opt.show_attribute);
        this.opt.is_changed = false;
        this.opt.is_once_opened = false;
        this.opt.selected = [];
        this.dom.$btn = this.dom.$block.querySelector(this.node_class + '__btn');
        this.dom.$cap = this.dom.$block.querySelector(this.node_class + '__cap');
        if (this.dom.$cap) {
            this.dom.$cap.setAttribute('data-title', this.dom.$cap.innerHTML);
        }
        this.dom.$cap_sub = this.dom.$block.querySelector(this.node_class + '__cap-sub');
        this.dom.$counter = this.dom.$block.querySelector(this.node_class + '__counter');
        if (this.opt.mode === 'radio' && this.dom.$counter) {
            this.dom.$counter.remove_node();
        }
        this.dom.$body = this.dom.$block.querySelector(this.node_class + '__list-body');
        this.dom.$items = [].slice.call(this.dom.$body.querySelectorAll(this.node_class + '__item'));
        this.dom.$select_all = this.dom.$block.querySelector(this.node_class + '__select-all');
        this.dom.$clear_all = this.dom.$block.querySelector(this.node_class + '__clear-all');

        this.prepare_external();
        this.prepare_btn();
        this.prepare_items();
        this.prepare_events();
        this.prepare_mass_actions();
        this.add_new_item_handler();
        document.addEventListener('click', this.on_outside_click.bind(this), false);
        document.addEventListener("keydown", this.on_outside_key_down.bind(this), false);

        if (!this.dom.$block.hasAttribute('data-counter') || (this.dom.$block.hasAttribute('data-counter') && this.dom.$block.getAttribute('data-counter') !== 'delay')) {
            setTimeout(() => {
                this.count_checked();
            }, 2000);
        }
        this.dom.$block.mount_instance(this, true);
    }

    add_new_item_handler() {
        if (this.dom.$block.querySelector(this.node_class + '__list-item-tmp')) {
            this.dom.$item_tmp = App.h.detach(this.dom.$block.querySelector(this.node_class + '__list-item-tmp'));
            this.dom.$block.addEventListener('add-new-item', (e) => {
                let $item = this.dom.$item_tmp.cloneNode(true);
                $item.title = e.detail.name;
                $item.querySelector('.checkbox-block__field').value = e.detail.id;
                $item.querySelector('.checkbox-block__field').title = e.detail.name;
                $item.querySelector('.checkbox-block__label').innerHTML = e.detail.name;
                if ($item.querySelector('.checkbox-block__label-sub')) {
                    $item.querySelector('.checkbox-block__label-sub').innerHTML = e.detail.sub;
                }
                let $checkbox = $item.querySelector(this.node_class + '__item');
                if (e.detail.selected) {
                    $checkbox.addEventListener('is-initiated', () => {
                        if (this.opt.mode === 'radio') {
                            this.uncheck_all($checkbox);
                        }
                        setTimeout(() => {
                            if (this.opt.mode === 'radio') {
                                this.prepare_global_radio_click($checkbox);
                            }
                            this.event_trigger($checkbox, 'is-checked');
                            $checkbox.js.dom.$field.checked = true;
                            this.count_checked();
                        }, 200);
                    });
                }
                this.dom.$body.appendChild($item);
                this.dom.$items.push($checkbox);
                this.prepare_items();
            });
        }
    }

    show() {
        this.dom.$block.setAttribute(this.opt.show_attribute, '');
        this.opt.is_shown = true;
        this.opt.is_changed = false;
        this.opt.is_once_opened = true;
        this.event_trigger(this.dom.$block, 'is-shown');
    }

    hide() {
        this.dom.$block.removeAttribute(this.opt.show_attribute);
        this.opt.is_shown = false;
        this.event_trigger(this.dom.$block, 'is-hidden');
    }

    on_outside_click(e) {
        if (!this.opt.is_shown) {
            return;
        }
        let is_target_block = (e.target == this.dom.$block),
            has_target_block = App.h.has_parent(e.target, this.dom.$block);
        if (!is_target_block && !has_target_block) this.hide();
    }

    on_outside_key_down(e) {
        if (!this.opt.is_shown) {
            return;
        }
        if (e.which == 27) {
            this.hide();
            this.dom.$btn.focus();
            e.stopPropagation();
            e.preventDefault();
        }
    }

    prepare_external() {
        if (!this.dom.$block.hasAttribute('data-external') || !this.dom.$block.hasAttribute('data-external-id')) {
            return;
        }
        [].slice.call(document.querySelectorAll(this.dom.$block.getAttribute('data-external'))).forEach(($item) => {
            $item.addEventListener('click', () => {
                let id = parseInt($item.getAttribute(this.dom.$block.getAttribute('data-external-id')));
                let $check = this.dom.$block.querySelector("[data-id='" + id + "']");
                if ($check) {
                    this.uncheck_all();
                    this.event_trigger($check, 'is-checked');
                    $check.js.dom.$field.checked = true;
                    this.count_checked();
                    this.hide();
                }
            });
        })
    }

    prepare_btn() {
        if (!this.dom.$btn) {
            return;
        }
        this.dom.$btn.addEventListener('click', () => {
            if (this.opt.is_shown) {
                this.hide();
            } else {
                this.show();
            }
        });
    }

    prepare_events() {
        this.dom.$block.addEventListener('to-hide', () => {
            this.hide();
        });
        this.dom.$block.addEventListener('to-show', () => {
            this.show();
        });
    }

    prepare_mass_actions() {
        this.dom.$block.addEventListener('count-checked', () => {
            this.count_checked();
        });
        this.dom.$block.addEventListener('clear-all', () => {
            this.uncheck_all();
            this.count_checked();
        });
        this.dom.$block.addEventListener('check-all', () => {
            this.check_all();
            this.count_checked();
        });
        this.dom.$block.addEventListener('select-specific', (e) => {
            if(!e.detail || !e.detail.list || !e.detail.list.length) {
                return;
            }
            this.dom.$items.forEach(($item) => {
                if(e.detail.list.indexOf($item.js.dom.$field.value) !== -1) {
                    this.event_trigger($item, 'is-checked');
                    $item.js.dom.$field.checked = true;
                    if (this.opt.mode === 'radio') {
                        this.prepare_global_radio_click($item);
                        this.uncheck_all($item);
                    }
                    this.count_checked();
                }
            });
        });
        if (this.dom.$select_all) {
            this.dom.$select_all.addEventListener('click', () => {
                this.event_trigger(this.dom.$block, 'check-all');
            });
        }
        if (this.dom.$clear_all) {
            this.dom.$clear_all.addEventListener('click', () => {
                this.event_trigger(this.dom.$block, 'clear-all');
            });
        }
    }

    check_all() {
        this.dom.$items.forEach(($item) => {
            if ($item.js) {
                this.event_trigger($item, 'is-checked');
                $item.js.dom.$field.checked = true;
            } else {
                App.h.prepare_check.call($item);
                $item.addEventListener('is-ready', () => {
                    setTimeout(() => {
                        this.event_trigger($item, 'is-checked');
                        $item.js.dom.$field.checked = true;
                    }, 200);
                });
            }
        });
    }

    uncheck_all($except) {
        this.dom.$items.forEach(($item) => {
            if ($item !== $except) {
                if ($item.js) {
                    this.event_trigger($item, 'is-unchecked');
                    $item.js.dom.$field.checked = false;
                } else {
                    App.h.prepare_check.call($item);
                    setTimeout(() => {
                        this.event_trigger($item, 'is-unchecked');
                        $item.js.dom.$field.checked = false;
                    }, 200);
                }
            }
        });
    }

    prepare_items() {
        if (this.dom.$items.length <= 0) {
            return;
        }
        this.dom.$items.forEach(($item) => {
            if (!$item.js) {
                try {
                    App.h.prepare_check.call($item);
                } catch (e) {
                    //console.error('error in class "' + class_index + '" ', +e.message, e);
                }
            }
            if (!$item.init) {
                $item.init = true;
                $item.addEventListener('click', () => {
                    if (this.opt.mode === 'radio') {
                        this.prepare_global_radio_click($item);
                        this.uncheck_all($item);
                    }
                    this.count_checked();
                });
                this.event_trigger($item, 'is-initiated');
            }
        });
    }

    prepare_global_radio_click($item) {
        if (!this.dom.$block.hasAttribute('data-global-id') || this.opt.mode !== 'radio') {
            return;
        }
        [].slice.call(document.querySelectorAll(this.node_class + "[data-global-id='" + this.dom.$block.getAttribute('data-global-id') + "'][data-mode='" + this.opt.mode + "']")).forEach(($block) => {
            if ($block !== this.dom.$block) {
                if ($block.get_instance() && $block.get_instance().opt.selected.length === 1 && $block.get_instance().opt.selected[0] == $item.querySelector('input[value]').value) {
                    this.event_trigger($block, 'clear-all');
                }
            }
        });
    }

    count_checked() {
        if (!this.dom) {
            return;
        }
        if (this.opt.mode === 'radio' && this.dom.$cap) {
            this.dom.$cap.innerHTML = this.dom.$cap.getAttribute('data-title');
        }
        let counter = 0,
            selected = [];
        this.dom.$items.forEach(($item) => {
            if ($item.js && $item.js.dom.$field.checked) {
                if (this.opt.mode === 'radio' && this.dom.$cap && $item.js.dom.$field.title) {
                    this.dom.$cap.innerHTML = $item.js.dom.$field.title;
                    if (this.dom.$cap_sub) {
                        let $cap_sub = $item.js.dom.$block.querySelector('.checkbox-block__label-sub');
                        this.dom.$cap_sub.innerHTML = ($cap_sub) ? $cap_sub.innerHTML : '';
                    }
                }
                counter++;
                if (!isNaN(parseInt($item.js.dom.$field.value))) {
                    selected.push(parseInt($item.js.dom.$field.value));
                } else {
                    selected.push($item.js.dom.$field.value);
                }
            }
        });
        if (selected.reduce((acc, val) => {
            return acc + val;
        }, 0) !== this.opt.selected.reduce((acc, val) => {
            return acc + val;
        }, 0)) {
            this.opt.is_changed = true;
        }
        this.opt.selected = selected;
        if (this.dom.$counter) {
            this.dom.$counter.innerHTML = '';
            if (counter > 0) {
                this.dom.$counter.innerHTML = counter;
            }
        }
        if (this.opt.is_changed) {
            this.event_trigger(this.dom.$block, 'is-changed');
        }
        if (this.opt.mode === 'radio' && this.opt.is_changed) {
            window.bus.emit('multi-select.radio-change', this.opt.selected, this);
        }
    }

    event_trigger($element, event_name, params) {
        if (!$element || !event_name) return false;
        params = params || null;
        if (window.CustomEvent) {
            $element.dispatchEvent(new CustomEvent(event_name, {detail: params}));
        } else if (document.createEvent) {
            let ev = document.createEvent('HTMLEvents');
            ev.initEvent(event_name, true, false, params);
            $element.dispatchEvent(ev);
        } else {
            $element.fireEvent('on' + event_name);
        }
    }
}

MultiSelect.prototype.class_name = 'MultiSelect';
MultiSelect.prototype.node_name = 'multi-select';
MultiSelect.prototype.node_class = '.' + MultiSelect.prototype.node_name;

window.bus.on('common-init', () => {
    try {
        console.info(MultiSelect.prototype.class_name + '.initiation');
        let $blocks = document.querySelectorAll(MultiSelect.prototype.node_class);
        for (let index in $blocks) {
            if (!$blocks.hasOwnProperty(index)) continue;
            new MultiSelect($blocks[index]);
        }
    } catch (errors) {
        console.error(MultiSelect.prototype.class_name + '.initiation', errors);
    }
});

/**
 * Компонент многоуровневого select'a
 * Подгрузка элементов с сервера
 *
 * @namespace windows.components
 * @class MultilevelSelect
 */
class MultilevelSelect {
    constructor($node) {
        this.opt = {};
        this.dom = {};
        if (!($node instanceof Element)) {
            console.warn(this.class_name + '.construct', '$node is not a node');
            return;
        }
        this.dom.$block = $node;
        this.opt.is_shown = false;
        this.opt.is_binded = false;
        this.opt.is_mobile = (window.innerWidth < window.constants.breakpoint_md);
        this.opt.is_mobile_ext = false;
        if (this.dom.$block.hasAttribute('data-mobile')) {
            this.opt.is_mobile = true;
            this.opt.is_mobile_ext = true;
            this.dom.$block.removeAttribute('data-mobile');
        }
        this.opt.id = null;
        this.opt.column = 0;
        this.opt.border = 4;
        this.opt.max_depth_level = 3;
        if (this.dom.$block.hasAttribute('data-border')) {
            this.opt.border = parseInt(this.dom.$block.getAttribute('data-border'));
        }
        this.opt.section = this.dom.$block.hasAttribute('data-section');
        if (this.opt.section) {
            if (this.opt.border === 4) {
                this.opt.border = 3;
            }
            this.dom.$block.removeAttribute('data-section');
        }
        if (!this.dom.$block.hasAttribute('data-border')) {
            this.dom.$block.setAttribute('data-border', this.opt.border);
        }
        this.opt.full_search = true;
        if (this.dom.$block.hasAttribute('data-full-search') && this.dom.$block.getAttribute('data-full-search') == '0') {
            this.opt.full_search = false;
            this.dom.$block.removeAttribute('data-full-search');
        }
        this.opt.is_full_search = null;
        if (this.dom.$block.hasAttribute('data-is-full-search')) {
            this.opt.is_full_search = (this.dom.$block.getAttribute('data-is-full-search') == '1');
            this.dom.$block.removeAttribute('data-is-full-search');
        }
        this.opt.labels = [];
        this.opt.labels[0] = this.dom.$block.querySelector(this.node_class + '__modal-title').textContent;
        if (!this.opt.labels[0]) {
            this.opt.labels[0] = 'Каталог';
        }
        this.opt.queue = [];
        this.opt.current = null;
        this.opt.current_value = false;
        this.opt.emit = false;
        if (this.dom.$block.hasAttribute('data-emit')) {
            this.opt.emit = true;
            this.dom.$block.removeAttribute('data-emit');
        }
        this.opt.column_disable = false;
        if (this.dom.$block.hasAttribute('data-column-disable')) {
            this.opt.column_disable = parseInt(this.dom.$block.getAttribute('data-column-disable'));
            this.dom.$block.removeAttribute('data-column-disable');
        }
        this.dom.$field = this.dom.$block.querySelector(this.node_class + '__field');
        this.dom.$btn = this.dom.$block.querySelector(this.node_class + '__btn');
        this.dom.$cap = this.dom.$btn.querySelector(this.node_class + '__btn-cap');
        if (!this.dom.$block.hasAttribute('data-delay')) {
            this.prepare_block();
        } else {
            let delay = parseFloat(this.dom.$block.getAttribute('data-delay'));
            if (delay > 1) {
                setTimeout(() => {
                    this.dom.$block.removeAttribute('data-delay');
                    this.prepare_block();
                }, delay);
            } else {
                this.dom.$btn.addEventListener('click', () => {
                    if (this.dom.$block.hasAttribute('data-delay')) {
                        this.dom.$block.removeAttribute('data-delay');
                        this.prepare_block(true);
                    }
                }, false);
                let get_started = (() => {
                    this.dom.$block.removeAttribute('data-delay');
                    this.prepare_block();
                    this.dom.$block.removeEventListener('get-started', get_started);
                });
                this.dom.$block.addEventListener('get-started', get_started);
            }
        }
        document.addEventListener('click', this.on_outside_click.bind(this), false);
        document.addEventListener("keydown", this.on_outside_key_down.bind(this), false);
        this.dom.$block.mount_instance(this, true);
    }

    toggle() {
        if (this.opt === undefined) {
            //console.warn(this.class_name + '.toggle', 'this is unbinded');
            return;
        }
        if (this.opt.is_mobile && !this.dom.$block.hasAttribute('data-mobile-view')) {
            if (this.dom.$list && this.dom.$list.closest_node('.modal-container')) {
                this.opt.is_shown = this.dom.$list.closest_node('.modal-container').hasAttribute('data-is-shown');
            }
            if (this.opt.is_shown && this.opt.is_mobile_ext) {
                if (!this.dom.$list.hasAttribute('style')) {
                    this.opt.is_shown = false;
                } else {
                    this.opt.is_shown = (this.dom.$list.style.display !== 'none');
                }
            }
            if (this.opt.current_value) this.opt.column = this.opt.current_value.column;
        }
        if (this.opt.is_shown) this.hide();
        else this.show();
    }

    show() {
        if (this.opt === undefined) {
            //console.warn(this.class_name + '.show', 'this is unbinded');
            return;
        }
        this.opt.is_shown = true;
        this.toggle_columns(this.opt.column, !this.opt.is_binded);
        this.toggle_items(this.opt.column, this.opt.id);
        if (this.opt.is_mobile && !this.dom.$block.hasAttribute('data-mobile-view')) {
            if (!this.dom.$list.changed) {
                this.dom.$list.classList.add(this.node_name + '__modal');
                this.dom.$list.addEventListener('is-shown', () => {
                    if (!this.opt.is_mobile_ext) {
                        this.dom.$list.closest_node('.modal-container__wrp').classList.add('modal-container__wrp-total');
                    }
                    this.dom.$list.changed = true;
                    this.opt.is_binded = true;
                    if (this.opt.current_value && this.opt.current_value.$node) this.opt.current_value.$node.scrollIntoView();
                });
            } else {
                if (this.opt.current_value && this.opt.current_value.$node) this.opt.current_value.$node.scrollIntoView();
            }
            App.modal.show(this.dom.$list);
            if (this.opt.column > 0) {
                this.dom.$back_btn.classList.add(this.node_name + '__visible');
            } else {
                this.dom.$back_btn.classList.remove(this.node_name + '__visible');
            }
        } else {
            this.dom.$block.setAttribute('data-is-shown', '');
            this.opt.is_binded = true;
        }
        App.h.trigger(this.dom.$block, 'is-shown');
    }

    hide() {
        if (this.opt === undefined) {
            //console.warn(this.class_name + '.hide', 'this is unbinded');
            return;
        }
        this.opt.is_shown = false;
        if (this.opt.is_mobile && !this.dom.$block.hasAttribute('data-mobile-view')) {
            App.modal.hide(this.dom.$list);
        } else {
            this.dom.$block.removeAttribute('data-is-shown');
        }
        App.h.trigger(this.dom.$block, 'is-hidden');
    }

    prepare_block(trigger_click) {
        let current = {}, current_sub = {};
        if (this.dom.$block.hasAttribute('data-current')) {
            current = window.parse_json(this.dom.$block.getAttribute('data-current'));
            if (!current['id'] || current['id'] === null) {
                current = {};
            }
        } else if (this.dom.$block.hasAttribute('data-current-sub')) {
            current_sub = window.parse_json(this.dom.$block.getAttribute('data-current-sub'));
            if (!current_sub['depth'] || current_sub['depth'] != 3) {
                current_sub = {};
            }
        }
        if (this.dom.$block.hasAttribute('data-url')) {
            let params = {};
            if (this.dom.$block.hasAttribute('data-params')) {
                params = window.parse_json(this.dom.$block.getAttribute('data-params'));
                this.dom.$block.removeAttribute('data-params');
            }
            this.fetch_url(this.dom.$block.getAttribute('data-url'), params, (response) => {
                this.dom.$list = this.dom.$block.querySelector(this.node_class + '__list');
                this.dom.$columns = this.dom.$block.querySelector(this.node_class + '__columns');
                let $column = this.dom.$columns.children[0],
                    $items = $column.querySelector(this.node_class + '__items');
                $items.innerHTML = '';
                $items = this.make_items(response, 0, $items);
                /*if (current) {
                    [].slice.call($items.querySelectorAll(this.node_class + '__item')).forEach(function ($item) {
                        if ($item.opt && current.mark) {
                            if ($item.opt.code == current.mark) {
                                $item.classList.add(this.node_name + '__item-selected');
                            }
                        }
                    });
                }*/
                if ($items) {
                    $column.appendChild($items);
                }
                this.prepare_columns();
                this.toggle_columns(this.opt.column, !this.opt.is_binded);
                this.dom.$btn.addEventListener('click', this.toggle.bind(this), false);
                if (this.opt.is_mobile) this.prepare_modal();
                if (trigger_click) this.dom.$btn.click();
                if (current && current.id) this.set_values(null, current);
                else if (current_sub && current_sub.depth) this.set_values(null, current_sub);
                App.h.trigger(this.dom.$block, 'is-filled');
            });
            this.dom.$block.removeAttribute('data-url');
        } else {
            this.dom.$list = this.dom.$block.querySelector(this.node_class + '__list');
            this.dom.$columns = this.dom.$block.querySelector(this.node_class + '__columns');
            this.prepare_columns();
            this.toggle_columns(this.opt.column, !this.opt.is_binded);
            this.dom.$btn.addEventListener('click', this.toggle.bind(this), false);
            if (this.opt.is_mobile) this.prepare_modal();
            if (trigger_click) this.dom.$btn.click();
            if (current && current.id) this.set_values(null, current);
            else if (current_sub && current_sub.depth) this.set_values(null, current_sub);
            App.h.trigger(this.dom.$block, 'is-filled');
        }
        this.dom.$block.addEventListener('to-show', () => {
            this.show();
        });
        this.dom.$block.addEventListener('to-hide', () => {
            this.hide();
        });
    }

    prepare_modal() {
        this.dom.$title = this.dom.$list.querySelector(this.node_class + '__modal-title');
        this.dom.$back_btn = this.dom.$list.querySelector(this.node_class + '__modal-back');
        this.dom.$back_btn.addEventListener('click', () => {
            this.opt.column--;
            if (this.opt.column < 0) this.opt.column = 0;
            if (this.dom.$columns.children[this.opt.column]) this.dom.$columns.children[this.opt.column].scrollIntoView(false);
            this.toggle_columns(this.opt.column, true);
        });
    }

    prepare_columns() {
        [].slice.call(this.dom.$columns.querySelectorAll(this.node_class + '__column')).forEach(($column, index) => {
            this.prepare_items($column, index);
        });
    }

    prepare_items($column, index) {
        [].slice.call($column.querySelectorAll(this.node_class + '__items')).forEach(($items) => {
            if (!$items.opt) {
                $items.opt = {};
                $items.opt.is_binded = true;
                if ($items.hasAttribute('data-column-id')) {
                    $items.opt.id = $items.getAttribute('data-column-id');
                }
                [].slice.call($items.querySelectorAll(this.node_class + '__item')).forEach(($item) => {
                    if (!$item.opt) {
                        $item.opt = {};
                        if ($item.hasAttribute('data-url')) {
                            $item.opt.url = $item.getAttribute('data-url');
                            $item.removeAttribute('data-url');
                        }
                        if ($item.hasAttribute('data-params')) {
                            $item.opt.params = window.parse_json($item.getAttribute('data-params'));
                            $item.removeAttribute('data-params');
                        }
                        $item.opt.column = index;
                        $item.opt.id = $item.getAttribute('data-item-id');
                        $item.opt.name = $item.querySelector('.btn__cap').textContent;
                        $item.opt.$node = $item;
                        $item.opt.is_original = true;
                        if (!$item.opt.url) {
                            if ($item.hasAttribute('data-item-id')) {
                                if (index > 1 && !$item.opt.productSectionID && $items.opt.id) {
                                    $item.opt.productSectionID = $items.opt.id;
                                }
                                $item.removeAttribute('data-item-id');
                            }
                        }
                        if (!$item.opt.code) {
                            $item.opt.code = $item.opt.id;
                        }
                    } else {
                        if (index > 0 && $items.opt.id && $item.opt.productSectionID != $items.opt.id) {
                            $item.opt.productSectionID = $items.opt.id;
                        }
                    }

                    if (!$item.opt.is_binded) {
                        $item.opt.is_binded = true;
                        if (this.opt.is_mobile) {
                            if ($item.opt.url) {
                                if (this.opt.border && $item.opt.column + 1 >= this.opt.border) {
                                    $item.removeAttribute('data-item-id');
                                }
                            }
                            $item.addEventListener('click', () => {
                                if ($item.opt.url) {
                                    if (this.opt.border && $item.opt.column + 1 >= this.opt.border) {
                                        //return false;
                                        this.set_values($item);
                                        this.toggle();
                                    } else {
                                        this.make_column($item);
                                    }
                                } else {
                                    this.set_values($item);
                                    this.toggle();
                                }
                            });
                        } else {
                            if (this.opt.section) {
                                $item.addEventListener('dblclick', () => {
                                    this.set_values($item);
                                    this.toggle();
                                });
                            }
                            if ($item.opt.url) {
                                let timer;
                                $item.addEventListener('mouseover', () => {
                                    if (this.opt.border && $item.opt.column + 1 >= this.opt.border) {
                                        return false;
                                    } else {
                                        timer = setTimeout(() => {
                                            this.make_column($item);
                                        }, 500);
                                    }
                                });
                                $item.addEventListener('mouseout', () => {
                                    if (timer) {
                                        clearTimeout(timer);
                                    }
                                });
                                $item.addEventListener('click', () => {
                                    if (this.opt.border && $item.opt.column + 1 >= this.opt.border) {
                                        return false;
                                    } else {
                                        if (timer) {
                                            clearTimeout(timer);
                                        }
                                        this.make_column($item);
                                    }
                                });
                            } else {
                                $item.addEventListener('mouseover', () => {
                                    this.toggle_columns($item.opt.column);
                                    this.hide_items_chain($item);
                                });
                                $item.addEventListener('click', () => {
                                    this.set_values($item);
                                    this.toggle();
                                });
                            }
                        }
                    }
                });
            }
        });
    }

    get_section_url() {
        if (this.dom.$block.hasAttribute('data-section-url')) {
            return this.dom.$block.getAttribute('data-section-url');
        }
        return '/api/v1/product/section/get/';
    }

    get_item_url() {
        if (this.dom.$block.hasAttribute('data-item-url')) {
            return this.dom.$block.getAttribute('data-item-url');
        }
        return '/api/v1/product/item/get/';
    }

    set_values($item, opt, force) {
        if (!$item && !opt) {
            //console.warn(this.class_name + '.set_values', '$item & opt не передан');
            return;
        }
        opt = opt || $item.opt;
        if (!force && opt.noColumn) {
            force = true;
        }
        if ($item) {
            [].slice.call(this.dom.$columns.querySelectorAll(this.node_class + '__item')).forEach(($node) => {
                if ($node.opt) {
                    if ($item !== $node) {
                        $node.classList.remove(this.node_name + '__item-selected');
                    } else {
                        $node.classList.add(this.node_name + '__item-selected');
                    }
                }
            });
        }
        this.dom.$cap.textContent = opt.name;
        if (!force) {
            this.opt.current_value = opt;
            this.set_chain(this.opt.current_value.$node, true);
            if (this.opt.emit && $item) {
                window.bus.emit('multilevel.product-set', this.opt.current_value, this);
            }
            this.opt.id = (opt.productSectionID) ? opt.productSectionID : opt.id;
            this.opt.column = opt.column || null;
        }
        if (this.dom.$field) {
            this.dom.$field.value = $item.opt.id;
            this.dom.$field.title = $item.opt.name;
        }
        if (opt.requestID) {
            if (opt.noMeasure) {
                let $requestItem = this.dom.$list.querySelector(this.node_class + "__item[data-item-id='" + opt.requestID + "']");
                if ($requestItem) {
                    this.opt.id = opt.requestID;
                    this.make_column($requestItem);
                }
            } else {
                this.fetch_url(this.get_section_url(), {
                    'select': ['id', 'measureID'],
                    'filter': [['id', opt.requestID]],
                    'with': ['Measure', 'Measures']
                }, (response) => {
                    window.bus.emit('multilevel.measure-get', response[0], this);
                    if (force) {
                        return;
                    }
                    let $requestItem = this.dom.$list.querySelector(this.node_class + "__item[data-item-id='" + opt.requestID + "']");
                    if ($requestItem) {
                        this.opt.id = opt.requestID;
                        this.make_column($requestItem);
                    }
                });
            }
        }
        if (!force) {
            App.h.trigger(this.dom.$block, 'is-value-set');
        }
    }

    set_title(label) {
        if (!label) label = 'Каталог';
        if (this.opt.is_mobile && this.dom.$title) {
            this.dom.$title.textContent = label;
        }
    }

    fetch_start(id) {
        if (this.opt.queue.indexOf(id) !== -1) {
            //console.warn(this.class_name + '.fetch_start', 'id already in queue');
            return false;
        }
        this.add_to_queue(id);
        return true;
    }

    add_to_queue(id) {
        this.opt.queue.push(id);
    }

    fetch_finish(id, column, $items) {
        this.opt.queue.splice(this.opt.queue.indexOf(id));
        if (column > 0 && column < this.opt.border - 1 && $items.childElementCount === 1) {
            let $btn = $items.querySelector(this.node_class + '__item');
            if ($btn.opt) {
                if ($btn.opt.url) {
                    $items.remove_node();
                    $btn.opt.id = id;
                    $btn.opt.column = column - 1;
                    this.make_column($btn);
                }
            }
        }
    }

    make_column($item) {
        if (!$item.opt) {
            //console.warn(this.class_name + '.make_column', '$item не передан');
            return;
        }
        let id = $item.opt.id,
            column = $item.opt.column + 1,
            $column = this.dom.$columns.children[column],
            $items = ($column) ? $column.querySelector(this.node_class + '__items[data-column-id="' + id + '"]') : null;
        if ($column) {
            if (!$items) {
                if (this.fetch_start(id)) {
                    $items = window.create_node(this.node_name + '__items', 'div');
                    $items.setAttribute('data-column-id', id);
                    this.toggle_loading($item);
                    this.fetch_url($item.opt.url, $item.opt.params, (response) => {
                        $items = this.make_items(response, column, $items);
                        if ($items) $column.appendChild($items);
                        this.toggle_columns(column);
                        this.toggle_items(column, $items.getAttribute('data-column-id'));
                        this.prepare_items($column, column);
                        this.toggle_loading($item);
                        this.fetch_finish(id, column, $items);
                    });
                } else {
                    return;
                }
            } else {
                this.toggle_columns(column);
                this.toggle_items(column, id);
                this.prepare_items($column, column);
            }
        } else {
            if (this.fetch_start(id)) {
                $column = window.create_node(this.node_name + '__column', 'div');
                $items = window.create_node(this.node_name + '__items', 'div');
                $items.setAttribute('data-column-id', id);
                this.toggle_loading($item);
                this.fetch_url($item.opt.url, $item.opt.params, (response) => {
                    $column = this.make_items(response, column, $items, $column);
                    if ($column) this.dom.$columns.appendChild($column);
                    this.prepare_columns();
                    this.toggle_columns(column);
                    this.toggle_loading($item);
                    this.fetch_finish(id, column, $items);
                });
            } else {
                return;
            }
        }
        if (!this.opt.current_value) {
            this.opt.id = id;
            if (this.opt.is_mobile) this.opt.column = column;
        }
        this.opt.labels[column] = $item.opt.name;
        this.set_chain($item);
    }

    make_items(response, column, $items, $column) {
        if (!$items && !$column) {
            //console.warn(this.class_name + '.make_items', 'nothing to do');
            return;
        }
        if (!response) {
            //console.warn(this.class_name + '.make_items', 'response не передан');
            return;
        }
        let opt, $cap, $btn, $parent;
        if (column > 0) {
            $parent = this.dom.$columns.querySelector(this.node_class + '__item-chain');
        }
        response.forEach(($action) => {
            if ($action.Section && $action.code == 'prochee') {
                $action.name = $action.Section.name;
                delete $action.Section;
            }
            opt = $action;
            if (opt.depth == 1) {
                opt.full_search = true;
                if (opt.config) {
                    if (opt.config['portal'] && opt.config['portal']['base'] && opt.config['portal']['base']['searchDepth'] && opt.config['portal']['base']['searchDepth'] != 'item') {
                        opt.full_search = false;
                    }
                    delete opt.config;
                }
            }
            $cap = window.create_node('btn__cap', 'span', opt.name);
            $btn = window.create_node(this.node_name + '__item', 'button');
            $btn.setAttribute('type', 'button');
            $btn.classList.add('btn');

            let is_full_search = !(($parent && !$parent.opt.full_search && (typeof $parent.opt.full_search !== 'undefined')) || !this.opt.full_search);
            if (this.opt.is_full_search !== null) {
                is_full_search = this.opt.is_full_search;
            }

            if (opt.depth && opt.depth < this.opt.max_depth_level) {//if (opt.depth && column < this.opt.border - 2) {
                if (!is_full_search && opt.depth == this.opt.max_depth_level - 1) {
                    //actual version = any sub section
                    opt.url = this.get_section_url();
                    opt.params = {
                        'select': ['id', 'name', 'code', 'depth', 'productSectionID'],
                        'filter': [['productSectionID', opt.id], ['active', 1]],
                        'order': ['name', 'asc'],
                        'limit': 2000
                    };
                    //old version = other product
                    /*opt.url = this.get_item_url();
                    opt.params = {
                        'select': ['id', 'name', 'code', 'productSectionID'],
                        //'filter': [['code', 'prochee']],
                        'has': {
                            'Section': [['productSectionID', opt.id], ['active', 1]]
                        },
                        'with': {
                            'Section': ['id', 'name', 'code', 'productSectionID']
                        },
                        'order': ['name', 'asc'],
                        'limit': 2000
                    };*/
                } else {
                    opt.url = this.get_section_url();
                    opt.params = {
                        'select': ['id', 'name', 'code', 'depth', 'productSectionID'],
                        'filter': [[' productSectionID', opt.id], ['active', 1]],
                        'order': ['name', 'asc'],
                        'limit': 2000
                    };
                }
                $btn.setAttribute('data-item-id', opt.id);
            } else if (opt.depth && opt.depth == this.opt.max_depth_level && is_full_search) {//} else if (opt.depth && column < this.opt.border - 1) {
                opt.url = this.get_item_url();
                opt.params = {
                    'select': ['id', 'name', 'code', ' productSectionID'],
                    'filter': [[' productSectionID', opt.id], ['active', 1]],
                    'order': ['name', 'asc'],
                    'limit': 2000
                };
                $btn.setAttribute('data-item-id', opt.id);
            } else if (opt.id && opt.productSectionID) {
                opt.measureUrl = this.get_section_url();
            }
            $btn.opt = opt;
            $btn.opt.is_original = false;
            $btn.opt.column = column;
            $btn.opt.$node = $btn;
            $btn.appendChild($cap);
            $items.appendChild($btn);
        });
        if ($items && !$column) {
            return $items;
        }
        $column.appendChild($items);
        return $column;
    }

    toggle_columns(column, ignore_check) {
        if (!ignore_check) {
            if (!column) {
                //console.warn(this.class_name + '.toggle_columns', 'column не передан');
                return;
            }
        }
        let depth = 0;
        if (this.opt.column_disable && this.opt.current_value) {
            depth = this.opt.column_disable;
        }
        if (column < depth) column = depth;
        if (this.opt.is_mobile && this.dom.$back_btn) {
            if (column > depth) {
                this.dom.$back_btn.classList.add(this.node_name + '__visible');
            } else {
                this.dom.$back_btn.classList.remove(this.node_name + '__visible');
            }
            this.opt.column = column;
            this.set_title(this.opt.labels[this.opt.column]);
        }
        [].slice.call(this.dom.$columns.children).forEach(($columns, index) => {
            if (this.opt.is_mobile) {
                if (index != column) {
                    $columns.classList.add(this.node_name + '__hidden');
                } else {
                    $columns.classList.remove(this.node_name + '__hidden');
                }
            } else {
                if (index > column) {
                    $columns.classList.add(this.node_name + '__hidden');
                } else {
                    $columns.classList.remove(this.node_name + '__hidden');
                }
            }
        });
    }

    toggle_items(column, id) {
        if (!column) {
            //console.warn(this.class_name + '.toggle_items', 'column не передан');
            return;
        }
        if (!id) {
            //console.warn(this.class_name + '.toggle_items', 'id не передан');
            return;
        }
        let $column = this.dom.$columns.children[column];
        [].slice.call($column.querySelectorAll(this.node_class + '__items')).forEach(($node) => {
            if ($node.getAttribute('data-column-id') != id) {
                $node.classList.add(this.node_name + '__hide');
            } else {
                $node.classList.remove(this.node_name + '__hide');
            }
        });
    }

    toggle_loading($node) {
        if (!$node) {
            //console.warn(this.class_name + '.toggle_loading', '$node не передан');
            return;
        }
        if ($node.hasAttribute('data-loading')) {
            $node.removeAttribute('data-loading');
        } else {
            $node.setAttribute('data-loading', 'true');
        }
    }

    hide_items_chain($node) {
        if (!$node) {
            //console.warn(this.class_name + '.hide_items_chain', '$node не передан');
            return;
        }
        [].slice.call($node.closest_node(this.node_class + '__items').querySelectorAll(this.node_class + '__item-chain')).forEach(($item) => {
            $item.classList.remove(this.node_name + '__item-chain');
        });
    }

    set_chain($node, reverse) {
        if (!$node) {
            //console.warn(this.class_name + '.set_chain', '$node не передан');
            return;
        }
        let column = $node.opt.column;
        if (!reverse) {
            this.hide_items_chain($node);
            [].slice.call(this.dom.$columns.children).forEach(($columns, index) => {
                if (index > column) {
                    [].slice.call($columns.querySelectorAll(this.node_class + '__item-chain')).forEach(($item) => {
                        $item.classList.remove(this.node_name + '__item-chain');
                    });
                }
            });
            $node.classList.add(this.node_name + '__item-chain');
        } else {
            [].slice.call(this.dom.$columns.querySelectorAll(this.node_class + '__item-chain')).forEach(($item) => {
                $item.classList.remove(this.node_name + '__item-chain');
            });
            let $prev = null,
                number = $node.opt.productSectionID;
            while (column > 0) {
                column--;
                $prev = this.dom.$columns.querySelector(this.node_class + "__item[data-item-id='" + number + "']");
                if (this.opt.emit) {
                    if (column === 0) {
                        window.bus.emit('multilevel.section-set', $prev.opt, this);
                        if (this.opt.current_value.measureUrl && $prev.opt.id) {
                            this.fetch_url(this.opt.current_value.measureUrl, {
                                'select': ['id', 'measureID'],
                                'filter': [['id', $prev.opt.id]],
                                'with': ['Measure', 'Measures']
                            }, (response) => {
                                window.bus.emit('multilevel.measure-get', response[0], this);
                            });
                        }
                    }
                    if (column + 1 === $node.opt.column) {
                        window.bus.emit('multilevel.subcategory-set', $prev.opt, this);
                    }
                }
                this.opt.labels[column + 1] = $prev.querySelector('span').textContent;
                [].slice.call($prev.closest_node(this.node_class + '__column').querySelector(this.node_class + '__items')).forEach(($items) => {
                    $items.classList.add(this.node_name + '__hide');
                });
                $prev.closest_node(this.node_class + '__items').classList.remove(this.node_name + '__hide');
                $prev.classList.add(this.node_name + '__item-chain');
                number = $prev.opt.productSectionID;
            }
        }
    }

    fetch_url(url, data, callback) {
        if (!url) {
            //console.warn(this.class_name + '.fetch_url', 'url не передан');
            return;
        }
        this.dom.$btn.tabIndex = -1;
        let xhr = new XHR({
            url: url,
            data: data,
            success_callback: ((string) => {
                let response = window.parse_json(string);
                if (response['status'] === 'success') {
                    if (response['result']['list'].length > 1) {
                        for (let index in response['result']['list']) {
                            if (!response['result']['list'].hasOwnProperty(index)) continue;
                            if (response['result']['list'][index]['code']) {
                                if (response['result']['list'][index]['code'] == 'prochee') {
                                    if (index > 0 && index < response['result']['list'].length - 1) {
                                        let item = response['result']['list'][index];
                                        response['result']['list'].splice(index, 1);
                                        response['result']['list'].push(item);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    callback(response['result']['list']);
                }
            }),
            finish_callback: (() => {
                this.dom.$btn.tabIndex = 0;
            })
        });
        xhr.send();
    }

    on_resize() {
        this.opt.is_mobile = (window.innerWidth < window.constants.breakpoint_md);
    }

    on_outside_click(e) {
        if (!this.opt.is_shown || this.opt.is_mobile) return false;
        let is_target_block = (e.target == this.dom.$block),
            has_target_block = App.h.has_parent(e.target, this.dom.$block);
        if (!is_target_block && !has_target_block) this.hide();
    }

    on_outside_key_down(e) {
        if (this.opt.is_shown && !this.opt.is_mobile) {
            if (e.which == 27) {
                this.hide();
                this.dom.$btn.focus();
                e.stopPropagation();
                e.preventDefault();
            }
        }
    }
}

MultilevelSelect.prototype.class_name = 'MultilevelSelect';
MultilevelSelect.prototype.node_name = 'multilevel-select';
MultilevelSelect.prototype.node_class = '.' + MultilevelSelect.prototype.node_name;

(function () {
    try {
        console.info(MultilevelSelect.prototype.class_name + '.initiation');
        let $blocks = document.querySelectorAll(MultilevelSelect.prototype.node_class);
        for (let index in $blocks) {
            if (!$blocks.hasOwnProperty(index)) continue;
            if ($blocks[index].classList.contains('lazyload')) {
                $blocks[index].addEventListener('lazybeforeunveil', (e) => {
                    new MultilevelSelect(e.target);
                });
            } else {
                new MultilevelSelect($blocks[index]);
            }
        }
    } catch (errors) {
        console.error(MultilevelSelect.prototype.class_name + '.initiation', errors);
    }
})();

/**
 * Компонент выпадающего списка
 * Поиск среди элементов
 * Подгрузка элементов с сервера
 *
 * @namespace windows.components
 * @class SearchableSelect
 */
var SearchableSelect = function ($node) {
    this.opt = {};
    this.dom = {};
    this.opt.is_binded = true;
    if (!($node instanceof Element)) {
        console.warn(this.class_name + '.construct', '$node is not a node');
        return;
    }
    this.dom.$block = $node;
    this.opt.is_shown = false;
    this.opt.type_interval = null;
    this.opt.previous_value = null;
    this.opt.current_value = null;
    this.opt.items_list = [];
    this.opt.current_list = [];
    this.opt.url = this.dom.$block.dataset['url'];
    if (this.opt.url && typeof this.opt.url.trim === 'function') this.opt.url = this.opt.url.trim();
    this.opt.params = this.dom.$block.dataset['params'];
    if (this.opt.params) this.opt.params = window.parse_json(this.opt.params);
    this.opt.current_id = this.dom.$block.dataset['currentId'];
    this.opt.value_name = this.dom.$block.dataset['valueName'] || 'id';
    this.opt.initial_text = this.dom.$block.dataset['initialText'] || '';
    this.dom.$field = this.dom.$block.querySelector(this.node_class + '__field');
    this.dom.$btn = this.dom.$block.querySelector(this.node_class + '__btn');
    this.dom.$cap = this.dom.$block.querySelector(this.node_class + '__btn-cap');
    this.dom.$label = this.dom.$block.querySelector(this.node_class + '__label');
    this.dom.$select = this.dom.$block.querySelector(this.node_class + '__select');
    this.dom.$no_results = this.dom.$block.querySelector(this.node_class + '__no-results');
    this.dom.$list_wrp = this.dom.$block.querySelector(this.node_class + '__list-wrp');
    this.dom.$list = this.dom.$block.querySelector(this.node_class + '__list');
    this.dom.$select.onchange = this.on_change.bind(this);
    this.dom.$select.addEventListener('show-error', this.show_error.bind(this), false);
    this.dom.$select.addEventListener('hide-error', this.hide_error.bind(this), false);
    if (!isMobile.any) {
        this.prepare_desktop();
    }
    this.obtain_items();
    if (this.dom.$btn.disabled) this.disable();
    this.dom.$block.mount_instance(this, true);
};
SearchableSelect.prototype.class_name = 'SearchableSelect';
SearchableSelect.prototype.node_name = 'searchable-select';
SearchableSelect.prototype.node_class = '.' + SearchableSelect.prototype.node_name;
SearchableSelect.prototype.prepare_desktop = function () {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.prepare_desktop', 'this is unbinded');
        return;
    }
    this.dom.$block.classList.add(this.node_name + '_desktop');
    this.dom.$btn.tabIndex = 0;
    this.dom.$label.tabIndex = -1;
    this.dom.$select.tabIndex = -1;
    //this.dom.$btn.style.maxWidth = this.dom.$block.clientWidth + 'px';
    //this.dom.$list_wrp.style.maxWidth = this.dom.$block.clientWidth + 'px';
    this.dom.$btn.onclick = this.toggle.bind(this);
    this.dom.$field.oninput = this.on_input.bind(this);
    document.addEventListener('click', this.on_out_click.bind(this), false);
    document.addEventListener('keydown', this.on_key_down.bind(this), false);
};
SearchableSelect.prototype.search = function () {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.search', 'this is unbinded');
        return false;
    }
    var list = this.opt.items_list;
    var phrase = this.dom.$field.value.trim().toLocaleLowerCase();

    if (phrase.length === 0) {
        this.reveal_items();
        return;
    }
    this.dom.$list.scrollTop = 0;
    this.opt.current_list = [];
    list.map(function (group) {
        var found = group.subsections.length;

        group.subsections.map(function (item) {
            var name = item.option_data.name.trim().toLocaleLowerCase();

            if (name.indexOf(phrase) === -1) {
                item.$node.style.display = 'none';
                found -= 1;
            } else {
                item.$node.removeAttribute('style');
                this.opt.current_list.push(item);
            }
        }, this);
        if (found > 0) {
            group.$node.removeAttribute('style');
        } else {
            group.$node.style.display = 'none';
        }
    }, this);
    if (this.opt.current_list.length > 0) {
        this.dom.$block.classList.remove(this.node_name + '_no-results');
    } else {
        this.dom.$block.classList.add(this.node_name + '_no-results');
    }
};
SearchableSelect.prototype.clear = function () {
    this.dom.$cap.textContent = this.opt.initial_text;
    this.dom.$select.innerHTML = '';
    this.dom.$list.innerHTML = '';
    this.opt.previous_value = null;
    this.opt.current_value = null;
    this.opt.items_list = [];
    this.opt.current_list = [];
};
SearchableSelect.prototype.reveal_items = function () {
    var list = this.opt.items_list;

    if (this.opt === undefined) {
        console.warn(this.class_name + '.search', 'this is unbinded');
        return false;
    }
    this.opt.current_list = [];
    list.map(function (group) {
        group.$node.removeAttribute('style');
        group['subsections'].map(function (item) {
            item.$node.removeAttribute('style');
            this.opt.current_list.push(item);
        }, this);
    }, this);
    this.dom.$block.classList.remove(this.node_name + '_no-results');
};
SearchableSelect.prototype.fetch_url = function () {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.fetch_url', 'this is unbinded');
        return;
    }
    this.on_load();
    var xhr = new XHR({
        url: this.opt.url,
        data: typeof (this.opt.params) === 'object' ? this.opt.params : {},
        success_callback: (function (string) {
            var response = window.parse_json(string);

            if (response['status'] === 'success') {
                this.fill_select(response['result']['list']);
            } else {
                this.on_load_errors({statusText: 'Ошибка получения данных с сервера'});
            }
        }).bind(this),
        errors_callback: (function (xhr) {
            this.on_load_errors(xhr);
        }).bind(this),
        finish_callback: (function () {
            this.on_finish();
        }).bind(this)
    });

    if (window.location.origin === 'file://') {
        xhr.callback('success_callback', '{"result":"success","response":[{"id":"","code":"","name":"Выберите категорию изделия"},{"name":"Балки, фермы","subsections":[{"id":"468","code":"balki-podkranovykh-putey","name":"Балки подкрановых путей"},{"id":"472","code":"balki-predvaritelno-napryazhennye","name":"Балки предварительно напряженные"},{"id":"475","code":"balki-s-parallelnymi-poyasami","name":"Балки с параллельными поясами"},{"id":"471","code":"balki-stropilnye-zhelezobetonnye","name":"Балки стропильные железобетонные"},{"id":"470","code":"balki-stropilnye-zhelezobetonnye-reshetchatye","name":"Балки стропильные железобетонные решетчатые"},{"id":"477","code":"balki-estakad","name":"Балки эстакад"},{"id":"469","code":"dvuskatnye-balki","name":"Двускатные балки"},{"id":"474","code":"obvyazochnye-balki","name":"Обвязочные балки"},{"id":"473","code":"odnoskatnye-balki","name":"Односкатные балки"},{"id":"476","code":"fermy","name":"Фермы"}]},{"name":"Бордюры, сигнальные столбики, плита тротуарная","subsections":[{"id":"448","code":"kamni-zhelezobetonnye-bortovye","name":"Камни железобетонные бортовые"},{"id":"447","code":"plita-trotuarnaya","name":"Плита тротуарная"},{"id":"446","code":"signalnye-stolbiki","name":"Сигнальные столбики"}]}]}');
        //xhr.callback('success_callback', '{"result":"success","response":[{"id":"","code":"","name":"Выберите марку"},{"id":"88487","code":"b-1","name":"Б- 1"},{"id":"88447","code":"b-1-brp-1","name":"Б-1 (БРП-1)"},{"id":"88468","code":"balka-podkranovykh-putey-bpp","name":"Балка подкрановых путей БПП"},{"id":"86995","code":"bk-2","name":"БК-2"},{"id":"86998","code":"bk6-32","name":"БК6-32"},{"id":"88523","code":"bk9-aiiiv-k","name":"БК9-АIIIВ-К"},{"id":"88522","code":"bk9-aiiiv-s","name":"БК9-АIIIВ-С"},{"id":"86996","code":"bp-6-25i","name":"БП 6.25и"},{"id":"86989","code":"brp-62-8-3","name":"БРП 62.8.3"},{"id":"88443","code":"pb-6-25","name":"ПБ-6.25"},{"id":"88462","code":"pb-620","name":"ПБ-620"},{"id":"88456","code":"pba-623","name":"ПБА 623"},{"id":"86990","code":"pba-623","name":"ПБА-623"},{"id":"88521","code":"podkranvaya-balka-kb","name":"Подкранвая балка КБ"}]}');
        xhr.callback('finish_callback');
    } else {
        xhr.send();
    }
};
SearchableSelect.prototype.fill_select = function (array) {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.fill_select', 'this is unbinded');
        return;
    }
    if (!array || typeof array !== 'object') {
        console.warn(this.class_name + '.fill_select', 'array is not an object');
        return false;
    }
    this.clear();
    array.map(function (value) {
        if (value['subsections'] !== undefined) {
            var $opt_group = window.create_node('', 'optgroup');

            $opt_group.label = value['name'];
            value['subsections'].map(function (value) {
                var $option = window.create_node('', 'option', value['name']);

                $option.value = value[this.opt.value_name];
                if (value[this.opt.value_name] == this.opt.current_id) {
                    $option.selected = true;
                }
                $opt_group.appendChild($option);
            }, this);
            this.dom.$select.appendChild($opt_group);
        } else {
            var $option = window.create_node('', 'option', value['name']);

            $option.value = value[this.opt.value_name];
            if (value[this.opt.value_name] == this.opt.current_id) {
                $option.selected = true;
            }
            this.dom.$select.appendChild($option);
        }
    }, this);
    this.read_select();
};
SearchableSelect.prototype.read_select = function () {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.read_select', 'this is unbinded');
        return;
    }
    [].slice.call(this.dom.$select.children).map(function ($node) {
        if ($node.value === undefined) {
            var group = {};

            group.name = $node.label;
            group.subsections = [];
            group.$node = window.create_node(this.node_name + '__group');
            group.$title = window.create_node(this.node_name + '__group-title', 'strong', group.name);
            group.$list = window.create_node(this.node_name + '__group-list');
            group.$node.appendChild(group.$title);
            group.$node.appendChild(group.$list);
            [].slice.call($node.children).map(function ($node) {
                var item;

                item = this.get_item({
                    name: $node.textContent,
                    value: $node.value
                });
                if (!item) return;
                group.subsections.push(item);
                group.$list.appendChild(item.$node);
                this.opt.current_list.push(item);
            }, this);
            this.dom.$list.appendChild(group.$node);
            this.opt.items_list.push(group);
        } else {
            var item;

            item = this.get_item({
                name: $node.textContent,
                value: $node.value
            });
            if (!item) return;
            this.dom.$list.appendChild(item.$node);
            this.opt.current_list.push(item);
            this.opt.items_list.push({
                $node: window.create_node(this.node_name + '__group'),
                name: $node.textContent,
                subsections: [item]
            });
        }

    }, this);
    if (!this.opt.current_value && this.opt.current_list[0]) {
        this.update_current(this.opt.current_list[0]);
    }
};
SearchableSelect.prototype.get_item = function (option) {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.get_item', 'this is unbinded');
        return false;
    }
    if (typeof option !== 'object') {
        console.warn(this.class_name + '.get_item', 'option is not an object');
        return false;
    }
    var item = {};

    item.option_data = option;
    item.$node = window.create_node(this.node_name + '__item', 'button', item.option_data.name);
    item.$node.type = 'button';
    item.$node.tabIndex = '-1';
    item.$node.title = item.option_data.name || '';
    if (item.option_data.value == this.opt.current_id) {
        this.update_current(item);
        this.dom.$block.classList.add(this.node_name + '_interacted');
    }
    item.$node.onclick = (function (e) {
        this.on_select.call(this, e, item);
    }).bind(this);
    return item;
};
SearchableSelect.prototype.obtain_items = function () {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.obtain_items', 'this is unbinded');
        return;
    }
    if (this.dom.$block.hasAttribute('data-items')) {
        this.fill_select(window.parse_json(this.dom.$block.getAttribute('data-items')));
        this.dom.$block.removeAttribute('data-items');
    } else {
        if (this.opt.url) {
            this.fetch_url();
        } else {
            this.read_select();
        }
    }
};
SearchableSelect.prototype.update_current = function (current_value) {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.update_current', 'this is unbinded');
        return;
    }
    if (typeof current_value !== 'object') {
        console.warn(this.class_name + '.update_current', 'current_value is not an object');
        return;
    }
    this.opt.current_value = current_value;
    this.opt.current_value.$node.classList.add(this.node_name + '__item_selected');
    this.dom.$btn.title = this.opt.current_value.option_data.name;
    this.dom.$cap.textContent = this.opt.current_value.option_data.name;
    this.dom.$select.value = this.opt.current_value.option_data.value;
    this.dom.$block.trigger_event('is-current-set');
};
SearchableSelect.prototype.scroll_to_current = function () {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.scroll_to_current', 'this is unbinded');
        return;
    }
    if (this.opt.current_value) {
        var scroll_value = this.dom.$list.scrollTop,
            current_node_offset = this.opt.current_value.$node.offsetTop,
            list_height = this.dom.$list.clientHeight,
            node_height = this.opt.current_value.$node.clientHeight;

        if (current_node_offset > scroll_value) {
            this.dom.$list.scrollTop = current_node_offset - (list_height / 2 - node_height / 2);
        }
    }
};
SearchableSelect.prototype.enable = function () {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.enable', 'this is unbinded');
        return;
    }
    this.dom.$btn.disabled = false;
    this.dom.$select.disabled = false;
    this.dom.$block.trigger_event('is-enabled');
};
SearchableSelect.prototype.disable = function () {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.disable', 'this is unbinded');
        return;
    }
    //this.opt.is_shown = false;
    //this.dom.$block.classList.remove(this.node_name + '_shown');
    this.hide();
    this.dom.$btn.disabled = true;
    this.dom.$select.disabled = true;
    this.dom.$block.trigger_event('is-disabled');
};
SearchableSelect.prototype.show = function () {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.show', 'this is unbinded');
        return;
    }
    this.opt.is_shown = true;
    this.dom.$block.classList.add(this.node_name + '_shown');
    this.dom.$field.focus();
    if (this.opt.current_value) {
        this.opt.previous_value = this.opt.current_value;
    }
    this.scroll_to_current();
    this.dom.$block.trigger_event('is-shown');
};
SearchableSelect.prototype.hide = function () {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.hide', 'this is unbinded');
        return;
    }
    this.opt.is_shown = false;
    this.dom.$block.classList.remove(this.node_name + '_shown');
    if (this.opt.current_value && this.opt.previous_value != this.opt.current_value) {
        this.dom.$block.trigger_event('is-changed');
    }
    this.dom.$field.value = '';
    this.reveal_items();
    this.dom.$block.trigger_event('is-hidden');

};
SearchableSelect.prototype.toggle = function () {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.toggle', 'this is unbinded');
        return;
    }
    if (this.opt.is_shown) this.hide();
    else this.show();
};
SearchableSelect.prototype.hide_error = function () {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.hide_error', 'this is unbinded');
        return;
    }
    this.dom.$block.classList.remove(this.node_name + '__errors');
};
SearchableSelect.prototype.show_error = function () {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.show_error', 'this is unbinded');
        return;
    }
    this.dom.$block.classList.add(this.node_name + '__errors');
};
SearchableSelect.prototype.on_load_errors = function (xhr) {
    // TODO: вынести в отдельный файл и нормально продумать реакцию на ошибки
    console.error(this.class_name + '.on_load_errors', xhr.statusText);
    this.dom.$block.title = 'Произошла ошибка. Попробуйте обновить страницу';
    this.disable();
};
SearchableSelect.prototype.on_load = function () {
    this.dom.$btn.tabIndex = -1;
    this.dom.$block.classList.add(this.node_name + '_loading');
};
SearchableSelect.prototype.on_finish = function () {
    this.dom.$btn.tabIndex = 0;
    this.dom.$block.classList.remove(this.node_name + '_loading');
};
SearchableSelect.prototype.on_submit = function (e) {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.on_submit', 'this is unbinded');
        return false;
    }
    var phrase = ('' + this.dom.$field.value).trim();

    if (e.target !== this.dom.$field ||
        (e.target === this.dom.$field && phrase.length === 0) ||
        (e.target === this.dom.$field && this.opt.current_list.indexOf(this.opt.current_value) !== -1)
    ) {
        this.hide();
        this.dom.$btn.focus();
        e.stopPropagation();
        e.preventDefault();
    }
};
SearchableSelect.prototype.on_change = function () {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.on_change', 'this is unbinded');
        return;
    }
    this.opt.current_list.map(function (item) {
        if (item.option_data.value == this.dom.$select.value) {
            this.update_current(item);
        }
    }, this);
    this.dom.$block.trigger_event('is-changed');
};
SearchableSelect.prototype.on_select = function (e, current_value) {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.on_select', 'this is unbinded');
        return;
    }
    if (typeof current_value !== 'object') {
        console.warn(this.class_name + '.on_select', 'current_value is not an object');
        return;
    }
    [].slice.call(this.dom.$list.querySelectorAll(this.node_class + '__item_selected')).map(function ($node) {
        $node.classList.remove(this.node_name + '__item_selected');
    }, this);
    this.update_current(current_value);
    if (e && e.type) {
        if (e.type === 'click') this.hide();
    }
    this.scroll_to_current();
};
SearchableSelect.prototype.on_arrow_select = function (direction) {
    var list = this.opt.current_list;

    if (this.opt === undefined) {
        console.warn(this.class_name + '.on_arrow_select', 'this is unbinded');
        return;
    }
    if (!list || list.length === 0) {
        return;
    }
    var current_index = list.indexOf(this.opt.current_value),
        new_index = current_index + direction,
        current_value;

    if (current_index == -1 || !list[new_index]) {
        current_index = (direction === 1) ? list.length - 1 : 0;
        current_value = list[current_index];
    } else {
        current_value = list[new_index];
    }
    this.on_select({type: 'key'}, current_value);
};
SearchableSelect.prototype.on_key_down = function (e) {
    var key = parseInt(e.which);

    if (this.opt === undefined) {
        console.warn(this.class_name + '.on_key_down', 'this is unbinded');
        return;
    }
    if (!this.opt.is_shown) {
        return;
    }
    if ([9, 27].indexOf(key) != -1) {
        this.hide();
        this.dom.$btn.focus();
        e.stopPropagation();
        e.preventDefault();
    } else if ([13].indexOf(key) != -1) {
        this.on_submit(e);
        e.stopPropagation();
        e.preventDefault();
    } else if ([38].indexOf(key) != -1) {
        this.on_arrow_select(-1);
        e.stopPropagation();
        e.preventDefault();
    } else if ([40].indexOf(key) != -1) {
        this.on_arrow_select(1);
        e.stopPropagation();
        e.preventDefault();
    }
};
SearchableSelect.prototype.on_input = function () {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.on_key_press', 'this is unbinded');
        return;
    }
    if (typeof this.opt.type_interval === 'number') clearTimeout(this.opt.type_interval);
    this.opt.type_interval = setTimeout(
        this.search.bind(this),
        0
    );
};
SearchableSelect.prototype.on_out_click = function (e) {
    if (this.opt === undefined) {
        console.warn(this.class_name + '.on_out_click', 'this is unbinded');
        return;
    }
    if (!this.opt.is_shown) return;
    if (e.target !== this.dom.$block && e.target.get_parent(this.node_name) !== this.dom.$block) {
        this.hide();
    }
};
window.components[SearchableSelect.prototype.class_name] = SearchableSelect;
(function () {
    try {
        console.info(SearchableSelect.prototype.class_name + '.initiation');
        var $blocks = document.querySelectorAll(SearchableSelect.prototype.node_class);

        for (var index in $blocks) {
            if (!$blocks.hasOwnProperty(index)) continue;
            new SearchableSelect($blocks[index]);
        }
    } catch (errors) {
        console.error(SearchableSelect.prototype.class_name + '.initiation', errors);
    }
})();

/**
 * Компонент упралвения таймерами
 *
 * @namespace windows.components
 * @class Timer
 */
class Timer {
    constructor($node) {
        this.opt = {};
        this.dom = {};
        if (!($node instanceof Element)) {
            console.warn(this.class_name + '.construct', '$node не node-элемент');
            return;
        }
        this.dom.$block = $node;
        this.opt.action = this.dom.$block.getAttribute('data-action');
        if (this.dom.$block.hasAttribute('data-action')) {
            this.dom.$block.removeAttribute('data-action');
        }
        if (this.dom.$block.hasAttribute('data-datetime')) {
            this.opt.countDown = new Date(this.dom.$block.getAttribute('data-datetime'));
            this.dom.$block.removeAttribute('data-datetime');
        } else {
            this.opt.countDown = new Date();
            this.opt.countDown.setMinutes(this.opt.countDown.getMinutes() + 15);
        }
        this.opt.countDown = this.opt.countDown.getTime();
        this.dom.$hours = this.dom.$block.querySelector(this.node_class + '__hours');
        this.dom.$minutes = this.dom.$block.querySelector(this.node_class + '__minutes');
        this.dom.$seconds = this.dom.$block.querySelector(this.node_class + '__seconds');
        this.init();
        this.dom.$block.mount_instance(this, true);
    }

    init() {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
        let interval = setInterval(() => {
            let now = new Date().getTime(),
                distance = this.opt.countDown - now,
                h = Math.floor((distance % (day)) / (hour)),
                m = Math.floor((distance % (hour)) / (minute)),
                s = Math.floor((distance % (minute)) / second);
            if (distance <= 0) {
                clearInterval(interval);
                this.dom.$hours.innerText = '00';
                this.dom.$minutes.innerText = '00';
                this.dom.$seconds.innerText = '00';
                if (this.opt.action === 'reload') {
                    window.location.reload(true);
                }
                App.h.trigger(this.dom.$block, 'is-finished');
            } else {
                this.dom.$hours.innerText = (h < 10) ? '0' + h : h;
                this.dom.$minutes.innerText = (m < 10) ? '0' + m : m;
                this.dom.$seconds.innerText = (s < 10) ? '0' + s : s;
            }
        }, second);
    };
}

Timer.prototype.class_name = 'Timer';
Timer.prototype.node_name = 'timer';
Timer.prototype.node_class = '.' + Timer.prototype.node_name;

window.addEventListener('load', () => {
    try {
        console.info(Timer.prototype.class_name + '.initiation');
        let $blocks = document.querySelectorAll(Timer.prototype.node_class);
        for (let index in $blocks) {
            if (!$blocks.hasOwnProperty(index)) continue;
            new Timer($blocks[index]);
        }
    } catch (errors) {
        console.error(Timer.prototype.class_name + '.initiation', errors);
    }
}, false);

