import dynamic from 'next/dynamic';

const HomePage = dynamic(
  () => import("../../components/LandingPage/index"),
  { ssr: false },
);

export default function Page() {
  return <HomePage />
}
