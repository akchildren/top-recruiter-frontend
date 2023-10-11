import Image from 'next/image'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import CallToActionWithIllustration from './components/Home/hero'
import NewsletterCTA from './components/Newsletter/newsletter'
import HomeCardList from './components/Home/cards'

export default function Home() {
  return (
    <main>
      <CallToActionWithIllustration/>
      <HomeCardList />

      <NewsletterCTA/>
    </main>
  )
}
