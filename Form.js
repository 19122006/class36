 class Form{
     construter(){

     }
     display(){
         var title = createElement('h2')
        title.html("car racing game")
        title.position(130,0)
        var input = createInput("name")
        var button =  createButton('play')
        var message = createElement('h3')
        input.position(130,160)
        button.position(250,200)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            message.html("hello"+name)
            message.position (130,160)
        })
     }
 }