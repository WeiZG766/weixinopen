"use strict";

function init() {
    var e = require("../stores/webviewStores.js");
    module.exports = function(a) {
        return a.register(function(a) {
            var s = a.webviewID;
            switch (a.actionType) {
                case "UP_WEBVIEW_STATUS":
                    e.upStatus(s, a.data);
                    break;
                case "SET_WEBVIEW_ACTION":
                    e.setAction(s, a.data);
                    break;
                case "GET_A8KEY_WEBVIEW":
                    e.getA8key(s, a.data);
                    break;
                case "EXEC_WEBVIEW_JSSDK":
                    e.execJSSDK(s, a.data);
                    break;
                case "SHOW_SHARE_WEBVIEW":
                    e.showShare(s, a.data);
                    break;
                case "CLEAR_WEBVIEW_DATA":
                    e.clearData(a.data);
                    break;
                case "SET_WEBVIEW_UA":
                    e.setUA(a.data);
                    break;
                case "SET_WEBVIEW_INFO":
                    e.setInfo(a.data);
                    break;
                case "SET_INIT_URL":
                    e.setInitURL(a.URL);
                    break;
                case "SET_WEBVIEW_SNAPSHOT":
                    e.setSnapShot(s, a.data);
                    break;
                case "CHANGE_WEBVIEW_ID":
                    e.changeWebviewID(s);
                    break;
                case "DELETE_WEBVIEW_ID":
                    e.deleteWebviewID(s);
                    break;
                case "GET_JSSDK_RES":
                    e.sendJSSDKRes(a.webviewID, a.sdkName, a.sdkRes, a.sdkResExt);
                    break;
                case "SET_INTERFACT_FROMPAGEFRAME":
                    e.setInterfaceFromPageFrame(a.webviewID, a.header);
                    break;
                case "ClEAN_WEBVIEW":
                    e.cleanWebview(a.webviewID);
                    break;
                case "AS_TO_JS":
                    e.asTojs(a.data);
                    break;
                case "UP_AS_DATA":
                    e.upASData(a.appid, a.data);
                    break;
                case "AS_PUBLISH":
                    e.asPublish(a.msg);
                    break;
                case "POST_MSG_TOAS":
                    e.postMessageToAS(a.msg);
                    break;
                case "SEND_AS_SDK":
                    e.sendASSdk(a.api, a.data, a.callback);
                    break;
                case "SHOW_AUTHORIZE_SDK_DIALOG":
                    e.authorizeSdkShowDialog(a.webviewId, a.authorizeSdkId, a.appicon_url, a.appname, a.scope_list);
                    break;
                case "AUTHORIZE_SDK_RETURN":
                    e.authorizeSdkReturn(a.authorizeSdkId, a.scope_list, a.isAllowed);
                    break;
                case "SHOW_SCAN_CODE_DIALOG":
                    e.showScanCodeDialog(a.args);
                    break;
                case "SCAN_CODE_RETURN":
                    e.scanCodeReturn(a.args);
                    break;
                case "STOP_PULL_DOWN_REFRESH":
                    e.stopPullDownRefresh(a.args)
            }
        })
    }
}
init();
