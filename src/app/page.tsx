import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/foo">FooLink</Link>
      <div className="h-48 w-96 rounded-md bg-gradient-to-tr from-indigo-600 via-pink-600 to-purple-600 p-0.5">
        <div className="flex h-full w-full items-center justify-center rounded-md bg-white">
          <p className="font-manrope bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
            Demo
          </p>
        </div>
      </div>
    </div>
  );
}
