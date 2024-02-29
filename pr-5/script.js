const timeZones = {
  USA: "America/New_York", // Eastern Time (ET)
  UK: "Europe/London", // Greenwich Mean Time (GMT)
  Japan: "Asia/Tokyo", // Japan Standard Time (JST)
  Australia: "Australia/Sydney", // Australian Eastern Time (AEST)
  Russia: "Europe/Moscow", // Moscow Standard Time (MSK)
  China: "Asia/Shanghai", // China Standard Time (CST)
  France: "Europe/Paris", // Central European Time (CET)
  India: "Asia/Kolkata", // Indian Standard Time (IST)
  Canada: "America/Toronto", // Eastern Time (ET) for Toronto
  Brazil: "America/Sao_Paulo", // Brasília Time (BRT)
  Germany: "Europe/Berlin", // Central European Time (CET)
  Mexico: "America/Mexico_City", // Central Time (CT) for Mexico City
  "South Africa": "Africa/Johannesburg", // South Africa Standard Time (SAST)
  // Add more countries and time zones as needed
};
const dropdownMenu = document.getElementById("countryDropdown");
var selectedCountry;
// Loop through the timeZones object and create list items for each country
Object.keys(timeZones).forEach(function (country) {
  // Create a new list item
  const listItem = document.createElement("li");

  // Create a link element for the country name
  const link = document.createElement("a");
  link.classList.add("dropdown-item");
  link.href = "#";
  link.textContent = country;

  // Add an event listener to handle country selection
  link.addEventListener("click", function (e) {
    selectCountry(country);
  });

  // Append the link to the list item
  listItem.appendChild(link);

  // Append the list item to the dropdown menu
  dropdownMenu.appendChild(listItem);
});

// Function to handle country selection
function selectCountry(country) {
  selectedCountry = country;
  updateTime();
}

// Retrieve the time zone based on user input
function updateTime() {
  var d = new Date();
  var timeString = d.toLocaleTimeString("en-US", {
    timeZone: timeZones[selectedCountry],
  });
  document.querySelector("#timeNewYork").innerHTML = timeString;
  document.querySelector(
    ".card-title"
  ).innerHTML = `${selectedCountry}  Current Time`;

  // Alarm
  let AlarmSound = new Audio();
  AlarmSound.src = "Alarm.wav";
  AlarmSound.pause();
  let CurrentCountryMinute = timeString.split(":")[0];
  let CurrentCountrySecond = timeString.split(":")[1];
  let Alaraminput = document.querySelector("#AlarmTime").value;
  var AlarmMinutes;
  if (CurrentCountryMinute.length == 1) {
    AlarmMinutes = Alaraminput.split(":")[0].split("")[1];
  } else if (CurrentCountryMinute.length == 2) {
    AlarmMinutes = Alaraminput.split(":")[0];
  }
  AlarmSeconds = Alaraminput.split(":")[1];
  document.querySelector("#setalarmbtn").addEventListener("click", () => {
    if (
      CurrentCountryMinute == AlarmMinutes &&
      CurrentCountrySecond == AlarmSeconds
    ) {
      AlarmSound.play();
      Alaramplayed = true;
      document.querySelector("#setalarmbtn").innerHTML = "Stop Alarm";
      document
        .querySelector("#setalarmbtn")
        .classList.replace("btn-primary", "btn-danger");
    }
  });
  // Call updateTime again after 1 second
  setTimeout(updateTime, 1000);
}
