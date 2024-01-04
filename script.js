const temp_box=document.getElementById('op_temp');
const city_box=document.getElementById('op_city');
const humidity_box=document.getElementById('op_humidity');
const wind_box=document.getElementById('op_wind');
const wImg=document.getElementById('img_weather');
const btnSearch=document.getElementById('btn_search');

btnSearch.addEventListener('click',()=>{

    let city=document.getElementById('ip_city').value;
    getWeatherDetails(city);

})


async function getWeatherDetails(city)
{
    let apiReq="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=7c0357f2067065df7fe03be9e106b60b&units=metric";

    let response=await fetch(apiReq);

    if(response.status==404)
    {
        document.getElementById('d_details').style.display='none';
        document.getElementById('error').style.display='block';
    }else
    {
        document.getElementById('error').style.display='none';
        let data=await response.json();
          
        temp_box.innerText=Math.round(data.main.temp)+"°C";
        city_box.innerText=data.name;
        humidity_box.innerText=data.main.humidity+'%';
        wind_box.innerText=data.wind.speed+"km/h";
    
         let wc=data.weather[0].main;
    
    
          if(wc=="Clear")
          {
           wImg.src='./Images/images/clear.png'
       
          }else if(wc==='Clouds'){
            wImg.src='./Images/images/clouds.png'
          }else if(wc==='Drizzle'){
            wImg.src='./Images/images/drizzle.png'
          }else if(wc==='Snow'){
            wImg.src='./Images/images/snow.png'
          }else if(wc==='Rain')
          {
            wImg.src='./Images/images/rain.png'
          }else if(wc==='Mist')
          {
            wImg.src='./Images/images/mist.png'
          }
          document.getElementById('d_details').style.display='block';
        
    }
  
}



