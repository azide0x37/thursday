import React from 'react';
import { useForm } from '@mantine/hooks';
import {
  Autocomplete,
  TextInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider
} from '@mantine/core';

import { AutoCompleteBoardGame } from '../AutocompleteBoardGame/AutocompleteBoardGame';

export function BoardGameForm(props: PaperProps<'div'>) {
  const form = useForm({
    initialValues: {
      board_game_name: '',
    },

    validationRules: {
    },
  });



  const charactersList = [
    {
      image: 'https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__itemrep/img/IzYEUm_gWFuRFOL8gQYqGm5gU6A=/fit-in/246x300/filters:strip_icc()/pic2419375.jpg',
      label: 'Settlers of Catan',
      description: 'Fascinated with cooking, though has no sense of taste',
    },

    {
      image: 'https://cf.geekdo-images.com/3P1cMmZ47nf_L1zLO-pKlg__itemrep/img/B2bhulQZGoXpyXK-qZTZFKXqrBg=/fit-in/246x300/filters:strip_icc()/pic5016682.jpg',
      label: 'Great Wall',
      description: 'One of the richest people on Earth',
    },
    {
      label: 'Tapestry',
      description: 'Overweight, lazy, and often ignorant',
    },
    {
      image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
      label: 'Return to Dark Tower',
      description: 'Not just a sponge',
    },
  ];

  const data = charactersList.map((item) => ({ ...item, value: item.label }));


  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" weight={500}>
        Select from BoardGameGeek database
      </Text>

      <Group grow mb="md" mt="md">
        <Autocomplete
          label="Search"
          placeholder="Settlers of Catan"
          itemComponent={AutoCompleteBoardGame}
          value={form.values.board_game_name}
          onChange={(board_game) => form.setFieldValue('board_game_name', board_game)}
          data={data}
          filter={(value, item) =>
            item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
            item.description.toLowerCase().includes(value.toLowerCase().trim())
          } />

      </Group>

      <Divider label="Or enter details manually" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => { })}>
        <Group grow>
          <TextInput
            label="Name"
            placeholder="Settlers of Catan"
            value={form.values.board_game_name}
            onChange={(event) => form.setFieldValue('board_game_name', event.currentTarget.value)}
            error={form.errors.board_game_name && 'Invalid board_game_name'}
          />
        </Group>

        <Group grow>
          <TextInput
            label="Name"
            placeholder="Settlers of Catan"
            value={form.values.board_game_name}
            onChange={(event) => form.setFieldValue('board_game_name', event.currentTarget.value)}
            error={form.errors.board_game_name && 'Invalid board_game_name'}
          />
          <TextInput
            label="Name"
            placeholder="Settlers of Catan"
            value={form.values.board_game_name}
            onChange={(event) => form.setFieldValue('board_game_name', event.currentTarget.value)}
            error={form.errors.board_game_name && 'Invalid board_game_name'}
          />
        </Group>

        <Group position="right" mt="xl">
          <Button type="submit">Add Game to My Library</Button>
        </Group>
      </form>
    </Paper>
  );
}
