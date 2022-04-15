import React from 'react';
import { createStyles, Paper, Text, Title, Badge, Button, Avatar, AvatarsGroup, Group, Overlay } from '@mantine/core';
import { Check } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
  card: {
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    //alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: 'inset 0px 0px 0 2000px rgba(0,0,0,0.6)'
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  subtitle: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 400,
    color: theme.white,
    lineHeight: 0.25,
    fontSize: 22,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface GameCardImageProps {
  uuid: string;
  image: string;
  title: string;
  category: string;
  host: string;
  date: string;
}

export function GameCardImage({ image, title, category, host, date }: GameCardImageProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="xl"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Group position={"apart"}>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
          <Badge color="green" size="lg" variant="filled">{date}</Badge>
        </Group>

        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <Title order={4} className={classes.subtitle}>
          {host == 'Online' ? "" : "Hosted by"} {host} {host == 'Online' ? "Session" : ""}
        </Title>
      </div>
      <Group>
        <Button color="blue" radius="md" size="md" compact>
          Join Game
        </Button>
        <AvatarsGroup limit={5}>
          <Avatar color="red" radius="xl">AT</Avatar>
          <Avatar color="yellow" radius="xl">SB</Avatar>
          <Avatar color="cyan" radius="xl">KS</Avatar>
          <Avatar color="green" radius="xl">HL</Avatar>
          <Avatar color="orange" radius="xl">KS</Avatar>
          <Avatar color="orange" radius="xl">G</Avatar>
          {/* ...other items */}
        </AvatarsGroup>
      </Group>
    </Paper >
  );
}
