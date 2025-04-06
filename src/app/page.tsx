import Link from 'next/link';
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <div>
      <Link href="/foo">FooLink</Link>
      <Progress value={33} />
    </div>
  );
}
