namespace SpriteKind {
    export const TiroduMAl = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`projetil`, personagem, 0, -75)
    pause(400)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TiroduMAl, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    sprites.destroy(myEnemy)
    info.changeLifeBy(-1)
    if (info.life() == 0) {
        game.gameOver(false)
    }
})
info.onScore(100, function () {
    Nivel += 1
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    animation.runImageAnimation(
    myEnemy,
    assets.animation`myAnim`,
    200,
    false
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(myEnemy)
    sprites.destroy(projectile, effects.spray, 500)
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
let Vida_Inimiga: StatusBarSprite = null
let localizacao_aleatoria = 0
let myEnemy: Sprite = null
let projectile: Sprite = null
let personagem: Sprite = null
effects.starField.startScreenEffect()
personagem = sprites.create(assets.image`personagem`, SpriteKind.Player)
animation.runImageAnimation(
personagem,
assets.animation`animplayer`,
100,
true
)
personagem.y = 100
personagem.setStayInScreen(true)
info.setLife(3)
info.setScore(0)
controller.moveSprite(personagem, 100, 0)
let Nivel = 0
game.onUpdateInterval(2000, function () {
    if (info.score() >= 0) {
        myEnemy = sprites.create(assets.image`MyEnemy`, SpriteKind.Enemy)
        localizacao_aleatoria = randint(1, scene.screenWidth())
        Vida_Inimiga = statusbars.create(20, 4, StatusBarKind.Health)
        Vida_Inimiga.attachToSprite(myEnemy, 5, 0)
        myEnemy.setPosition(localizacao_aleatoria, 0)
        myEnemy.setVelocity(0, 35)
        myEnemy.startEffect(effects.fire, 1300)
    }
    if (info.score() >= 25) {
        myEnemy.setVelocity(0, 42)
    }
    if (info.score() >= 50) {
        myEnemy.setVelocity(0, 50)
        personagem.y = 120
    }
    if (info.score() >= 75) {
        localizacao_aleatoria = randint(1, scene.screenWidth())
        localizacao_aleatoria = randint(1, scene.screenWidth())
        myEnemy.setPosition(localizacao_aleatoria, 0)
        myEnemy.setVelocity(0, 60)
    }
})
