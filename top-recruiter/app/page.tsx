import Image from 'next/image'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import CallToActionWithIllustration from './components/Home/hero'
import NewsletterCTA from './components/Newsletter/newsletter'


export default function Home() {
  return (
    <main>
      <CallToActionWithIllustration/>
      <NewsletterCTA/>
    </main>
  )
}
