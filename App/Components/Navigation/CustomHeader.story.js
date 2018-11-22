import React from 'react'
import { storiesOf } from '@storybook/react-native'

import CustomHeader from './CustomCustomHeader'

storiesOf('CustomHeader')
  .add('Default', () => (
    <CustomHeader
      title='CustomHeader'
    />
  ));
