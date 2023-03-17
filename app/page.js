import BottonBanner from './BottonBanner';
import LoginForm from './login/LoginForm';
import LogoPopulary from './LogoPopulary';
import PlayYellow from './PlayYellow';
import WelcomeLogo from './WelcomeLogo';

export default function HomePage() {
  return (
    <main>
      <div className="logo"></div>
      <div className="logo">
        <LogoPopulary />
      </div>
    </main>
  );
}
