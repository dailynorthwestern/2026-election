import test from 'node:test';
import assert from 'node:assert/strict';
import { inline, safeURL } from '../src/lib/content.js';
test('renders nested inline formatting and links', () => {
 assert.equal(inline('**A *quiet* day** at [The Daily](https://dailynorthwestern.com/)'), '<strong>A <em>quiet</em> day</strong> at <a href="https://dailynorthwestern.com/">The Daily</a>');
});
test('escapes pasted HTML and rejects unsafe link protocols', () => {
 assert.equal(inline('<script>bad</script>'), '&lt;script&gt;bad&lt;/script&gt;');
 assert.equal(safeURL('javascript:alert'), '#');
 assert.equal(safeURL('//example.com'), '#');
 assert.equal(inline('[bad](javascript:alert)'), '<a href="#">bad</a>');
});
