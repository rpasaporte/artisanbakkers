import Image from 'next/image';

export default function Proofing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <Image src="/b-blue.png" alt="Coming Soon" width={160} height={160} className="mb-4" />
      <h1 className="text-5xl font-bold">Coming Soon</h1>
    </div>
  );
}
