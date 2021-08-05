// 高評価ボタンの下にある評価比率バーを非表示にする（これが生きていると、低評価ボタンだけを非表示にしても場合によっては意味がない事があると思うので）
// ※CSSでやりたいんだけど何故か上手く行かないのでJavaScriptで強引に対応。
window.addEventListener("load", function () {
    setInterval(() => {
        var bar = document.getElementById("sentiment");
        if (bar === undefined) { return; }
        bar.style.display = "none";
    }, 500);
}, false);
