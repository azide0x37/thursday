import React from 'react';
import Link from 'next/link'

import {
  AppShell,
  Header,
  useMantineTheme,
  Container,
  Title,
  Button
} from '@mantine/core';

import { HeroTitle } from '../components/HeroTitle/HeroTitle'

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
    <AppShell>
      <HeroTitle />
    </AppShell >
  );
}