const form = document.querySelector('.top-banner form');
const input =document.querySelector('.top-banner input');
const msgSpan= document.querySelector('.container .msg');
const coinList = document.querySelector('.ajax-section .container .coins');

// localStorage
localStorage.setItem('apiKey',EncryptStringAES('coinrankingecf87f13e633a469857390e70e998373de6b66adcaaf87d5'));
form.addEventListener('submit',(e)=> {
    e.preventDefault();// sayfanın her submit işlemi sırasında yenilenmesini engelliyor.
    getCoinDataFromApi();
    //form.reset == e.target.reset kalan yaziyi silmek icin entera basinca
    e.target.reset();
})

const getCoinDataFromApi = ()=> {
    // alert('Get Coin Data!!');
    const apiKey = DecryptStringAES(window.localStorage.getItem('apiKey'));
    const url = `https://api.coinranking.com/v2/coins`;
    
}