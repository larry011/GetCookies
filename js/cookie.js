function onload(func) {
    if (document.readyState === "complete") {
        func();
    } else {
        window.addEventListener('load', func);
    }
}

onload(function () {
    console.log("onload");

    var config = {
        syncURL: "https://wild-rat-1327.wilddogio.com" //输入节点 URL
    };
    wilddog.initializeApp(config);
    var ref = wilddog.sync().ref('/cookie_store/115');


    //先查询cookie，看下新鲜度，超过一周就不要了

    //如果当前没有Cookie UID，则从远程设置。


    var port = chrome.runtime.connect({name: "get_cookie"});


    if (!localStorage.aa) {
        return false;
    }

    function updateCookie(cookieArr) {
        ref.set(cookieArr);
    }

    port.onMessage.addListener(function (msg) {

        switch (msg.type) {
            case "get_all_cookie":
                var cookieArr = msg.payload;

                let isLogin = cookieArr.some(function (val) {
                    return val.name == "UID";
                });


                if (!isLogin) {
                    //如果浏览器是没有登陆状态

                    if (window.confirm("set ?")) {
                        ref.once('value', function (snap) {

                            let data = snap.val();


                            console.log(data);


                            port.postMessage({do: 'set_cookies', payload: data});

                        })
                    }

                } else {
                    //如果是已经登陆状态
                    ref.set(cookieArr);
                    console.warn('wilddong cookie 设置');
                }

                break;
        }
    });
    port.postMessage({do: 'get_all_cookie', domain: '115.com'});


    document.body.setAttribute("get-cookie", "111");

});
