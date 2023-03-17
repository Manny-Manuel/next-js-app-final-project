import Image from 'next/image';

export default function PlayYellow() {
  return (
    <div>
      <Image
        className="center"
        src="/fotocarrete.png"
        width={1280}
        height={799}
        alt="Picture of the author"
      />
    </div>
  );
}
