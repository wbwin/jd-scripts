"use strict";
/**
 * 京东-汽车-签到
 * cron: 15 1 * * *
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, e_1;
    var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _o.sent();
                _i = 0, _a = cookiesArr.entries();
                _o.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 8];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                _o.label = 3;
            case 3:
                _o.trys.push([3, 6, , 7]);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.post)('https://api.m.jd.com/client.action', 'functionId=signBeanIndex&appid=ld', {
                        "Content-Type": "application/x-www-form-urlencoded",
                        'Host': 'api.m.jd.com',
                        'Origin': 'https://api.m.jd.com',
                        'Referer': 'https://api.m.jd.com',
                        'Cookie': cookie
                    })];
            case 4:
                res = _o.sent();
                console.log(((_d = (_c = res.data) === null || _c === void 0 ? void 0 : _c.dailyAward) === null || _d === void 0 ? void 0 : _d.title) || ((_f = (_e = res.data) === null || _e === void 0 ? void 0 : _e.continuityAward) === null || _f === void 0 ? void 0 : _f.title));
                console.log('获得京豆', ((_j = (_h = (_g = res.data) === null || _g === void 0 ? void 0 : _g.dailyAward) === null || _h === void 0 ? void 0 : _h.beanAward) === null || _j === void 0 ? void 0 : _j.beanCount) * 1 || ((_m = (_l = (_k = res.data) === null || _k === void 0 ? void 0 : _k.continuityAward) === null || _l === void 0 ? void 0 : _l.beanAward) === null || _m === void 0 ? void 0 : _m.beanCount) * 1);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                    // res = await cgame()
                    // console.log('获得京豆', res.data.beanNum)
                ];
            case 5:
                _o.sent();
                return [3 /*break*/, 7];
            case 6:
                e_1 = _o.sent();
                console.log(e_1);
                return [3 /*break*/, 7];
            case 7:
                _i++;
                return [3 /*break*/, 2];
            case 8: return [2 /*return*/];
        }
    });
}); })();
/*async function cgame() {
  let {data} = await axios.post('https://cgame-stadium.jd.com/api/v1/sign', '', {
    headers: {
      'Connection': 'keep-alive',
      'Accept-Encoding': 'gzip, deflate, br',
      'Content-Type': 'application/json',
      'Origin': 'https://pro.m.jd.com',
      'ActivityId': '7c51826be9f241c1ad9733df34d242c5',
      'Host': 'cgame-stadium.jd.com',
      'Referer': 'https://pro.m.jd.com/mall/active/dj6us2JJRLMMBb4iDaSK4wxvBMt/index.html',
      'Accept-Language': 'zh-cn',
      'Accept': 'application/json',
      'Cookie': cookie
    }
  })
  return data
}*/ 
