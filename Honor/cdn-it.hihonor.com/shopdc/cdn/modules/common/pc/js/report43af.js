/**
 * pc端上报
 * Ben@2017.07.13 18:28
 */

window.ce = {};
ce._cache = {};
ce.isIE6 = false;
ce.isIE7 = false;

ce.util = {
    isFunction: function(a) {
        return Object.prototype.toString.call(a) === "[object Function]"
    },
    addScriptTag: function(src, fn) {
        if (!src) {
            return
        }
        with(document) {
            0[(getElementsByTagName("head")[0] || body)
                .appendChild(createElement("script")).src = src]
        }
        if (fn && ce.util.isFunction(fn)) {
            setTimeout(fn, 100)
        }
    },
    cookie: {
        get: function(m) {
            var g = null;
            if (document.cookie && document.cookie != "") {
                var j = document.cookie.split(";");
                for (var k = 0; k < j.length; k++) {
                    var l = (j[k] || "").replace(
                        /^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");
                    if (l.substring(0, m.length + 1) == (m + "=")) {
                        var h = function(c) {
                            c = c.replace(/\+/g, " ");
                            var a = '()<>@,;:\\"/[]?={}';
                            for (var b = 0; b < a.length; b++) {
                                if (c.indexOf(a.charAt(b)) != -1) {
                                    if (c.startWith('"')) {
                                        c = c.substring(1)
                                    }
                                    if (c.endWith('"')) {
                                        c = c.substring(0, c.length - 1)
                                    }
                                    break
                                }
                            }
                            return decodeURIComponent(c)
                        };
                        g = h(l.substring(m.length + 1));
                        break
                    }
                }
            }
            return g
        },
        set: function(e, g, c) {
            c = c || {};
            if (g === null) {
                g = "";
                c.expires = -1
            }
            var a = "";
            if (c.expires && (typeof c.expires == "number" || c.expires.toUTCString)) {
                var b;
                if (typeof c.expires == "number") {
                    b = new Date();
                    b.setTime(b.getTime() + (c.expires * 24 * 60 * 60 * 1000))
                } else {
                    b = c.expires
                }
                a = "; expires=" + b.toUTCString()
            }
            var r = "; path=" + (c.path || "/");
            var s = ".vmall.com";
            var f = "; domain=" + s;
            var h = c.secure ? "; secure" : "";
            document.cookie = [e, "=", encodeURIComponent(g), a, r, f, h]
                .join("")
        }
    },
    countdown: function(q, o) {
        var p = ce._cache[q + o.startTime],
            m = o.now - new Date().getTime(),
            n = 0,
            k = function() {
                n = Math.round((o.startTime - new Date().getTime() - m) / 1000);
                n = n <= 0 ? 0 : n
            },
            r = function() {
                k();
                if (n <= 0) {
                    n = 0
                }
                return (n <= 0) ? false : true
            };
        k();
        clearInterval(p);
        if (!r()) {
            if (o.callback) {
                o.callback(o)
            }
            return
        }
        p = setInterval(function() {
            if (!r()) {
                if (o.callback) {
                    o.callback(o)
                }
                clearInterval(p)
            }
        }, 1000);
        ce._cache[q + o.startTime] = p
    },
    hrefSetStart: function() {
        var _el = document.getElementsByTagName("a");　　　　　
        for (var i = 0; i < _el.length; i++) {
            var startHref = _el[i].getAttribute("startHref");　　　　　
            if (startHref != undefined && startHref != null && startHref != '') {
                _el[i].href = startHref;
            }
        }
    }
};

ce.url = {
    // 获取主机名
    getHost: function() {
        return document.location.hostname;
    },
    // 获取当前相对路径
    getPath: function() {
        return document.location.pathname;
    },
    // 获取查询字串
    getQueryStr: function(name) {
        var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
        if (result == null || result.length < 1) {
            return "";
        }
        return result[1];
    }
};

ce.time = function(b, a) {
    ce.util.countdown(
        "countdown", {
            now: b.getTime(),
            startTime: a.getTime(),
            callback: function(c) {
                ce.util.hrefSetStart();
                delete ce._cache["countdown" + a.getTime()]
            }
        })
};

/**
 * 读取页面配置的跳转时间
 * 定时切换商品链接
 */
if (typeof prdLinkJumpTime != 'undefined' && prdLinkJumpTime) {
    var _now = new Date();
    var startTime = new Date(prdLinkJumpTime);
    ce.time(_now, startTime);
}

window._paq = [];
ce.analytics = function(c) {
    //DMP
    var j = "../../nebula-collector.huawei.com/api/2.0/vmallcn-min.js";
    ce.util.addScriptTag(j);
    //baidu
    if (c.bd) {
        var key = '';
        switch (ce.url.getHost()) {
            case 'www.vmall.com':
                key = 'a08b68724dd89d23017170634e85acd8';
                break;
            case 'sale.vmall.com':
                key = '82d2186024cf7459f80be3ff94bea77f';
                break;
            case 'mm.vmall.com':
                key = 'f66330cfa6f95a043c2ecd5324e0477a';
                break;
            default:
                key = 'a08b68724dd89d23017170634e85acd8';
                break;
        }
        var a = "../../hm.baidu.com/hd41d.js?" + key;
        ce.util.addScriptTag(a)
    }
    //BI
    if (c.bi) {
        _paq.push(["setTrackerUrl", "https://datacollect.vmall.com:18443/webv1"]);
        _paq.push(["setSiteId", (ce.url.getHost() || "sale.vmall.com")]);
        _paq.push(["setCustomVariable", 1, "cid",
            (ce.util.cookie.get("cps_id") || ""), "page"
        ]);
        _paq.push(["setCustomVariable", 2, "direct",
            (ce.util.cookie.get("cps_direct") || ""), "page"
        ]);
        _paq.push(["setCustomVariable", 4, "wi",
            (ce.util.cookie.get("cps_wi") || ""), "page"
        ]);
        _paq.push(["trackPageView"]);
        var b = "../../res.vmallres.com/bi/hianalytics.js";
        ce.util.addScriptTag(b);
    }
};

(function() {
    // 开发环境不上报
    if (window.location.host == 'shopdcportal.vmall.com:28081') {
        return false;
    }

    try {
        document.write("<!--[if lte IE 6]><script>ce.isIE6=true;<\/script><![endif]--><!--[if IE 7]><script>ce.isIE7=true;<\/script><![endif]-->")
    } catch (d) {}

    var query = window.location.hash,
        pars = {};
    if (query) {
        var p;
        query = query.substring(1).split("&");
        for (var i = 0; i < query.length; i++) {
            p = query[i].split("=");
            if (p.length == 2) pars[p[0]] = p[1];
        }
    }
    var cid = pars["cid"];
    if (cid) {
        ce.util.cookie.set("cps_id", cid, {
            expires: 1,
            domain: ".vmall.com"
        });

    }

    var wi = pars["wi"];
    if (wi) {

        ce.util.cookie.set("cps_wi", wi, {
            expires: 1,
            domain: ".vmall.com"
        });

    }
    // 执行上报
    ce.analytics({ "bd": true, "bi": true });

})();
