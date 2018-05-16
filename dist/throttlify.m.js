export default function (t, o) { if (void 0 === o && (o = 250), typeof t !== 'function') throw new Error('function must be provided for trottle'); var n = !1; return function () { for (var r = [], e = arguments.length; e--;)r[e] = arguments[e]; n || (t.apply(void 0, r), n = !0, setTimeout(function () { n = !1 }, o)) } };
// # sourceMappingURL=throttlify.m.js.map
