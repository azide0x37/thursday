import React, { forwardRef, useEffect, useState } from 'react';
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

import Lambda from 'aws-sdk/clients/lambda'; // npm install aws-sdk
import { Auth } from 'aws-amplify';

import { DatePicker, TimeInput } from '@mantine/dates';

import { AutoCompleteBoardGame } from '../../thursday_components/AutocompleteBoardGame/AutocompleteBoardGame';

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

export function GameSessionForm(props: PaperProps<'div'>) {
  const [autocomplete_data, setAutocomplete_data] = useState(charactersList.map((item) => ({ ...item, value: item.label })));

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



  useEffect(() => {
    Auth.currentCredentials().then((credentials) => {
      const lambda = new Lambda({
        credentials: Auth.essentialCredentials(credentials),
        region: "us-east-1",
      });
      lambda.invoke(
        {
          FunctionName: 'BGGGameListGen-dev',
          Payload: JSON.stringify({ board_game_name: `${form.values.game}` }),
        },
        function (err, data) {
          if (err) {
            console.log(err);
            return;
          }
          if (data.Payload != undefined) {
            try {
              let return_data = JSON.parse(data.Payload.toString());
              console.log(return_data);

              if (return_data.body != 'error') {
                let games_obj = return_data.body
                console.log(games_obj);

                let processed_data = Object.keys(games_obj).map((game_identifier) => {
                  if (games_obj[game_identifier] != undefined) {
                    return ({
                      image: games_obj[game_identifier].image ? games_obj[game_identifier].image : "test",
                      value: games_obj[game_identifier].name ? games_obj[game_identifier].name : "test",
                      label: games_obj[game_identifier].name ? games_obj[game_identifier].name : "test",
                      description: games_obj[game_identifier].id ? games_obj[game_identifier].id : "test",
                    })
                  }
                  return {
                    image: 'https://pbs.twimg.com/media/D4ggci5XoAAVHPi.jpg',
                    value: 'test name',
                    label: 'test name',
                    description: 'test description'
                  }
                })
                console.log(processed_data);
                setAutocomplete_data(processed_data)
              }

            } catch (e) {
              alert(e); // error in the above string (in this case, yes)!
            }
          }
        }
      );
    })
  }, [form.values.game])

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
            onChange={(game) => {
              form.setFieldValue('game', game)
            }}
            data={autocomplete_data}
          />
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
