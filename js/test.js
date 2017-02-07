chrome.cookies.getAll({
    domain: '115.com'
}, function (data) {
    console.log(data)
});


var c = [{"domain":".115.com","expirationDate":1532082060,"hostOnly":false,"httpOnly":false,"name":"OUTFOX_SEARCH_USER_ID_NCOO","path":"/","secure":false,"session":false,"storeId":"0","value":"811414991.7759979"},{"domain":".115.com","expirationDate":1517986740,"hostOnly":false,"httpOnly":true,"name":"PHPSESSID","path":"/","secure":false,"session":false,"storeId":"0","value":"q2dqrs4bq52prlvhk0pgp6tt60"},{"domain":".115.com","expirationDate":1487664000,"hostOnly":false,"httpOnly":false,"name":"ssov_3403451","path":"/","secure":false,"session":false,"storeId":"0","value":"1_3403451_3f2d0f598731326e14d976f918101085"},{"domain":"115.com","expirationDate":1486483140,"hostOnly":true,"httpOnly":false,"name":"tjj_id","path":"/","secure":false,"session":false,"storeId":"0","value":"148644830923515113042"},{"domain":"115.com","expirationDate":1486483140,"hostOnly":true,"httpOnly":false,"name":"tjj_u","path":"/","secure":false,"session":false,"storeId":"0","value":"1"},{"domain":".115.com","hostOnly":false,"httpOnly":true,"name":"UID","path":"/","secure":false,"session":true,"storeId":"0","value":"3403451_A1_1486456666"},{"domain":".115.com","hostOnly":false,"httpOnly":true,"name":"CID","path":"/","secure":false,"session":true,"storeId":"0","value":"49b19da50bc4a58a787bda32fb469d97"},{"domain":".115.com","expirationDate":1486888666.637346,"hostOnly":false,"httpOnly":false,"name":"OOFL","path":"/","secure":false,"session":false,"storeId":"0","value":"3403451"},{"domain":".115.com","expirationDate":1517986860,"hostOnly":false,"httpOnly":true,"name":"SEID","path":"/","secure":false,"session":false,"storeId":"0","value":"86b79a6a1273acdbd86fa92fc1202fe4f4cd0b1df495b53406ef512678c1d3a0febf42805ed7786501423ba6fde505d528617d2ca26b7862b9379744"},{"domain":"115.com","expirationDate":1486483199,"hostOnly":true,"httpOnly":false,"name":"tjj_repeat","path":"/","secure":false,"session":false,"storeId":"0","value":"4"}];
c.forEach(function(val){
   val.url = 'http://www.115.com';

   delete val.session;
   delete val.hostOnly;

    chrome.cookies.set(val,function(cookie){
        if(!cookie) console.log('fuck')
    })
});
