import Image from 'next/image';
import logoImg from '../../../public/b-blue.png';

export default function Proofing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <Image src={logoImg} alt="Coming Soon" width={160} height={160} className="mb-4" />
      <h1 className="text-5xl font-bold">Coming Soon</h1>
    </div>
  );
}
