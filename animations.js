function switchTheme(){
    const themeButton = document.querySelector('.themeSwitch')
    const selectedTheme = document.querySelector('.selectTheme')
    const pageHeader = document.querySelector('.pageHeader')
    const techs = document.querySelector('.center')

    const light = 'translateX(100%)'
    const dark = 'translateX(0%)'

    if(selectedTheme.style.transform == 'translateX(0%)'){
        selectedTheme.style.transform = light
        selectedTheme.style.backgroundColor = 'black'
        themeButton.style.backgroundColor = 'white'
        document.body.style.backgroundColor = 'rgb(240, 240, 240)'
        document.body.style.color = 'black'
        pageHeader.style.backgroundColor = 'white'
        pageHeader.borderColor = 'black'
        techs.style.backgroundColor = 'white'
        techs.style.color = 'black'
    }else{
        selectedTheme.style.transform = dark
        selectedTheme.style.backgroundColor = 'white'
        themeButton.style.backgroundColor = 'rgb(0, 9, 87)'
        document.body.style.backgroundColor = 'rgb(22, 22, 22)'
        document.body.style.color = 'white'
        pageHeader.style.backgroundColor = 'rgb(39,39,39)'
        pageHeader.borderColor = 'white'
        techs.style.backgroundColor = 'rgb(60,60,60)'
        techs.style.color = 'white'
    }
}