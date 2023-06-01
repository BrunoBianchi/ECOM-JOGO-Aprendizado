sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
})
let localizacao_aleatoria = 0
let mySprite: Sprite = null
effects.starField.startScreenEffect()
let personagem = sprites.create(assets.image`player`, SpriteKind.Player)
personagem.y = 100
personagem.setStayInScreen(true)
controller.moveSprite(personagem, 100, 0)
game.onUpdateInterval(2000, function () {
    mySprite = sprites.create(assets.image`enemy1`, SpriteKind.Enemy)
    localizacao_aleatoria = randint(1, scene.screenWidth())
    mySprite.setPosition(localizacao_aleatoria, 7)
    mySprite.setVelocity(0, 50)
})
