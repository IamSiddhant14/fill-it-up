window.addEventListener("scroll",checkit);

var fetchit = document.getElementById("skills-container");
var allele= document.querySelectorAll(".skill-progress > div")
var curr= true;

function intializetozero(){

    for (let bar of allele){
        bar.style.width = 0 +"%"
    }


}

intializetozero();

function checkit(){

    var heightop = fetchit.getBoundingClientRect();
   

        if(curr && window.innerHeight >= heightop.top){
            curr=false;

            fillitup() ;

        }else if( window.innerHeight < heightop.top){
        console.log("zfdbfxn")
        curr=true;
        intializetozero();
        
    }

function fillitup(){

    for (let bar of allele){
        let currwidth= 0;
        // let target = bar.getAttribute('data-bar-width');
        let interval =setInterval(function(){
            let target = bar.getAttribute('data-bar-width');
            if ( currwidth >= target){
                 clearInterval(interval);
                 return;
            }
            
            currwidth +=5;
            bar.style.width= currwidth + '%';
            
        }, 30);

     
    }
    }




 }
// window.addEventListener("scroll",checkit);
// var fetchit = document.getElementById("skill-container");
// var allele=document.querySelectorAll(".skill-progress > div")
// var curr = true;

// function intializetozero(){
//     for(let bar of allele){
//         bar.getElementsByClassName.widthv= 0 +"%";

//     }

// }

// intializetozero();

// function checkit(){

//     var heightop = fetchit.getBoundingClientRect;
//     if(curr && (window.innerHeight >= heighttop.top)){
//         curr=false;
//         fillitup();
//     }else if( window.innerHeight < heightop.top){
//         curr=true;
//         intializetozero()
//     }
// }


// function fillitup(){
    
//     let currw = 0;
//     for(let bar of allele){
//         let target = bar.getAttribute('data-bar-width');
//         let interval =setInterval(function(){
//             if(currw >= target){
//                 clearInterval(interval)
//                 return
//             }else if(currw < target){
//                 currw+=5;
//                 bar.style.width=currw +'%';

//             }
//         },30)
      
//     }

// }
