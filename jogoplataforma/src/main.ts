import { Game as MainGame } from './scenes/Game';
import { AUTO, Create, Game, Scale,Types } from 'phaser';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
    type: AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH
    },
    scene: [
        preload: preload,
        create: create,
        update:update
    ]
};

export default new Game(config);

function preload() {
    
}
function create() {
    
}
function update() {
    
}
