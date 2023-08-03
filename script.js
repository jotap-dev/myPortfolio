function openOrCloseMenu(){
    const menu = document.querySelector('#menu_on_open')
    const links = document.querySelectorAll('.links')

    if(menu.style.display == "none"){
        menu.style.display = "flex"
        menu.style.borderRight = '5px solid black'
        links[0].style.color = 'black'
        links[1].style.color = 'black'
        links[2].style.color = 'black'
    }else{
        menu.style.display = "none"
    }
}

function goHome(){
    window.scrollTo(0,0)
}

function goAbout(){
    window.scrollTo(0,1160)
}

function goProjects(){
    window.scrollTo(0,2520)
}

function goContact(){
    window.scrollTo(0,6680)
}

function copyEmail(){
    const copyEmail = document.querySelector('.copyEmail').innerHTML

    navigator.clipboard.writeText(copyEmail)
    
}
function copyNumber(){
    const copyNumber = document.querySelector('.copyNumber').innerHTML.replace('(', '').replace(')', '').replace('-', '')

    navigator.clipboard.writeText(copyNumber)
}

function revealAlert(){
    const customAlert = document.querySelector('.alert')
    customAlert.style.display = 'flex'

    setTimeout(() => {customAlert.style.display = 'none'} , 2000)
}