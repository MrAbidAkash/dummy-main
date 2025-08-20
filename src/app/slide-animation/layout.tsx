import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Slide Animation Demo - Client Management Solutions',
  description: 'Interactive slide animation showcasing client management and campaign solutions with smooth scroll animations.',
}

export default function SlideAnimationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
