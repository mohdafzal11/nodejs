const bodyParser = require('body-parser')
const express=require('express')
const https=require('https')
const app=express()


app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.sendFile(__dirname+"/index.html")
});

app.post('/' ,(req,res)=>{
    const query=req.body.cityName;
    const apiKey='d77e6be2c3f6b2975c5e8921b7d60876'
    const url='https://api.openweathermap.org/data/2.5/weather?q='+query+'&appid='+apiKey;

    https.get(url,(response)=>{
       
        response.on('data',(data)=>{
        const weatherData=JSON.parse(data);
        const temp=weatherData.main.temp;
        const weatherDescription=weatherData.weather[0].description;
        const icon=weatherData.weather[0].icon;
        const imgURL="https://openweathermap.org/img/wn/"+icon+"@2x.png";
        res.write("<p>The wether is currently "+weatherDescription+"</>")
        res.write("<h1>The temperature is "+temp+ "<h1/>")
        res.write("<img src="+imageURL+"/>")
        res.send();

        })
        
    })
});
app.listen(3000,()=>{
    console.log("Server Started")
})

    