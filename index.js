const container = document.querySelector('.container');
const seats = document.querySelectorAll('row seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');

const movieSelect = document.getElementById('movie');

let ticketPrice;


container.addEventListener('click',function(e) {

    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
        e.target.classList.toggle('selected');
    
        calculateTicket();
})

function calculateTicket(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

//    console.log(selectedSeats.length);
      count.innerText = selectedSeats.length;    

      ticketPrice = selectedSeats.length;
    
      total.innerText = selectedSeats.length *10;
}
