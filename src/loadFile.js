//打开文件
var onOpenFile = function () {
    fs.open("", "r", (err, file) => {
        if (err != null) alert(err)
    })
}

//打开文件夹
var onOpenFolder = function () {
    console.log("打开文件夹")
}

//导出json
var onOutput = function () {
    outPutFile(isManagerFile)
}

//是否合并
var isManagerFile = true;
var mangerFile = function () {
    isManagerFile = !isManagerFile;
    console.log(isManagerFile == true ? "合并文件" : "取消合并")
}

//加密模式切换
var clickRadio = function (value) {
    console.log(value)
}

//拖入文件
var dropbox = document.getElementById("dropbox");
if (dropbox) {
    dropbox.addEventListener("dragenter", function (e) {
        e.stopPropagation();
        e.preventDefault();
    }, false);

    dropbox.addEventListener("dragover", function (e) {
        e.stopPropagation();
        e.preventDefault();
    }, false);

    dropbox.addEventListener("drop", function (e) {
        e.stopPropagation();
        e.preventDefault();
        var dt = e.dataTransfer;
        filesFilter(dt.files)
    }, false);
} else {
    alert("不支持拖入功能!");
}

//文件过滤
var filesFilter = function (files) {
    var len = files.length;
    for (var i = 0; i < len; i++) {
        if (files[i].name.indexOf(".xlsx") >= 0 || files[i].name.indexOf(".xls") >= 0) {
            console.log(files[i])
            analysisFile(files[i])
        } else {
            addErrorLi(files[i].name)
            // alert("拖入文件不是excel");
        }
    }
}

var addSuccessLi = function (str) {
    let li = document.createElement("li")
    li.innerHTML = str
    let successUl = document.getElementById("success_ul")
    successUl.appendChild(li);
    document.getElementById("success_console").style.display = ""
}

var addErrorLi = function (str) {
    let li = document.createElement("li")
    li.innerHTML = str
    let failUl = document.getElementById("fail_ul")
    failUl.appendChild(li);
    document.getElementById("fail_console").style.display = ""
}

