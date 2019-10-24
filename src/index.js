import ReactDOMServer from 'react-dom/server';
import addons, { makeDecorator } from '@storybook/addons';
import { CHANNEL_ACTION } from './config';
import pretty from 'pretty';

export default makeDecorator({
  name: 'showHtmlOutput',
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();

    const markup = ReactDOMServer.renderToStaticMarkup(getStory(context));

    channel.emit(CHANNEL_ACTION, pretty(markup));
    return getStory(context);
  }
})