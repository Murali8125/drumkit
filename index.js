// document.querySelector("div").addEventListener("click",call);

// document.getElementsByClassName("set").add
// for(var i=0;i<document.querySelectorAll(".drum").length;i++)
// {
    // document.querySelectorAll(".drum")[i].addEventListener("click",call);
    // document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    // var audio=new audio("sounds/tom-1.mp3");
// document.querySelectorAll(".drum")[i].
// audio.play();
//     });
// }
// function call()
// {
//     alert("i got clicked");
//  }
//  var audio=new audio('sounds/crash.mp3');
// document.querySelectorAll("button")[0].audio.play();
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
     document.querySelectorAll(".drum")[i].addEventListener("click",lis);
    
}
function lis()
{
    var num=this.innerHTML;
    // console.log(num);
    // var audio=new Audio("sounds/tom-1.mp3");
    // audio.play();
    makesound(num);
    this.style.color="white";
}
document.addEventListener("keypress",function(event)
{
    makesound(event.key);
})


function makesound(key)
{
    switch (key) {
        case "w":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
            break;
             case "l":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
                break;
                case "s":
                    var audio=new Audio("sounds/kick-bass.mp3");
                    audio.play();
                        break;
                        case "a":
                            var audio=new Audio("sounds/snare.mp3");
                            audio.play();
                                break;
                                case "d":
                                    var audio=new Audio("sounds/tom-2.mp3");
                                    audio.play();
                                        break;
                                        case "j":
                                            var audio=new Audio("sounds/tom-3.mp3");
                                            audio.play();
                                                break;
                                                case "k":
                                                    var audio=new Audio("sounds/tom-4.mp3");
                                                    audio.play();
                                                        break;
                                                                                                                            
    
        default:
            console.log("something was wrong"+ num);
            break;
    }
}
