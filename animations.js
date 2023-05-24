
function switchTheme(){
    //header&body
    const themeButton = document.querySelector('.themeSwitch')
    const selectedTheme = document.querySelector('.selectTheme')
    const pageHeader = document.querySelector('.pageHeader')
    //me&skills
    const techs = document.querySelector('.center')
    const meInfo = document.querySelector('.infoContainer')
    //repositories
    const stats = document.querySelector('.stats')
    const card = document.querySelectorAll('#cardContainer a')
    const seeAll = document.querySelector('.seeAll')
    //section.about
    const aboutHeader = document.querySelector('.aboutHeader')
    const about = document.querySelector('.about')
    const aboutCard = document.querySelectorAll('.aboutCard')
    //projects
    const projectsHeader = document.querySelector('.projectsHeader')
    const moreProjects = document.querySelector('.meLink')
    const projectsFooter = document.querySelector('.projectsFooter')
    //theme
    const light = 'translateX(100%)'
    const dark = 'translateX(0%)'

    if(selectedTheme.style.transform == 'translateX(0%)'){
        //theme
            selectedTheme.style.transform = light
        //header&body
            selectedTheme.style.backgroundColor = 'black'
            themeButton.style.backgroundColor = 'white'
            document.body.style.backgroundColor = 'rgb(240, 240, 240)'
            document.body.style.color = 'black'
            pageHeader.style.backgroundColor = 'white'
            pageHeader.borderColor = 'black'
        //me&skills
            techs.style.backgroundColor = 'white'
            techs.style.color = 'black'
            meInfo.style.backgroundColor = 'white'
        //repositories
            stats.style.color = 'black'
            card[0].style.backgroundColor = 'white'       
            card[1].style.backgroundColor = 'white'  
            card[2].style.backgroundColor = 'white'
            seeAll.style.color = 'black'
        //about
            aboutHeader.style.backgroundColor = 'white'
            aboutHeader.style.color = 'black'
            aboutCard[0].style.backgroundColor = 'white'
            aboutCard[1].style.backgroundColor = 'white'
            aboutCard[2].style.backgroundColor = 'white'
            about.style.color = 'black'
        //projects
            projectsHeader.style.backgroundColor = 'white'
            projectsHeader.style.color = 'black'
            moreProjects.style.color = 'black'
            projectsFooter.style.backgroundColor = 'white'
    }else{
        //theme
            selectedTheme.style.transform = dark
        //header&body
            selectedTheme.style.backgroundColor = 'white'
            themeButton.style.backgroundColor = 'rgb(0, 9, 87)'
            document.body.style.backgroundColor = 'rgb(22, 22, 22)'
            document.body.style.color = 'white'
            pageHeader.style.backgroundColor = 'rgb(39,39,39)'
            pageHeader.borderColor = 'white'
        //me&skills
            techs.style.backgroundColor = 'rgb(60,60,60)'
            techs.style.color = 'white'
            meInfo.style.backgroundColor = 'rgb(60,60,60)'
        //repositories
            stats.style.color = 'white'
            card[0].style.backgroundColor = 'rgb(60,60,60)'
            card[1].style.backgroundColor = 'rgb(60,60,60)'
            card[2].style.backgroundColor = 'rgb(60,60,60)'
            seeAll.style.color = 'white'
        //about
            aboutHeader.style.backgroundColor = 'rgb(39,39,39)'
            aboutHeader.style.color = 'white'
            aboutCard[0].style.backgroundColor = 'rgb(60,60,60)'
            aboutCard[1].style.backgroundColor = 'rgb(60,60,60)'
            aboutCard[2].style.backgroundColor = 'rgb(60,60,60)'
            about.style.color = 'white'
        //projects
            projectsHeader.style.backgroundColor = 'rgb(39,39,39)'
            projectsHeader.style.color = 'white'
            moreProjects.style.color = 'white'
            projectsFooter.style.backgroundColor = 'rgb(39,39,39)'
    }
}

function backToTop(){
    window.scrollTo(0,0)
}