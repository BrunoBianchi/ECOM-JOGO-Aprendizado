namespace SpriteKind {
    export const TiroduMAl = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 1 . . . . . . . . . . . . 1 . 
        . 9 . . . . . . . . . . . . 9 . 
        1 9 1 . . . . . . . . . . 1 9 1 
        9 6 9 . . . . . . . . . . 9 6 9 
        6 8 6 8 . . . . . . . . 8 6 8 6 
        8 . 8 . . . . . . . . . . 8 . 8 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, personagem, 0, -75)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TiroduMAl, function (sprite, otherSprite) {
    let mySprite: Sprite = null
    scene.cameraShake(4, 500)
    sprites.destroy(mySprite)
    info.changeLifeBy(-1)
    if (info.life() == 0) {
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(myEnemy)
    sprites.destroy(projectile)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    sprites.destroy(myEnemy)
    info.changeLifeBy(-1)
    if (info.life() == 0) {
        game.gameOver(false)
    }
})
let localizacao_aleatoria = 0
let myEnemy: Sprite = null
let projectile: Sprite = null
let personagem: Sprite = null
effects.starField.startScreenEffect()
personagem = sprites.create(assets.image`personagem`, SpriteKind.Player)
animation.runImageAnimation(
personagem,
assets.animation`player`,
100,
true
)
personagem.y = 100
personagem.setStayInScreen(true)
info.setLife(5)
info.setScore(0)
controller.moveSprite(personagem, 100, 0)
game.onUpdateInterval(1000, function () {
    if ((0 as any) >= (25 as any)) {
        localizacao_aleatoria = randint(1, scene.screenWidth())
        myEnemy.setPosition(localizacao_aleatoria, 7)
        myEnemy.setVelocity(0, 50)
        myEnemy.startEffect(effects.fire, 1300)
    }
})
game.onUpdateInterval(800, function () {
    if ((0 as any) >= (50 as any)) {
        personagem.y = 120
        localizacao_aleatoria = randint(1, scene.screenWidth())
        myEnemy.setPosition(localizacao_aleatoria, 7)
        myEnemy.setVelocity(0, 60)
        myEnemy.startEffect(effects.fire, 1300)
    }
})
game.onUpdateInterval(800, function () {
    if ((0 as any) >= (75 as any)) {
        localizacao_aleatoria = randint(2, scene.screenWidth())
        myEnemy.setPosition(localizacao_aleatoria, 4)
        myEnemy.setVelocity(0, 60)
        myEnemy.startEffect(effects.fire, 1300)
    }
})
game.onUpdateInterval(1500, function () {
    myEnemy = sprites.create(assets.image`enemy1`, SpriteKind.Enemy)
    localizacao_aleatoria = randint(1, scene.screenWidth())
    myEnemy.setPosition(localizacao_aleatoria, 7)
    myEnemy.setVelocity(0, 50)
    myEnemy.startEffect(effects.fire, 1300)
})
