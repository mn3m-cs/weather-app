// Personal API Key for OpenWeatherMap API
api_key = '5b79a192d61ee9d215bf0e6ced037b63'

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/
const getData = async(url)
/* Function to POST data */
const postData= async (url='',data={} ) => {
    console.log(data);
    const response = await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)

    });
    try{
        const newData = await response.json();
        console.log(newData);
        return newData;
        
    }catch(error){
        console.log(error);
    }
}
postData('/add',{zip:zip})
/* Function to GET Project Data */
