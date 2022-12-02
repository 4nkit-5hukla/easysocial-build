import{b0 as d}from"./index.3f755f43.js";var M={normalDateWithWeekday:"ddd, MMM D",normalDate:"D MMMM",shortDate:"MMM D",monthAndDate:"MMMM D",dayOfMonth:"D",year:"YYYY",month:"MMMM",monthShort:"MMM",monthAndYear:"MMMM YYYY",weekday:"dddd",weekdayShort:"ddd",minutes:"mm",hours12h:"hh",hours24h:"HH",seconds:"ss",fullTime:"LT",fullTime12h:"hh:mm A",fullTime24h:"HH:mm",fullDate:"ll",fullDateWithWeekday:"dddd, LL",fullDateTime:"lll",fullDateTime12h:"ll hh:mm A",fullDateTime24h:"ll HH:mm",keyboardDate:"L",keyboardDateTime:"L LT",keyboardDateTime12h:"L hh:mm A",keyboardDateTime24h:"L HH:mm"},D=function(){function c(h){var n=this,a=h===void 0?{}:h,f=a.locale,l=a.formats,m=a.instance;this.lib="moment",this.is12HourCycleInCurrentLocale=function(){return/A|a/.test(n.moment().localeData().longDateFormat("LT"))},this.getFormatHelperText=function(t){var e=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})|./g;return t.match(e).map(function(r){var o=r[0];return o==="L"||o===";"?n.moment.localeData().longDateFormat(r):r}).join("").replace(/a/gi,"(a|p)m").toLocaleLowerCase()},this.getCurrentLocaleCode=function(){return n.locale||n.moment.locale()},this.parseISO=function(t){return n.moment(t,!0)},this.toISO=function(t){return t.toISOString()},this.parse=function(t,e){return t===""?null:n.locale?n.moment(t,e,n.locale,!0):n.moment(t,e,!0)},this.date=function(t){if(t===null)return null;var e=n.moment(t);return e.locale(n.locale),e},this.toJsDate=function(t){return t.toDate()},this.isValid=function(t){return n.moment(t).isValid()},this.isNull=function(t){return t===null},this.getDiff=function(t,e,r){return t.diff(e,r)},this.isAfter=function(t,e){return t.isAfter(e)},this.isBefore=function(t,e){return t.isBefore(e)},this.isAfterDay=function(t,e){return t.isAfter(e,"day")},this.isBeforeDay=function(t,e){return t.isBefore(e,"day")},this.isBeforeYear=function(t,e){return t.isBefore(e,"year")},this.isAfterYear=function(t,e){return t.isAfter(e,"year")},this.startOfDay=function(t){return t.clone().startOf("day")},this.endOfDay=function(t){return t.clone().endOf("day")},this.format=function(t,e){return n.formatByString(t,n.formats[e])},this.formatByString=function(t,e){var r=t.clone();return r.locale(n.locale),r.format(e)},this.formatNumber=function(t){return t},this.getHours=function(t){return t.get("hours")},this.addSeconds=function(t,e){return e<0?t.clone().subtract(Math.abs(e),"seconds"):t.clone().add(e,"seconds")},this.addMinutes=function(t,e){return e<0?t.clone().subtract(Math.abs(e),"minutes"):t.clone().add(e,"minutes")},this.addHours=function(t,e){return e<0?t.clone().subtract(Math.abs(e),"hours"):t.clone().add(e,"hours")},this.addDays=function(t,e){return e<0?t.clone().subtract(Math.abs(e),"days"):t.clone().add(e,"days")},this.addWeeks=function(t,e){return e<0?t.clone().subtract(Math.abs(e),"weeks"):t.clone().add(e,"weeks")},this.addMonths=function(t,e){return e<0?t.clone().subtract(Math.abs(e),"months"):t.clone().add(e,"months")},this.addYears=function(t,e){return e<0?t.clone().subtract(Math.abs(e),"years"):t.clone().add(e,"years")},this.setHours=function(t,e){return t.clone().hours(e)},this.getMinutes=function(t){return t.get("minutes")},this.setMinutes=function(t,e){return t.clone().minutes(e)},this.getSeconds=function(t){return t.get("seconds")},this.setSeconds=function(t,e){return t.clone().seconds(e)},this.getMonth=function(t){return t.get("month")},this.getDaysInMonth=function(t){return t.daysInMonth()},this.isSameDay=function(t,e){return t.isSame(e,"day")},this.isSameMonth=function(t,e){return t.isSame(e,"month")},this.isSameYear=function(t,e){return t.isSame(e,"year")},this.isSameHour=function(t,e){return t.isSame(e,"hour")},this.setMonth=function(t,e){return t.clone().month(e)},this.getMeridiemText=function(t){return n.is12HourCycleInCurrentLocale()?n.moment.localeData().meridiem(t==="am"?0:13,0,!1):t==="am"?"AM":"PM"},this.startOfYear=function(t){return t.clone().startOf("year")},this.endOfYear=function(t){return t.clone().endOf("year")},this.startOfMonth=function(t){return t.clone().startOf("month")},this.endOfMonth=function(t){return t.clone().endOf("month")},this.startOfWeek=function(t){return t.clone().startOf("week")},this.endOfWeek=function(t){return t.clone().endOf("week")},this.getNextMonth=function(t){return t.clone().add(1,"month")},this.getPreviousMonth=function(t){return t.clone().subtract(1,"month")},this.getMonthArray=function(t){for(var e=t.clone().startOf("year"),r=[e];r.length<12;){var o=r[r.length-1];r.push(n.getNextMonth(o))}return r},this.getYear=function(t){return t.get("year")},this.setYear=function(t,e){return t.clone().set("year",e)},this.getDate=function(t){return t.get("date")},this.setDate=function(t,e){return t.clone().set("date",e)},this.mergeDateAndTime=function(t,e){return t.hour(e.hour()).minute(e.minute()).second(e.second())},this.getWeekdays=function(){return n.moment.weekdaysShort(!0)},this.isEqual=function(t,e){return t===null&&e===null?!0:n.moment(t).isSame(e)},this.getWeekArray=function(t){for(var e=t.clone().startOf("month").startOf("week"),r=t.clone().endOf("month").endOf("week"),o=0,s=e,i=[];s.isBefore(r);){var u=Math.floor(o/7);i[u]=i[u]||[],i[u].push(s),s=s.clone().add(1,"day"),o+=1}return i},this.getYearRange=function(t,e){for(var r=n.moment(t).startOf("year"),o=n.moment(e).endOf("year"),s=[],i=r;i.isBefore(o);)s.push(i),i=i.clone().add(1,"year");return s},this.isWithinRange=function(t,e){var r=e[0],o=e[1];return t.isBetween(r,o,null,"[]")},this.moment=m||d,this.locale=f,this.formats=Object.assign({},M,l)}return c}();export{D as M};
