import { TextContext } from '@/contect/context';
import React, { useContext, useState } from 'react';

const Homepage = () => {
  //context
  const [textValue, setTextValue] = useContext(TextContext);
  //state
  const [promptText, setPromptText] = useState('');

  //function
  const SubmitResponse = () => {
    if (textValue == '') {
      console.log('Please add text value');
      return;
    }
    if (promptText == '') {
      console.log('Please add prompt text value');
      return;
    }
    console.log('response', textValue, promptText);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-between items-center gap-2 py-12">
      <div className="w-full h-full flex flex-col justify-start items-center gap-4 px-4">
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <label className="fon16 font-medium font-mono">Text Input</label>
          <input
            type="text"
            className="w-full h-10 font16 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md font-mono px-4"
            value={textValue}
            onChange={(e) => {
              setTextValue(e.target.value);
            }}
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <label className="fon16 font-medium font-mono">Prompt Input</label>
          <input
            type="text"
            className="w-full h-10 font16 focus:outline-none focus:border-gray-700 border border-gray-400 rounded-md font-mono px-4"
            value={promptText}
            onChange={(e) => {
              setPromptText(e.target.value);
            }}
          />
        </div>
        <button
          className="px-6 py-2 font14 font-medium bg-green-500 rounded-md text-white active:scale-95 duration-300 transition-all"
          onClick={() => {
            SubmitResponse();
          }}
        >
          Submit
        </button>
      </div>
      <div className="w-full h-full"></div>
    </div>
  );
};

export default Homepage;
