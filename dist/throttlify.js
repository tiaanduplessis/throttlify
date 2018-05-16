module.exports = function (o, t) { if (void 0 === t && (t = 250), typeof o !== 'function') throw new Error('function must be provided for trottle'); var n = !1; return function () { for (var r = [], e = arguments.length; e--;)r[e] = arguments[e]; n || (o.apply(void 0, r), n = !0, setTimeout(function () { n = !1 }, t)) } }
// # sourceMappingURL=throttlify.js.map
