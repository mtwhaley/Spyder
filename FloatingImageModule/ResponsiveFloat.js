function rewireFloatDivs() {
    const leftImgs=document.getElementsByClassName("floatLeftImg")
    const rightImgs=document.getElementsByClassName("floatRightImg")
    const imgs=[...leftImgs, ...rightImgs]
    

    imgs.forEach((img)=> {
        const parent=img.parentElement
        const winWidth=window.innerWidth
        var mainDiv=null
        var textDiv=null
        var childOfMain=false
        

        for (var i=0;i<parent.classList.length;i++) {
            if (parent.classList[i]=="floatMain") {
                childOfMain=true
                break
            }
        }

        if ((childOfMain) &&(winWidth<=1024)) {
            mainDiv=parent
            for (var i=0;i<mainDiv.children.length;i++) {
                if (mainDiv.children[i].className=="floatTextDiv") {textDiv=mainDiv.children[i]; break;}
            } 
            mainDiv.removeChild(img)
            textDiv.insertBefore(img, textDiv.children[0])
        }
        else  if ((parent.className=="floatTextDiv")&&(winWidth>1024)){
            textDiv=parent
            mainDiv=textDiv.parentElement
            textDiv.removeChild(img)
            if (img.getAttribute("class")=="floatLeftImg") {
                mainDiv.insertBefore(img, mainDiv.children[0])
            }
            else {
                mainDiv.appendChild(img)
            }
        }
        else {return}



        
    })
}