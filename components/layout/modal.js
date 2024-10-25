import SvgClose from '@/components/ui/svg-close'
import classes from '@/styles/pages/gallery.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import ContentReveal from '../ui/content-reveal'
import ModalWrapper from '../ui/modal-wrapper'

export default function Modal({ params, data }) {
  return (
    <>
      {params.id && (
        <ModalWrapper>
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
        </ModalWrapper>
      )}
    </>
  )
}
