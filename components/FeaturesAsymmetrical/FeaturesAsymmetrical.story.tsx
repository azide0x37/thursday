import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { FeaturesAsymmetrical } from './FeaturesAsymmetrical';

storiesOf('FeaturesAsymmetrical', module).add('FeaturesAsymmetrical', () => (
  <StoryWrapper attributes={attributes} component={FeaturesAsymmetrical} />
));
