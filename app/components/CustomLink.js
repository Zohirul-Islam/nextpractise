"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const CustomLink = ({path,children}) => {
    const pathname = usePathname();
    const active = pathname === path
  return (
    <Link className={active ? 'text-blue-700 border-b':''} href={path}>{children}</Link>
  )
}

export default CustomLink