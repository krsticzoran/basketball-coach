'use client'
import { useRouter } from 'next/navigation'
import classes from '@/styles/pages/gallery.module.scss'

export default function ModalWrapper({ children }) {
  const router = useRouter()

  const closeModal = () => {
    router.push('/gallery')
  }

  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className={classes.modal} onClick={closeModal}>
      <div className={classes.container} onClick={stopPropagation}>
        {children}
      </div>
    </div>
  )
}
