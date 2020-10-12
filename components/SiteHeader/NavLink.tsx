import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from '../../styled'

type props = {
  href: string
}

const NavLink: React.FunctionComponent<props> = ({ children, href }) => {
  const router = useRouter()

  return (
    <Link href={href} passHref>
      <A isActive={router.pathname === href}>{children}</A>
    </Link>
  )
}

const A = styled.a<{isActive: boolean}>`
  color: ${({ isActive, theme }) => isActive ? theme.colors.green : theme.colors.white};

  &:not(:first-of-type) {
    margin-left: 20px;
  }
`

export default NavLink
