const replaceImages = () => {
    let allImages = document.getElementsByTagName('img')

    for (let i = 0; i < allImages.length; i++) {

        let replacementNode = document.createTextNode(allImages[i].alt)
        allImages[i].parentNode.replaceChild(replacementNode, allImages[i])
    }
}
