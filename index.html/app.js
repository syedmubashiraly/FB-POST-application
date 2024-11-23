var selectImgPath ;


function selectedImage(src) {
   var imagesBg = document.getElementsByClassName('bg-image')
   console.log(imagesBg)
   
    for(var i = 0; i < imagesBg.length; i++) {
        imagesBg[i].className = 'bg-image'
    }
    event.target.classList.add('selectedImage')
}



function submitPost() {
var userName = document.getElementById("username");
// var title = document.getElementById("title");
var description = document.getElementById("desc");
var currentDateTime = new Date().toUTCString();

var listingContainer = document.querySelector("#listingContainer");


if (userName.value.trim() !== "") {
    if (description.value.trim() !== "") {
        listingContainer.innerHTML += `<div class="card bg-dark text-secondary "style="width: 38rem;height: 300px; padding: 10px;">
                    <div class="card-header d-flex justify-content-between">
                       <span>
                        @${userName.value}
                       </span>
                       <span>
                        ${currentDateTime}
                       </span>
                    </div>
                    
                    <div  style="background-image: url('${selectImgPath}')" class="card-body text-white postCardBody">
                        <p class="card-text" style="font-size: 40px;">${description.value} </p>
                    </div>
                    <hr>
                    <div class="justify-content-between">
                        <button class="btn post-btn text-secondary"><i class="fa-regular fa-thumbs-up fs-3 btn-icno"></i> Like</button>
                        <button class="btn post-btn text-secondary"><i class="fa-regular fa-comment fs-3 btn-icno"></i> Comment</button>
                        <button class="btn post-btn text-secondary"><i class="fa-brands fa-whatsapp fs-3"></i> Send</button>
                        <button class="btn post-btn text-secondary"><i class="fa-solid fa-share text-secondary fs-3 btn-icno"></i> Share</button>
                    </div>
                </div>`;


userName.value = ''

description.value = ''
      } else {
        alert("description is required");
      }
   
  } else {
    alert("Username is required");
  }
}


