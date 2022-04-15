import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { GameCardImage } from './GameCardImage';

storiesOf('GameCardImage', module).add('GameCardImage', () => (
  <StoryWrapper attributes={attributes} component={GameCardImage} />
));
