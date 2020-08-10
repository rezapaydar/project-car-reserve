// window.addEventListener('load',function() {
//     while(true){
//         setInterval(() => {
//             document.
//         }, 1500);
//     }
// })
// let scroll = window.scrollY;
let imgcont = document.getElementById('img-cont');
document.addEventListener('scroll', function () {
    if (window.pageYOffset < 800 || window.pageYOffset > 2000) {
    //    alert(window.pageYOffset)
        $('img[alt="bg-down"]').css("display","none")
    }
    else {
        
        $('img[alt="bg-down"]').css("display","block")


    }
})