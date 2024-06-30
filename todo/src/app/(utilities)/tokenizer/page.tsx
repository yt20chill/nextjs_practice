import Encoder from './components/Encoder';

const EncoderPage = () => {
  return (
    <div className="flex-grow flex flex-col items-center w-full h-full">
      <div className="w-[90%] bg-white border-2 shadow-sm">
        <Encoder />
      </div>
    </div>
  );
};

export default EncoderPage;
