import Link from 'next/link'
import classes from '@/styles/components/ui/button.module.scss'

export default function Button({ href, color, children }) {
  return (
    <button
      className={`${classes.button} ${color === 'dark' ? classes.dark : classes.light} mt-2 px-4 py-3`}
    >
      <Link href={href}>{children}</Link>
    </button>
  )
}
