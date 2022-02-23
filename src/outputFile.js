//导出文件
var outPutFile = function (isManager) {
    let jsonData = cfgToJson();
    if (isManager) {
        saveFile("GameCfg", jsonData);
    } else {
        for (const key in jsonData) {
            saveFile(key, jsonData);
        }
    }
}

/**保存单个json文件 */
var saveFile = function (key, jsonData) {
    jsonData = JSON.stringify(jsonData);
    jsonData.trim(jsonData, "\xEF\xBB\xBF"); //去除bom头
    var file = new File([jsonData], key + ".json", { type: "text/plain;charset=utf-8" });
    window["saveAs"](file);
    addSuccessLi(key + " 导出完成")
}