import { Game, Scene, AUTO } from 'phaser'
import { Config } from './models/GameConfig'
import logoImg from './assets/logo.png'
import sky from './assets/sky.jpg'
import scuircle from './assets/squircle.svg'

class MyGameScene extends Scene {
	constructor() {
		super(config)
	}

	protected preload() {
		this.load.image('logo', logoImg)
		this.load.image('scuircle', scuircle)
		this.load.image('sky', sky)
	}

	protected create() {
		this.add.image(400, 300, 'sky')
		const particles = this.add.particles('scuircle')
		const emitter = particles.createEmitter({
			speed: 100,
			scale: {
				start: 1,
				end: 0,
			},
			blendMode: 'add',
		})
		const logo = this.physics.add.image(400, 400, 'logo')
		logo.setVelocity(100, 200)
		logo.setBounce(1, 1)
		logo.setCollideWorldBounds(true)
		emitter.startFollow(logo)
	}
}

const config: Config = {
	parent: 'root',
	physics: { default: 'arcade', arcade: { gravity: { x: 0, y: 0 } } },
	type: AUTO,
	scene: MyGameScene,
	width: 800,
	height: 600,
}

const game = new Game(config)
