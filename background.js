chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log(tab);
    if (changeInfo.status === 'loading') {
        if (!chrome.runtime.onConnect.hasListeners()) {
            chrome.runtime.onConnect.addListener(function (port) {

                port.onMessage.addListener(function (request) {
                    console.log(request);
                    if (request.do == "get_all_cookie") {

                        chrome.cookies.getAll({domain: request.domain}, function (cookies) {

                            port.postMessage({type: "get_all_cookie", payload: cookies});

                            console.log(cookies)

                        });

                    }

                    if (request.do == "set_cookies") {

                        var cookieArr = request.payload;

                        let ret = true;

                        cookieArr.forEach(function (val) {
                            val.url = 'http://www.115.com';

                            delete val.session;
                            delete val.hostOnly;

                            chrome.cookies.set(val, function (cookie) {
                                if (!cookie) console.log('fuck')
                                ret = false;
                            });
                        });

                        return ret;

                    }


                    if (request.do == "get_cookie") {
                        var option = {};
                        if (request.site) {
                            option["url"] = request.site;
                        }
                        if (request.name != null) {
                            option["name"] = request.name;
                        }
                        if (request.domain) {
                            option["domain"] = request.domain;
                        }
                        chrome.cookies.getAll(option, function (cookies) {
                            var obj = {};
                            for (var i in cookies) {
                                var cookie = cookies[i];
                                obj[cookie.name] = cookie.value;
                            }
                            port.postMessage(obj);
                            console.log(obj);
                        });

                    }
                });
            });
        }

    }

});
