# storybook-react-to-html-addon


## setup

In your `addons.js` add the following line: 

```js

import 'storybook-react-to-html-addon/register';
```

## usage

In your story file add the following import: 

```js

import withShowHtml from 'storybook-react-to-html-addon';
```

Then within your story add: `addDecorator(withShowHtml)`

e.g.

```js
storiesOf('Example', module)
  .addDecorator(withShowHtml)
  .add('Default', () => (
    <MyReactComponent />
  ))

```