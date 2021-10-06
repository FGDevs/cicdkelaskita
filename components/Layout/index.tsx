import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, header, footer, footerBar }:{
  children: React.ReactNode,
  header?: boolean,
  footer?: boolean,
  footerBar?: boolean,
}) {
  return (
    <>
    { header && (<Header />) }
    <main>{children}</main>
    { footer && (<Footer main />) }
    </>
  )
}