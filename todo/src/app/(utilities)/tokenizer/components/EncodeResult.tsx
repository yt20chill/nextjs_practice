import EncodePills from './EncodePills';

type Props = {
  tokens: string[];
};

export const EncodeResult = ({ tokens }: Props) => {
  const BACKGROUND_COLOR_CODE = [
    'bg-rose-400/25',
    'bg-teal-400/25',
    'bg-orange-400/25',
    'bg-sky-400/25',
    'bg-green-400/25',
  ];
  return (
    <div className="w-full min-h-96 border-2 pointer-events-none bg-slate-100 p-2">
      {tokens.map((t, i) => (
        <EncodePills
          key={i}
          token={t}
          backgroundColor={`${
            BACKGROUND_COLOR_CODE[i % BACKGROUND_COLOR_CODE.length]
          }`}
        />
      ))}
    </div>
  );
};

export default EncodeResult;
