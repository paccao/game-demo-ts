export interface Config extends Phaser.Types.Scenes.SettingsConfig {
	type: number | undefined
	physics?: Physics
	scene?: Scene | any
	parent?: string
	width: number
	height: number
}

interface Physics {
	default: string
	arcade: Arcade
}

interface Arcade {
	gravity: Gravity
}

interface Gravity {
	x: number
	y: number
}

export interface Scene {
	preload: VoidFunc
	create: VoidFunc
}

interface VoidFunc {
	(): void
}
