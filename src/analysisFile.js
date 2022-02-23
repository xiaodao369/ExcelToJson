var cfgData = {}; //加载成功的数据

//解析文件
var analysisFile = function (file) {
    let reader = new FileReader();
    var confName = file.name;
    reader.onload = function (e) {
        confData = window["XLSX"].read(e.currentTarget["result"], { type: 'binary' });
        if (confData) {
            cfgData[confName.slice(0, confName.indexOf("."))] = confData;
            addSuccessLi(confName)
        } else {
            addErrorLi(confName)
        }
    };
    reader.readAsBinaryString(file);
}

//转json
var cfgToJson = function () {
    let jsonData = {}
    for (const key in cfgData) {
        let workbook = cfgData[key];
        let itemJSON = {}
        for (const sheet in workbook.Sheets) {
            let nameKey = sheet;
            let jd = window["XLSX"].utils.sheet_to_json(workbook.Sheets[sheet]);
            if (jd != null && jd.length > 0) {
                if (nameKey.indexOf("Sheet") >= 0) {
                    nameKey = key;
                }
                itemJSON[nameKey] = jd;
            }
        }
        jsonData[key] = itemJSON;
    }
    return jsonData;
}