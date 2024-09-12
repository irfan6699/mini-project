const slider=document.querySelector(`.slider`);
 let count=0
function changeImage(){
    const imagecon=["slider1.jpg","slider2.jpg"];
    count=(count+1)%imagecon.length;
      slider.style.backgroundImage=`url('${imagecon[count]}')`;
      
    };
setInterval(changeImage,3000);

const changes = document.querySelectorAll('.change');
changes.forEach(change => {
    change.addEventListener('click', () => {
        if (change.src.includes('black.png')) {
            change.src = 'Heart.png';
        } else {
            change.src = 'black.png';
        }
    });
});
const directTra=document.getElementById('tra');
directTra.addEventListener('click',function(){
    window.location.href="traditional.html";
});
