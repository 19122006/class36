class Game {
construter(){}
    getState(){
        var game1=database.ref('gameState')
        game1.on("value",function(data){
         gameState = data.val()
        })
        
    }
    update(state){database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if (gameState === 0){
            form = new Form()
            form.display()
            
        }
    }
}

