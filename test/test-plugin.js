import test from 'ava';
import postcss from 'postcss';
import plugin from '../src/';

const processing = (inputCSS, options) => postcss([plugin(options)]).process(inputCSS).css;

test('processing not options and not attribute selector', t => {
	const expected = '.class, .test { color:red; }';
	const fixtures = '.class, .test { color:red; }';
	t.is(processing(fixtures), expected);
});

test('processing options prefix and not attribute selector', t => {
	const expected = '.class { color:red; }';
	const fixtures = '.class { color:red; }';
	t.is(processing(fixtures, {prefix: 'test-'}), expected);
});

test('processing options prefix and attribute selector', t => {
	const expected = '.class, [type="test-text"] { color:red; }';
	const fixtures = '.class, [type="text"] { color:red; }';
	t.is(processing(fixtures, {prefix: 'test-'}), expected);
});

test('processing options prefix, filter and attribute selector', t => {
	const expected = '.class, [type="text"], [class*="test-lorem"] { color:red; }';
	const fixtures = '.class, [type="text"], [class*="lorem"] { color:red; }';
	t.is(processing(fixtures, {prefix: 'test-', filter: ['class']}), expected);
});

test('processing options prefix, filter and attribute selector', t => {
	const expected = '.class, [type="text"], [alt*="class"] { color:red; }';
	const fixtures = '.class, [type="text"], [alt*="class"] { color:red; }';
	t.is(processing(fixtures, {prefix: 'test-', filter: ['class']}), expected);
});

test('processing options filter and attribute selector', t => {
	const expected = '.class, [type="text"], [class*="lorem"] { color:red; }';
	const fixtures = '.class, [type="text"], [class*="lorem"] { color:red; }';
	t.is(processing(fixtures, {filter: ['class']}), expected);
});

test('processing options prefix, filter, ignore and attribute selector', t => {
	const expected = '.class, [type="text"], [class*="lorem"] { color:red; }';
	const fixtures = '.class, [type="text"], [class*="lorem"] { color:red; }';
	t.is(processing(fixtures, {prefix: 'test', filter: ['class'], ignore: ['class']}), expected);
});

test('processing options prefix, ignore and attribute selector', t => {
	const expected = '.class, [type="text"], [class*="test-lorem"] { color:red; }';
	const fixtures = '.class, [type="text"], [class*="lorem"] { color:red; }';
	t.is(processing(fixtures, {prefix: 'test-', ignore: ['type']}), expected);
});
