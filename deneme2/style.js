const textInput= document.querySelector('.textbox')
const tikInput= document.querySelector('.checkbox')


// input kutusunun ustunden elini kaldirdiginda eger check kutusu tikli ise inputlar buyuk harfe donussun
 // tikli degilse kucuk harf yap

textInput.onkeyup=()=>{
if(tikInput.checked){textInput.value=textInput.value.toUpperCase()}


else
{
    textInput.value=textInput.value.toLowerCase()
}

 } 
//***********yeni bir element ve icerik olusturma */
//**uzun yol. */
 const baslik=document.createElement('h1')
 baslik.className='baslik2'

 const yazi=document.createTextNode('Programlama Dilleri')


 baslik.appendChild(yazi)

 document.querySelector('.inputDiv').after(baslik)


 //!*********************************
 //*Kisa yol

 const bolum= document.querySelector('section')

 bolum.innerHTML= `<h1 class="baslik2 text-center" >Programlama Dilleri</h1>`+ bolum.innerHTML


 //* 2.bir ornek.
 //* li lere yeni bir eleman eklemek.uzun ve kisa yollarla
//*languages inputuna girilen degerleri, ul ye eklemek
const dil=document.querySelector('.languages')
const liste=document.querySelector('.liste')



 const yenili= document.createElement('li')
 const  text= document.createTextNode('dil.value')
yenili.appendChild(text)
liste.appendChild(yenili)

//*kisayol(tek tek yazma degil ekle butonuna onclikc yapilinca yazilsin)
document.querySelector('.ekle').onclick=()=>{
    liste.innerHTML=liste.innerHTML +`<li>${dil.value}</li>`  
}




//? silme islemi
document.querySelector('.sil').onclick=()=>{
// liste.removeChild(liste.lastElementChild)
// liste.removeChild(liste.firstElementChild)
liste.removeChild(liste.children[5])

}





