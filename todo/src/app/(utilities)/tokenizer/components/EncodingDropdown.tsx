'use client';

import { modelMap } from '@/services/encoder';
import { TiktokenEncoding } from 'js-tiktoken';
import { useState } from 'react';

type Encoding = TiktokenEncoding;

type Props = {
  onEncodingChange: (encoding: Encoding) => void;
};

function EncodingDropdown({ onEncodingChange }: Props) {
  const encodingOptions: Encoding[] = [
    'o200k_base',
    'cl100k_base',
    'p50k_base',
    'p50k_edit',
    'r50k_base',
    'gpt2',
  ] as const;
  const encodingMap = modelMap;
  const [encoding, setEncoding] = useState<Encoding>('o200k_base');

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedEncoding = event.target.value as Encoding;
    setEncoding(selectedEncoding);
    onEncodingChange(selectedEncoding);
  };

  return (
    <>
      <div className="ps-2">
        <label htmlFor="encoding-select">Encoding:</label>
        <select
          className="border-solid border-2 border-blue-400 rounded-md px-2 py-1"
          id="encoding-select"
          value={encoding}
          onChange={onChange}
        >
          {encodingOptions.map((option) => (
            <option key={option} value={option}>
              {encodingMap.has(option)
                ? `${option} (${encodingMap.get(option)!.join(', ')})`
                : option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default EncodingDropdown;
