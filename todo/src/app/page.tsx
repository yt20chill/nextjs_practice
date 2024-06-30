import Encoder from './components/encoder/Encoder';

export default function Home() {
  return (
    <>
      {/* <h1 className="grid place-content-center text-5xl h-svh">Hello World!</h1> */}
      <div className="flex-grow flex flex-col items-center w-full h-full">
        <div className="w-[90%] bg-white border-2 shadow-sm">
          <Encoder />
        </div>
      </div>
    </>
  );
}
