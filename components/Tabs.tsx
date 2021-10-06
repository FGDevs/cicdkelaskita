import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { useState } from "react";
import { Section } from "~/interfaces";

import TabMateri from "./TabMateri";
const TabRating = dynamic(()=> import('~/components/TabRating'));

export default function Tabs({ sections }:{ sections: Section[] }) {
  const [tabs, setTabs] = useState('materi');

  return(
    <TabsContainer>
      <TabsWrapper>
        <TabsItem onClick={() => setTabs('materi')} disabled={tabs==='materi'? true : false}> Materi </TabsItem>
        <TabsItem onClick={() => setTabs('rating')} disabled={tabs==='rating'? true : false}> Rating </TabsItem>
      </TabsWrapper>
      <div>
        {tabs === 'materi'
          ? (<TabMateri sections={sections} />)
          : (<TabRating/>)
        }
      </div>
    </TabsContainer>
  )
}

const TabsContainer = styled.section`
  margin: 1.5rem 0 1rem;
`

const TabsWrapper = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
`

const TabsItem = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  background: none;
  margin-right: 1.5rem;
  margin-bottom: -0.1rem;
  font-size: 1.5rem;
  font-weight: 600;
  height: 50px;
  color: var(--color-text-primary);
  transition: color 0.1s ease-in-out;
  &:hover:not(:disabled){
    color: var(--color-text-gray);
  }
  &:disabled {
    color: var(--color-text-secondary);
    &::after {
      position: absolute;
      margin-top: 8px;
      display: block;
      content: '';
      height: 6px;
      width: 80%;
      border-radius: 6px;
      background: var(--color-text-secondary);
    }
  }
`