'use client'
import SvgClose from '@/components/ui/svg-close'
import classes from '@/styles/pages/gallery.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import ContentReveal from '../ui/content-reveal'
import { useRouter } from 'next/navigation'

export default function Modal({ params, data }) {
  const router = useRouter()

  const closeModal = () => {
    router.push('/gallery')
  }

  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <>
      {params.id && (
        <div className={classes.modal} onClick={closeModal}>
          <div className={classes.container} onClick={stopPropagation}>
            <button className={classes.close}>
              <Link href={'/gallery'}>
                <SvgClose />
              </Link>
            </button>
            <div>
              <ContentReveal delay={0.5} duration={1.5}>
                <Image
                  src={data[params.id].url}
                  alt={data[params.id].name}
                  width={1000}
                  height={600}
                  priority
                />
              </ContentReveal>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
