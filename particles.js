//Skills Section
let imgBx = document.querySelectorAll('.imgBx');
let contentBx = document.querySelectorAll('.contentBx');

for(let i=0; i<imgBx.length; i++){
    imgBx[i].addEventListener('mouseover',function(){
        for(let i=0; i<contentBx.length;i++){
            contentBx[i].className='contentBx';
        }
        document.getElementById(this.dataset.id).className=
            'contentBx active';
        for(let i=0; i<imgBx.length; i++){
            imgBx[i].className='imgBx';
        }
        this.className='imgBx active';
    })
}
const cursor = document.querySelector(".cursor-skill");
document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
});