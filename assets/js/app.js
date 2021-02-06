const records = document.querySelectorAll('.capt');
window.addEventListener('scroll', countUp);

function up(record)
{
   let number = 0;
   let interval = setInterval(() => {
        if(number <= record.dataset.n){
            record.innerHTML = number++;
        }

   }, 10)
}

function countUp()
{
    if(window.pageYOffset > 1300){
        for(let record of records) up(record);
        window.removeEventListener('scroll',  countUp, false);
    }
    
}