import React, { useState, Fragment } from 'react';
import { useChannel } from '@storybook/api';
import { CHANNEL_ACTION } from './config';

const codeCopyId = 'codeToCopy';

const copyTheCode = () => {
  const range = document.createRange();
  range.selectNode(document.getElementById(codeCopyId));
  window.getSelection().addRange(range);
  document.execCommand("copy");
  alert("code copied to clipboard");
}

const markup = () => {
  const [comp, setComp] = useState('');
  useChannel({
    [CHANNEL_ACTION]: (args) => setComp(args),
  });
  return comp;
}

const PanelContent = () => (
  <Fragment>
    <button
      type="button"
      onClick={() => copyTheCode()}
      style={{
        background: '#000',
        color: '#fff',
        padding: '15px 25px',
        textTransform: 'uppercase',
        position: 'absolute',
        right: 0,
        border: 0,
        margin: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: '50px'
      }}
    >
      Copy Code
    </button>
    <pre>
      <code id={codeCopyId}>
        {markup()}
      </code>
    </pre>
  </Fragment>
);

export default PanelContent;
