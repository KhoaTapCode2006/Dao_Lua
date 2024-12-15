

let index = 3;
let watchVideoBelow = document.getElementById("watch_video_below");
let closeMessage = document.getElementById("close_button_message");
 const play_intro = document.getElementById("play_intro_button")
 const video_introduction = document.getElementById("video_intro");
 let sendMessage = document.getElementById("send_message");
let watchVideo = document.getElementById("watch_video");
let video = document.getElementById("video_container");
let background = document.getElementById("background_body");
let closeVideo = document.getElementById("close_video");


watchVideoBelow.addEventListener("click", function(){
  video.style.display = "flex";
  setTimeout(function(){
    video.style.top = 20 + '%';
    video.style.zIndex  = 3;
    video.style.opacity = 1;
  }, 100)
  
  background.style.zIndex = 2;
  background.style.opacity = 0.5;
});


watchVideo.addEventListener("click", function(){
  video.style.display = "flex";
  setTimeout(function(){
    video.style.top = 20 + '%';
    video.style.zIndex  = 3;
    video.style.opacity = 1;
  }, 100)
  

  background.style.zIndex = 2;
  background.style.opacity = 0.5;
});

closeVideo.addEventListener('click', function(){
  video.style.top = -50 + '%';
  video.style.zIndex  = -1;
  video.style.opacity = 0;
  setTimeout(function(){
    video.style.display = "none";
  }, 500)

  background.style.zIndex = -1;
  background.style.opacity = 0;
});
 closeMessage.addEventListener("click", function(){
  document.getElementById("message_received_container").style.opacity = 0;
  document.getElementById("message_received_container").style.top = -25 +"%";
 }) 
 sendMessage.addEventListener('click', function(){
  document.getElementById("message_received_container").style.opacity = 1;
  document.getElementById("message_received_container").style.top = 5 +"%";
 })
 play_intro.addEventListener('click', function() {
  document.getElementById("video_intro").play();
 });
function video_intro_player(){
  video_introduction.style.display="block";
  document.getElementById("thumbnail_background").style.display="none";
  video_intro.volume = 0.5;
}

video_introduction.onended = function(){
  document.getElementById("thumbnail_background").style.display="flex";
  video_introduction.style.display="none";
  video_intro.volume = 0;
}

function rightSlide(){
  showMemberSlide_Right();
}

function leftSlide(){
  showMemberSlide_Left();

}



function showMemberSlide_Right(){

  let slide_member_1 = document.getElementsByClassName("member_group_1")[0];
  let slide_member_2 = document.getElementsByClassName("member_group_2")[0];
  let slide_member_3 = document.getElementsByClassName("member_group_3")[0];

  slide_member_2.className = slide_member_2.className.replace("member_group_2", "member_group_3");
  setTimeout(function(){
    slide_member_2.style.display = "none";
    slide_member_1.style.display = "flex";
  },500);
  
  setTimeout(function(){
  
  slide_member_1.className = slide_member_1.className.replace("member_group_1", "member_group_2");
}, 530);
  
  slide_member_3.style.display = "none";
  slide_member_3.className = slide_member_3.className.replace("member_group_3", "member_group_1");

}

function showMemberSlide_Left(){

  let slide_member_1 = document.getElementsByClassName("member_group_1")[0];
  let slide_member_2 = document.getElementsByClassName("member_group_2")[0];
  let slide_member_3 = document.getElementsByClassName("member_group_3")[0];

  slide_member_2.className = slide_member_2.className.replace("member_group_2", "member_group_1");
  
  setTimeout(function(){
    slide_member_2.style.display = "none";
    slide_member_3.style.display = "flex";
  },500);
  
  setTimeout(function(){
    slide_member_3.className = slide_member_3.className.replace("member_group_3", "member_group_2");
  }, 530);
  
  slide_member_1.style.display = "none";
  slide_member_1.className = slide_member_1.className.replace("member_group_1", "member_group_3");

}




