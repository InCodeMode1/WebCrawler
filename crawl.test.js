const {test, expect} = require('@jest/globals')
const {normalizeURL} = require('./crawl.js')

const input = "https://nodejs.ORG/api/url.html/#url-strings-and-url-objects"
const expected = "nodejs.org/api/url.html"


test('normalize URL protocol', () => {
	const actual = normalizeURL(input)
	expect(actual).toMatch(expected);
})

test('normalize URL slash', () => {
	const actual = normalizeURL(input)
	expect(actual).toMatch(expected);
})

test('normalize URL capitalize', () => {
	const actual = normalizeURL(input)
	expect(actual).toMatch(expected);
})

test('normalize URL http', () => {
	const actual = normalizeURL(input)
	expect(actual).toMatch(expected);
})
