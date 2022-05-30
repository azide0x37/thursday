import React, { forwardRef } from 'react';

import {
  Image,
  Text,
  Group,
  MantineColor,
  SelectItemProps
} from '@mantine/core';

interface ItemProps extends SelectItemProps {
  color: MantineColor;
  description: string;
  image: string;
}

export const AutoCompleteBoardGame = forwardRef<HTMLDivElement, ItemProps>(
  ({ description, value, image, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Image
          radius={10}
          withPlaceholder
          width={40}
          height={40}
          src={image} />

        <div>
          <Text>{value}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);