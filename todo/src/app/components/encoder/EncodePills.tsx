import { twMerge } from 'tailwind-merge';

type Props = { token: string; backgroundColor: string };

const EncodePills = ({ token, backgroundColor }: Props) => {
  return (
    <span
      className={twMerge('mb-1 rounded-sm leading-normal', backgroundColor)}
    >
      {token}
    </span>
  );
};

export default EncodePills;
