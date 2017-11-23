var sWOGateway = "honor.whoson.com";
var sWOGatewaySSL = "honor.whoson.com";
var sWODomain = "www.hihonor.com-it";
var sWOChatstart = "https://honor.whoson.com/newchat/chat.aspx";
var sWOCustomChatURL = "{customchaturl}";
var sWODepartment="";sWOSkillNames="";
var sWOLanguage="";
var sWOBackgroundURL="";
var sWOResponse="Y";
var sWOInvite="Y";
var sWOPreselect="";
var sWOUser="";
var sWOPage="";
var sWOStatus = "offline";
var sWOInline=true;
var sWOCost=0;var sWORevenue=0;
var sWOName="";var sWOCompany="";var sWOEmail="";var sWOTelephone="";
var sWOProtocol=window.location.protocol;
var sWOImage=document.createElement('img');
var sWOChatElement; var sWOSession; var sWOUrl;
var script = document.createElement("script");
script.type = "text/javascript";
script.id = "jsonRequest";
script.src = sWOProtocol + "//" + sWOGateway + "/stat.js?callback=checkStatus&domain=" + sWODomain + "&x=1";
document.getElementsByTagName("head")[0].appendChild(script);
sWOImage.border=0;
(function () {
if(sWOUser==""){
	var dt=new Date();var sWOCookie=document.cookie.toString();
	if(sWOCookie.indexOf("whoson")==-1){sWOSession=parseInt(Math.random()*1000)+"-"+dt.getTime();document.cookie="whoson="+sWOSession+";expires=Thu, 31-Dec-2020 00:00:00 GMT; path=/";}
	sWOCookie=document.cookie.toString();
	if(sWOCookie.indexOf('whoson')==-1){sWOSession="";} else {
		var s=sWOCookie.indexOf("whoson=")+"whoson=".length;var e=sWOCookie.indexOf(";",s);
		if(e==-1)e=sWOCookie.length;sWOSession=sWOCookie.substring(s,e);}}
if(sWOProtocol=="https:")sWOGateway=sWOGatewaySSL;if(sWOUser!="")sWOSession=sWOUser;if(sWOProtocol=="file:")sWOProtocol="http:"; })();
function sWOStartChat(){window.open(sWOChatElement.href,"Chat","width=430,height=540");return false;}
function sWOImageLoaded(){if (sWOImage.width==1) {return;}sWOChatElement.href=sWOChatstart;sWOChatElement.target = "_blank";sWOChatElement.appendChild(sWOImage);sWOChatElement.onclick=sWOStartChat;}
function sWOTrackPage() {
    var bd = document.getElementsByTagName('body')[0];
    if (sWOPage == "") sWOPage = escape(window.location);
    sWOUrl = sWOProtocol + "//" + sWOGateway + "/?u=" + sWOSession + "&d=" + sWODomain;
    if (sWODepartment.length > 0) sWOUrl += "&t=" + escape(sWODepartment);
    sWOUrl += "&p='" + sWOPage + "'&r='" + escape(document.referrer) + "'";
    if (sWOCost != 0) sWOUrl += "&c=" + sWOCost; if (sWORevenue != 0) sWOUrl += "&v=" + sWORevenue;
    if (sWOName != "" || sWOCompany != "" || sWOEmail != "" || sWOTelephone != "") sWOUrl += "&n=" + encodeURIComponent(encodeURIComponent(sWOName)) + "|" + sWOCompany + "|" + sWOEmail + "|" + sWOTelephone;
    if (sWOSkillNames != "") sWOUrl += "&sn=" + escape(sWOSkillNames);
    if (sWOResponse == "") {
        var d = document.createElement('div'); d.style.cssText = "position:absolute;display:none;";
        sWOImage.src = sWOUrl; d.appendChild(sWOImage); bd.appendChild(d)
    }
    else {
        sWOImage.onload = sWOImageLoaded; sWOChatElement = document.getElementById('whoson_chat_link');
        
	if (!sWOChatElement) {
            sWOChatElement = document.createElement('a'); sWOChatElement.id = 'whoson_chat_link'; var insertBefore = null;
            var scriptAr = document.body.getElementsByTagName('script'); for (var i = 0; i < scriptAr.length; i++) { if (typeof (scriptAr[i].src) != 'undefined' && scriptAr[i].src.indexOf('include.js?domain=' + sWODomain) > 0) { insertBefore = scriptAr[i] } } if (insertBefore != null) { insertBefore.parentNode.insertBefore(sWOChatElement, insertBefore) } else { bd.appendChild(sWOChatElement, bd) }
        }
        sWOUrl += "&response=g";
        if (/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent) && !navigator.userAgent.match(/iemobile/i)) {
            sWOChatstart = sWOChatstart.replace('chat.aspx', 'mobile.aspx');
        }
        sWOChatstart += "?domain=" + sWODomain;
        sWOChatstart += "&lang=it";
        if (sWOBackgroundURL != "") sWOChatstart += "&bg=" + sWOBackgroundURL; if (sWODepartment.length > 0) sWOChatstart += "&dept=" + escape(sWODepartment); if (sWOPreselect.length > 0) sWOChatstart += "&select=" + sWOPreselect;
        if (sWOSkillNames != "") sWOChatstart += "&x-requestedskills=" + escape(sWOSkillNames);
        sWOChatstart += '&timestamp=' + (new Date()).getTime();
        sWOUrl += '&timestamp=' + (new Date()).getTime();
        if (sWOSession != '') { sWOChatstart += '&session=' + sWOSession; }
        sWOImage.src = sWOUrl;
    }
    if (sWOInvite == "Y") {
        var sWO = {}; sWO.i = function () { if (typeof (woAfterLoad) == 'function') { woAfterLoad(); woAfterLoad = function () { }; } }
        if (typeof (sWOInvite) == 'undefined' || sWOInvite == '') { return; } var iog = document.createElement('script'); iog.type = 'text/javascript'; iog.async = true; iog.onload = sWO.i;
        iog.onreadystatechange = function () { if (this.readyState == 'loaded' || this.readyState == 'complete') sWO.i(); };
        iog.src = sWOUrl = sWOProtocol + "//" + sWOGateway + "/invite.js?domain=" + sWODomain; var s = document.getElementsByTagName('body')[0]; s.appendChild(iog, s);
    }
    sWOChatElement.setAttribute('style', 'display:none');
};

function checkStatus(response) {
    if (response.online > 0) {
        sWOStatus = "online";
    } else {
        sWOStatus = "offline";
    };
}

setInterval(function () {
    var oldScript = document.getElementById('jsonRequest');
    removeElement(oldScript);
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "jsonRequest";
    script.src = sWOProtocol + "//" + sWOGateway + "/stat.js?callback=checkStatus&domain=" + sWODomain + "&x=1";
    document.getElementsByTagName("head")[0].appendChild(script);
}, 30000);

function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
}
var $wo;
var $strap;
window.wo = new Object();
window.wo.layout = "{layout}";
window.wo.color = "{color}";
window.wo.server = "https://honor.whoson.com/newchat/";
window.wo.position = "{position}";
window.wo.height = "540";
window.wo.width = "430";
window.wo.image = true;
window.wo.onlineText = "Click to Chat Live";
window.wo.offlineText = "Contact Me";
window.wo.callbackTitle = "Call Me Back!";
window.wo.offlineformTitle = "Contact Form";
window.wo.chatwindowTitle = "Honor - Chat Dal Vivo";
window.wo.offlineBehaviour = "hidden";
window.wo.language = "it";
var script = document.createElement("script");
script.type = "text/javascript";
script.id = "jsonRequest";
script.src = sWOProtocol + "//" + sWOGateway + "/stat.js?callback=checkStatus&domain=" + sWODomain + "&x=1";
document.getElementsByTagName("head")[0].appendChild(script);

function checkStatus(response) {
    if (response.online > 0) {
        sWOStatus = "online";
    } else {
        sWOStatus = "offline";
    };
}

setInterval(function () {
    var oldScript = document.getElementById('jsonRequest');
    removeElement(oldScript);
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "jsonRequest";
    script.src = sWOProtocol + "//" + sWOGateway + "/stat.js?callback=checkStatus&domain=" + sWODomain + "&x=1";
    document.getElementsByTagName("head")[0].appendChild(script);
}, 30000);

function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
}

(function () {
    var $otherVersion;
    if (typeof $ == "function") {
        $otherVersion = jQuery.fn.jquery;
        if (jQuery.fn.jquery.split(".")
              .map(function (i) { return ("0" + i).slice(-2) })
              .join(".") < "01.11.03") {
            getScript('//code.jquery.com/jquery-1.11.3.min.js', function () {
                $wo = jQuery.noConflict(true);
                $('<link/>', {
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: window.wo.server + '/css-inline/wo-inline.css'
                }).appendTo('head');
                $.getScript(window.wo.server + "/js-mobile/jquery-handlebars/handlebars-v4.0.4.js").done(function () {
                    $.getScript(window.wo.server + "/js-inline/wo-inline-functions.js").done(function () {
                        $.getScript(window.wo.server + "/js-inline/wo-inline.js");
                    });
                });
            });

        } else {
            console.log("jQuery version OK!");
            $.getScript(window.wo.server + "/js-mobile/jquery-handlebars/handlebars-v4.0.4.js").done(function () {
                $.getScript(window.wo.server + "/js-inline/wo-inline-functions.js").done(function () {
                    $.getScript(window.wo.server + "/js-inline/wo-inline.js");
                });
            });
        }
    } else {
        console.log("no jQuery");
        getScript('//code.jquery.com/jquery-1.11.3.min.js', function () {
            $('<link/>', {
                rel: 'stylesheet',
                type: 'text/css',
                href: window.wo.server +'/css-inline/wo-inline.css'
            }).appendTo('head');
            $.getScript(window.wo.server + "/js-mobile/jquery-handlebars/handlebars-v4.0.4.js").done(function () {
                $.getScript(window.wo.server + "/js-inline/wo-inline-functions.js").done(function () {
                    $.getScript(window.wo.server + "/js-inline/wo-inline.js");
                });
            });
        
        });
    }

    function getScript(url, success) {
        var script = document.createElement("script");
        script.src = url;
        var head = document.getElementsByTagName("head")[0],
    	done = false;

        script.onload = script.onreadystatechange = function () {

            if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                done = true;
                success();
                script.onload = script.onreadystatechange = null;
                head.removeChild(script);
            };
        };
        head.appendChild(script);
    };

})();



