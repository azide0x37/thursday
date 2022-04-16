import React, { useState, useEffect } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Container,
  SimpleGrid,
  Title,
  Paper,
  Timeline
} from '@mantine/core';

import { GitBranch, GitPullRequest, GitCommit, MessageDots } from 'tabler-icons-react';

import { HeaderAction } from '../components/HeaderAction/HeaderAction'
import { FooterLinks } from '../components/FooterLinks/FooterLinks'
import { TableReviews } from '../components/TableReviews/TableReviews'
import { EmailBanner } from '../components/EmailBanner/EmailBanner'
import { GameCardImage } from '../components/GameCardImage/GameCardImage'
import { ImageCard } from '../components/ImageCard/ImageCard'



import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

import Lambda from 'aws-sdk/clients/lambda'; // npm install aws-sdk

import Amplify, { Auth } from 'aws-amplify';

let user = {
  "name": "Alexander Templeton",
  "image": "https://avatars.githubusercontent.com/u/10369436?v=4"
}

let footer_links = {
  "data": [
    {
      "title": "About",
      "links": [
        { "label": "Features", "link": "#" },
        { "label": "Pricing", "link": "#" },
        { "label": "Support", "link": "#" },
        { "label": "Forums", "link": "#" }
      ]
    },
    {
      "title": "Project",
      "links": [
        { "label": "Contribute", "link": "#" },
        { "label": "Media assets", "link": "#" },
        { "label": "Changelog", "link": "#" },
        { "label": "Releases", "link": "#" }
      ]
    },
    {
      "title": "Community",
      "links": [
        { "label": "Join Discord", "link": "#" },
        { "label": "Follow on Twitter", "link": "#" },
        { "label": "Email newsletter", "link": "#" },
        { "label": "GitHub discussions", "link": "#" }
      ]
    }
  ]
}

let links = [
  {
    "link": "#1",
    "label": "Learn",
    "links": [
      { "link": "/about", "label": "Features" },
      { "link": "/docs", "label": "Documentation" },
      { "link": "/resources", "label": "Resources" },
      { "link": "/community", "label": "Community" },
      { "link": "/blog", "label": "Blog" }
    ]
  },
  { "link": "/about", "label": "About" },
  { "link": "/pricing", "label": "Pricing" },
  {
    "link": "#2",
    "label": "Support",
    "links": [
      { "link": "/faq", "label": "FAQ" },
      { "link": "/demo", "label": "Book a demo" },
      { "link": "/forums", "label": "Forums" }
    ]
  }
]

let table_data = {
  "data": [
    {
      "title": "Foundation",
      "author": "Isaac Asimov",
      "year": 1951,
      "reviews": { "positive": 2223, "negative": 259 }
    },
    {
      "title": "Frankenstein",
      "author": "Mary Shelley",
      "year": 1818,
      "reviews": { "positive": 5677, "negative": 1265 }
    },
    {
      "title": "Solaris",
      "author": "Stanislaw Lem",
      "year": 1961,
      "reviews": { "positive": 3487, "negative": 1845 }
    },
    {
      "title": "Dune",
      "author": "Frank Herbert",
      "year": 1965,
      "reviews": { "positive": 8576, "negative": 663 }
    },
    {
      "title": "The Left Hand of Darkness",
      "author": "Ursula K. Le Guin",
      "year": 1969,
      "reviews": { "positive": 6631, "negative": 993 }
    },
    {
      "title": "A Scanner Darkly",
      "author": "Philip K Dick",
      "year": 1977,
      "reviews": { "positive": 8124, "negative": 1847 }
    }
  ]
}

let games_template = [{
  "uuid": "311b4972-acbd-4769-b650-a64c7c44c7ed",
  "image": "https://assets-prd.ignimgs.com/2020/01/11/img-20200109-134204-1578701390405.jpg",
  "title": "Return to Dark Tower",
  "host": "Scott",
  "date": "21 Apr 22",
  "category": "Co-op"
},
{
  "uuid": "deef4dac-046b-401c-918e-898ba817dff7",
  "image": "https://images.fineartamerica.com/images-medium-large-5/rakdos-cackler-ryan-barger.jpg",
  "title": "Edge of Winter Chapter 5",
  "host": "Online",
  "date": "28 Apr 22",
  "category": "Dungeons & Dragons"
}, {
  "uuid": "f43dca35-fa9b-408d-858e-e35c55d856a1",
  "image": "https://pbs.twimg.com/media/FL1Ez-8WUAsSNaU?format=jpg&name=medium",
  "title": "Great Wall",
  "host": "Scott",
  "date": "5 May 22",
  "category": "Co-op/Betrayer"
},
{
  "uuid": "28f4efae-38af-418e-b246-2eaa2eb674b7",
  "image": "https://images.fineartamerica.com/images-medium-large-5/rakdos-cackler-ryan-barger.jpg",
  "title": "Edge of Winter Chapter 6",
  "host": "Online",
  "date": "12 May 22",
  "category": "Dungeons & Dragons"
}, {
  "uuid": "df271a8c-82bb-4dc7-9b68-1fe6fbeb6528",
  "image": "https://pbs.twimg.com/media/D4ggci5XoAAVHPi.jpg",
  "title": "Kemet",
  "host": "Pablo",
  "date": "19 May 22",
  "category": "Competitive"
},
{
  "uuid": "df271a8c-82bb-4dc7-9b68-1fe6fbeb6528",
  "image": "https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__original/img/thIqWDnH9utKuoKVEUqveDixprI=/0x0/filters:format(jpeg)/pic3536616.jpg",
  "title": "Terraforming Mars",
  "host": "Pablo",
  "date": "19 May 22",
  "category": "Competitive"
},
]

let image_card = {
  "image": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "link": "https://mantine.dev/",
  "title": "Journey to Swiss Alps",
  "author": "Robert Gluesticker",
  "views": 7847,
  "comments": 5
}

function AppShellDemo() {
  const theme = useMantineTheme();
  const [games, setGames] = useState(games_template);
  const [didLoad, setDidLoad] = useState<boolean>(true);

  useEffect(() => {
    if (!didLoad) {
      Auth.currentCredentials().then((credentials) => {
        const lambda = new Lambda({
          credentials: Auth.essentialCredentials(credentials),
          region: "us-east-1",
        });
        lambda.invoke(
          {
            FunctionName: 'BGGApi-dev',
            Payload: JSON.stringify({ board_game_title: 'Terraforming Mars' }),
          },
          function (err, data) {
            if (err) {
              console.log(err);
              return;
            }
            if (data.Payload) {
              setGames([{
                "uuid": "311b4972-acbd-4769-b650-a64c7c44c7ed",
                "image": "https://assets-prd.ignimgs.com/2020/01/11/img-20200109-134204-1578701390405.jpg",
                "title": "Return to Dark Tower",
                "host": "Scott",
                "date": "21 Apr 22",
                "category": "Co-op"
              },
              {
                "uuid": "deef4dac-046b-401c-918e-898ba817dff7",
                "image": "https://images.fineartamerica.com/images-medium-large-5/rakdos-cackler-ryan-barger.jpg",
                "title": "Edge of Winter Chapter 5",
                "host": "Online",
                "date": "28 Apr 22",
                "category": "Dungeons & Dragons"
              }, {
                "uuid": "f43dca35-fa9b-408d-858e-e35c55d856a1",
                "image": "https://pbs.twimg.com/media/FL1Ez-8WUAsSNaU?format=jpg&name=medium",
                "title": "Great Wall",
                "host": "Scott",
                "date": "5 May 22",
                "category": "Co-op/Betrayer"
              },
              {
                "uuid": "28f4efae-38af-418e-b246-2eaa2eb674b7",
                "image": "https://images.fineartamerica.com/images-medium-large-5/rakdos-cackler-ryan-barger.jpg",
                "title": "Edge of Winter Chapter 6",
                "host": "Online",
                "date": "12 May 22",
                "category": "Dungeons & Dragons"
              }, {
                "uuid": "df271a8c-82bb-4dc7-9b68-1fe6fbeb6528",
                "image": "https://pbs.twimg.com/media/D4ggci5XoAAVHPi.jpg",
                "title": "Kemet",
                "host": "Pablo",
                "date": "19 May 22",
                "category": "Competitive"
              },
              {
                "uuid": "df271a8c-82bb-4dc7-9b68-1fe6fbeb6528",
                "image": `https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__original/img/thIqWDnH9utKuoKVEUqveDixprI=/0x0/filters:format(jpeg)/pic3536616.jpg`,
                "title": "Terraforming Mars",
                "host": "Scott",
                "date": "26 May 22",
                "category": "Competitive"
              }])
            }
          }
        );
      });
    }
    setDidLoad(true);
  }, [didLoad, games])

  return (
    <AppShell
      fixed
      padding={"md"}
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      header={
        <Header fixed height={60} >
          <HeaderAction links={links} user={user} />
        </Header>
      }
      footer={
        <FooterLinks {...footer_links} />
      }
    >
      <Container size="xl" px="xs" py="xs">
        <Title order={1}>Upcoming Games</Title>
      </Container>

      <Container size="xl" px="xs" py="xs">
        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: 850, cols: 2, spacing: 'sm' },
            { maxWidth: 550, cols: 1, spacing: 'sm' },
          ]}
        >
          {games.map((game) => {
            return (<GameCardImage key={game.uuid} {...game} />)
          })}

        </SimpleGrid>
      </Container >

      <Container size="xl" px="xs" py="xs">
        <Title order={1}>New & Unplayed</Title>
      </Container>
      <Container size="xl" px="xs" py="xs">
        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: 850, cols: 2, spacing: 'sm' },
            { maxWidth: 550, cols: 1, spacing: 'sm' },
          ]}
        >
          <ImageCard {...image_card} />
          <ImageCard {...image_card} />
          <ImageCard {...image_card} />
        </SimpleGrid>
      </Container>

      <Container size="xl" px="xs" py="xs">
        <Title order={1}>Game History</Title>
      </Container>

      <Container size="xl" px="xs" py="xs">
        <SimpleGrid cols={1}>
          <TableReviews {...table_data} />
        </SimpleGrid>
      </Container >

      <Container px="xs" py="xs">
        <EmailBanner />
      </Container >
    </AppShell >
  );
}

export default withAuthenticator(AppShellDemo);