import Image from 'next/image';

export default function LogoPopulary() {
  return (
    <div className="pupulary-logo-banner">
      <Image
        src="/middleBanner.png"
        width={1478}
        height={700}
        alt="Picture of the author"
      />
    </div>
  );
}
