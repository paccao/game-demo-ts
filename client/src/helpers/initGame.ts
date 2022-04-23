import Phaser from 'phaser'
import { Config, InternalConfig } from '../models/GameConfig'
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

const config: InternalConfig = {
	type: Phaser.AUTO,
	scene: MyGameScene,
}

export function setConfig(configObj: Config) {
	const defaultObj = {
		type: Phaser.AUTO,
		scene: MyGameScene,
	}
	return {
		...defaultObj,
		width: configObj.width,
		height: configObj.height,
	}
}
