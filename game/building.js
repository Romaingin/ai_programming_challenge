const Element = require('./element')
const data = require('../data/buildings.json')

// ====================================================
//  > Building
// ----------------------------------------------------
// 	Class for buildings
// ====================================================
module.exports = class Building extends Element {

	// > constructor (Team team, id, x, y)
	constructor (team, id, x, y) {
		super(id, x, y)
		this.team = team

		// Read data
		this.name = data[id].name
		this.size = data[id].size
		this.cost = data[id].cost

		// Building queue
		const MAX_QUEUE_SIZE = 5
		this.queue = new queue(MAX_QUEUE_SIZE)

		// Add to team
		if (team) team.elements.push(this)
	}

	// > jsonify ()
	//		return an object that can be given
	// to the AI or the renderer
	jsonify () {
		return Object.assign(
			super.jsonify(),
			{ type: 'building' }
		)
	}
}

// Basic limited size queue implementation used for queuing production
class queue{
	constructor(max_queue_size){
		this.queue = new Array()
		this.queueSize = max_queue_size
	}

	push(item){
		if (this.queueSize < MAX_QUEUE_SIZE)
		{
			this.queue.unshift(item)
		}
		// Maybe display an error to the player ?
	}

	pop(){
		return this.queue.pop()
	}
}
