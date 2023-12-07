// 绝对路径
const cssCDN = "https://cdn.jsdelivr.net/gh/qxdn/life-progress@latest/life-progress.min.css";
const jsCDN = "https://cdn.jsdelivr.net/gh/qxdn/life-progress@latest/life-progress.min.js";
const targetElementId = "life-progress";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
  return new Promise((resolve, reject) => {
    let tag;

    if (type === "css") {
      tag = document.createElement("link");
      tag.rel = "stylesheet";
      tag.href = url;
    } else if (type === "js") {
      tag = document.createElement("script");
      tag.src = url;
    }
    if (tag) {
      tag.onload = () => resolve(url);
      tag.onerror = () => reject(url);
      document.head.appendChild(tag);
    }
  });
}

const targetElement = document.getElementById(targetElementId);
loadExternalResource(cssCDN, "css");
targetElement.innerHTML = `
<div class="content">
<div class="item" id="dayProgress">
  <div class="title">今日已经过去<span></span>小时</div>
  <div class="progress">
    <div class="progress-bar">
      <div class="progress-inner progress-inner-1"></div>
    </div>
    <div class="progress-percentage"></div>
  </div>
</div>
<div class="item" id="weekProgress">
  <div class="title">这周已经过去<span></span>天</div>
  <div class="progress">
    <div class="progress-bar">
      <div class="progress-inner progress-inner-2"></div>
    </div>
    <div class="progress-percentage"></div>
  </div>
</div>
<div class="item" id="monthProgress">
  <div class="title">本月已经过去<span></span>天</div>
  <div class="progress">
    <div class="progress-bar">
      <div class="progress-inner progress-inner-3"></div>
    </div>
    <div class="progress-percentage"></div>
  </div>
</div>
<div class="item" id="yearProgress">
  <div class="title">今年已经过去<span></span>个月</div>
  <div class="progress">
    <div class="progress-bar">
      <div class="progress-inner progress-inner-4"></div>
    </div>
    <div class="progress-percentage"></div>
  </div>
</div>
</div>
`;

loadExternalResource(jsCDN, "js");
