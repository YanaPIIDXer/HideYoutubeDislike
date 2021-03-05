// 高評価ボタンの下にある評価比率バーを非表示にする（これが生きていると、低評価ボタンだけを非表示にしても場合によっては意味がない事があると思うので）
// ※CSSでやりたいんだけど何故か上手く行かないのでJavaScriptで強引に対応。
window.addEventListener("load", function ()
{
    // 動的に何かやっているようなので遅延させる。
    // 参考：https://qiita.com/3mc/items/c3c580ca5de4a2d3990d
    setTimeout(function ()
    {
        var bar = document.getElementById("like-bar");
        if (bar === undefined) { return; }
        bar.style.display = "none";    
    }, 100);
}, false);
