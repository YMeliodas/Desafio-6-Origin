const LinksSocialMedia = {
    github: "ymeliodas",
    youtube: "foreverplayer",
    facebook: "nathanaugusto",
    instagram: "meliodasvx_",
    twitter: "meliodasFull_"
}
function changeSocialMedialLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/$
        {LinksSocialMedia[social]}`
        
        alert(li.children[0].href)
    }

}
    /*changeSocialMedialLinks()*/

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/$
    {LinksSocialMedia.github}`

    /*fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
    })*/
}

getGitHubProfileInfos()

/*ARROW FUNCTIONS
function nomeDaFuncao(Argumentos){
    //code
}

argumento => {

}*/