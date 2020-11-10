import * as reducers from './reducers'

test('test player reducers', () => {
	expect(reducers.player(0, { type: 'player', value: 1 })).toEqual(1)
})
