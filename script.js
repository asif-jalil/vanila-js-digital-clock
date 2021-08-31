function updateClock() {
  let now = new Date();
  let dName = now.getDay(),
    mo = now.getMonth(),
    dNum = now.getDate(),
    yr = now.getFullYear(),
    hr = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

  if (hr >= 12) {
    pe = "PM";
  }

  if (hr == 0) {
    hr = 12;
    pe = "AM";
  }

  if (hr > 12) {
    hr = hr - 12;
  }

  Number.prototype.pad = function (digits) {
    let s = String(this);
    while (s.length < digits) {
      s = "0" + s;
    }
    return s;
  };

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const values = [days[dName], months[mo], dNum, yr, hr.pad(2), min.pad(2), sec.pad(2), pe];
  const ids = ["dayName", "month", "dayNum", "year", "hour", "min", "sec", "period"];

  for (let i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}
