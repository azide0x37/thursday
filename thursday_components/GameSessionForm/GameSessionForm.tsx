import React, { forwardRef } from 'react';
import { useForm } from '@mantine/hooks';
import {
  Autocomplete,
  Image,
  TextInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  SelectItemProps,
  MantineColor
} from '@mantine/core';

import { DatePicker, TimeInput } from '@mantine/dates';

import { AutoCompleteBoardGame } from '../../thursday_components/AutocompleteBoardGame/AutocompleteBoardGame';

export function GameSessionForm(props: PaperProps<'div'>) {
  const form = useForm({
    initialValues: {
      game: '',
      location: '',
    },

    validationRules: {
    },
  });

  interface ItemProps extends SelectItemProps {
    color: MantineColor;
    description: string;
    image: string;
  }

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
        Schedule Gaming Session
      </Text>

      <form onSubmit={form.onSubmit(() => { })}>
        <Group grow>
          <Autocomplete
            label="Search"
            placeholder="Settlers of Catan"
            itemComponent={AutoCompleteBoardGame}
            value={form.values.game}
            onChange={(game) => form.setFieldValue('game', game)}
            data={data}
            filter={(value, item) =>
              item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
              item.description.toLowerCase().includes(value.toLowerCase().trim())
            } />
        </Group>
        <Group grow>
          <TextInput
            label="Location"
            placeholder="Scott's House"
            value={form.values.location}
            onChange={(event) => form.setFieldValue('location', event.currentTarget.value)}
            error={form.errors.location && 'Invalid location'}
          />
          <DatePicker placeholder="Pick date" label="Event date" required />
          <TimeInput
            defaultValue={new Date()}
            label="Start Time"
            required
          />
        </Group>

        <Group position="right" mt="xl">
          <Button type="submit">Create Game Session</Button>
        </Group>
      </form>
    </Paper>
  );
}
