# js 快捷实现

### 会计计数法

实例: ![task](./image/AccountingMethod.png)

```javascript
/*
 * isHasUnit 是否拥有单位
 * isHasDigits 若要单位, 小数点几位?
 */
const toThousandsFormates = (num = '', isHasUnit = false, isHasDigits = 0) => {
	// 判断传进来的数字是否为非空数字
	if (!isNaN(parseFloat(num))) {
		let defaultNum = Number(Number(num));
		if (typeof num == 'string') return num;
		let unit = '';
		if (isHasUnit) {
			let newDefaultNum = Math.ceil(defaultNum);
			if (newDefaultNum.toString().length > 9) {
				defaultNum = Number(Number(defaultNum / 1000000).toFixed(isHasDigits));
				unit = 'M';
			} else if (newDefaultNum.toString().length > 6) {
				defaultNum = Number(Number(defaultNum / 1000).toFixed(isHasDigits));
				unit = 'K';
			}
		}
		if (defaultNum || +defaultNum) {
			let newNum = defaultNum;
			newNum = number_format(newNum);
			if (!newNum) return 0;
			if (newNum && (newNum == '+0.00' || newNum == '-0.00')) return 0;
			if (newNum && (newNum == '+0.0' || newNum == '-0.0')) return 0;
			if (newNum || +newNum) return `${newNum}${newNum && unit}`;
			return 0;
		} else {
			return 0;
		}
	} else {
		return 0;
	}
};
function number_format(num) {
	return num && num.toString().replace(/(^|\s)\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','));
}
```

输出： `toThousandsFormates(2001000) // 2,001,000`

::: tip 注意：

- 若需要严格把控小数点后数字位数, 请自行修改
- 如要单位, 目前规则是 超过 6 位变为 K 超过 9 为变 M
- 如果对 filter 函数感兴趣, 可以 使用至 filter 场景

:::

### JS 获取时间

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

- 若要适配 ipad, 请配合 js-时间 进行控制

:::

### 输出当前用户环境

```javascript
function judgeClient() {
	let UA = navigator.userAgent,
		isAndroid = /android|adr|linux/gi.test(UA),
		isIOS = /iphone|mac|ipod|ipad/gi.test(UA) && !isAndroid;
	if (isAndroid) {
		return 'android';
	} else if (isIOS) {
		return 'ios';
	} else {
		return 'pc';
	}
}
```

输出: `judgeClient() // ios`

### 判断对象是否为空

```javascript
/**
 * @param {} obj
 */
function isObj(obj) {
	if (!obj) return false;
	const keys = Object.keys(obj);
	if (keys.length) return true;
	return false;
}
```

输出: `isObj(1) // false --- isObj({a:1}) // true `

### 手机号码只验证纯数字

```javascript
/**
 * @param number
 */
function isMobile(mobile) {
	//手机号码只验证纯数字 11位
	if (/^\d{11}$/.test(mobile)) return true;
	return false;
}
```

输出: `isMobile(1) // false --- isMobile(18839126297) // true `

### 直接深拷贝

```javascript
/**
 * @param *
 */
function copyItem(item) {
	if (!item) return item;
	return JSON.parse(JSON.stringify(item));
}
// 递归拷贝
function deepClone(obj) {
	var result = Array.isArray(obj) ? [] : {};
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (typeof obj[key] === 'object') {
				result[key] = deepClone(obj[key]); //递归复制
			} else {
				result[key] = obj[key];
			}
		}
	}
	return result;
}
```

输出: `copyItem({a:1}) // {a:1} --- copyItem([{a:1}]) // [{a:1}] `

### 按对象属性进行升序排序

```javascript
/**
 * @param {对象属性} attr
 */
function compareObj(attr) {
	return function (m, n) {
		var a = m[attr];
		var b = n[attr];
		return a - b; //升序
	};
}
```

### 防抖

```javascript
/**
 * @param
 */
let debounceTtimeout = null;
function debounce(fn, wait) {
	if (debounceTtimeout !== null) clearTimeout(debounceTtimeout);
	debounceTtimeout = setTimeout(fn, wait);
}
```

输出: `debounce(compareObj(),300)`

### 数组对象求和

```javascript
/**
 * @param
 * let aa = [{a:2},{a:1}]
 */
function sumArrayByField(arr = [], field) {
	let sum = arr.reduce((acc, curr) => {
		return (acc += curr[field] * 1);
	}, 0);
	return sum;
}
// == 写法2
let aa = [{ a: 2 }, { a: 1 }];
let bb = aa.map(x => x.a);
eval(bb.join('+')); // 3
```

输出: `sumArrayByField([{a:2},{a:1}]},'a') // 3`

