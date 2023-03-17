import Image from 'next/image';

export default function WelcomeLogo() {
  return (
    <Image
      className="center"
      src="/landingTop.png"
      width={1478}
      height={400}
      alt="Picture of the author"
    />
  );
}
