//? Selectors
const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

//?  Sonuc tablosu

const gelirinizTd = document.getElementById("geliriniz")


//? Variables
let gelirler = ""
//?Events

//Formun submit butonuna basildignda 
ekleFormu.addEventListener("submit", (e) => {
    e.preventDefault()  //? reload u engeller(sayfa yenileme)
   gelirler = Number(gelirler) + Number(gelirInput.value) //string eklemeyi engelledik
//input degerini sifiladik.
   ekleFormu.reset()

   //* degisiklikleri sonuc tablosuna yazan fonk.
   hesaplaVeGuncelle()
   
})
//? Functions

const hesaplaVeGuncelle = ()=> {

    gelirinizTd.innerText = gelirler
}
