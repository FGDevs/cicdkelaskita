import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Kelas } from '../interfaces';
import { PriceFormatter } from '../helpers';

export default function CardKelas({ kelas }:{ kelas : Kelas }) {
  const {
    slug,
    title,
    price,
    topik_id,
    instructor_id,
    banner_path,
    ulasan,
  } = kelas;

  let ulasan_rate = 0;
  ulasan?.forEach((object) => ulasan_rate += object.rating);
  ulasan_rate = ulasan_rate / ulasan.length;

  return (
    <Link href={`/kelas/${instructor_id.name}/${slug}`} passHref>
      <KelasWrapper>
        <KelasImageWrapper>
          <Image
            src={`http://localhost:1337${banner_path.url}`}
            alt={banner_path.alternativeText}
            width={banner_path.width}
            height={banner_path.height}
            unoptimized
          />
          <KelasImageGradient />
        </KelasImageWrapper>
        <KelasBody>
          <KelasCategory>
            { topik_id.title }
          </KelasCategory>
          <KelasTitle>
            { title }
          </KelasTitle>
          <KelasPengajar>
            { instructor_id.name }
          </KelasPengajar>
          <KelasUlasanWrapper>
            <KelasUlasanCount>
              { ulasan.length } ulasan
            </KelasUlasanCount>
            <KelasUlasanRate />
          </KelasUlasanWrapper>
          <KelasHargaWrapper>
            <Link href='/login' passHref>
              <KelasHarga>
                { PriceFormatter(price) }
              </KelasHarga>
            </Link>
          </KelasHargaWrapper>
        </KelasBody>
      </KelasWrapper>
    </Link>
  )
}

const KelasBody = styled.div`
  padding: 0.5rem;
`

const KelasImageWrapper = styled.div`
  position: relative;
`

const KelasImageGradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--gradient-card-image);
`

const KelasCategory = styled.div`
  background: var(--color-topik-bg);
  font-size: 0.8rem;
  text-transform: uppercase;
  padding: 0.5rem 0.75rem;
  max-width: max-content;
  color: #ffffff;
`

const KelasTitle = styled.p`
  display: -webkit-box;
  margin: 0.5rem 0;
  font-size: 1.6rem;
  line-height: 2rem;
  height: 122px;
  min-height: 122px;
  max-height: 122px;
  font-weight: 600;
  overflow: hidden;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  transition: color 0.1s ease-in-out;
`

const KelasPengajar = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-gray);
  margin: 0.5rem 0;
`

const KelasUlasanWrapper = styled.div`
  display: flex;
  align-items: center;
`

const KelasUlasanCount = styled.p`
  font-size: 0.9rem;
  text-decoration: underline;
  color: var(--color-text-gray);
`

const KelasUlasanRate = styled.div`
  height: 20px;
  width: 100px;
  margin-left: 0.5rem;
  background: var(--color-text-secondary);
`

const KelasHargaWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`

const KelasHarga = styled.a`
  font-size: 0.9rem;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-weight: 500;
  background: var(--color-harga-bg);
  color: var(--color-text-primary);
  transition: 0.2s ease-in-out;
  &:hover {
    background: var(--color-hover);
    color: var(--color-hover-contrast);
  }
`

const KelasWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
  background: var(--color-bg-secondary);
  &:hover {
    ${ KelasTitle } {
      color: var(--color-hover);
    }
  }
`