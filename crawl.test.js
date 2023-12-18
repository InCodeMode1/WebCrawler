const {test, expect} = require('@jest/globals')
const {normalizeURL , getURLsFromHTML} = require('./crawl.js')

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

test('getURLsFromHTML absolute', () => {
	const inputURL = 'https://blog.boot.dev'
	const inputBody = '<html><body><a href="https://blog.boot.dev"><span>Boot.dev></span></a></body></html>'
	const actual = getURLsFromHTML(inputBody, inputURL)
	const expected = [ 'https://blog.boot.dev/' ]
	expect(actual).toEqual(expected)
  })
  
  test('getURLsFromHTML relative', () => {
	const inputURL = 'https://blog.boot.dev'
	const inputBody = '<html><body><a href="/path/one"><span>Boot.dev></span></a></body></html>'
	const actual = getURLsFromHTML(inputBody, inputURL)
	const expected = [ 'https://blog.boot.dev/path/one' ]
	expect(actual).toEqual(expected)
  })
  
  test('getURLsFromHTML both', () => {
	const inputURL = 'https://blog.boot.dev'
	const inputBody = '<html><body><a href="/path/one"><span>Boot.dev></span></a><a href="https://other.com/path/one"><span>Boot.dev></span></a></body></html>'
	const actual = getURLsFromHTML(inputBody, inputURL)
	const expected = [ 'https://blog.boot.dev/path/one', 'https://other.com/path/one' ]
	expect(actual).toEqual(expected)
  })
  
  test('getURLsFromHTML handle error', () => {
	const inputURL = 'https://blog.boot.dev'
	const inputBody = '<html><body><a href="path/one"><span>Boot.dev></span></a></body></html>'
	const actual = getURLsFromHTML(inputBody, inputURL)
	const expected = [ ]
	expect(actual).toEqual(expected)
  })
  