import Image from 'next/image';

export default function ImageLogo() {
  return (
    <Image
      class="center"
      src="/navLogo.png"
      width={60}
      height={60}
      alt="Picture of the author"
    />
  );
}
