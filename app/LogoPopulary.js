import Image from 'next/image';

export default function LogoPopulary() {
  return (
    <div>
      <Image
        className="center"
        src="/middleBanner.png"
        width={1478}
        height={600}
        alt="Picture of the author"
      />
    </div>
  );
}
