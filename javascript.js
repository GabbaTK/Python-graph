import { generateBlock } from "./generatecodeblock.js";

var codeblocks = ["basicoutput.js", "basicinput.js"]
var valueTypes = {
    "VALUETYPE.ANY": "Any"
}
var codeblocksDiv = document.getElementById("sidepanel")

window.codeblockDivClick = codeblockDivClick;

window.onload = function() {
    codeblocks.forEach(codeblock => {
        import(`./codeblocks/${codeblock}`).then(module => {
            var htmlBlock = generateBlock(module.info)
            var tempDiv = document.createElement("div")

            Object.entries(valueTypes).forEach(entry => {
                var regex = new RegExp(`${entry[0]}`)
                htmlBlock = htmlBlock.replace(regex, entry[1])
            })

            // The htmlBlock is a string
            // To get an html object or whatever is called
            // It needs to be "parsed", which is done with the tempDiv
            tempDiv.innerHTML = htmlBlock
            htmlBlock = tempDiv.firstChild

            codeblocksDiv.appendChild(htmlBlock)
        })
    })
}

function codeblockDivClick(event) {
    var clickedDiv = event.target.closest(".parent")
    var cloneDiv = clickedDiv.cloneNode(true)
    
    cloneDiv.className += " moving"
    document.body.appendChild(cloneDiv)

    document.body.appendChild(cloneDiv)
} 
