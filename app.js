let lifePoints = 100;
let botPoints = 100;

document.querySelector('#attack').addEventListener('click', playerAttack);
document.querySelector('#heal').addEventListener('click', playerHeal);

function playerAttack(evt) {
    // create random damage
    // range 10-30
    const dmg = Math.floor( Math.random() * 21 ) + 10;
    // damage the botPoints
    botPoints -= dmg;
    // change the botPoints onscreen
    document.querySelector('.enemy span').innerHTML = botPoints;
    // triggers the botAttack
    botAttack();
}

function playerHeal(evt) {
    // increase the lifePoints
    // update the lifePoints onscreen
}

function botAttack() {
    // damage the playersPoint
    
    // change the lifePoints on screen
}