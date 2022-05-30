import React, { useState } from 'react';
import { Button, Modal, Group, useMantineTheme } from '@mantine/core';
import { GamingGroupForm } from '../GamingGroupForm/GamingGroupForm';

export default function AddGamingGroup() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal centered
        opened={opened}
        onClose={() => setOpened(false)}
        size='xl'
        transition="fade"
        withCloseButton={false}
        transitionDuration={600}
        transitionTimingFunction="slide-left"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <GamingGroupForm />
      </Modal>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Create Gaming Group</Button>
      </Group>
    </>
  );
}