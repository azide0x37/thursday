import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { ContainedInputs } from './ContainedInputs';

storiesOf('ContainedInputs', module).add('ContainedInputs', () => (
  <StoryWrapper attributes={attributes} component={ContainedInputs} />
));
