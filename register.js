import React from 'react';
import addons from '@storybook/addons';

import { AddonPanel } from '@storybook/components';
import { ADDON_ID, PANEL_ID, PANEL_TITLE } from './config';
import PanelContent from './PanelContent';

addons.register(ADDON_ID, api => {
  addons.addPanel(PANEL_ID, {
    title: PANEL_TITLE,
    render: ({ active, key }) => (
      <AddonPanel key={key} active={active}>
        <PanelContent />
      </AddonPanel>
    ),
  });
});