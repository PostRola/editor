import { createElement } from 'react';
import { render } from 'react-dom';

import { App } from './App';


export function generateMountElm() {
  const mountElm = document.createElement('div');
  mountElm.id = 'mount';

  document.body.appendChild(mountElm);

  return mountElm;
}


function main() {
  const mountElm = generateMountElm();

  render(createElement(App), mountElm);
}


main();
