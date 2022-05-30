import React, { useState } from 'react';
import { Button, Modal, Group, useMantineTheme } from '@mantine/core';
import { GameSessionForm } from '../GameSessionForm/GameSessionForm';

export default function AddGamingGroup() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal centered
        opened={opened}
        onClose={() => setOpened(false)}
        size='xl'
        withCloseButton={false}
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="slide-left"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <GameSessionForm />
      </Modal>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Schedule Game</Button>
      </Group>
    </>
  );
}