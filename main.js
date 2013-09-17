/**
 * Created with JetBrains WebStorm.
 * User: rrovirosa
 * Date: 9/4/13
 * Time: 2:03 PM
 * To change this template use File | Settings | File Templates.
 */


requirejs.config({
    shim: {
        'chat': ['js/jquery-2.0.3.min','js/strophe'],
        'js/strophe.chatstates' : ['chat'],
        'js/strophe.disco':['chat'],
        'js/strophe.ping':['chat'],
        'js/strophe.register':['chat'],
        'main'    : ['js/strophe.chatstates','js/strophe.disco','js/strophe.ping','js/strophe.register']
    }

});

require(["chat"],function(){
    if(Chat)
        console.log("Chat Library ready to use!");
    else
        console.log("Error");
});