import Link from 'next/link'
import classes from '@/styles/components/ui/button.module.scss'

export default function Button(props) {
  return (
    <button
      className={`${classes.button} ${props.color === 'dark' ? classes.dark : classes.light} mt-2 px-4 py-3`}
    >
      <Link href={props.href}>{props.name}</Link>
    </button>
  )
}
