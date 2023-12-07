/*人生倒计时侧边栏*/
function init_life_time() {
    if (document.querySelector('.aside-count') == null) { return; }
    function getAsideLifeTime() {
        let nowDate = +new Date();
        let todayStartDate = new Date(new Date().toLocaleDateString()).getTime();
        let todayPassHours = (nowDate - todayStartDate) / 1000 / 60 / 60;
        let todayPassHoursPercent = (todayPassHours / 24) * 100;
        document.querySelector('#dayProgress .title span').innerHTML = parseInt(todayPassHours);
        document.querySelector('#dayProgress .progress .progress-inner').style.width = parseInt(todayPassHoursPercent) + '%';
        document.querySelector('#dayProgress .progress .progress-percentage').innerHTML = parseInt(todayPassHoursPercent) + '%';
        let weeks = {
            0: 7,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6
        };
        let weekDay = weeks[new Date().getDay()];
        let weekDayPassPercent = (weekDay / 7) * 100;
        document.querySelector('#weekProgress .title span').innerHTML = weekDay;
        document.querySelector('#weekProgress .progress .progress-inner').style.width = parseInt(weekDayPassPercent) + '%';
        document.querySelector('#weekProgress .progress .progress-percentage').innerHTML = parseInt(weekDayPassPercent) + '%';
        let year = new Date().getFullYear();
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let monthAll = new Date(year, month, 0).getDate();
        let monthPassPercent = (date / monthAll) * 100;
        document.querySelector('#monthProgress .title span').innerHTML = date;
        document.querySelector('#monthProgress .progress .progress-inner').style.width = parseInt(monthPassPercent) + '%';
        document.querySelector('#monthProgress .progress .progress-percentage').innerHTML = parseInt(monthPassPercent) + '%';
        let yearPass = (month / 12) * 100;
        document.querySelector('#yearProgress .title span').innerHTML = month;
        document.querySelector('#yearProgress .progress .progress-inner').style.width = parseInt(yearPass) + '%';
        document.querySelector('#yearProgress .progress .progress-percentage').innerHTML = parseInt(yearPass) + '%';
    }
    getAsideLifeTime();
    setInterval(() => {
        getAsideLifeTime();
    }, 1000);
}
init_life_time()