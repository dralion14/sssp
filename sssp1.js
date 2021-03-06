(function() {
    function detect(ua) {
        function getFirstMatch(regex) {
            var match = ua.match(regex);
            return match && match.length > 1 && match[1] || ""
        }
        var result, iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(), likeAndroid = /like android/i.test(ua), android = !likeAndroid && /android/i.test(ua), versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i), tablet = /tablet/i.test(ua), mobile = !tablet && /[^-]mobi/i.test(ua);
        /opera|opr/i.test(ua) ? result = {
            name: "Opera",
            opera: t,
            version: versionIdentifier || getFirstMatch(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
        } : /windows phone/i.test(ua) ? result = {
            name: "Windows Phone",
            windowsphone: t,
            msie: t,
            version: getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
        } : /msie|trident/i.test(ua) ? result = {
            name: "Internet Explorer",
            msie: t,
            version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
        } : /chrome|crios|crmo/i.test(ua) ? result = {
            name: "Chrome",
            chrome: t,
            version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        } : iosdevice ? (result = {
            name: "iphone" == iosdevice ? "iPhone" : "ipad" == iosdevice ? "iPad" : "iPod"
        },
        versionIdentifier && (result.version = versionIdentifier)) : /sailfish/i.test(ua) ? result = {
            name: "Sailfish",
            sailfish: t,
            version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
        } : /seamonkey\//i.test(ua) ? result = {
            name: "SeaMonkey",
            seamonkey: t,
            version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
        } : /firefox|iceweasel/i.test(ua) ? (result = {
            name: "Firefox",
            firefox: t,
            version: getFirstMatch(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
        },
        /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua) && (result.firefoxos = t)) : /silk/i.test(ua) ? result = {
            name: "Amazon Silk",
            silk: t,
            version: getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
        } : android ? result = {
            name: "Android",
            version: versionIdentifier
        } : /phantom/i.test(ua) ? result = {
            name: "PhantomJS",
            phantom: t,
            version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
        } : /blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua) ? result = {
            name: "BlackBerry",
            blackberry: t,
            version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
        } : /(web|hpw)os/i.test(ua) ? (result = {
            name: "WebOS",
            webos: t,
            version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
        },
        /touchpad\//i.test(ua) && (result.touchpad = t)) : result = /bada/i.test(ua) ? {
            name: "Bada",
            bada: t,
            version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
        } : /tizen/i.test(ua) ? {
            name: "Tizen",
            tizen: t,
            version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
        } : /safari/i.test(ua) ? {
            name: "Safari",
            safari: t,
            version: versionIdentifier
        } : {},
        /(apple)?webkit/i.test(ua) ? (result.name = result.name || "Webkit",
        result.webkit = t,
        !result.version && versionIdentifier && (result.version = versionIdentifier)) : !result.opera && /gecko\//i.test(ua) && (result.name = result.name || "Gecko",
        result.gecko = t,
        result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)),
        android || result.silk ? result.android = t : iosdevice && (result[iosdevice] = t,
        result.ios = t);
        var osVersion = "";
        iosdevice ? (osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i),
        osVersion = osVersion.replace(/[_\s]/g, ".")) : android ? osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i) : result.windowsphone ? osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : result.webos ? osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : result.blackberry ? osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : result.bada ? osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i) : result.tizen && (osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i)),
        osVersion && (result.osversion = osVersion);
        var osMajorVersion = osVersion.split(".")[0];
        return tablet || "ipad" == iosdevice || android && (3 == osMajorVersion || 4 == osMajorVersion && !mobile) || result.silk ? result.tablet = t : (mobile || "iphone" == iosdevice || "ipod" == iosdevice || android || result.blackberry || result.webos || result.bada) && (result.mobile = t),
        result.msie && result.version >= 10 || result.chrome && result.version >= 20 || result.firefox && result.version >= 20 || result.safari && result.version >= 6 || result.opera && result.version >= 10 || result.ios && result.osversion && result.osversion.split(".")[0] >= 6 ? result.a = t : result.msie && result.version < 10 || result.chrome && result.version < 20 || result.firefox && result.version < 20 || result.safari && result.version < 6 || result.opera && result.version < 10 || result.ios && result.osversion && result.osversion.split(".")[0] < 6 ? result.c = t : result.x = t,
        result
    }
    var t = !0
      , bowser = detect("undefined" != typeof navigator ? navigator.userAgent : "");
    bowser._detect = detect,
    this.bowser = bowser
}
).call(this),
function(window) {
    function _has(object, key) {
        return Object.prototype.hasOwnProperty.call(object, key)
    }
    function _isUndefined(what) {
        return "undefined" == typeof what
    }
    var TraceKit = {}
      , _oldTraceKit = window.TraceKit
      , _slice = [].slice
      , UNKNOWN_FUNCTION = "unknown";
    TraceKit.noConflict = function() {
        return window.TraceKit = _oldTraceKit,
        TraceKit
    }
    ,
    TraceKit.wrap = function(func) {
        function wrapped() {
            try {
                return func.apply(this, arguments)
            } catch (e) {
                throw TraceKit.report(e),
                e
            }
        }
        return wrapped
    }
    ,
    TraceKit.report = function() {
        function subscribe(handler) {
            installGlobalHandler(),
            handlers.push(handler)
        }
        function unsubscribe(handler) {
            for (var i = handlers.length - 1; i >= 0; --i)
                handlers[i] === handler && handlers.splice(i, 1)
        }
        function notifyHandlers(stack, windowError) {
            var exception = null;
            if (!windowError || TraceKit.collectWindowErrors) {
                for (var i in handlers)
                    if (_has(handlers, i))
                        try {
                            handlers[i].apply(null, [stack].concat(_slice.call(arguments, 2)))
                        } catch (inner) {
                            exception = inner
                        }
                if (exception)
                    throw exception
            }
        }
        function traceKitWindowOnError(message, url, lineNo) {
            var stack = null;
            if (lastExceptionStack)
                TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(lastExceptionStack, url, lineNo, message),
                stack = lastExceptionStack,
                lastExceptionStack = null,
                lastException = null;
            else {
                var location = {
                    url: url,
                    line: lineNo
                };
                location.func = TraceKit.computeStackTrace.guessFunctionName(location.url, location.line),
                location.context = TraceKit.computeStackTrace.gatherContext(location.url, location.line),
                stack = {
                    mode: "onerror",
                    message: message,
                    url: document.location.href,
                    stack: [location]
                }
            }
            return notifyHandlers(stack, "from window.onerror"),
            _oldOnerrorHandler ? _oldOnerrorHandler.apply(this, arguments) : !1
        }
        function installGlobalHandler() {
            _onErrorHandlerInstalled !== !0 && (_oldOnerrorHandler = window.onerror,
            window.onerror = traceKitWindowOnError,
            _onErrorHandlerInstalled = !0)
        }
        function report(ex) {
            var args = _slice.call(arguments, 1);
            if (lastExceptionStack) {
                if (lastException === ex)
                    return;
                var s = lastExceptionStack;
                lastExceptionStack = null,
                lastException = null,
                notifyHandlers.apply(null, [s, null].concat(args))
            }
            var stack = TraceKit.computeStackTrace(ex);
            throw lastExceptionStack = stack,
            lastException = ex,
            window.setTimeout(function() {
                lastException === ex && (lastExceptionStack = null,
                lastException = null,
                notifyHandlers.apply(null, [stack, null].concat(args)))
            }, stack.incomplete ? 2e3 : 0),
            ex
        }
        var _oldOnerrorHandler, _onErrorHandlerInstalled, handlers = [], lastException = null, lastExceptionStack = null;
        return report.subscribe = subscribe,
        report.unsubscribe = unsubscribe,
        report
    }(),
    TraceKit.computeStackTrace = function() {
        function loadSource(url) {
            if (!TraceKit.remoteFetching)
                return "";
            try {
                var getXHR = function() {
                    try {
                        return new window.XMLHttpRequest
                    } catch (e) {
                        return new window.ActiveXObject("Microsoft.XMLHTTP")
                    }
                }
                  , request = getXHR();
                return request.open("GET", url, !1),
                request.send(""),
                request.responseText
            } catch (e) {
                return ""
            }
        }
        function getSource(url) {
            if (!_has(sourceCache, url)) {
                var source = "";
                -1 !== url.indexOf(document.domain) && (source = loadSource(url)),
                sourceCache[url] = source ? source.split("\n") : []
            }
            return sourceCache[url]
        }
        function guessFunctionName(url, lineNo) {
            var m, reFunctionArgNames = /function ([^(]*)\(([^)]*)\)/, reGuessFunction = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/, line = "", maxLines = 10, source = getSource(url);
            if (!source.length)
                return UNKNOWN_FUNCTION;
            for (var i = 0; maxLines > i; ++i)
                if (line = source[lineNo - i] + line,
                !_isUndefined(line)) {
                    if (m = reGuessFunction.exec(line))
                        return m[1];
                    if (m = reFunctionArgNames.exec(line))
                        return m[1]
                }
            return UNKNOWN_FUNCTION
        }
        function gatherContext(url, line) {
            var source = getSource(url);
            if (!source.length)
                return null;
            var context = []
              , linesBefore = Math.floor(TraceKit.linesOfContext / 2)
              , linesAfter = linesBefore + TraceKit.linesOfContext % 2
              , start = Math.max(0, line - linesBefore - 1)
              , end = Math.min(source.length, line + linesAfter - 1);
            line -= 1;
            for (var i = start; end > i; ++i)
                _isUndefined(source[i]) || context.push(source[i]);
            return context.length > 0 ? context : null
        }
        function escapeRegExp(text) {
            return text.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&")
        }
        function escapeCodeAsRegExpForMatchingInsideHTML(body) {
            return escapeRegExp(body).replace("<", "(?:<|&lt;)").replace(">", "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g, "\\s+")
        }
        function findSourceInUrls(re, urls) {
            for (var source, m, i = 0, j = urls.length; j > i; ++i)
                if ((source = getSource(urls[i])).length && (source = source.join("\n"),
                m = re.exec(source)))
                    return {
                        url: urls[i],
                        line: source.substring(0, m.index).split("\n").length,
                        column: m.index - source.lastIndexOf("\n", m.index) - 1
                    };
            return null
        }
        function findSourceInLine(fragment, url, line) {
            var m, source = getSource(url), re = new RegExp("\\b" + escapeRegExp(fragment) + "\\b");
            return line -= 1,
            source && source.length > line && (m = re.exec(source[line])) ? m.index : null
        }
        function findSourceByFunctionBody(func) {
            for (var body, re, parts, result, urls = [window.location.href], scripts = document.getElementsByTagName("script"), code = "" + func, codeRE = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, eventRE = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, i = 0; i < scripts.length; ++i) {
                var script = scripts[i];
                script.src && urls.push(script.src)
            }
            if (parts = codeRE.exec(code)) {
                var name = parts[1] ? "\\s+" + parts[1] : ""
                  , args = parts[2].split(",").join("\\s*,\\s*");
                body = escapeRegExp(parts[3]).replace(/;$/, ";?"),
                re = new RegExp("function" + name + "\\s*\\(\\s*" + args + "\\s*\\)\\s*{\\s*" + body + "\\s*}")
            } else
                re = new RegExp(escapeRegExp(code).replace(/\s+/g, "\\s+"));
            if (result = findSourceInUrls(re, urls))
                return result;
            if (parts = eventRE.exec(code)) {
                var event = parts[1];
                if (body = escapeCodeAsRegExpForMatchingInsideHTML(parts[2]),
                re = new RegExp("on" + event + "=[\\'\"]\\s*" + body + "\\s*[\\'\"]","i"),
                result = findSourceInUrls(re, urls[0]))
                    return result;
                if (re = new RegExp(body),
                result = findSourceInUrls(re, urls))
                    return result
            }
            return null
        }
        function computeStackTraceFromStackProp(ex) {
            if (!ex.stack)
                return null;
            for (var parts, element, chrome = /^\s*at (?:((?:\[object object\])?\S+(?: \[as \S+\])?) )?\(?((?:file|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/i, gecko = /^\s*(\S*)(?:\((.*?)\))?@((?:file|http|https).*?):(\d+)(?::(\d+))?\s*$/i, lines = ex.stack.split("\n"), stack = [], reference = /^(.*) is undefined$/.exec(ex.message), i = 0, j = lines.length; j > i; ++i) {
                if (parts = gecko.exec(lines[i]))
                    element = {
                        url: parts[3],
                        func: parts[1] || UNKNOWN_FUNCTION,
                        args: parts[2] ? parts[2].split(",") : "",
                        line: +parts[4],
                        column: parts[5] ? +parts[5] : null
                    };
                else {
                    if (!(parts = chrome.exec(lines[i])))
                        continue;
                    element = {
                        url: parts[2],
                        func: parts[1] || UNKNOWN_FUNCTION,
                        line: +parts[3],
                        column: parts[4] ? +parts[4] : null
                    }
                }
                !element.func && element.line && (element.func = guessFunctionName(element.url, element.line)),
                element.line && (element.context = gatherContext(element.url, element.line)),
                stack.push(element)
            }
            return stack[0] && stack[0].line && !stack[0].column && reference && (stack[0].column = findSourceInLine(reference[1], stack[0].url, stack[0].line)),
            stack.length ? {
                mode: "stack",
                name: ex.name,
                message: ex.message,
                url: document.location.href,
                stack: stack
            } : null
        }
        function computeStackTraceFromStacktraceProp(ex) {
            for (var parts, stacktrace = ex.stacktrace, testRE = / line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i, lines = stacktrace.split("\n"), stack = [], i = 0, j = lines.length; j > i; i += 2)
                if (parts = testRE.exec(lines[i])) {
                    var element = {
                        line: +parts[1],
                        column: +parts[2],
                        func: parts[3] || parts[4],
                        args: parts[5] ? parts[5].split(",") : [],
                        url: parts[6]
                    };
                    if (!element.func && element.line && (element.func = guessFunctionName(element.url, element.line)),
                    element.line)
                        try {
                            element.context = gatherContext(element.url, element.line)
                        } catch (exc) {}
                    element.context || (element.context = [lines[i + 1]]),
                    stack.push(element)
                }
            return stack.length ? {
                mode: "stacktrace",
                name: ex.name,
                message: ex.message,
                url: document.location.href,
                stack: stack
            } : null
        }
        function computeStackTraceFromOperaMultiLineMessage(ex) {
            var lines = ex.message.split("\n");
            if (lines.length < 4)
                return null;
            var parts, i, len, source, lineRE1 = /^\s*Line (\d+) of linked script ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i, lineRE2 = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i, lineRE3 = /^\s*Line (\d+) of function script\s*$/i, stack = [], scripts = document.getElementsByTagName("script"), inlineScriptBlocks = [];
            for (i in scripts)
                _has(scripts, i) && !scripts[i].src && inlineScriptBlocks.push(scripts[i]);
            for (i = 2,
            len = lines.length; len > i; i += 2) {
                var item = null;
                if (parts = lineRE1.exec(lines[i]))
                    item = {
                        url: parts[2],
                        func: parts[3],
                        line: +parts[1]
                    };
                else if (parts = lineRE2.exec(lines[i])) {
                    item = {
                        url: parts[3],
                        func: parts[4]
                    };
                    var relativeLine = +parts[1]
                      , script = inlineScriptBlocks[parts[2] - 1];
                    if (script && (source = getSource(item.url))) {
                        source = source.join("\n");
                        var pos = source.indexOf(script.innerText);
                        pos >= 0 && (item.line = relativeLine + source.substring(0, pos).split("\n").length)
                    }
                } else if (parts = lineRE3.exec(lines[i])) {
                    var url = window.location.href.replace(/#.*$/, "")
                      , line = parts[1]
                      , re = new RegExp(escapeCodeAsRegExpForMatchingInsideHTML(lines[i + 1]));
                    source = findSourceInUrls(re, [url]),
                    item = {
                        url: url,
                        line: source ? source.line : line,
                        func: ""
                    }
                }
                if (item) {
                    item.func || (item.func = guessFunctionName(item.url, item.line));
                    var context = gatherContext(item.url, item.line)
                      , midline = context ? context[Math.floor(context.length / 2)] : null;
                    item.context = context && midline.replace(/^\s*/, "") === lines[i + 1].replace(/^\s*/, "") ? context : [lines[i + 1]],
                    stack.push(item)
                }
            }
            return stack.length ? {
                mode: "multiline",
                name: ex.name,
                message: lines[0],
                url: document.location.href,
                stack: stack
            } : null
        }
        function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
            var initial = {
                url: url,
                line: lineNo
            };
            if (initial.url && initial.line) {
                stackInfo.incomplete = !1,
                initial.func || (initial.func = guessFunctionName(initial.url, initial.line)),
                initial.context || (initial.context = gatherContext(initial.url, initial.line));
                var reference = / '([^']+)' /.exec(message);
                if (reference && (initial.column = findSourceInLine(reference[1], initial.url, initial.line)),
                stackInfo.stack.length > 0 && stackInfo.stack[0].url === initial.url) {
                    if (stackInfo.stack[0].line === initial.line)
                        return !1;
                    if (!stackInfo.stack[0].line && stackInfo.stack[0].func === initial.func)
                        return stackInfo.stack[0].line = initial.line,
                        stackInfo.stack[0].context = initial.context,
                        !1
                }
                return stackInfo.stack.unshift(initial),
                stackInfo.partial = !0,
                !0
            }
            return stackInfo.incomplete = !0,
            !1
        }
        function computeStackTraceByWalkingCallerChain(ex, depth) {
            for (var parts, item, source, functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, stack = [], funcs = {}, recursion = !1, curr = computeStackTraceByWalkingCallerChain.caller; curr && !recursion; curr = curr.caller)
                if (curr !== computeStackTrace && curr !== TraceKit.report) {
                    if (item = {
                        url: null,
                        func: UNKNOWN_FUNCTION,
                        line: null,
                        column: null
                    },
                    curr.name ? item.func = curr.name : (parts = functionName.exec(curr.toString())) && (item.func = parts[1]),
                    source = findSourceByFunctionBody(curr)) {
                        item.url = source.url,
                        item.line = source.line,
                        item.func === UNKNOWN_FUNCTION && (item.func = guessFunctionName(item.url, item.line));
                        var reference = / '([^']+)' /.exec(ex.message || ex.description);
                        reference && (item.column = findSourceInLine(reference[1], source.url, source.line))
                    }
                    funcs["" + curr] ? recursion = !0 : funcs["" + curr] = !0,
                    stack.push(item)
                }
            depth && stack.splice(0, depth);
            var result = {
                mode: "callers",
                name: ex.name,
                message: ex.message,
                url: document.location.href,
                stack: stack
            };
            return augmentStackTraceWithInitialElement(result, ex.sourceURL || ex.fileName, ex.line || ex.lineNumber, ex.message || ex.description),
            result
        }
        function computeStackTrace(ex, depth) {
            var stack = null;
            depth = null == depth ? 0 : +depth;
            try {
                if (stack = computeStackTraceFromStacktraceProp(ex))
                    return stack
            } catch (e) {
                if (debug)
                    throw e
            }
            try {
                if (stack = computeStackTraceFromStackProp(ex))
                    return stack
            } catch (e) {
                if (debug)
                    throw e
            }
            try {
                if (stack = computeStackTraceFromOperaMultiLineMessage(ex))
                    return stack
            } catch (e) {
                if (debug)
                    throw e
            }
            try {
                if (stack = computeStackTraceByWalkingCallerChain(ex, depth + 1))
                    return stack
            } catch (e) {
                if (debug)
                    throw e
            }
            return {
                mode: "failed"
            }
        }
        function computeStackTraceOfCaller(depth) {
            depth = (null == depth ? 0 : +depth) + 1;
            try {
                throw new Error
            } catch (ex) {
                return computeStackTrace(ex, depth + 1)
            }
        }
        var debug = !1
          , sourceCache = {};
        return computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement,
        computeStackTrace.guessFunctionName = guessFunctionName,
        computeStackTrace.gatherContext = gatherContext,
        computeStackTrace.ofCaller = computeStackTraceOfCaller,
        computeStackTrace
    }(),
    function() {
        var _helper = function(fnName) {
            var originalFn = window[fnName];
            window[fnName] = function() {
                var args = _slice.call(arguments)
                  , originalCallback = args[0];
                return "function" == typeof originalCallback && (args[0] = TraceKit.wrap(originalCallback)),
                originalFn.apply ? originalFn.apply(this, args) : originalFn(args[0], args[1])
            }
        };
        _helper("setTimeout"),
        _helper("setInterval")
    }(),
    TraceKit.remoteFetching || (TraceKit.remoteFetching = !0),
    TraceKit.collectWindowErrors || (TraceKit.collectWindowErrors = !0),
    (!TraceKit.linesOfContext || TraceKit.linesOfContext < 1) && (TraceKit.linesOfContext = 11),
    window.TraceKit = TraceKit
}(window);
var timestamp = function() {
    return (new Date).getTime()
}
  , extend = function(obj) {
    return each(slice.call(arguments, 1), function(source) {
        if (source)
            for (var prop in source)
                obj[prop] = source[prop]
    }),
    obj
}
  , _has = function(object, key) {
    return Object.prototype.hasOwnProperty.call(object, key)
}
  , escape = encodeURIComponent;
Object.keys = Object.keys || function(o) {
    var result = [];
    for (var name in o)
        o.hasOwnProperty(name) && result.push(name);
    return result
}
;
var isObject = function(instance) {
    return instance instanceof Object
}
  , array = []
  , slice = array.slice
  , isArray = function(instance) {
    return instance instanceof Array
}
  , isValidKeyValue = function(instance) {
    return "string" == typeof instance || "number" == typeof instance || "boolean" == typeof instance
}
  , forEach = function(obj, iterator) {
    Array.prototype.forEach.call(Object.keys(obj), function(key) {
        iterator(key, obj[key])
    })
}
  , breaker = {}
  , each = function(obj, iterator, context) {
    if (null != obj) {
        var nativeForEach = Array.prototype.forEach;
        if (nativeForEach && obj.forEach === nativeForEach)
            obj.forEach(iterator, context);
        else if (obj.length === +obj.length) {
            for (var i = 0, length = obj.length; length > i; i++)
                if (iterator.call(context, obj[i], i, obj) === breaker)
                    return
        } else
            for (var keys = _.keys(obj), i = 0, length = keys.length; length > i; i++)
                if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker)
                    return
    }
}
  , serialize = function serialize(params, obj, traditional, scope) {
    var array = isArray(obj);
    forEach(obj, function(key, value) {
        scope && (key = traditional ? scope : scope + "[" + (array ? "" : key) + "]"),
        !scope && array ? params.add(value.name, value.value) : (traditional ? isArray(value) : isObject(value)) ? serialize(params, value, traditional, key) : params.add(key, value)
    })
}
  , param = function(obj, traditional) {
    var params = [];
    return params.add = function(k, v) {
        this.push(escape(k) + "=" + escape(v))
    }
    ,
    serialize(params, obj, traditional),
    params.join("&")
}
  , generator = function() {
    var S4 = function() {
        return Math.floor(65536 * Math.random()).toString(16)
    };
    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4()
}
  , eventSplitter = /\s+/
  , eventsApi = function(obj, action, name, rest) {
    if (!name)
        return !0;
    if ("object" == typeof name) {
        for (var key in name)
            obj[action].apply(obj, [key, name[key]].concat(rest));
        return !1
    }
    if (eventSplitter.test(name)) {
        for (var names = name.split(eventSplitter), i = 0, l = names.length; l > i; i++)
            obj[action].apply(obj, [names[i]].concat(rest));
        return !1
    }
    return !0
}
  , triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
    case 0:
        for (; ++i < l; )
            (ev = events[i]).callback.call(ev.ctx);
        return;
    case 1:
        for (; ++i < l; )
            (ev = events[i]).callback.call(ev.ctx, a1);
        return;
    case 2:
        for (; ++i < l; )
            (ev = events[i]).callback.call(ev.ctx, a1, a2);
        return;
    case 3:
        for (; ++i < l; )
            (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
        return;
    default:
        for (; ++i < l; )
            (ev = events[i]).callback.apply(ev.ctx, args)
    }
}
  , _once = function(func) {
    var memo, ran = !1;
    return function() {
        return ran ? memo : (ran = !0,
        memo = func.apply(this, arguments),
        func = null,
        memo)
    }
};
!function(root, factory) {
    "function" == typeof define && define.amd ? define(["exports"], function(exports) {
        root.Lockr = factory(root, exports)
    }) : root.Lockr = factory(root, {})
}(this, function(root, Lockr) {
    "use strict";
    return root.Lockr = Lockr,
    Array.prototype.indexOf || (Array.prototype.indexOf = function(elt) {
        var len = this.length >>> 0
          , from = Number(arguments[1]) || 0;
        for (from = 0 > from ? Math.ceil(from) : Math.floor(from),
        0 > from && (from += len); len > from; from++)
            if (from in this && this[from] === elt)
                return from;
        return -1
    }
    ),
    Lockr.prefix = "",
    Lockr._getPrefixedKey = function(key, options) {
        return options = options || {},
        options.noPrefix ? key : this.prefix + key
    }
    ,
    Lockr.set = function(key, value, options) {
        var query_key = this._getPrefixedKey(key, options);
        try {
            localStorage.setItem(query_key, JSON.stringify({
                data: value
            }))
        } catch (e) {
            console && console.warn("Lockr didn't successfully save the '{" + key + ": " + value + "}' pair, because the localStorage is full.")
        }
    }
    ,
    Lockr.get = function(key, missing, options) {
        var value, query_key = this._getPrefixedKey(key, options);
        try {
            value = JSON.parse(localStorage.getItem(query_key))
        } catch (e) {
            value = null
        }
        return null === value ? missing : value.data || missing
    }
    ,
    Lockr.sadd = function(key, value, options) {
        var json, query_key = this._getPrefixedKey(key, options), values = Lockr.smembers(key);
        if (values.indexOf(value) > -1)
            return null;
        try {
            values.push(value),
            json = JSON.stringify({
                data: values
            }),
            localStorage.setItem(query_key, json)
        } catch (e) {
            console.log(e),
            console && console.warn("Lockr didn't successfully add the " + value + " to " + key + " set, because the localStorage is full.")
        }
    }
    ,
    Lockr.smembers = function(key, options) {
        var value, query_key = this._getPrefixedKey(key, options);
        try {
            value = JSON.parse(localStorage.getItem(query_key))
        } catch (e) {
            value = null
        }
        return null === value ? [] : value.data || []
    }
    ,
    Lockr.sismember = function(key, value, options) {
        this._getPrefixedKey(key, options);
        return Lockr.smembers(key).indexOf(value) > -1
    }
    ,
    Lockr.getAll = function() {
        var keys = Object.keys(localStorage);
        return keys.map(function(key) {
            return Lockr.get(key)
        })
    }
    ,
    Lockr.srem = function(key, value, options) {
        var json, index, query_key = this._getPrefixedKey(key, options), values = Lockr.smembers(key, value);
        index = values.indexOf(value),
        index > -1 && values.splice(index, 1),
        json = JSON.stringify({
            data: values
        });
        try {
            localStorage.setItem(query_key, json)
        } catch (e) {
            console && console.warn("Lockr couldn't remove the " + value + " from the set " + key)
        }
    }
    ,
    Lockr.rm = function(key) {
        localStorage.removeItem(key)
    }
    ,
    Lockr.flush = function() {
        localStorage.clear()
    }
    ,
    Lockr
});
var md5cycle = function(x, k) {
    var a = x[0]
      , b = x[1]
      , c = x[2]
      , d = x[3];
    a = ff(a, b, c, d, k[0], 7, -680876936),
    d = ff(d, a, b, c, k[1], 12, -389564586),
    c = ff(c, d, a, b, k[2], 17, 606105819),
    b = ff(b, c, d, a, k[3], 22, -1044525330),
    a = ff(a, b, c, d, k[4], 7, -176418897),
    d = ff(d, a, b, c, k[5], 12, 1200080426),
    c = ff(c, d, a, b, k[6], 17, -1473231341),
    b = ff(b, c, d, a, k[7], 22, -45705983),
    a = ff(a, b, c, d, k[8], 7, 1770035416),
    d = ff(d, a, b, c, k[9], 12, -1958414417),
    c = ff(c, d, a, b, k[10], 17, -42063),
    b = ff(b, c, d, a, k[11], 22, -1990404162),
    a = ff(a, b, c, d, k[12], 7, 1804603682),
    d = ff(d, a, b, c, k[13], 12, -40341101),
    c = ff(c, d, a, b, k[14], 17, -1502002290),
    b = ff(b, c, d, a, k[15], 22, 1236535329),
    a = gg(a, b, c, d, k[1], 5, -165796510),
    d = gg(d, a, b, c, k[6], 9, -1069501632),
    c = gg(c, d, a, b, k[11], 14, 643717713),
    b = gg(b, c, d, a, k[0], 20, -373897302),
    a = gg(a, b, c, d, k[5], 5, -701558691),
    d = gg(d, a, b, c, k[10], 9, 38016083),
    c = gg(c, d, a, b, k[15], 14, -660478335),
    b = gg(b, c, d, a, k[4], 20, -405537848),
    a = gg(a, b, c, d, k[9], 5, 568446438),
    d = gg(d, a, b, c, k[14], 9, -1019803690),
    c = gg(c, d, a, b, k[3], 14, -187363961),
    b = gg(b, c, d, a, k[8], 20, 1163531501),
    a = gg(a, b, c, d, k[13], 5, -1444681467),
    d = gg(d, a, b, c, k[2], 9, -51403784),
    c = gg(c, d, a, b, k[7], 14, 1735328473),
    b = gg(b, c, d, a, k[12], 20, -1926607734),
    a = hh(a, b, c, d, k[5], 4, -378558),
    d = hh(d, a, b, c, k[8], 11, -2022574463),
    c = hh(c, d, a, b, k[11], 16, 1839030562),
    b = hh(b, c, d, a, k[14], 23, -35309556),
    a = hh(a, b, c, d, k[1], 4, -1530992060),
    d = hh(d, a, b, c, k[4], 11, 1272893353),
    c = hh(c, d, a, b, k[7], 16, -155497632),
    b = hh(b, c, d, a, k[10], 23, -1094730640),
    a = hh(a, b, c, d, k[13], 4, 681279174),
    d = hh(d, a, b, c, k[0], 11, -358537222),
    c = hh(c, d, a, b, k[3], 16, -722521979),
    b = hh(b, c, d, a, k[6], 23, 76029189),
    a = hh(a, b, c, d, k[9], 4, -640364487),
    d = hh(d, a, b, c, k[12], 11, -421815835),
    c = hh(c, d, a, b, k[15], 16, 530742520),
    b = hh(b, c, d, a, k[2], 23, -995338651),
    a = ii(a, b, c, d, k[0], 6, -198630844),
    d = ii(d, a, b, c, k[7], 10, 1126891415),
    c = ii(c, d, a, b, k[14], 15, -1416354905),
    b = ii(b, c, d, a, k[5], 21, -57434055),
    a = ii(a, b, c, d, k[12], 6, 1700485571),
    d = ii(d, a, b, c, k[3], 10, -1894986606),
    c = ii(c, d, a, b, k[10], 15, -1051523),
    b = ii(b, c, d, a, k[1], 21, -2054922799),
    a = ii(a, b, c, d, k[8], 6, 1873313359),
    d = ii(d, a, b, c, k[15], 10, -30611744),
    c = ii(c, d, a, b, k[6], 15, -1560198380),
    b = ii(b, c, d, a, k[13], 21, 1309151649),
    a = ii(a, b, c, d, k[4], 6, -145523070),
    d = ii(d, a, b, c, k[11], 10, -1120210379),
    c = ii(c, d, a, b, k[2], 15, 718787259),
    b = ii(b, c, d, a, k[9], 21, -343485551),
    x[0] = add32(a, x[0]),
    x[1] = add32(b, x[1]),
    x[2] = add32(c, x[2]),
    x[3] = add32(d, x[3])
}
  , cmn = function(q, a, b, x, s, t) {
    return a = add32(add32(a, q), add32(x, t)),
    add32(a << s | a >>> 32 - s, b)
}
  , ff = function(a, b, c, d, x, s, t) {
    return cmn(b & c | ~b & d, a, b, x, s, t)
}
  , gg = function(a, b, c, d, x, s, t) {
    return cmn(b & d | c & ~d, a, b, x, s, t)
}
  , hh = function(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t)
}
  , ii = function(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | ~d), a, b, x, s, t)
}
  , md51 = function(s) {
    var i, n = s.length, state = [1732584193, -271733879, -1732584194, 271733878];
    for (i = 64; i <= s.length; i += 64)
        md5cycle(state, md5blk(s.substring(i - 64, i)));
    s = s.substring(i - 64);
    var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < s.length; i++)
        tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
    if (tail[i >> 2] |= 128 << (i % 4 << 3),
    i > 55)
        for (md5cycle(state, tail),
        i = 0; 16 > i; i++)
            tail[i] = 0;
    return tail[14] = 8 * n,
    md5cycle(state, tail),
    state
}
  , md5blk = function(s) {
    var i, md5blks = [];
    for (i = 0; 64 > i; i += 4)
        md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
    return md5blks
}
  , hex_chr = "0123456789abcdef".split("")
  , rhex = function(n) {
    for (var s = "", j = 0; 4 > j; j++)
        s += hex_chr[n >> 8 * j + 4 & 15] + hex_chr[n >> 8 * j & 15];
    return s
}
  , hex = function(x) {
    for (var i = 0; i < x.length; i++)
        x[i] = rhex(x[i]);
    return x.join("")
}
  , md5 = function(s) {
    return hex(md51(s))
}
  , add32 = function(a, b) {
    return a + b & 4294967295
};
if ("5d41402abc4b2a76b9719d911017c592" != md5("hello"))
    var add32 = function(x, y) {
        var lsw = (65535 & x) + (65535 & y)
          , msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | 65535 & lsw
    };
window.Bugsense = function() {
    var config = {
        apiKey: null,
        message: null,
        uid: null,
        userIdentifier: null,
        appVersion: null,
        appname: null,
        osver: null,
        url: "https://mint.splunk.com/api/errors",
        disableOnError: !1,
        context: window
    }
      , initAndStartSession = function(options) {
        options.appver && (options.appVersion = options.appver,
        delete options.appver),
        config = extend(config, options)
    }
      , generateFixture = function() {
        var ua = window.navigator.userAgent;
        return {
            client: {
                name: "bugsense-js",
                version: "2.2.0"
            },
            request: {
                user_id: Bugsense.config.userIdentifier || "unknown"
            },
            exception: {
                message: null,
                where: null,
                klass: null,
                backtrace: null,
                breadcrumbs: null
            },
            application_environment: {
                phone: window.navigator.platform,
                appver: Bugsense.config.appVersion || "unknown",
                appname: Bugsense.config.appname || "unknown",
                osver: "undefined" != typeof window.device ? window.device.version : ua.substr(ua.indexOf("; ") + 2, ua.length).replace(")", ";").split(";")[0] || "unknown",
                user_agent: bowser.name + " " + bowser.version,
                cordova: "undefined" != typeof window.device ? window.device.cordova : "unknown",
                device_name: "undefined" != typeof window.device ? window.device.name : "unknown",
                log_data: {}
            }
        }
    };
    return {
        config: config,
        initAndStartSession: initAndStartSession,
        generateFixture: generateFixture
    }
}(),
Bugsense.Crashes = function() {
    Bugsense.breadcrumbs = [],
    Bugsense.extraData = {},
    Bugsense.addExtraData = function(key, value) {
        isValidKeyValue(key) && isValidKeyValue(value) && (Bugsense.extraData[key] = value)
    }
    ,
    Bugsense.removeExtraData = function(key) {
        delete Bugsense.extraData[key]
    }
    ,
    Bugsense.clearExtraData = function() {
        Bugsense.extraData = {}
    }
    ,
    Bugsense.leaveBreadcrumb = function(breadcrumb) {
        isValidKeyValue(breadcrumb) && (Bugsense.breadcrumbs.length + 1 == 16 && (Bugsense.breadcrumbs = Bugsense.breadcrumbs.slice(1)),
        Bugsense.breadcrumbs.push(breadcrumb))
    }
    ,
    Bugsense.clearBreadcrumbs = function() {
        Bugsense.breadcrumbs = []
    }
}(),
Bugsense.channel = function() {
    var eventSplitter = /\s+/
      , eventsApi = function(obj, action, name, rest) {
        if (!name)
            return !0;
        if ("object" == typeof name) {
            for (var key in name)
                obj[action].apply(obj, [key, name[key]].concat(rest));
            return !1
        }
        if (eventSplitter.test(name)) {
            for (var names = name.split(eventSplitter), i = 0, l = names.length; l > i; i++)
                obj[action].apply(obj, [names[i]].concat(rest));
            return !1
        }
        return !0
    }
      , triggerEvents = function(events, args) {
        var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
        switch (args.length) {
        case 0:
            for (; ++i < l; )
                (ev = events[i]).callback.call(ev.ctx);
            return;
        case 1:
            for (; ++i < l; )
                (ev = events[i]).callback.call(ev.ctx, a1);
            return;
        case 2:
            for (; ++i < l; )
                (ev = events[i]).callback.call(ev.ctx, a1, a2);
            return;
        case 3:
            for (; ++i < l; )
                (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
            return;
        default:
            for (; ++i < l; )
                (ev = events[i]).callback.apply(ev.ctx, args)
        }
    }
      , _once = function(func) {
        var memo, ran = !1;
        return function() {
            return ran ? memo : (ran = !0,
            memo = func.apply(this, arguments),
            func = null,
            memo)
        }
    };
    Bugsense.on = function(name, callback, context) {
        if (!eventsApi(this, "on", name, [callback, context]) || !callback)
            return this;
        this._events || (this._events = {});
        var events = this._events[name] || (this._events[name] = []);
        return events.push({
            callback: callback,
            context: context,
            ctx: context || this
        }),
        this
    }
    ,
    Bugsense.once = function(name, callback, context) {
        if (!eventsApi(this, "once", name, [callback, context]) || !callback)
            return this;
        var self = this
          , once = _once(function() {
            self.off(name, once),
            callback.apply(this, arguments)
        });
        return once._callback = callback,
        this.on(name, once, context)
    }
    ,
    Bugsense.off = function(name, callback, context) {
        var retain, ev, events, names, i, l, j, k;
        if (!this._events || !eventsApi(this, "off", name, [callback, context]))
            return this;
        if (!name && !callback && !context)
            return this._events = void 0,
            this;
        for (names = name ? [name] : _.keys(this._events),
        i = 0,
        l = names.length; l > i; i++)
            if (name = names[i],
            events = this._events[name]) {
                if (this._events[name] = retain = [],
                callback || context)
                    for (j = 0,
                    k = events.length; k > j; j++)
                        ev = events[j],
                        (callback && callback !== ev.callback && callback !== ev.callback._callback || context && context !== ev.context) && retain.push(ev);
                retain.length || delete this._events[name]
            }
        return this
    }
    ,
    Bugsense.trigger = function(name) {
        if (!this._events)
            return this;
        var args = slice.call(arguments, 1);
        if (!eventsApi(this, "trigger", name, args))
            return this;
        var events = this._events[name]
          , allEvents = this._events.all;
        return events && triggerEvents(events, args),
        allEvents && triggerEvents(allEvents, arguments),
        this
    }
}(),
Bugsense.Cache = function() {
    var Cache = {
        _queue: [],
        cacheReport: function(data) {
            this._queue.push(data),
            this.update()
        },
        retrieve: function() {
            var data = Lockr.get("bugsense_cache");
            this._queue = data || [],
            this._queue.length && this.sendCachedReport()
        },
        update: function() {
            Lockr.set("bugsense_cache", this._queue)
        },
        sendCachedReport: function() {
            if (!this._queue.length)
                return !1;
            var that = this;
            each(this._queue, function(data, index) {
                Bugsense.Network.send(data, "POST"),
                that._queue.shift(index)
            }),
            this.update()
        }
    };
    return Cache
}(),
Bugsense.Errors = function() {
    var computeErrorHash = function(offendingLine, message, line, klass, appVersion) {
        var string = offendingLine + message + line + klass + appVersion;
        return md5(string)
    }
      , parse = function(data) {
        var stack = data.errorobj ? data.errorobj.stack : data.stack || null
          , parsedError = {
            message: data.exception || data.message,
            url: data.url || data.lineNumber || data.sourceURL,
            line: data.line,
            stack: stack
        };
        return parsedError.custom_data = data.custom_data || {},
        parsedError
    }
      , generateExceptionData = function(error) {
        var message = "string" != typeof error ? error.message : error
          , crash = {}
          , stacktrace = getStackTrace(error)
          , url = error.url || error.lineNumber || error.sourceUrl
          , line = error.line
          , klass = url && line ? TraceKit.computeStackTrace.guessFunctionName(url, line) : "unknown";
        return crash = extend(Bugsense.generateFixture(), {
            exception: {
                message: message,
                where: [url, line].join(":"),
                klass: klass,
                backtrace: stacktrace && stacktrace.length ? stacktrace : [],
                breadcrumbs: Bugsense.breadcrumbs
            }
        }),
        crash.application_environment.log_data = extend(Bugsense.extraData, error.custom_data),
        crash
    }
      , generateStackTrace = function(error) {
        var stack = TraceKit.computeStackTrace(error).stack;
        return stack ? stack.map(function(s) {
            return s.func + "@" + s.url + ":" + s.line
        }) : []
    }
      , getStackTrace = function(error) {
        return error.stack || generateStackTrace(error)
    };
    return Bugsense.notify = function(data, custom_data) {
        var parsedError = {};
        custom_data && (data.custom_data = custom_data),
        parsedError = parse(data),
        Bugsense.Network.send(generateExceptionData(parsedError), "POST")
    }
    ,
    window.onerror = function(exception, url, line, column, errorobj) {
        if (!Bugsense.config.disableOnError)
            if (Bugsense.config.apiKey)
                Bugsense.trigger("crash"),
                Bugsense.notify({
                    exception: exception,
                    url: url,
                    line: line,
                    column: column,
                    errorobj: errorobj
                });
            else {
                var msg = "You need a BugSense API key to use bugsense.js.";
                "warn"in console ? console.warn(msg) : console.log(msg)
            }
    }
    ,
    {
        parse: parse,
        computeErrorHash: computeErrorHash,
        generateExceptionData: generateExceptionData
    }
}(),
Bugsense.Sessions = function() {
    var generator = function() {
        var S4 = function() {
            return Math.floor(65536 * Math.random()).toString(16)
        };
        return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4()
    }
      , Sessions = {
        generateUid: function() {
            var uid = Lockr.get("bugsense:uid") || generator();
            return Lockr.set("bugsense:uid", uid),
            uid
        }
    };
    return Sessions
}(),
Bugsense.Network = function() {
    var Network = {
        getPostURL: function() {
            return Bugsense.config.url + "?cacheBuster=" + timestamp()
        },
        send: function(data, method) {
            function successHandler() {
                return net && 4 != net.readyState ? void 0 : net && 200 != net.status ? !1 : void ("console"in window && console.log("logged 1 error to Bugsense, status: " + net.responseText))
            }
            var net = new XMLHttpRequest;
            net.open(method, this.getPostURL(), !0),
            net.setRequestHeader("X-BugSense-Api-Key", Bugsense.config.apiKey),
            net.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            net.onerror = function() {
                Bugsense.Cache.cacheReport(data)
            }
            ,
            net.onreadystatechange = successHandler,
            net.send(param({
                data: JSON.stringify(data)
            }))
        }
    };
    return Network
}();
