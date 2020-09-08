// Personal API Key for OpenWeatherMap API
api_key = '5b79a192d61ee9d215bf0e6ced037b63';
url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let date = new Date();
let currentDate = date.getMonth() + 1 + '/'+ date.getDate() +'/'+date.getFullYear();


// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/
const getData = async(url='')=>{
    try{
        const res = await fetch(url);
        const data = await res.json();
        return data;

    }catch (error){
        console.error(error);
    }
};

/* Function to POST data */
const postData= async (url='',data={} ) => {
    const response = await fetch(url,{
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)

    });
    /*
    try{
        const newData = await response.json();
        console.log(newData);
        return newData;
        
    }catch(error){
        console.error(error);
    }*/
}
/* Function to GET Project Data */

const  refresh = async() =>{
    console.log('refresh div with new data');
    const projectData = await getData('/data');
    console.log(projectData);
    data = document.getElementById('data');
    data.innerHTML='';
    date = document.createElement('p');
    date.innerHTML = `Date: ${projectData.date}`;
    data.appendChild(date);
    temp = document.createElement('p');
    temp.innerHTML = `Temprature: ${projectData.temp}`;
    data.appendChild(temp);
    userFeelings = document.createElement('p');
    userFeelings.innerHTML = `You feels: ${projectData.userFeelings}`;
    data.appendChild(userFeelings);
    
}
const generate = async() => {
    const feel = document.getElementById('feel').value;
    const zip = document.getElementById('zip').value;
    const response = await fetch(`${url}${zip}&appid=${api_key}`);
    console.log(response);
    try {
    const data = await response.json();
    data.userFeelings = feel;
    data.date = currentDate;
    await postData('/',data);
    //document.querySelector('data').innerHTML='';
    refresh();
}catch (error){
    console.error(error)
}
}

document.getElementById('generate').addEventListener('click',generate);