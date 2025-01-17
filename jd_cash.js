"use strict";
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
var cookie = '', res = '', data, UserName;
var message = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _loop_1, _i, _a, _b, index, value;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _d.sent();
                _loop_1 = function (index, value) {
                    var type, otherTaskNum, taskNum, i, _e, _f, t;
                    return __generator(this, function (_g) {
                        switch (_g.label) {
                            case 0:
                                cookie = value;
                                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                                message += "\u3010\u8D26\u53F7".concat(index + 1, "\u3011  ").concat(UserName, "\n");
                                return [4 /*yield*/, api('cash_homePage', {})];
                            case 1:
                                res = _g.sent();
                                (0, TS_USER_AGENTS_1.o2s)(res);
                                if (!(res.data.result.signedStatus !== 1)) return [3 /*break*/, 4];
                                console.log('今日未签到');
                                return [4 /*yield*/, api('cash_sign', { "remind": 0, "inviteCode": "", "type": 0, "breakReward": 0 })];
                            case 2:
                                data = _g.sent();
                                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                            case 3:
                                _g.sent();
                                (0, TS_USER_AGENTS_1.o2s)(data, '签到成功');
                                _g.label = 4;
                            case 4:
                                type = [2, 4, 31, 16, 3, 5, 17, 21];
                                otherTaskNum = res.data.result.taskInfos.filter(function (item) { return !type.includes(item.type); }).length;
                                taskNum = res.data.result.taskInfos.filter(function (item) { return type.includes(item.type); }).length;
                                console.log(otherTaskNum);
                                console.log(taskNum);
                                i = 0;
                                _g.label = 5;
                            case 5:
                                if (!(i < 10)) return [3 /*break*/, 14];
                                return [4 /*yield*/, api('cash_homePage', {})];
                            case 6:
                                res = _g.sent();
                                if (res.data.result.taskInfos.filter(function (item) { return type.includes(item.type) && item.doTimes === item.times; }).length === taskNum) {
                                    console.log('任务全部完成');
                                    return [3 /*break*/, 14];
                                }
                                _e = 0, _f = res.data.result.taskInfos;
                                _g.label = 7;
                            case 7:
                                if (!(_e < _f.length)) return [3 /*break*/, 11];
                                t = _f[_e];
                                if (!(t.doTimes < t.times && t.type !== 7)) return [3 /*break*/, 10];
                                console.log(t.name);
                                return [4 /*yield*/, api('cash_doTask', { "type": t.type, "taskInfo": t.desc })];
                            case 8:
                                data = _g.sent();
                                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.duration * 1000 || 1000)];
                            case 9:
                                _g.sent();
                                if (data.data.bizCode === 0) {
                                    console.log('任务完成', (_c = data.data.result.totalMoney) !== null && _c !== void 0 ? _c : '');
                                    return [3 /*break*/, 11];
                                }
                                else {
                                    (0, TS_USER_AGENTS_1.o2s)(data, '任务失败');
                                    return [3 /*break*/, 11];
                                }
                                _g.label = 10;
                            case 10:
                                _e++;
                                return [3 /*break*/, 7];
                            case 11: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                            case 12:
                                _g.sent();
                                _g.label = 13;
                            case 13:
                                i++;
                                return [3 /*break*/, 5];
                            case 14: return [2 /*return*/];
                        }
                    });
                };
                _i = 0, _a = cookiesArr.entries();
                _d.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 5];
                _b = _a[_i], index = _b[0], value = _b[1];
                return [5 /*yield**/, _loop_1(index, value)];
            case 3:
                _d.sent();
                _d.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var sign;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.post)('https://api.jds.codes/jd/sign', { fn: fn, body: body })];
                case 1:
                    sign = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.post)("https://api.m.jd.com/client.action?functionId=".concat(fn), sign.data.sign, {
                            'Host': 'api.m.jd.com',
                            'Cookie': cookie,
                            'content-type': 'application/x-www-form-urlencoded',
                            'user-agent': TS_USER_AGENTS_1["default"],
                            'referer': ''
                        })];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
