import Head from 'next/head'
import Dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import Layout from '~/components/Layout';
import { GetStaticProps } from 'next';
import { client } from '~/libraries/apollo_client';
import { GET_KELAS_CARD } from '~/graphql/queries/queryKelas';
import { Kelas } from '~/interfaces';
import {
  CardKelas,
  Hero
} from '~/components/';

export default function Home({ kelass }:{ kelass: Kelas[] }) {
  return (
    <>
      <Head>
        <title>Kelaskita</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout header footer footerBar>
        <Hero />
        <SectionContainer>
          <SectionSubTitle>
            Berbagai <TextHighlight>kelas</TextHighlight> menarik ada di sini
          </SectionSubTitle>
          <SectionContent>
            {kelass.map(( kelas ) => (
              <CardWrapper key={ kelas.id }>
                <CardKelas kelas={ kelas } />
              </CardWrapper>
            ))}
          </SectionContent>
        </SectionContainer>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({ query: GET_KELAS_CARD });
  return {
    props: { kelass : data.kelas },
  };
};

const SectionContainer = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  padding: 1rem 0;
`

const SectionSubTitle = styled.h2`
  font-size: 2em;
  margin: 1rem 0;
  text-align: center;
  color: var(--color-text-primary);
`

const CardWrapper = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  padding: 1rem 1.25rem;
`

const TextHighlight = styled.span`
  color: var(--color-text-secondary);
`

const SectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`

