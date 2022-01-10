# js 时间的快捷方式

#### 获取当前时间

```javascript
/*
 * date 需要转换的时间  如当前时间  或  自定义时间
 * format 需要返回的格式  如 yyyy-MM-dd HH:mm:ss
 */
function formatDate(date, format) {
	if (isNull(format)) {
		if (isNull(date)) return date;
		return new Date(date).toLocaleString();
	}
	date = new Date(date);
	var o = {
		'M+': date.getMonth() + 1, //month
		'd+': date.getDate(), //day
		'h+': date.getHours(), //hour
		'H+': date.getHours(), //hour
		'm+': date.getMinutes(), //minute
		's+': date.getSeconds(), //second
		'q+': Math.floor((date.getMonth() + 3) / 3), //quarter
		S: date.getMilliseconds(), //millisecond
	};
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp('(' + k + ')').test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
		}
	}
	return format;
}
```

输出： `formatDate(new Date(), 'yyyy-MM-dd') // 2020-01-01`

::: tip 注意：

- 若要适配 ipad, 请配合 js- 进行控制

:::

#### 适配问题: ios 时间格式

```javascript
// 快速切换格式
function splitIosTime(time, foramte = 'yyyy/MM/dd HH:mm:ss') {
	if (!time) return time || '';
	if (Number(time)) return formatDate(time, foramte);
	return time.replace(/-/g, '/');
}
// 返回格式
function returnSplitIosTime(time, formate = 'yyyy/MM/dd HH:mm', formateTime = 'yyyy-MM-dd HH:mm') {
	if (!time) return time || '';
	if (Number(time)) return formatDate(time, formateTime);
	let val = formatDate(splitIosTime(time), formate);
	val = val.replace(/\//g, '-');
	val = val.replace(/\\/g, '-');
	console.log(val, 'val');
	return val;
}
```

#### 获取上周第一天

```javascript
/**
 * params  时间戳
 */
function getLastWeekBeginDate(now) {
	if (!now) now = new Date();
	//周日为0，一为1，六为6
	var nowDayOfWeek = now.getDay(); //今天本周的第几天
	if (nowDayOfWeek == 0) nowDayOfWeek = 7;
	var nowDay = now.getDate(); //当前日
	var nowMonth = now.getMonth(); //当前月
	var nowYear = now.getFullYear(); //当前年
	return new Date(nowYear, nowMonth, nowDay - nowDayOfWeek + 1 - 7);
}
```

#### 获取上周最后一天

```javascript
/**
 * params  时间戳
 */
function getLastWeekEndDate(now) {
	if (!now) now = new Date();
	var nowDayOfWeek = now.getDay(); //今天本周的第几天
	if (nowDayOfWeek == 0) nowDayOfWeek = 7;
	var nowDay = now.getDate(); //当前日
	var nowMonth = now.getMonth(); //当前月
	var nowYear = now.getFullYear(); //当前年
	return new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
}
```

#### 获取本周第一天

```javascript
/**
 * params  时间戳
 */
function getCurrentWeekBeginDate(now) {
	if (!now) now = new Date();
	var nowDayOfWeek = now.getDay(); //今天本周的第几天
	if (nowDayOfWeek == 0) nowDayOfWeek = 7;
	var nowDay = now.getDate(); //当前日
	var nowMonth = now.getMonth(); //当前月
	var nowYear = now.getFullYear(); //当前年
	return new Date(nowYear, nowMonth, nowDay - nowDayOfWeek + 1);
}
```

#### 获取本周最后一天

```javascript
/**
 * params  时间戳
 */
function getCurrentWeekEndDate(now) {
	if (!now) now = new Date();
	var nowDayOfWeek = now.getDay(); //今天本周的第几天
	if (nowDayOfWeek == 0) nowDayOfWeek = 7;
	var nowDay = now.getDate(); //当前日
	var nowMonth = now.getMonth(); //当前月
	var nowYear = now.getFullYear(); //当前年
	return new Date(nowYear, nowMonth, nowDay + (7 - nowDayOfWeek));
}
```

#### 获取当前月的第一天

```javascript
/**
 * params  时间戳
 */
function getCurrentMonthFirst(date) {
	if (!date) date = new Date();
	date.setDate(1);
	return date;
}
```

#### 获取当前月的最后一天

```javascript
/**
 * params  时间戳
 */
function getCurrentMonthLast(date) {
	if (!date) date = new Date();
	var nextMonth = date.getMonth() + 1;
	var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
	var oneDay = 1000 * 60 * 60 * 24;
	return new Date(nextMonthFirstDay - oneDay);
}
```

#### 获取上个月的第一天

```javascript
/**
 * params  时间戳
 */
function getLastMonthFirst(date) {
	if (!date) date = new Date();
	var lastMonth = date.getMonth() - 1;
	return new Date(date.getFullYear(), lastMonth, 1);
}
```

#### 获取上个月的最后一天

```javascript
/**
 * params  时间戳
 */
function getLastMonthLast(date) {
	if (!date) date = new Date();
	var currentMonth = date.getMonth();
	var nFirstDay = new Date(date.getFullYear(), currentMonth, 1);
	var oneDay = 1000 * 60 * 60 * 24;
	return new Date(nFirstDay - oneDay);
}
```

#### 获取昨天

```javascript
/**
 * params  时间戳
 */
function getYesterday(date) {
	if (!date) date = new Date();
	var oneDay = 1000 * 60 * 60 * 24;
	return new Date(date - oneDay);
}
```

#### 根据指定日期得到日期范围数组集合

```javascript
/**
 * params  类型   时间戳
 * 根据指定日期得到日期范围数组集合
 * 0: 昨日  1:今日  2:上月  3: 本月  4:本周  5:上周
 */
function getDateInfo(type, baseDate) {
	var result = {
		startDate: '',
		endDate: '',
	};
	if (!baseDate) baseDate = new Date();
	if (type == 0) {
		//昨日
		result.startDate = getYesterday(baseDate).Format('yyyy-MM-dd');
		result.endDate = result.startDate;
	} else if (type == 1) {
		//今日
		result.startDate = baseDate.Format('yyyy-MM-dd');
		result.endDate = baseDate.Format('yyyy-MM-dd');
	} else if (type == 2) {
		//上月
		result.startDate = getLastMonthFirst(baseDate).Format('yyyy-MM-dd');
		result.endDate = getLastMonthLast(baseDate).Format('yyyy-MM-dd');
	} else if (type == 3) {
		//本月
		result.startDate = getCurrentMonthFirst(baseDate).Format('yyyy-MM-dd');
		result.endDate = getCurrentMonthLast(baseDate).Format('yyyy-MM-dd');
	} else if (type == 4) {
		//上周
		result.startDate = getLastWeekBeginDate(baseDate).Format('yyyy-MM-dd');
		result.endDate = getLastWeekEndDate(baseDate).Format('yyyy-MM-dd');
	} else if (type == 5) {
		//本周
		result.startDate = getCurrentWeekBeginDate(baseDate).Format('yyyy-MM-dd');
		result.endDate = getCurrentWeekEndDate(baseDate).Format('yyyy-MM-dd');
	}
	return result;
}
```

#### 判断年份是否为润年

```javascript
/**
 * params   时间戳
 *
 * @param {Number} year
 */
function isLeapYear(year) {
	return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
}
```

#### 获取某一年份的某一月份的天数

```javascript
/**
 * @param {Number} year
 * @param {Number} month
 */
function getMonthDays(year, month) {
	return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 : 28);
}
```

#### 获取某年的某天是第几周

```javascript
/**
 * @param {Number} y
 * @param {Number} m
 * @param {Number} d
 * @returns {Number}
 */
function getWeekNumber(y, m, d) {
	var now = new Date(y, m, d),
		year = now.getFullYear(),
		month = now.getMonth(),
		days = now.getDate();
	//那一天是那一年中的第多少天
	for (var i = 0; i < month; i++) {
		days += getMonthDays(year, i);
	}

	//那一年第一天是星期几
	var yearFirstDay = new Date(year, 0, 1).getDay() || 7;
	var week = null;
	if (yearFirstDay == 1) {
		week = Math.ceil(days / yearFirstDay);
	} else {
		days -= 7 - yearFirstDay + 1;
		week = Math.ceil(days / 7) + 1;
	}
	return week;
}
```

#### 日期加减

```javascript
/**
 * @param {*} date 日期
 * @param {*} n 天数，正式加，负数减
 */
function addDate(date, n) {
	date.setDate(date.getDate() + n);
	return date;
}
```

#### 月份加减

```javascript
/**
 * @param {*} date 日期
 * @param {*} n 月数，正式加，负数减
 */
function addMonth(date, n) {
	date.setMonth(date.getMonth() + n);
	return date;
}
```

#### 年份加减

```javascript
/**
 * @param {*} date 日期
 * @param {*} n 年数，正式加，负数减
 */
function addYear(date, n) {
	date.setFullYear(date.getFullYear() + n);
	return date;
}
```

#### 日期相差多少天, 日期格式 2020-11-11 格式

```javascript
/**
 * @param {*} sDate1 开始
 * @param {*} sDate2 结束
 */
function dateDiff(sDate1, sDate2) {
	let oDate1, oDate2, iDays;
	oDate1 = Date.parse(sDate1);
	oDate2 = Date.parse(sDate2);
	iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24);
	return iDays;
}
```

##### 时间转换为 小时/分钟

```javascript
/**
 * @param {*} stamp 剩余时间
 * @param {*} fmt 转换后粒度
 */
const stampToMinutes = (stamp, fmt) => {
	let text = '';
	switch (fmt) {
		case 'mm':
			text = parseInt(stamp / 60 / 1000);
			break;
		case 'hh':
			text = parseInt(stamp / 60 / 1000 / 60);
			break;

		default:
			break;
	}

	return Math.abs(text);
};

// const stamp = new Date().getTime() - projectStartTime;
// time = stampToMinutes(stamp, 'mm');
```
