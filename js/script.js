const LinksSocialMedia = {
    github= "YMeliodas",
    youtube = "Forever Player",
    facebook = "Nathan Augusto",
    instagram ="meliodasvx_",
    twitter = "MeliodasFull_"
}
 function changeLinksSocialMedialLinks(){
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')
        
        li.children[0].href = `https://${social}.com/$
        {LinksSocialMedia.[social]}`

        alert(li.children[0].href)
    }
}
changeLinksSocialMedialLinks()