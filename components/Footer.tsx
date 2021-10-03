import { jsx } from '@emotion/react';

export default function Footer({ main } : { main?:boolean }) {
  return (
    <footer css={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#00374f',
    }}>
      { main && (<div>Hello</div>)}
    </footer>
  )
}