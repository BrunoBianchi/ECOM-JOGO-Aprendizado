namespace SpriteKind {
    export const empty = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bala = sprites.create(assets.image`myImage`, SpriteKind.Projectile)
    bala.setPosition(personagem.x, personagem.y)
    bala.setVelocity(0, -50)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.setLife(info.life() - 1)
    sprites.destroy(mySprite)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    animation.runImageAnimation(
    empty_enemy,
    assets.animation`explosao`,
    200,
    false
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Vida_Inimiga.value = Vida_Inimiga.value - 10
    sprites.destroy(bala)
    if (Vida_Inimiga.value == 0) {
        sprites.destroy(mySprite)
    }
})
let localizacao_aleatoria = 0
let Vida_Inimiga: StatusBarSprite = null
let empty_enemy: Sprite = null
let mySprite: Sprite = null
let bala: Sprite = null
let personagem: Sprite = null
effects.starField.startScreenEffect()
personagem = sprites.create(assets.image`player`, SpriteKind.Player)
personagem.y = 100
personagem.setStayInScreen(true)
info.setLife(5)
controller.moveSprite(personagem, 100, 0)
game.onUpdateInterval(2000, function () {
    mySprite = sprites.create(assets.image`enemy1`, SpriteKind.Enemy)
    Vida_Inimiga = statusbars.create(20, 4, StatusBarKind.Health)
    Vida_Inimiga.attachToSprite(mySprite)
    localizacao_aleatoria = randint(1, scene.screenWidth() - 20)
    empty_enemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.empty)
    empty_enemy.follow(mySprite)
    mySprite.setPosition(localizacao_aleatoria, 7)
    mySprite.setVelocity(0, 44)
    mySprite.startEffect(effects.fire)
})
