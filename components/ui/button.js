import Link from 'next/link'
import classes from '@/styles/components/ui/button.module.scss'

export default function Button({ href, children }) {
  return (
    <button className={classes.button}>
      <Link href={href}>{children}</Link>
    </button>
  )
}
