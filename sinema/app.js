const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.querySelector('.amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)')

container.addEventListener('click', function (e){
   if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
    e.target.classList.toggle('selected');
    calculateTotal()
      

   }
})

select.addEventListener('change', function(e){
    calculateTotal();
})

function calculateTotal(){
    const selectedSeats = container.querySelectorAll('.seat.selected');

    const selectedSeatsArr=[];
    const seatArr=[];

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat); 
    })

    let selectedSeatCount = selectedSeats.length;
      
      count.innerText= selectedSeatCount;
      amount.innerText= selectedSeatCount *select.value;
}