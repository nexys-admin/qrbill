import { c as createCommonjsModule, a as commonjsGlobal, g as getDefaultExportFromCjs } from '../common/_commonjsHelpers-8c19dec8.js';
import { d as dist$1 } from '../common/index-6164f816.js';

var utils = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkId = exports.checkInteger = exports.regexCheck = exports.passwordCheck = exports.checkUuid = exports.emailCheck = void 0;
var utils_1 = __importDefault(dist$1);
exports.emailCheck = function (email) {
    var tEmail = email.trim();
    if (tEmail !== email) {
        return ["email must not contain any whitespace (before or after)"];
    }
    if (!utils_1.default.string.isEmail(email)) {
        return ["email invalid"];
    }
};
exports.checkUuid = function (uuid) {
    if (!utils_1.default.string.isUUID(uuid)) {
        return ["uuid invalid"];
    }
};
exports.passwordCheck = function (password) {
    var r = [];
    if (password.length < 9) {
        r.push("password length smaller than 8");
    }
    return r.length > 0 ? r : undefined;
};
exports.regexCheck = function (s, regex) {
    var r = s.match(regex);
    if (r === null) {
        return ["regex " + regex + " not satisfied"];
    }
    return;
};
exports.checkInteger = function (s, allowNegatives) {
    if (allowNegatives === void 0) { allowNegatives = false; }
    if (!Number.isSafeInteger(s)) {
        return ["must be an integer"];
    }
    if (s < 0 && !allowNegatives) {
        return ["negative numbers are not accepted"];
    }
    return undefined;
};
exports.checkId = function (s) {
    var r = exports.checkInteger(s);
    if (r && r[0][0] === "n") {
        return ["id must be greater than 0"];
    }
    return r;
};
});

var main = createCommonjsModule(function (module, exports) {
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isId = exports.isUuid = exports.isShape = exports.isShapeMiddleware = exports.displayErrors = exports.checkObject = exports.isShapeType = exports.checkField = void 0;
var Utils = __importStar(utils);
exports.checkField = function (value, optional, extraCheck, fieldType, errorLabel, allowEmptyString) {
    if (optional === void 0) { optional = false; }
    if (fieldType === void 0) { fieldType = "string"; }
    if (errorLabel === void 0) { errorLabel = "This field is required"; }
    if (allowEmptyString === void 0) { allowEmptyString = false; }
    if (value === null ||
        value === undefined ||
        (!allowEmptyString && typeof value === "string" && value === "")) {
        if (optional === true) {
            return undefined;
        }
        return [errorLabel];
    }
    if (typeof value !== fieldType) {
        return ["expected type " + fieldType];
    }
    if (extraCheck) {
        var e = extraCheck(value);
        if (e) {
            return e;
        }
    }
    return undefined;
};
var shapeCoreAttributes = [
    "optional",
    "extraCheck",
    "type",
    "errorLabel",
    "defaultValue",
    "$object",
    "$array",
    "allowEmptyString",
];
exports.isShapeType = function (s) {
    return Object.keys(s)
        .map(function (k) { return !shapeCoreAttributes.includes(k); })
        .reduce(function (x, y) { return x || y; }, false);
};
exports.checkObject = function (input, shape, errorsIfExtraAttribute) {
    if (errorsIfExtraAttribute === void 0) { errorsIfExtraAttribute = true; }
    if (!input) {
        throw Error("input needs to be defined");
    }
    var err = {};
    var oShape = Object.entries(shape);
    var shapeKeys = oShape.map(function (_a) {
        var k = _a[0];
        return k;
    });
    if (!Array.isArray(input)) {
        Object.keys(input).map(function (inputKey) {
            if (!shapeKeys.includes(inputKey)) {
                delete input[inputKey];
                if (errorsIfExtraAttribute === true) {
                    err[inputKey] = ["this key cannot be included"];
                }
            }
        });
    }
    oShape.map(function (_a) {
        var shapeKey = _a[0], shapeValue = _a[1];
        var inputUnit = input[shapeKey];
        if (exports.isShapeType(shapeValue)) {
            var r = exports.checkObject(inputUnit || {}, shapeValue, errorsIfExtraAttribute);
            if (Object.keys(r).length > 0) {
                err[shapeKey] = r;
            }
        }
        else {
            var obj = shapeValue.$object, arr = shapeValue.$array;
            var fieldType = shapeValue.type || (obj || arr ? "object" : undefined);
            var fieldError = exports.checkField(inputUnit, shapeValue.optional, shapeValue.extraCheck, fieldType, shapeValue.errorLabel);
            if (fieldError) {
                err[shapeKey] = fieldError;
            }
            if (inputUnit === undefined && shapeValue.defaultValue) {
                input[shapeKey] = shapeValue.defaultValue;
            }
            if (obj) {
                var shape_1 = obj;
                if (inputUnit) {
                    var r = exports.checkObject(inputUnit || {}, shape_1, errorsIfExtraAttribute);
                    if (Object.keys(r).length > 0) {
                        err[shapeKey] = r;
                    }
                }
            }
            else if (arr && inputUnit) {
                var shape_2 = arr;
                if (!Array.isArray(inputUnit)) {
                    err[shapeKey] = ["array expected"];
                }
                else {
                    inputUnit.forEach(function (inputUnit, arrayIdx) {
                        if (!exports.isShapeType(shape_2)) {
                            var r = exports.checkField(inputUnit, shape_2.optional, shape_2.extraCheck, shape_2.type, shape_2.errorLabel);
                            if (r) {
                                if (!err[shapeKey]) {
                                    err[shapeKey] = {};
                                }
                                err[shapeKey][arrayIdx] = r;
                            }
                        }
                        else {
                            var r = exports.checkObject(inputUnit || {}, shape_2, errorsIfExtraAttribute);
                            if (Object.keys(r).length > 0) {
                                if (!err[shapeKey]) {
                                    err[shapeKey] = {};
                                }
                                err[shapeKey][arrayIdx] = r;
                            }
                        }
                    });
                }
            }
            else {
                var fieldError_1 = exports.checkField(inputUnit, shapeValue.optional, shapeValue.extraCheck, shapeValue.type, shapeValue.errorLabel, shapeValue.allowEmptyString);
                if (fieldError_1) {
                    err[shapeKey] = fieldError_1;
                }
            }
            if (inputUnit === undefined && shapeValue.defaultValue) {
                input[shapeKey] = shapeValue.defaultValue;
            }
        }
    });
    return err;
};
exports.displayErrors = function (err, ctx, statusCode) {
    if (statusCode === void 0) { statusCode = 400; }
    ctx.body = err;
    ctx.status = statusCode;
    return;
};
exports.isShapeMiddleware = function (shape, errorsIfExtraAttribute) {
    if (errorsIfExtraAttribute === void 0) { errorsIfExtraAttribute = true; }
    return function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
        var body, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = ctx.request.body;
                    err = exports.checkObject(body, shape, errorsIfExtraAttribute);
                    if (Object.keys(err).length > 0) {
                        exports.displayErrors(err, ctx);
                        return [2];
                    }
                    return [4, next()];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    }); };
};
exports.isShape = function (shape, body, ctx) {
    var err = exports.checkObject(body, shape);
    if (Object.keys(err).length > 0) {
        exports.displayErrors(err, ctx);
        return false;
    }
    return true;
};
exports.isUuid = exports.isShapeMiddleware({
    uuid: { extraCheck: Utils.checkUuid },
});
exports.isId = exports.isShapeMiddleware({
    id: { type: "number", extraCheck: Utils.checkId },
});
});

var type = createCommonjsModule(function (module, exports) {
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = exports.Type = exports.Main = void 0;
var Main = __importStar(main);
exports.Main = Main;
var Type = __importStar(type);
exports.Type = Type;
var Utils = __importStar(utils);
exports.Utils = Utils;
exports.default = Main;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(dist);

var Main = dist.Main;
var Type = dist.Type;
var Utils = dist.Utils;
export default __pika_web_default_export_for_treeshaking__;
export { Main, Type, Utils, dist as __moduleExports };
