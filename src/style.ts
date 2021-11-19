import { injectGlobal } from '@emotion/css';

import { placeholderText, tide } from './theme';

import 'tippy.js/dist/tippy.css';

injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

  html {
    height: 100%;

    /* font-family: 'Zilla Slab', serif; */
    font-family: 'Ubuntu', sans-serif;
  }

  body {
    margin: 0;
    height: 100%;

    line-height: 1.25;
  }

  #mount {
    height: 100%;
  }

  .ProseMirror {
    outline: 0;

    p.is-editor-empty:first-child::before {
      content: attr(data-placeholder);
      height: 0;
      float: left;

      pointer-events: none;
      color: ${placeholderText};
    }
  }
`;

// Tippy theme
injectGlobal`
  .tippy-box[data-theme~='copper'] {
    background-color: #403333;
    color: ${tide};

    .tippy-content {
      padding: 0;
    }

    .tippy-arrow {
      color: #403333;
    }
  }
`;
