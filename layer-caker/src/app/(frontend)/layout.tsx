import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity/visual-editing'
import { DisableDraftMode } from '@/components/disable-draft-mode'
import { Header } from '@/components/header'
import { SanityLive } from '@/sanity/lib/live'
import Footer from '@/components/footer'

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <SanityLive />
            {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </section>
  )
}