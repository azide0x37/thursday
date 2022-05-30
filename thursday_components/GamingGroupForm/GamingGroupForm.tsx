import React, { forwardRef } from 'react';
import { useForm } from '@mantine/hooks';
import {
  Autocomplete,
  TextInput,
  Image,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  SelectItemProps,
  MantineColor
} from '@mantine/core';

export function GamingGroupForm(props: PaperProps<'div'>) {
  const form = useForm({
    initialValues: {
      gaming_group_name: '',
    },

    validationRules: {
    },
  });

  interface ItemProps extends SelectItemProps {
    color: MantineColor;
    description: string;
    image: string;
  }

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" weight={500}>
        Create new gaming group
      </Text>

      <form onSubmit={form.onSubmit(() => { })}>
        <Group grow>
          <TextInput
            label="Name"
            placeholder="Thursday Gaming"
            value={form.values.gaming_group_name}
            onChange={(event) => form.setFieldValue('gaming_group_name', event.currentTarget.value)}
            error={form.errors.gaming_group_name && 'Invalid gaming_group_name'}
          />
        </Group>

        <Divider label="Gaming Group Details" labelPosition="center" my="lg" />

        <Group grow>
          <TextInput
            label="Name"
            placeholder="Settlers of Catan"
            value={form.values.gaming_group_name}
            onChange={(event) => form.setFieldValue('gaming_group_name', event.currentTarget.value)}
            error={form.errors.gaming_group_name && 'Invalid gaming_group_name'}
          />
          <TextInput
            label="Name"
            placeholder="Settlers of Catan"
            value={form.values.gaming_group_name}
            onChange={(event) => form.setFieldValue('gaming_group_name', event.currentTarget.value)}
            error={form.errors.gaming_group_name && 'Invalid gaming_group_name'}
          />
        </Group>

        <Group position="right" mt="xl">
          <Button type="submit">Add Game to My Library</Button>
        </Group>
      </form>
    </Paper>
  );
}
