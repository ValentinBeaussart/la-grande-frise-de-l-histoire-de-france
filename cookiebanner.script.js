"use strict;"

var headerScripts = [{ "title": "Analytics", "type": "analytics", "value": "<!-- Google tag (gtag.js) -->\n  <script async src=\"https://www.googletagmanager.com/gtag/js?id=G-87H3QFYLL2\"></script>\n  <script>\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n   \n    gtag('config', 'G-87H3QFYLL2');\n  </script>" }];

var config = { "primaryColor": "#b38c52", "darkColor": "#B38C52", "lightColor": "#1d1d1e", "themeMode": "light", "showSettingsBtn": false, "showCloseIcon": false, "showDeclineBtn": true, "fullWidth": false, "displayPosition": "bottom", "settingsBtnLabel": "Customize", "delay": 2000, "expires": 365, "title": "Cookie Consentement", "description": "This website uses cookie or similar technologies, to enhance your browsing experience and provide personalised recommendations. By continuing to use our website, you agree to our ", "acceptBtnLabel": "Accepter", "declineInfoBtnLabel": "Refuser", "moreInfoBtnLink": "./politique.html", "moreInfoBtnLabel": "Privacy Policy", "cookieTypesTitle": "Select cookies to accept", "necessaryCookieTypeLabel": "Necessary", "necessaryCookieTypeDesc": "These cookies are necessary for the website to function and cannot be switched off in our systems.", "cookieTypes": [{ "type": "Analytics", "value": "analytics", "description": "Analytics cookies allow us to count visits and traffic sources, so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site." }] };

function appendScriptInHead(e) { 
    headerScripts.forEach(function (c) { 
        if (c.type === e) {
            $("head").append(c.value);
        }
    }); 
}

var injectScripts = function () {
    "undefined" != typeof headerScripts && (
        cookieBanner.isPreferenceAccepted("analytics") === true && (
            appendScriptInHead("analytics"),
            consentGrantedAdStorage()  // Call the consentGrantedAdStorage function here
        ),
        cookieBanner.isPreferenceAccepted("marketing") === true && appendScriptInHead("marketing"),
        cookieBanner.isPreferenceAccepted("preferences") === true && appendScriptInHead("preferences")
    );
};

!function (e) {
    var c = this;
    e.fn.cookieBanner = function () {
        e(":root").css("--cookieBannerLight", config.lightColor), e(":root").css("--cookieBannerDark", config.darkColor);
        var c = i("cookieConsent");
        if (c) {
            injectScripts();
        } else {
            e("#cookieBanner").remove();
            var n = '<li><input type="checkbox" name="gdprPrefItem" value="necessary" checked="checked" disabled="disabled" data-compulsory="on"> <label title="' + config.necessaryCookieTypeDesc + '">' + config.necessaryCookieTypeLabel + "</label></li>";
            e.each(config.cookieTypes, function (e, c) {
                if ("" !== c.type && "" !== c.value) {
                    var i = "";
                    c.description !== !1 && (i = ' title="' + c.description + '"'), n += '<li><input type="checkbox" id="gdprPrefItem' + c.value + '" name="gdprPrefItem" value="' + c.value + '" data-compulsory="on"> <label for="gdprPrefItem' + c.value + '"' + i + ">" + c.type + "</label></li>";
                }
            });
            var p = '<div id="cookieBanner" class="' + config.themeMode + " display-" + config.displayPosition + " full-width-" + config.fullWidth + '"><div id="closeIcon">' + s + '</div><div class="title-wrap">' + a + "<h4>" + config.title + '</h4></div><div class="content-wrap"><div class="msg-wrap"><p>' + config.description + ' <a style="color:' + config.primaryColor + ';" href="' + config.moreInfoBtnLink + '">' + config.moreInfoBtnLabel + '</a></p><div id="cookieSettings">' + l + config.settingsBtnLabel + '</div><div id="cookieTypes" style="display:none;"><h5>' + config.cookieTypesTitle + "</h5><ul>" + n + '</ul></div></div><div class="btn-wrap"><button id="cookieAccept" style="color:' + config.lightColor + ";background:" + config.primaryColor + ";border: 1px solid " + config.primaryColor + ';" type="button">' + config.acceptBtnLabel + '</button><button id="cookieReject" style="color:' + config.primaryColor + ";border: 1px solid " + config.primaryColor + ';" type="button">' + config.declineInfoBtnLabel + "</button></div>";
            setTimeout(function () { e("body").append(p), e("#cookieBanner").hide().fadeIn("slow"), config.showSettingsBtn || e("#cookieSettings").hide(), config.showDeclineBtn || e("#cookieReject").hide(), config.showCloseIcon || e("#closeIcon").hide(); }, config.delay), e("body").on("click", "#cookieAccept", function () {
                r(!0, config.expires), e('input[name="gdprPrefItem"][data-compulsory="on"]').prop("checked", !0);
                var c = [];
                e.each(e('input[name="gdprPrefItem"]').serializeArray(), function (e, i) { c.push(i.value); });
                t("cookieConsentPrefs", encodeURIComponent(JSON.stringify(c)), { expires: o(365), path: "/" });
                injectScripts();
            }), e("body").on("click", "#cookieSettings", function () { e('input[name="gdprPrefItem"]:not(:disabled)').attr("data-compulsory", "off").prop("checked", !0), e("#cookieTypes").toggle("fast", function () { e("#cookieSettings").prop("disabled", !1); }); }), e("body").on("click", "#closeIcon", function () { e("#cookieBanner").remove(); }), e("body").on("click", "#cookieReject", function () { r(!1, config.expires), t("cookieConsentPrefs", "", { expires: o(-365), path: "/" }); });
        }
    };
    var i = function (e) { return document.cookie.indexOf(e) > -1 ? !0 : !1 }, r = function (i, r) { t("cookieConsent", i, { expires: o(r), path: "/" }), e("#cookieBanner").fadeOut("fast", function () { e(c).remove() }) }, t = function (e, c) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        document.cookie = "".concat(e, "=").concat(c).concat(Object.keys(i).reduce(function (e, c) { return e + ";".concat(c.replace(/([A-Z])/g, function (e) { return "-" + e.toLowerCase() }), "=").concat(i[c]) }, ""))
    }, o = function (e) {
        var c = new Date
        return c.setTime(c.getTime() + 24 * e * 60 * 60 * 1e3), c.toUTCString()
    }, n = function (e) {
        var c = document.cookie.split(";").reduce(function (e, c) {
            var i = c.split("=").map(function (e) { return e.trim() }), r = _slicedToArray(i, 2), t = r[0], o = r[1]
            return t && o && (e[t] = decodeURIComponent(o)), e
        }, {})
        return e ? c[e] || !1 : c
    }, l = '<?xml version="1.0" ?><svg height="16px" version="1.1" viewBox="0 0 20 20" width="16px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#bfb9b9" id="Core" transform="translate(-464.000000, -380.000000)"><g id="settings" transform="translate(464.000000, 380.000000)"><path d="M17.4,11 C17.4,10.7 17.5,10.4 17.5,10 C17.5,9.6 17.5,9.3 17.4,9 L19.5,7.3 C19.7,7.1 19.7,6.9 19.6,6.7 L17.6,3.2 C17.5,3.1 17.3,3 17,3.1 L14.5,4.1 C14,3.7 13.4,3.4 12.8,3.1 L12.4,0.5 C12.5,0.2 12.2,0 12,0 L8,0 C7.8,0 7.5,0.2 7.5,0.4 L7.1,3.1 C6.5,3.3 6,3.7 5.4,4.1 L3,3.1 C2.7,3 2.5,3.1 2.3,3.3 L0.3,6.8 C0.2,6.9 0.3,7.2 0.5,7.4 L2.6,9 C2.6,9.3 2.5,9.6 2.5,10 C2.5,10.4 2.5,10.7 2.6,11 L0.5,12.7 C0.3,12.9 0.3,13.1 0.4,13.3 L2.4,16.8 C2.5,16.9 2.7,17 3,16.9 L5.5,15.9 C6,16.3 6.6,16.6 7.2,16.9 L7.6,19.5 C7.6,19.7 7.8,19.9 8.1,19.9 L12.1,19.9 C12.3,19.9 12.6,19.7 12.6,19.5 L13,16.9 C13.6,16.6 14.2,16.3 14.7,15.9 L17.2,16.9 C17.4,17 17.7,16.9 17.8,16.7 L19.8,13.2 C19.9,13 19.9,12.7 19.7,12.6 L17.4,11 L17.4,11 Z M10,13.5 C8.1,13.5 6.5,11.9 6.5,10 C6.5,8.1 8.1,6.5 10,6.5 C11.9,6.5 13.5,8.1 13.5,10 C13.5,11.9 11.9,13.5 10,13.5 L10,13.5 Z" id="Shape"/></g></g></g></svg>', a = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"> <g fill="none" fill-rule="evenodd"> <circle cx="20" cy="20" r="20" fill="#D5A150"></circle> <path fill="#AD712C" d="M32.44 4.34a19.914 19.914 0 0 1 4.34 12.44c0 11.046-8.954 20-20 20a19.914 19.914 0 0 1-12.44-4.34C8.004 37.046 13.657 40 20 40c11.046 0 20-8.954 20-20 0-6.343-2.954-11.996-7.56-15.66z"> </path> <path fill="#C98A2E" d="M10.903 11.35c-.412 0-.824-.157-1.139-.471a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.183 0 2.294.46 3.13 1.296a1.61 1.61 0 0 1-2.276 2.277 1.2 1.2 0 0 0-.854-.354 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.137 2.749z"> </path> <circle cx="12.894" cy="7.749" r="2.817" fill="#674230"></circle> <path fill="#7A5436" d="M10.09 7.48l-.003.032a1.566 1.566 0 0 0 1.624 1.683 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.624-1.683 2.823 2.823 0 0 0-2.7 2.546z"> </path> <path fill="#C98A2E" d="M4.464 24.227c-.412 0-.824-.157-1.138-.471a4.432 4.432 0 0 1 0-6.26 4.398 4.398 0 0 1 3.13-1.297c1.182 0 2.294.46 3.13 1.297a1.61 1.61 0 0 1-2.277 2.276 1.2 1.2 0 0 0-.853-.353 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.138 2.748z"> </path> <circle cx="6.456" cy="20.626" r="2.817" fill="#674230"></circle> <path fill="#7A5436" d="M3.651 20.356a1.566 1.566 0 0 0 1.62 1.716 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.622-1.683 2.824 2.824 0 0 0-2.7 2.546z"> </path> <path fill="#C98A2E" d="M10.098 32.276c-.412 0-.824-.158-1.138-.472a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.182 0 2.294.46 3.13 1.297a1.61 1.61 0 0 1-2.277 2.276 1.2 1.2 0 0 0-.853-.353 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.138 2.749z"> </path> <circle cx="12.089" cy="28.674" r="2.817" fill="#674230"></circle> <path fill="#7A5436" d="M9.285 28.405a1.566 1.566 0 0 0 1.62 1.716 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.622-1.684 2.824 2.824 0 0 0-2.7 2.546z"> </path> <path fill="#C98A2E" d="M18.95 37.91c-.411 0-.823-.158-1.137-.472a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.182 0 2.294.46 3.13 1.297a1.61 1.61 0 0 1-2.277 2.276 1.2 1.2 0 0 0-.853-.353 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.138 2.748z"> </path> <circle cx="20.942" cy="34.308" r="2.817" fill="#674230"></circle> <path fill="#7A5436" d="M18.138 34.038l-.002.033a1.566 1.566 0 0 0 1.623 1.684 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.623-1.684 2.824 2.824 0 0 0-2.7 2.546z"> </path> <path fill="#C98A2E" d="M20.56 15.385c-.411 0-.823-.157-1.138-.471a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.183 0 2.294.46 3.13 1.296a1.61 1.61 0 0 1-2.276 2.277 1.2 1.2 0 0 0-.854-.354 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.137 2.75z"> </path> <circle cx="22.552" cy="11.784" r="2.817" fill="#674230"></circle> <path fill="#7A5436" d="M19.748 11.514l-.003.033a1.566 1.566 0 0 0 1.624 1.683 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.624-1.683 2.823 2.823 0 0 0-2.7 2.546z"> </path> <path fill="#C98A2E" d="M30.219 29.861c-.412 0-.824-.157-1.139-.471a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.183 0 2.294.46 3.13 1.296a1.61 1.61 0 0 1-2.276 2.277 1.2 1.2 0 0 0-.854-.354 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.137 2.75z"> </path> <circle cx="32.21" cy="26.26" r="2.817" fill="#674230"></circle> <path fill="#7A5436" d="M29.406 25.99a1.566 1.566 0 0 0 1.62 1.716 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.623-1.683 2.824 2.824 0 0 0-2.7 2.546z"> </path> <path fill="#C98A2E" d="M29.414 14.57c-.412 0-.824-.158-1.139-.472a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.183 0 2.295.46 3.13 1.297a1.61 1.61 0 0 1-2.276 2.276 1.2 1.2 0 0 0-.853-.353 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.138 2.748z"> </path> <circle cx="31.405" cy="10.968" r="2.817" fill="#674230"></circle> <path fill="#7A5436" d="M28.601 10.698a1.566 1.566 0 0 0 1.62 1.716 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.622-1.683 2.824 2.824 0 0 0-2.7 2.546z"> </path> <path fill="#C98A2E" d="M17.341 24.227c-.412 0-.824-.157-1.138-.471a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.183 0 2.294.46 3.13 1.297a1.61 1.61 0 0 1-2.276 2.276 1.2 1.2 0 0 0-.854-.354 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.138 2.75z"> </path> <circle cx="19.333" cy="20.626" r="2.817" fill="#674230"></circle> <path fill="#7A5436" d="M16.529 20.356l-.003.033a1.566 1.566 0 0 0 1.623 1.684 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.623-1.684 2.824 2.824 0 0 0-2.7 2.546z"> </path> <g fill="#AD712C" transform="translate(2.656 1.875)"> <circle cx="7.485" cy="21.143" r="1"></circle> <circle cx="11.509" cy="21.143" r="1"></circle> <circle cx="9.497" cy="17.521" r="1"></circle> <circle cx="2.253" cy="24.765" r="1"></circle> <circle cx="10.301" cy="33.618" r="1"></circle> <circle cx="12.716" cy="30.399" r="1"></circle> <circle cx="16.74" cy="25.57" r="1"></circle> <circle cx="23.179" cy="23.155" r="1"></circle> <circle cx="21.569" cy="24.765" r="1"></circle> <circle cx="23.984" cy="27.179" r="1"></circle> <circle cx="23.984" cy="32.008" r="1"></circle> <circle cx="32.837" cy="15.107" r="1"></circle> <circle cx="30.422" cy="31.203" r="1"></circle> <circle cx="18.35" cy=".62" r="1"></circle> <circle cx="3.863" cy="7.863" r="1"></circle> <circle cx=".644" cy="12.692" r="1"></circle> <circle cx="9.899" cy="13.9" r="1"></circle> <circle cx="12.314" cy="12.692" r="1"></circle> <circle cx="9.899" cy="11.485" r="1"></circle> <circle cx="21.167" cy="17.521" r="1"></circle> <circle cx="15.935" cy="5.449" r="1"></circle> <circle cx="23.581" cy="12.692" r="1"></circle> <circle cx="24.788" cy="16.314" r="1"></circle> <circle cx="27.203" cy="16.314" r="1"></circle> <circle cx="27.203" cy="18.729" r="1"></circle> <circle cx="22.776" cy="4.242" r="1"></circle> <circle cx="25.191" cy="3.034" r="1"></circle> </g> </g></svg>', s = '<?xml version="1.0" ?><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g fill="#bfb9b9"><path d="M48,0A48,48,0,1,0,96,48,48.0512,48.0512,0,0,0,48,0Zm0,84A36,36,0,1,1,84,48,36.0393,36.0393,0,0,1,48,84Z"/><path d="M64.2422,31.7578a5.9979,5.9979,0,0,0-8.4844,0L48,39.5156l-7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844,8.4844L39.5156,48l-7.7578,7.7578a5.9994,5.9994,0,1,0,8.4844,8.4844L48,56.4844l7.7578,7.7578a5.9994,5.9994,0,0,0,8.4844-8.4844L56.4844,48l7.7578-7.7578A5.9979,5.9979,0,0,0,64.2422,31.7578Z"/></g></svg>'
    return window.cookieBanner = {
        init: function () { e.fn.cookieBanner() }, isAccepted: function () {
            var e = n("cookieConsent")
            return JSON.parse(e)
        }, getPreferences: function () {
            var e = n("cookieConsentPrefs")
            return JSON.parse(e)
        }, isPreferenceAccepted: function (e) {
            var c = n("cookieConsent"), i = n("cookieConsentPrefs")
            return i = JSON.parse(i), c === !1 ? !1 : i === !1 || -1 === i.indexOf(e) ? !1 : !0
        }
    }
}(jQuery)
