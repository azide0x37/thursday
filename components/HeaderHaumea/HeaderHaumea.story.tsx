import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { HeaderHaumea } from './HeaderHaumea';

storiesOf('HeaderHaumea', module).add('HeaderHaumea', () => (
  <StoryWrapper attributes={attributes} component={HeaderHaumea} />
));
