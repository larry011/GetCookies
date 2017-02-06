网站马甲切换工具
===

此项目从`acgotaku`大神的[GetCookie](https://github.com/acgotaku/GetCookies)fork而来。

功能：
1. 方便在网站上切换登陆的账号
2. 免账号密码登陆网站，同时和他人同事在线，解决了被挤下线的困扰（每次都要借迅雷账号的童靴是不是听了很兴奋哇）

##原理

修改网站的Cookie。而且一般情况下，网站对于同一用户的IP变化不会强制你下线。所以只要获取了Cookie，分享给他人，可以同时在线，因为Http协议是无状态的 ^_^。

此插件因为要获取HttpOnlyCookie，因此必须做成Chrome插件，才能拥有特权。

