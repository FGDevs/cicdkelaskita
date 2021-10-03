// import ThemeToggler from "../components/ToggleTheme";
import styled from "@emotion/styled";
import dynamic from 'next/dynamic';

const ThemeToggler = dynamic(() => import('../components/ToggleTheme'), {
  ssr: false,
});

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 35vh;
`;

export default function Test() {
  return (
    <Container>
      <main>
        <h1>Next Js</h1>
        <h4>Dark mode is more than just a gimmick right?</h4>
        <ThemeToggler />
      </main>
    </Container>
  )
}