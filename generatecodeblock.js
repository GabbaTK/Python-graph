var templateStart = `<div class="sidepanel codeblock parent" onClick="codeblockDivClick(event)">
    <h2 class="sidepanel codeblockinfo">BLOCKNAME</h2>
    <p class="sidepanel codeblockinfo">BLOCKDESCRIPTION</p>

    <br>`

var templateMiddle = `    <div class="thinblackline sidepanel inoutseparator"></div>`
var templateEnd = `</div>`

var inputTemplate = `<div class="sidepanel codeblockpair">
<p class="sidepanel codeblockinfo varname">INPUTVARNAME</p>
<p class="sidepanel codeblockinfo vartype">TYPE</p>
</div>`

var outputTemplate = `<div class="sidepanel codeblockpair">
<p class="sidepanel codeblockinfo varname">OUTPUTVARNAME</p>
<p class="sidepanel codeblockinfo vartype">TYPE</p>
</div>`

export function generateBlock(blockinfo) {
    var block = templateStart

    block = block.replace("BLOCKNAME", blockinfo["blockname"])
    block = block.replace("BLOCKDESCRIPTION", blockinfo["description"])

    Object.entries(blockinfo["datain"]).forEach(input => {
        var inputs = inputTemplate

        inputs = inputs.replace("INPUTVARNAME", input[0])
        inputs = inputs.replace("TYPE", input[1])

        block += inputs
    });

    block += templateMiddle

    Object.entries(blockinfo["dataout"]).forEach(output => {
        var outputs = outputTemplate

        outputs = outputs.replace("OUTPUTVARNAME", output[0])
        outputs = outputs.replace("TYPE", output[1])

        block += outputs
    });

    block += templateEnd

    return block
}
