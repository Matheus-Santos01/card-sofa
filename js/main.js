
const iconRotate = document.querySelector('.sofa .icon-rotate')
const sofa = document.querySelector('.sofa .image-sofa')

function toggleIcon(){
    iconRotate.classList.toggle('.active')
    if(iconRotate.classList.contains('.active')){
        sofa.setAttribute('src', '../assets/sofa.gif')
        iconRotate.setAttribute('src', '../assets/close.svg')
    }else{
        sofa.setAttribute('src', '../assets/sofa.png')
        iconRotate.setAttribute('src', '../assets/rotate.svg')
    }

}