import Image from 'next/image';

export default function WelcomeLogo() {
  return (
    <Image
      class="center"
      src="/landingTop.png"
      width={1478}
      height={500}
      alt="Picture of the author"
    />
  );
}
