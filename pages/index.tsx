import React, { useState } from 'react';
import Link from 'next/link'

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
  Timeline,
  Button
} from '@mantine/core';


import { FooterLinks } from '../components/FooterLinks/FooterLinks'


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


export default function AppShellDemo() {
  const theme = useMantineTheme();


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
          <Link href="/app"><Button>Login Now</Button></Link>
        </Header>
      }
      footer={
        <FooterLinks {...footer_links} />
      }
    >
      <Container size="xl" px="xs" py="xs">
        <Title order={1}>Login</Title>
        <Link href="/app"><Button>Login Now</Button></Link>
      </Container>
    </AppShell >
  );
}