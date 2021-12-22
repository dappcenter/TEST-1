import React, { useState } from 'react'
import styled from 'styled-components'
import { CleanButton } from 'components/Button'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

const Wrapper = styled.div`
  padding: 0.3rem;
  border-radius: 1.25rem;
  border: 1px solid ${({ theme }) => theme.bg3};
  background-color: ${({ theme }) => theme.bg2};
`

const Header = styled(CleanButton)`
  padding: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h4`
  font-weight: 400;
  margin: 0;
`

const ArrowWrapper = styled.div`
  padding: 0.3rem;
`

export default function Accordion({ title, children }: { title: string; children: JSX.Element | JSX.Element[] }) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Wrapper>
      <Header onClick={() => setOpen(!open)}>
        <Title>{title}</Title>
        <ArrowWrapper>{open ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</ArrowWrapper>
      </Header>

      {open && <>{children}</>}
    </Wrapper>
  )
}
