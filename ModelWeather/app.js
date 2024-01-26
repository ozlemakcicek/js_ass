let url ="https://api.openweathermap.org/data/2.5/";


//bunu asagida sifreleyecegiz

const form=document.querySelector("form")
const input=document.querySelector("form .header #searchBar")
const list=document.querySelector(".cities")
const msgSpan=document.querySelector(".msg")
const btn=document.querySelector(".buton")


let units="metric"
let cities=[]  // sorgulanan sehirleri tutacak



form.addEventListener('submit',(e)=>{
    e.preventDefault()  //Her bastgimizda refresh yapmasinki verilerimiz kaybolmasin

    // bir sehir ismine ihtycmz var.inputun value s olacak.bu sonra da inputu aldiktan sonra veriyi sil deriz bos tirnaga esitleyerek
// metin girilmese bile basinca calisip api daki hakkimizi yemesin diye bir if sarti icine alacagiz asagidaki fonksiyonu
    if(input.value){

    const cityName=input.value;
//     // input.value=""  // tek giriste skinti yok bunu kullanabiliriz ama cok fazla sayida varsa o zaman form.reset kullanacagiz
// console.log(cityName);
   
const apiKey = "15d5ebe5cb320007963e8c229c7d55c8"; 
url =
      "https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}";
console.log(url);
getWeatherDataFromApi()
    }
    form.reset();
     
})

const getWeatherDataFromApi=async()=>{
try{

const response=await fetch(url).then((response)=>response.json())


}catch(error){

}

}















