import Image from 'next/image';
import BottonBanner from './BottonBanner';
import LogoPopulary from './LogoPopulary';
import PlayYellow from './PlayYellow';
import WelcomeLogo from './WelcomeLogo';

export default function HomePage() {
  return (
    <main>
      <div className="container">
        <div className="WelcomeLogo">
          <WelcomeLogo />
        </div>
        <div className="logoPage">
          <LogoPopulary />
          <PlayYellow />
          <BottonBanner />
        </div>
      </div>
    </main>
  );
}
