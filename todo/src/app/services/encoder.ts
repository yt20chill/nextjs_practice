// import { getEncoding } from 'js-tiktoken';

import { TiktokenEncoding } from 'js-tiktoken';

// const encoder = getEncoding('cl100k_base');

const modelMap = new Map<TiktokenEncoding, string[]>();
modelMap.set('o200k_base', ['gpt-4o']);
modelMap.set('cl100k_base', ['gpt-3.5-turbo', 'gpt-4']);

const readonlyMap = Object.freeze(modelMap);
export { readonlyMap as modelMap };
