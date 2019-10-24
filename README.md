# storybook-react-to-html-addon

## Reasoning
This is useful if you're wanting to use React going forward but perhaps you have to support a lot of legacy before a switch. This will allow you to develop your react component library whilst maintaining any output required for legacy systems. Win win win.

## Setup

In your `addons.js` add the following line: 

```js

import 'storybook-react-to-html-addon/register';
```

## Usage

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
