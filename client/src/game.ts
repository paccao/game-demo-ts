import Phaser from 'phaser'
import { Config } from './models/GameConfig'
import logoImg from '../assets/logo.png'

class MyGameScene extends Phaser.Scene {
	constructor() {
		super(config)
	}

	protected preload() {
		this.load.image('logo', logoImg)
	}

	protected create() {
		this.add.image(400, 300, 'sky')

		const particles = this.add.particles('red')
		const emitter = particles.createEmitter({
			speed: 100,
			scale: {
				start: 1,
				end: 0,
			},
			blendMode: 'add',
		})
		const logo = this.physics.add.image(400, 150, 'logo')

		logo.setVelocity(100, 200)
		logo.setBounce(1, 1)
		logo.setCollideWorldBounds(true)

		emitter.startFollow(logo)
	}
}

const config: Config = {
	type: Phaser.AUTO,
	scene: MyGameScene,
	width: 800,
	height: 600,
}

const game = new MyGameScene()
