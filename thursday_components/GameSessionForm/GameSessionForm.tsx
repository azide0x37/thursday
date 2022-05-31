import React, { useEffect, useState } from 'react';
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

import { AutoCompleteBoardGame, useDebounce } from '../../thursday_components/AutocompleteBoardGame/AutocompleteBoardGame';

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
  const form = useForm({
    initialValues: {
      game: '',
      location: '',
    },

    validationRules: {
    },
  });
  const [autocomplete_data, setAutocomplete_data] = useState(charactersList.map((item) => ({ ...item, value: item.label })));
  const debouncedSearchTerm = useDebounce(form.values.game, 300);

  interface ItemProps extends SelectItemProps {
    color: MantineColor;
    description: string;
    image: string;
  }



  useEffect(() => {
    /* TODO: Only set...if needed? WTF
    setAutocomplete_data([{
      label: 'Loading...',
      value: form.values.game,
      description: 'Loading...'
    }])
    */
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
            if (!data.Payload.hasOwnProperty('errorMessage') && JSON.parse(data.Payload.toString()).statusCode != 500) {

              try {
                let return_data = JSON.parse(data.Payload.toString());
                console.log(return_data);

                if (return_data.hasOwnProperty('body')) {
                  let game_list = return_data.body.games
                  console.log(game_list)
                  if (game_list != []) {
                    game_list.map((game: any) => {
                      game['value'] = game['name'];
                      game['label'] = game['name'];
                      return game
                    })
                    setAutocomplete_data(game_list)
                    console.log(game_list)
                  }
                }
              } catch (e) {
                console.log(e);
              }
            } else {
              console.log(data.Payload);
            }
          } else {
            console.log("payload undefined")
            console.log(data.Payload)
          }
        }
      );
    })
  }, [debouncedSearchTerm])

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
            limit={25}
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
