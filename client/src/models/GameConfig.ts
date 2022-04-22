export interface Config {
	type: number
	width: number
	height: number
	physics: Physics
	scene: Scene
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

interface Scene {
	preload: VoidFunc
	create: VoidFunc
}

export interface VoidFunc {
	(): void
}
