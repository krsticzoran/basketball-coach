import ContentReveal from '@/components/ui/content-reveal'

export default function GalleryLayout({ gallery }) {
  return (
    <>
      <ContentReveal delay={0.5}>{gallery}</ContentReveal>
    </>
  )
}
