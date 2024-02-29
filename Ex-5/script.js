let Generatebtn = document.querySelector(".Generate-btn");

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  if (views < 1000000) {
    viewstr = views / 1000 + "k";
  } else if (views > 1000000) {
    viewstr = views / 1000 + "M";
  } else {
    viewstr = views / 1000 + "k";
  }
  let html = ` 
       
        <div class="card">
          <div class="card_thumbnail">
            <img src="${thumbnail}" alt="card_thumbnail" />
          </div>
          <div class="card_info">
            <div class="card_title">${title}</div>
            <span class="cName">Channel : ${cName}</span>
            <span class="views"> . ${viewstr}</span>
            <span class="mold">${monthsOld} months old</span>
            <div class="duration">${duration}</div>
          </div>
        </div>
      
      `;
  document.querySelector(".card_contaoner").innerHTML =
    document.querySelector(".card_contaoner").innerHTML + html;
}
function caller(params) {
  createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
  );
}
Generatebtn.addEventListener("click", caller);
