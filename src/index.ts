import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App/App';


export function generateMountElm() {
  const mountElm = document.createElement('div');
  mountElm.id = 'mount';

  document.body.appendChild(mountElm);

  return mountElm;
}


function main() {
  const mountElm = generateMountElm();
  const root = createRoot(mountElm);

  root.render(createElement(App));
}


main();
