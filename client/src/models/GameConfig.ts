export interface Config extends Phaser.Types.Scenes.SettingsConfig {
	type: number
	width: number
	height: number
	physics?: Physics
	scene?: Scene | any
	parent?: string
}

interface Physics {
	default: string
	arcade: Arcade
}

interface Arcade {
	gravity: Gravity
}

interface Gravity {
	y: number
}

export interface Scene {
	preload: VoidFunc
	create: VoidFunc
}

interface VoidFunc {
	(): void
}
