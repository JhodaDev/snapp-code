/* eslint-disable react-hooks/exhaustive-deps */
import { useCodeMirror } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useEffect, useRef, useState } from 'react';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { Frame } from './ui/Frame';

const code = `// program to check if a string starts with 'S' and ends with 'G'

function checkString(str) {

    // check if the string starts with S and ends with G
    if( /^S/i.test(str) && /G$/i.test(str)) {
        console.log('The string starts with S and ends with G');
    }
    else if(/^S/i.test(str)) {
        console.log('The string starts with S but does not ends with G');
    }
     else if(/G$/i.test(str)) {
        console.log('The string starts does not with S but ends with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}

// for loop to show different scenario
for (let i = 0; i < 3; i++) {

    // take input
    const string = prompt('Enter a string: ');

    checkString(string);
}`;

const extensions = [javascript()];

export const Editor = () => {
  const editor = useRef(null);
  const [widthEditor, setWidthEditor] = useState(0);

  const { setContainer, view } = useCodeMirror({
    container: editor.current,
    extensions,
    value: code,
    theme: dracula,
    width: `${widthEditor}px`,
    minWidth: '10px',
    basicSetup: {
      lineNumbers: false,
      foldGutter: false,
    },
    onChange: (val, viewUpdate) => {
      const width = viewUpdate?.view.viewState.contentDOMWidth;
      console.log(width);
      setWidthEditor(width);
    },
  });

  useEffect(() => {
    console.log(view);
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current]);

  return (
    <Frame>
      <div ref={editor}></div>
    </Frame>
  );
};
