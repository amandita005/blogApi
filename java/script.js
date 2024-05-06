;

const buttons = document.querySelectorAll('.btn'); // Select all buttons
const sectionBox = document.querySelector('.container-box');
const textView = document.querySelector('.text-view');
const informationView = document.querySelector('.information-view');

const img = document.querySelector('.img-box');
const imgBox = document.querySelector('.img-view');
const backHome = document.querySelector('#back-home');
const moreView = document.querySelector('#modal-view');
const videos = document.querySelector('#videos');
const containerVideos = document.querySelector('#links-dancas');


videos.addEventListener("click", function(){
  moreView.style.display = "none";
  sectionBox.style.display = "none";
  containerVideos.style.display = "inline"
})



backHome.addEventListener("click", function(){
  sectionBox.style.display = "block";
  moreView.style.display = "none";
})

buttons.forEach(button => {
  button.addEventListener('click', function() {
    console.log("okay"); 
    
    sectionBox.style.display = "none";
    moreView.style.display = "inline-block";
    const elemetoPai = button.parentElement; 
   
    textView.textContent = button.textContent;
    console.log(button.textContent);

    const  information = elemetoPai.querySelector('.information');
    const img = elemetoPai.querySelector('.img-box');

    informationView.textContent = information.textContent;
    imgBox.src = img.src;
    
    // This code will be executed when a button is clicked
  });
});
