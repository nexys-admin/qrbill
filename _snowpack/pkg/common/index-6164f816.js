import { c as createCommonjsModule, g as getDefaultExportFromCjs, a as commonjsGlobal } from './_commonjsHelpers-8c19dec8.js';

var number = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFloat = exports.calcRatio = exports.isNumeric = exports.sum = exports.formatKprice = exports.formatNumberMini = exports.formatNumber = void 0;
const formatNumber = (v, precision = 2, delimiter = "'") => {
    const pf = v;
    if (isNaN(pf)) {
        return "";
    }
    const re = precision > 0 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g;
    return pf.toFixed(precision).replace(re, "$1'");
};
exports.formatNumber = formatNumber;
const formatNumberMini = (v, precision = 2) => {
    if (isNaN(v)) {
        return "";
    }
    return Number(v).toFixed(precision);
};
exports.formatNumberMini = formatNumberMini;
const formatKprice = (v) => {
    if (isNaN(v)) {
        return "";
    }
    return Math.round(v)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
exports.formatKprice = formatKprice;
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
exports.sum = sum;
const isNumeric = (value) => !isNaN(parseFloat(value)) && isFinite(value);
exports.isNumeric = isNumeric;
const calcRatio = (a, b) => {
    const r = (100 * a) / b;
    let t = "";
    if (isNaN(r)) {
        t = "";
    }
    else {
        t = formatNumber(r);
    }
    if (!isFinite(r)) {
        t = "\u221E";
    }
    return t;
};
exports.calcRatio = calcRatio;
const toFloat = (s) => {
    if (!s || s === null || s === "") {
        return NaN;
    }
    return Number(s.replace(/[',]/g, ""));
};
exports.toFloat = toFloat;
});

var array = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.notEmpty = exports.arrayMove = exports.shuffle = exports.getArrayLastNElements = exports.findArrayIndexOfValueByAttr = exports.findArrayIndexOfValue = exports.isValueInArray = exports.sortArrayByAttribute = exports.compareArrayEntries = exports.compareArrayEntriesWAttr = exports.compareArrayEntriesDepth = exports.flattenArray = exports.createArrayOfLength = exports.isNestedObjectAttrInArray = exports.isObjectAttrInArray = exports.isObjectInArray = exports.sumArrayBoolean = exports.arrayBooleanToInt = void 0;

const arrayBooleanToInt = (arr) => {
    return arr.map((a) => {
        if (a === true) {
            return 1;
        }
        return 0;
    });
};
exports.arrayBooleanToInt = arrayBooleanToInt;
const sumArrayBoolean = (arr) => number.sum(exports.arrayBooleanToInt(arr));
exports.sumArrayBoolean = sumArrayBoolean;
const isObjectInArray = (k, arr) => {
    var a = arr.indexOf(k);
    if (a === -1) {
        return null;
    }
    return a;
};
exports.isObjectInArray = isObjectInArray;
const isObjectAttrInArray = (k, arr, attr) => {
    let idx = null;
    arr.filter(function (d, i) {
        if (d[attr] && d[attr] === k) {
            idx = i;
            return d;
        }
        return d;
    });
    return idx;
};
exports.isObjectAttrInArray = isObjectAttrInArray;
const isNestedObjectAttrInArray = (k, arr, nest, attr = "id") => {
    let idx = null;
    arr.filter(function (d, i) {
        if (d[nest]) {
            if (d[nest][attr] && d[nest][attr] === k) {
                idx = i;
                return d;
            }
        }
        return d;
    });
    return idx;
};
exports.isNestedObjectAttrInArray = isNestedObjectAttrInArray;
const createArrayOfLength = (n, idx = 1) => Array.from({ length: n }, (v, k) => k + idx);
exports.createArrayOfLength = createArrayOfLength;
const flattenArray = (arr) => arr.flatMap((x) => x);
exports.flattenArray = flattenArray;
const compareArrayEntriesDepth = (a, b, attr) => {
    const s = attr.split(".");
    let ca = a[attr];
    let cb = b[attr];
    switch (s.length) {
        case 3:
            ca = a[s[0]][s[1]][s[2]];
            cb = b[s[0]][s[1]][s[2]];
            break;
        case 2:
            ca = a[s[0]][s[1]];
            cb = b[s[0]][s[1]];
            break;
        default:
            ca = a[s[0]];
            cb = b[s[0]];
            break;
    }
    return exports.compareArrayEntries(ca, cb);
};
exports.compareArrayEntriesDepth = compareArrayEntriesDepth;
const compareArrayEntriesWAttr = (a, b, attr) => exports.compareArrayEntries(a[attr], b[attr]);
exports.compareArrayEntriesWAttr = compareArrayEntriesWAttr;
const compareArrayEntries = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};
exports.compareArrayEntries = compareArrayEntries;
const sortArrayByAttribute = (array, attr = "name", asc = true, compareFn = exports.compareArrayEntriesWAttr) => {
    const r = array.sort((a, b) => compareFn(a, b, attr));
    if (asc) {
        return r;
    }
    return r.reverse();
};
exports.sortArrayByAttribute = sortArrayByAttribute;
const isValueInArray = (array, value, attr) => array.find((a) => a[attr] === value);
exports.isValueInArray = isValueInArray;
const findArrayIndexOfValue = (array, value) => {
    let r = null;
    array.map((a, i) => {
        if (a === value) {
            r = i;
        }
        return true;
    });
    return r;
};
exports.findArrayIndexOfValue = findArrayIndexOfValue;
const findArrayIndexOfValueByAttr = (array, value, attr = "id") => {
    let r = null;
    array.map((a, i) => {
        if (a[attr] === value) {
            r = i;
        }
        return true;
    });
    return r;
};
exports.findArrayIndexOfValueByAttr = findArrayIndexOfValueByAttr;
const getArrayLastNElements = (arr, n) => {
    const arraySize = arr.length;
    if (arraySize <= n) {
        return arr;
    }
    return arr.slice(arraySize - n, arraySize);
};
exports.getArrayLastNElements = getArrayLastNElements;
const shuffle = (source) => {
    const arr = [...source];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};
exports.shuffle = shuffle;
const arrayMoveMutate = (array, from, to) => {
    const startIndex = to < 0 ? array.length + to : to;
    if (startIndex >= 0 && startIndex < array.length) {
        const item = array.splice(from, 1)[0];
        array.splice(startIndex, 0, item);
    }
};
const arrayMove = (array, from, to) => {
    array = [...array];
    arrayMoveMutate(array, from, to);
    return array;
};
exports.arrayMove = arrayMove;
function notEmpty(value) {
    return value !== null && value !== undefined;
}
exports.notEmpty = notEmpty;
});

var buffer = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayBufferTo64 = exports.arrayBufferToString = void 0;
const arrayBufferToString = (buf) => {
    const b = new Uint8Array(buf);
    return b.reduce((data, byte) => data + String.fromCharCode(byte), '');
};
exports.arrayBufferToString = arrayBufferToString;
const arrayBufferTo64 = (a) => btoa(exports.arrayBufferToString(a));
exports.arrayBufferTo64 = arrayBufferTo64;
});

var cast = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDate = exports.toInt = exports.toDecimal = void 0;
const toDecimal = (s) => {
    const r = parseFloat(s);
    if (isNaN(r)) {
        return null;
    }
    return r;
};
exports.toDecimal = toDecimal;
const toInt = (s) => {
    try {
        return parseInt(s);
    }
    catch (err) {
        return null;
    }
};
exports.toInt = toInt;
const toDate = (s) => {
    try {
        return new Date(s);
    }
    catch (err) {
        return null;
    }
};
exports.toDate = toDate;
});

var curl_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.curl = void 0;
const getMethod = (m) => {
    if (!m || m === "GET") {
        return "";
    }
    return "-X POST ";
};
const getHeaders = (h, sep = "") => {
    if (!h) {
        return "";
    }
    return Object.keys(h)
        .map((k) => {
        return `-H "${k}: ${h[k]}" `;
    })
        .join(sep);
};
const getFile = (f) => {
    if (!f) {
        return "";
    }
    return `--data @${f} `;
};
const curl = (options, sep = "") => {
    const s = [
        getHeaders(options.headers, sep),
        getMethod(options.method),
        getFile(options.file),
        options.url,
    ].join(sep);
    return `curl ${s}`;
};
exports.curl = curl;
});

var string = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSize = exports.lowerFirst = exports.snakeToCamelCase = exports.camelToSnakeCase = exports.strToSnakeCase = exports.isUUID = exports.isEmail = exports.formatPhone = exports.parseEnvVar = exports.removeWhitespace = exports.capitalize = exports.parseName = exports.contains = exports.readableFileSize = exports.padding = void 0;
const padding = (m, width, z = "0") => {
    const n = String(m);
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};
exports.padding = padding;
const readableFileSize = (size) => {
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return (Number((size / Math.pow(1024, i)).toFixed(2)) +
        " " +
        ["B", "KB", "MB", "GB", "TB"][i]);
};
exports.readableFileSize = readableFileSize;
const contains = (a, b) => {
    return a.toLowerCase().indexOf(b.toLowerCase()) > -1;
};
exports.contains = contains;
const parseName = (name) => {
    return { i: name.substr(1, 1), key: name.substr(4, name.length - 1) };
};
exports.parseName = parseName;
const capitalize = (s) => {
    var h = s.charAt(0).toUpperCase();
    var t = s.slice(1).toLowerCase();
    return h + t;
};
exports.capitalize = capitalize;
const removeWhitespace = (value) => {
    return value.replace(/\s/g, "");
};
exports.removeWhitespace = removeWhitespace;
const parseEnvVar = (value = "") => {
    const end = value.length - 1;
    const isDoubleQuoted = value[0] === '"' && value[end] === '"';
    const isSingleQuoted = value[0] === "'" && value[end] === "'";
    if (isSingleQuoted || isDoubleQuoted) {
        value = value.substring(1, end);
        if (isDoubleQuoted) {
            const RE_NEWLINES = /\\n/g;
            const NEWLINE = "\n";
            value = value.replace(RE_NEWLINES, NEWLINE);
        }
    }
    else {
        value = value.trim();
    }
    return value;
};
exports.parseEnvVar = parseEnvVar;
const formatPhone = (p) => {
    const usPrefix = p.substring(0, 3);
    const intlPrefix = p.substring(0, 2);
    if (usPrefix === "001" && p.length === 13) {
        return ("+1 (" + p.substr(3, 3) + ") " + p.substr(6, 3) + "-" + p.substr(9, 4));
    }
    if (intlPrefix === "00" && p.length === 13) {
        return ("+" +
            p.substr(2, 2) +
            " " +
            p.substr(4, 2) +
            " " +
            p.substr(6, 3) +
            " " +
            p.substr(9, 2) +
            " " +
            p.substr(11, 2));
    }
    if (intlPrefix === "00" && p.length === 14) {
        return "+" + p.substr(2, 2) + " " + p.substr(4, 4) + " " + p.substr(8, 6);
    }
    if (intlPrefix != "00" && p.length === 10) {
        return (p.substr(0, 3) +
            " " +
            p.substr(3, 3) +
            " " +
            p.substr(6, 2) +
            " " +
            p.substr(8, 2));
    }
    if (intlPrefix != "00" && p.length === 11) {
        return (p.substr(0, 4) +
            " " +
            p.substr(4, 3) +
            " " +
            p.substr(5, 2) +
            " " +
            p.substr(9, 2));
    }
    return p;
};
exports.formatPhone = formatPhone;
const isEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9\.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
    const regexResult = email.match(emailRegex);
    if (!regexResult) {
        return false;
    }
    return regexResult.includes(email);
};
exports.isEmail = isEmail;
const isUUID = (str, version = "all") => {
    const patterns = {
        3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    };
    const pattern = patterns[version];
    return pattern && pattern.test(str);
};
exports.isUUID = isUUID;
const strToSnakeCase = (str) => str
    .trim()
    .replace(/[^A-Za-z0-9]+/g, "_")
    .toLowerCase();
exports.strToSnakeCase = strToSnakeCase;
const camelToSnakeCase = (str) => str.replace(/([a-z1-9])\.?(?=[A-Z]+)/g, "$1_").toLowerCase();
exports.camelToSnakeCase = camelToSnakeCase;
const snakeToCamelCase = (str) => str.replace(/(\_\w)/g, (c) => c[1].toUpperCase());
exports.snakeToCamelCase = snakeToCamelCase;
const lowerFirst = (s) => typeof s === "string" ? s.charAt(0).toLowerCase() + s.substr(1) : s;
exports.lowerFirst = lowerFirst;
const formatSize = (s) => {
    const kb = s / 1000;
    if (kb > 999) {
        return Math.round(kb / 100) / 10 + "MB";
    }
    return Math.round(kb) + "KB";
};
exports.formatSize = formatSize;
});

var date = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthNames = exports.dateToISO = exports.countDaysDiffBtnDates = exports.findNumberOfDaysInMonth = exports.addMs = exports.addDays = exports.addMonths = exports.yearsList = exports.addYears = exports.parseDate = exports.formatTime = exports.formatDateFromObject = exports.formatDate = exports.format = void 0;

exports.format = {
    date: "d-m-Y",
    dateTime: "d-m-Y H:i",
};
const formatDate = (timestamp) => {
    if (typeof timestamp === "undefined") {
        return "";
    }
    const date = new Date(timestamp);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const month = monthIndex + 1;
    return string.padding(day, 2) + "." + string.padding(month, 2) + "." + string.padding(year, 4);
};
exports.formatDate = formatDate;
const formatDateFromObject = (obj) => {
    if (typeof obj !== "object") {
        return "";
    }
    const day = obj.getDate();
    const month = obj.getMonth() + 1;
    const year = obj.getFullYear();
    return string.padding(year, 4) + "-" + string.padding(month, 2) + "-" + string.padding(day, 2);
};
exports.formatDateFromObject = formatDateFromObject;
const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    return (string.padding(hours, 2) + ":" + string.padding(minutes, 2) + ":" + string.padding(seconds, 2));
};
exports.formatTime = formatTime;
const parseDate = (date) => {
    return {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
    };
};
exports.parseDate = parseDate;
const addYears = (date, n = 1) => new Date(date.setFullYear(date.getFullYear() + n));
exports.addYears = addYears;
const yearsList = (n = 4, date = new Date()) => {
    const year = date.getFullYear();
    const r = [];
    let i = 0;
    while (i < n) {
        const y = year - n + i + 1;
        r.push(y);
        i += 1;
    }
    return r;
};
exports.yearsList = yearsList;
const addMonths = (date, n = 1) => new Date(date.setMonth(date.getMonth() + n));
exports.addMonths = addMonths;
const addDays = (date, n = 1) => new Date(date.setDate(date.getDate() + n));
exports.addDays = addDays;
const addMs = (date, n = 1) => new Date(date.setMilliseconds(n));
exports.addMs = addMs;
const findNumberOfDaysInMonth = (month, year = new Date().getFullYear()) => {
    let nMonth = month;
    let nYear = year;
    if (month === 12) {
        nMonth = 1;
        nYear = year + 1;
    }
    const datePlusOneDay = new Date(nYear, nMonth - 1, 1);
    return exports.addDays(datePlusOneDay, -1).getDate();
};
exports.findNumberOfDaysInMonth = findNumberOfDaysInMonth;
const countDaysDiffBtnDates = (d1, d2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.ceil(Math.abs((d1.getTime() - d2.getTime()) / oneDay));
};
exports.countDaysDiffBtnDates = countDaysDiffBtnDates;
const dateToISO = (d) => {
    if (d instanceof Date && typeof d.toISOString === "function") {
        return d.toISOString();
    }
    if (typeof d === "string") {
        const s = d.toString();
        return new Date(s).toISOString();
    }
    return undefined;
};
exports.dateToISO = dateToISO;
exports.monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Seq",
    "Oct",
    "Nov",
    "Dec",
];
});

var ds = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanObject = exports.getLinearizedKeys = exports.linearize = exports.nest = exports.deepMerge = exports.isObject = exports.isJoi = exports.compareWithArray = exports.compareObj = exports.sortByProp = exports.lower = exports.removePrefix = exports.hasProp = exports.isEmpty = exports.updateObject = exports.set = exports.get = exports.removeProps = exports.removeProp = exports.keepProps = exports.deserialize = exports.unique = exports.groupBy = exports.transpose = exports.distinct = void 0;

const distinct = (arr) => [...new Set(arr)];
exports.distinct = distinct;
const transpose = (arr, fn = (a) => a) => {
    const r = {};
    Object.keys(arr).map((idx) => {
        return Object.keys(arr[idx]).map((d) => {
            if (!r[d]) {
                r[d] = {};
            }
            r[d][idx] = fn(arr[idx][d]);
            return true;
        });
    });
    return r;
};
exports.transpose = transpose;
const groupBy = (arr, key) => {
    const callback = (acc, v) => {
        (acc[exports.get(key, v)] = acc[exports.get(key, v)] || []).push(v);
        return acc;
    };
    const r = {};
    return arr.reduce(callback, r);
};
exports.groupBy = groupBy;
const unique = (arr, prop) => {
    const temp = arr.map((obj) => {
        return prop ? exports.get(prop, obj) : obj;
    });
    return arr.filter((obj, i) => temp.indexOf(prop ? exports.get(prop, obj) : obj) == i);
};
exports.unique = unique;
const deserialize = (str) => str.split(",").reduce((r, item) => {
    const arr = item.split("=");
    if (arr.length === 2) {
        const [key, value] = arr;
        return { ...r, [key]: value };
    }
    return r;
}, {});
exports.deserialize = deserialize;
const keepProps = (obj, props) => {
    if (!props || !Array.isArray(props))
        return obj;
    return Object.entries(obj).reduce((acc, [key, value]) => props.includes(key) ? { ...acc, [key]: value } : acc, {});
};
exports.keepProps = keepProps;
const removeProp = (obj, prop) => Object.keys(obj).reduce((acc, key) => (key !== prop ? { ...acc, [key]: obj[key] } : acc), {});
exports.removeProp = removeProp;
const removeProps = (obj, props) => {
    while (props.length > 0) {
        obj = exports.removeProp(obj, props.pop());
    }
    return obj;
};
exports.removeProps = removeProps;
const get = (p, o) => {
    return p.split(".").reduce((xs, x) => {
        if (xs && (xs[x] || xs[x] === 0 || xs[x] === false))
            return xs[x];
        else
            return null;
    }, o);
};
exports.get = get;
const set = (name, value, obj) => {
    const keyArray = name.split(".");
    const l = keyArray.length;
    let f = obj;
    keyArray.map((k, i) => {
        if (i === l - 1) {
            f[k] = value;
        }
        else {
            if (!f[k]) {
                f[k] = {};
            }
        }
        f = f[k];
    });
    return obj;
};
exports.set = set;
const updateObject = (form, newObj) => exports.set(newObj.name, newObj.value, form);
exports.updateObject = updateObject;
const isEmpty = (obj) => {
    if (Array.isArray(obj))
        return false;
    if (!obj)
        return true;
    for (let key in obj)
        if (obj.hasOwnProperty(key))
            return false;
    return true;
};
exports.isEmpty = isEmpty;
const hasProp = (o, prop) => !exports.isEmpty(o) && prop && prop in o;
exports.hasProp = hasProp;
const removePrefix = (obj, prefix) => {
    if (obj.data)
        return obj.data;
    return Object.keys(obj).reduce((a, key) => ({ ...a, [key.replace(prefix, "")]: obj[key] }), {});
};
exports.removePrefix = removePrefix;
const lower = (value) => {
    if (typeof value === "number")
        return value;
    if (value && value.length > 0) {
        return value.toLowerCase();
    }
    return "";
};
exports.lower = lower;
const sortByProp = (arr, attr = "name", asc = true) => {
    if (!arr)
        return null;
    const compare = (a, b) => {
        let attrA = exports.lower(string.removeWhitespace(String(exports.get(attr, a))));
        let attrB = exports.lower(string.removeWhitespace(String(exports.get(attr, b))));
        let comparison = 0;
        if (attrA > attrB)
            comparison = 1;
        else
            comparison = -1;
        return asc ? comparison : comparison * -1;
    };
    return arr.sort(compare);
};
exports.sortByProp = sortByProp;
const compareObj = (a, b, attr) => {
    let valueA = exports.get(attr, a);
    let valueB = exports.get(attr, b);
    if (!valueA || !valueB) {
        return 0;
    }
    if (typeof valueA === "string") {
        valueA = valueA.toLowerCase();
    }
    if (typeof valueB === "string") {
        valueB = valueB.toLowerCase();
    }
    return valueA.localeCompare(valueB);
};
exports.compareObj = compareObj;
const compareWithArray = (newRecord, oldRecords, isRecordFound, isDuplicate = (x) => false, isNotNull = (x) => true) => {
    const recordFound = oldRecords.find((x) => isRecordFound(newRecord, x));
    if (recordFound) {
        if (isDuplicate(recordFound, newRecord)) {
            return { edit: true, data: newRecord, id: recordFound.id };
        }
        else {
            return {
                duplicate: true,
                id: recordFound.id,
                message: "the same figure was already found in the system",
                data: newRecord,
            };
        }
    }
    else {
        if (isNotNull(newRecord)) {
            return { add: true, data: newRecord };
        }
        else {
            return {
                warning: true,
                message: "not imported the value is non existent (null)",
                data: newRecord,
            };
        }
    }
};
exports.compareWithArray = compareWithArray;
const isJoi = (schema) => schema.hasOwnProperty("$_root") || schema.hasOwnProperty("$_super");
exports.isJoi = isJoi;
const isObject = (item) => {
    if (!item)
        return false;
    if (exports.isJoi(item))
        return false;
    else
        return typeof item === "object" && !Array.isArray(item) && item !== null;
};
exports.isObject = isObject;
const deepMerge = (target, source) => {
    if (exports.isObject(target) && exports.isObject(source)) {
        Object.entries(source).forEach(([key, sourceValue]) => {
            if (exports.isObject(sourceValue)) {
                if (!target[key]) {
                    Object.assign(target, { [key]: {} });
                }
                const next = target[key];
                exports.deepMerge(next, sourceValue);
            }
            else {
                Object.assign(target, { [key]: sourceValue });
            }
        });
    }
    return target;
};
exports.deepMerge = deepMerge;
const nest = (data = null, props = []) => {
    if (data === undefined || data === null)
        return null;
    if (props.length === 0) {
        if (!Array.isArray(data)) {
            data = Object.entries(data).map(([key, value]) => ({ key, value }));
        }
        if (data.length === 0)
            return {};
        let nested = {};
        data.forEach(({ key, value }) => {
            const props = key.split(".");
            const obj = exports.nest(value, props);
            nested = exports.deepMerge(nested, obj);
        });
        return nested;
    }
    else {
        const value = data;
        const [prop, ...rest] = props;
        if (rest.length === 0) {
            return { [prop]: value };
        }
        const result = exports.nest(value, [...rest]);
        return { [prop]: result };
    }
};
exports.nest = nest;
const linearize = (obj, keys = []) => {
    let list = [];
    Object.entries(obj).map(([key, value]) => {
        const next = [...keys, key];
        if (exports.isObject(value)) {
            const subList = exports.linearize(value, next);
            list = [...list, ...subList];
        }
        else {
            list.push({ key: next.join("."), value });
        }
    });
    return list;
};
exports.linearize = linearize;
const getLinearizedKeys = (o) => {
    return Object.keys(o)
        .map((key) => {
        let value = o[key];
        if (value != null && typeof value == "object") {
            const nestedKeys = exports.getLinearizedKeys(value);
            return nestedKeys.map((item) => `${key}.${item}`);
        }
        else
            return key;
    })
        .flat();
};
exports.getLinearizedKeys = getLinearizedKeys;
const cleanObject = (obj, removeNull = true) => {
    for (const propName in obj) {
        if (removeNull && obj[propName] === null) {
            delete obj[propName];
        }
        else if (obj[propName] === undefined) {
            delete obj[propName];
        }
        else {
            if (typeof obj[propName] === "object" && obj[propName] !== null) {
                exports.cleanObject(obj[propName], removeNull);
            }
        }
    }
};
exports.cleanObject = cleanObject;
});

var random = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateString = void 0;
const generateString = (len = 21) => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < len; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};
exports.generateString = generateString;
exports.default = { generateString: exports.generateString };
});

var url = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryParams = exports.fixedEncodeURIComponent = exports.getQueryStringParams = exports.resolve = exports.replaceParams = exports.deserialize = exports.paramsToString = exports.getGoogleMapsAddressLink = void 0;
const getGoogleMapsAddressLink = (p) => {
    const urlAddress = encodeURIComponent(p.street + " " + p.zip + " " + p.city + " " + p.country.name);
    const url = "https://www.google.com/maps/?q=" + urlAddress;
    return url;
};
exports.getGoogleMapsAddressLink = getGoogleMapsAddressLink;
const paramsToString = (params) => Object.keys(params)
    .map((key) => key + "=" + encodeURIComponent(params[key]))
    .join("&");
exports.paramsToString = paramsToString;
const deserialize = (str) => str.split(",").reduce((r, item) => {
    const arr = item.split("=");
    if (arr.length === 2) {
        const [key, value] = arr;
        return { ...r, [key]: value };
    }
    else
        return r;
}, {});
exports.deserialize = deserialize;
const replaceParams = (uri, params, curly = false) => {
    if (!params || !(typeof params === "object")) {
        return uri;
    }
    Object.entries(params).map(([key, value]) => {
        if (curly) {
            const regex = new RegExp(`\\$\\{${key}\\}`, "g");
            uri = uri.replace(regex, value);
        }
        else
            uri = uri.replace(`:${key}`, value);
    });
    return uri;
};
exports.replaceParams = replaceParams;
const resolve = (hostIn, pathIn) => {
    const re = /^(.*)\/[^\/]*$/;
    const hostMatch = hostIn.match(re);
    let host = hostMatch && hostMatch[1];
    if ((host === "http:/" || host === "https:/") && !hostIn.endsWith("/")) {
        host = hostIn;
    }
    const reSlash = /^\/{0,1}(.*)$/;
    const pathMatch = pathIn.match(reSlash);
    const path = pathMatch && pathMatch[1];
    if (host && path) {
        return `${host}/${path}`;
    }
    else
        return null;
};
exports.resolve = resolve;
const getQueryStringParams = (query) => {
    if (!query) {
        return {};
    }
    return (/^[?#]/.test(query) ? query.slice(1) : query)
        .split("&")
        .reduce((params, param) => {
        const arrSplit = param.split("=");
        const [key, value] = arrSplit;
        params[key] = value ? decodeURIComponent(value.replace(/\+/g, " ")) : "";
        return params;
    }, {});
};
exports.getQueryStringParams = getQueryStringParams;
const fixedEncodeURIComponent = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (c) => {
    return "%" + c.charCodeAt(0).toString(16);
});
exports.fixedEncodeURIComponent = fixedEncodeURIComponent;
const getQueryParams = (s) => {
    if (!s || typeof s !== "string" || s.length < 2) {
        return new Map();
    }
    const a = s
        .substr(1)
        .split("&")
        .map((x) => {
        const a = x.split("=");
        return [a[0], a[1]];
    });
    return new Map(a);
};
exports.getQueryParams = getQueryParams;
});

var regex = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatches = exports.isValid = void 0;
const isValid = (regex, str) => {
    const re = new RegExp(regex, "g");
    const t = str.match(re);
    return Array.isArray(t);
};
exports.isValid = isValid;
const getMatches = (regex, str, { flags = "g", depth = 0 } = {}) => {
    const re = new RegExp(regex, flags);
    let match = null;
    const matches = [];
    do {
        match = re.exec(str);
        if (match) {
            matches.push(match[depth]);
        }
    } while (match != null);
    return matches;
};
exports.getMatches = getMatches;
});

var color = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomColor = exports.toRGBA = void 0;
const toRGBA = (hex, alpha = 1) => {
    return `rgba(${parseInt(hex.substring(1, 3), 16)},${parseInt(hex.substring(3, 5), 16)},${parseInt(hex.substring(5, 7), 16)},${alpha})`;
};
exports.toRGBA = toRGBA;
const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
exports.getRandomColor = getRandomColor;
});

var promise = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
const delay = (ms = 500) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
exports.delay = delay;
});

var typeguard = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = exports.verifyObject = exports.checkField = void 0;
const checkField = (e, attribute, isOptional = false, type = "string") => {
    const v = e[attribute];
    const isNotDefined = v === null || v === undefined;
    if (isOptional && isNotDefined) {
        return true;
    }
    if (isNotDefined) {
        return false;
    }
    if (typeof v === type) {
        return true;
    }
    return false;
};
exports.checkField = checkField;
const verifyObject = (e, structure, optional = false) => {
    if (!e && optional) {
        return true;
    }
    return structure
        .map((s) => {
        if (Array.isArray(s.type)) {
            return exports.verifyObject(e[s.name], s.type, s.optional);
        }
        else {
            return exports.checkField(e, s.name, s.optional, s.type);
        }
    })
        .reduce((a, b) => a && b);
};
exports.verifyObject = verifyObject;
const isObject = (objectToType, structure) => exports.verifyObject(objectToType, structure);
exports.isObject = isObject;
});

var types = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var dist = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.typeguard = exports.color = exports.regex = exports.url = exports.string = exports.random = exports.promise = exports.number = exports.ds = exports.date = exports.curl = exports.cast = exports.buffer = exports.array = void 0;
const array$1 = __importStar(array);
exports.array = array$1;
const buffer$1 = __importStar(buffer);
exports.buffer = buffer$1;
const cast$1 = __importStar(cast);
exports.cast = cast$1;
const curl = __importStar(curl_1);
exports.curl = curl;
const date$1 = __importStar(date);
exports.date = date$1;
const ds$1 = __importStar(ds);
exports.ds = ds$1;
const number$1 = __importStar(number);
exports.number = number$1;
const random$1 = __importStar(random);
exports.random = random$1;
const string$1 = __importStar(string);
exports.string = string$1;
const url$1 = __importStar(url);
exports.url = url$1;
const regex$1 = __importStar(regex);
exports.regex = regex$1;
const color$1 = __importStar(color);
exports.color = color$1;
const promise$1 = __importStar(promise);
exports.promise = promise$1;
const typeguard$1 = __importStar(typeguard);
exports.typeguard = typeguard$1;
const types$1 = __importStar(types);
exports.types = types$1;
exports.default = {
    array: array$1,
    buffer: buffer$1,
    cast: cast$1,
    curl,
    date: date$1,
    ds: ds$1,
    number: number$1,
    promise: promise$1,
    random: random$1,
    string: string$1,
    url: url$1,
    regex: regex$1,
    types: types$1,
};
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(dist);

export { __pika_web_default_export_for_treeshaking__ as _, dist as d };
