class Form{
    constructor(){

    }
display(){
    var title = createElement('h2')
    title.html("carRacing")
    title.position(130,0)
    var input  = createInput("name")
    var button = createButton("ok")
    input.position(130,160)
    button.position(250,200)
    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name = input.value()
        var creating = createElement('h3')
        creating.html("hello"+name)
        creating.position(130,160)
    })
}
}
