'use client';

import { useDebounce } from '@/hooks/useDebounce';
import { TiktokenEncoding, getEncoding } from 'js-tiktoken';
import { useEffect, useState } from 'react';
import EncodeResult from './EncodeResult';
import EncodingDropdown from './EncodingDropdown';

const Encoder = () => {
  const ENCODING_KEY = 'encoding';
  const [encoding, setEncoding] = useState<TiktokenEncoding>('o200k_base');
  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, 300);
  const [tokens, setTokens] = useState<string[]>([]);

  const onEncodingChange = (encoding: TiktokenEncoding) => {
    setEncoding(encoding);
    localStorage.setItem(ENCODING_KEY, encoding);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  // on init
  useEffect(() => {
    const savedEncoding = localStorage.getItem(
      ENCODING_KEY
    ) as TiktokenEncoding;
    if (savedEncoding && savedEncoding !== encoding) {
      setEncoding(savedEncoding);
    }
  }, []);

  useEffect(() => {
    const encoder = getEncoding(encoding);
    const tokens = encoder.encode(debouncedInput);
    setTokens(tokens.map((t) => encoder.decode([t])));
  }, [debouncedInput, encoding]);

  return (
    <div className="flex flex-col p-4 gap-2">
      <EncodingDropdown value={encoding} onEncodingChange={onEncodingChange} />
      <textarea
        className="w-full min-h-96 border-2 border-gray-400 rounded-md p-2"
        onChange={onInputChange}
        value={input}
      />
      <span>Result:</span>
      <EncodeResult tokens={tokens} />
      <div className="mt-3 ps-2">Token Count: {tokens.length}</div>
    </div>
  );
};

export default Encoder;
