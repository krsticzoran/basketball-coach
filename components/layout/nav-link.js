'use client'
import classes from '@/styles/components/layout/header.module.scss'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ href, children }) {
  const path = usePathname()

  return (
    <Link href={href} className={path === href ? classes.active : undefined}>
      {children}
    </Link>
  )
}
