import styled from '@emotion/styled';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import { Kelas } from '../../../interfaces';
import { markdownParser } from '../../../helpers';


export default function KelasPreview({ kelas } : { kelas : [Kelas] }) {
  const {
    title,
    short_description,
    description,
    topik_id,
    level,
    price,
    preview_path,
  } = kelas[0];

  const point = 0.025 * price;

  return (
    <>
      <Head>
        <title>Kelaskita | {title} </title>
        <meta name="title" content={title} />
        <meta name="description" content={short_description} />
      </Head>

      <Layout header>
        <HeadContainerBackground />
        <PageLayout>
          <MainLayout>
            <HeadWrapper>
              <HeadTitle>{ title }</HeadTitle>
              <p>{ short_description }</p>
            </HeadWrapper>
            <section>
              <h3>Deskripsi Kelas</h3>
              <Description dangerouslySetInnerHTML={{__html: markdownParser(description)}} />
            </section>
          </MainLayout>
          <AsideLayout>
            <AsideCard>
              <video
                src={`http://localhost:1337${preview_path[0].url}`}
                width='100%'
                controls
              />
              <AsideBody>
                <AsideTagWrapper>
                  <AsideTag>
                    { topik_id.title }
                  </AsideTag>
                  <AsideTag>
                    Level: { level == 1 ? 'Beginner': level == 2 ? 'Intermediate' : 'Advanced' }
                  </AsideTag>
                </AsideTagWrapper>
                <AsideBenefitTitle>
                  Benefit yang di dapat dari kelas ini
                </AsideBenefitTitle>
                <AsideBenefitList>
                  <AsideBenefitItem>
                    Total Durasi Video: 45 menit
                  </AsideBenefitItem>
                  <AsideBenefitItem>
                    Akses Kelas Penuh
                  </AsideBenefitItem>
                  <AsideBenefitItem>
                    1 Materi PDF
                  </AsideBenefitItem>
                  <AsideBenefitItem>
                    1 Materi Teks
                  </AsideBenefitItem>
                  <AsideBenefitItem>
                    e-Certificate Kelulusan Kelas
                  </AsideBenefitItem>
                </AsideBenefitList>
              </AsideBody>
              <AsideFooter>
                <AsideBenefitTitle>
                  Kamu dapat { point } point
                </AsideBenefitTitle>
                <BuyButton>
                  Ikut Kelas
                </BuyButton>
              </AsideFooter>
            </AsideCard>
          </AsideLayout>
        </PageLayout>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:1337/kelas');
  const kelass = await response.json();

  const paths = kelass.map(( kelas ) => ({
    params: { 
      instructor: kelas.instructor_id['name'],
      slug: kelas.slug
    }
  }))

  return { paths, fallback: 'blocking'};
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`http://localhost:1337/kelas?slug=${params.slug}`);
  const kelas = await response.json();
  
  return {
    props: { kelas } 
  };
};

const HeadContainerBackground = styled.section`
  position: absolute;
  width: 100%;
  height: 340px;
  margin-top: 5rem;
  background: var(--color-bg-gray);
  z-index: -1;
`

const PageLayout = styled.div`
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
  padding: 1rem;
`

const AsideLayout = styled.aside`
  --aside-width: 350px;
  position: relative;
  flex: 0 0 var(--aside-width);
  max-width: var(--aside-width);
  padding: 1rem;
`

const MainLayout = styled.div`
  width: 100%;
`

const HeadWrapper = styled.div`
  height: 340px;
  min-height: 340px;
  max-height: 340px;
  margin-top: 5rem;
  padding-top: 2rem;
`

const HeadTitle = styled.h1`
  font-size: 2.8rem;
  line-height: 5rem;
  font-weight: 800;
`

const AsideCard = styled.div`
  position: fixed;
  max-width: var(--aside-width);
  border-radius: 8px;
  overflow: hidden;
  background: var(--color-bg-secondary);
`

const AsideBody = styled.div`
  padding: 0.5rem 1rem 1rem;
`

const AsideTagWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: -0.5rem;
  padding: 0.5rem 0;
  margin-bottom: 0.75rem;
` 

const AsideTag = styled.p`
  font-size: 0.8rem;
  margin: 0 0.5rem;
  border-radius: 4px;
  color: var(--color-hover);
  box-shadow: 0 0 0 1px var(--color-hover);
  padding: 0.5rem 1rem;
`

const AsideBenefitTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.5rem 0;
`

const AsideBenefitList = styled.ul`
  color: var(--color-text-primary);
  font-size: 0.9rem;
  padding-left: 1.5rem;
  margin: 0;
`

const AsideBenefitItem = styled.li`
  padding: 0.5rem 0;
`

const AsideFooter = styled.div`
  border-top: 1px solid var(--color-bg-gray);
  padding: 1rem;
`

const BuyButton = styled.button`
  cursor: pointer;
  font-weight: 600;
  border: none;
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  background: var(--color-hover);
`

const Description = styled.article`
  padding: 1rem 0;
  line-height: 1.5rem;
  & > h1, h2, h3 {
    padding: 1.5rem 0 0.5rem;
  }
`