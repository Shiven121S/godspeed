controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -90
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    mySprite.vy = -45
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    mySprite.vy = 100
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    mySprite.vy = -150
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    mySprite.vy = -110
})
let mySprite: Sprite = null
tiles.loadMap(tiles.createMap(tilemap`level4`))
mySprite = sprites.create(img`
    . f f f f f f . 
    f . . . . . . f 
    f . . . . . . f 
    f . . . . . . f 
    f . . . . . . f 
    f . . . . . . f 
    f . . . . . . f 
    . f f f f f f . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
mySprite.ay = 300
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite, 100, 0)
