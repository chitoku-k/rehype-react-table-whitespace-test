import { createElement } from "react";
import { h } from "hastscript";
import { unified } from "unified";
import rehypeReact from "rehype-react";

const App = () =>
  unified()
    .use(rehypeReact, { createElement })
    .stringify(
      h('div', {}, [
        h('p', {}, [
          h('span', {}, ['Text']),
          ' ',
          h('span', {}, ['with']),
          ' ',
          h('span', {}, ['whitespaces']),
          ' ',
          h('span', {}, ['in']),
          ' ',
          h('span', {}, ['paragraph']),
        ]),
        h('table', {}, [
          h('tbody', {}, [
            h('tr', {}, [
              h('td', {}, [
                h('span', {}, ['Text']),
                ' ',
                h('span', {}, ['with']),
                ' ',
                h('span', {}, ['whitespaces']),
                ' ',
                h('span', {}, ['in']),
                ' ',
                h('span', {}, ['table']),
              ]),
            ]),
          ]),
        ]),
      ])
    )

export default App;
