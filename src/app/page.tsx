import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href="/foo">FooLink</Link>
    <div className="w-96 h-48 bg-gradient-to-tr rounded-md from-indigo-600 via-pink-600 to-purple-600 p-0.5">
      <div className="w-full h-full rounded-md bg-white flex items-center justify-center">
        <p className="text-2xl font-manrope font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
          Demo
        </p>
      </div>
    </div >
    </div>
  );
}
