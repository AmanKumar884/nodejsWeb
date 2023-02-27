const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const day = document.getElementById('day');
const today_data = document.getElementById('today_data')


const getInfo = async(event) => {
  event.preventDefault();
  // unit=metric to convert the temperature into degree celcius.
  let cityVal = cityName.value;
  if(cityVal=== ""){
    city_name.innerText = `Please write the name before searching!`;
  }
  // http://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=85b8f5784074d3a6256157d4981b18bb
  else{
    try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=85b8f5784074d3a6256157d4981b18bb`;
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        const arrData = [data];
        city_name.innerText = arrData[0].name + ", " + arrData[0].sys.country;
        temp.innerText = arrData[0].main.temp + "°C";
        temp_status.innerText = arrData[0].weather[0].main;
        const tempMood = arrData[0].weather[0].main;

        //condition to check sunny or cloudy
      if (tempMood == "Sunny") {
        temp_status.innerHTML =
          "<i class='fa fa-sun' style='color: #eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud' style='color: #eccc68;'></i>";
      } else if (tempMood == "Haze") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fa fa-tint' style='color:#eccc68;'></i>";
      }

     
        // Displaying the days
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        const d = new Date();
        let current_day = weekday[d.getDay()];
        day.innerText = current_day;

        // Displaying the month name
        const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
        let month = months[d.getMonth()];
        let curr_date = d.getDate();

        today_data.innerText = month + " " + curr_date;


    }catch{
        city_name.innerText = `Please enter valid city name!`;
    }
    
  }
};
//http://api.openweathermap.org/data/2.5/weather?q=Gopalpur&appid=85b8f5784074d3a6256157d4981b18bb
submitBtn.addEventListener("click", getInfo);
