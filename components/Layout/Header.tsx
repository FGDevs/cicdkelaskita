import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import { css } from '@emotion/react'
import Link from 'next/link';

const ThemeToggle = dynamic(() => import('~/components/ThemeToggle'),{
  ssr : false,
});

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link href="/" passHref>
          <Logo>
            LOGO.
          </Logo>
        </Link>
        <ThemeToggle />
        <AuthWrapper>
          <Link href="/login" passHref>
            <Login>Masuk</Login>
          </Link>
          <Link href="/register" passHref>
            <Register>Daftar Gratis</Register>
          </Link>
        </AuthWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

const buttonStyle = () => css`
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  margin: 0 8px;
`
const HeaderContainer = styled.header`
  width: 100vw;
  top: 0;
  right: 0;
  left: 0;
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1140px;
  margin: 0 auto;
  padding: 1rem;
`

const Logo = styled.a`
  cursor: pointer;
  color: var(--color-text-primary);
  font-size: 1.5rem;
  font-weight: 800;
  transition: color 0.1s ease-in-out;
  &:hover {
    color: var(--color-hover);
  }
`

const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Login = styled.a`
  ${buttonStyle}
  color: var(--color-button);
  &:hover {
    color: var(--color-button-hover);
  }
`

const Register = styled.a`
  ${buttonStyle}
  color: var(--color-button);
  box-shadow: var(--color-button);
  border-radius: 6px;
  background: transparent;
  box-shadow: 0 0 0 1.5px var(--color-button) ;
  &:hover {
    background: var(--color-button-hover);
    color: var(--color-hover-contrast);
    box-shadow: 0 0 0 1.5px var(--color-button-hover) ;
  }
`
