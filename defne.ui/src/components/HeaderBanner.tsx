import Banner from './Banner';
import HeaderInner from './HeaderInner';

export default function HeaderBanner() {
  return (
    <header className="header">
      <HeaderInner />
      <Banner />
    </header>
  )
}