import Header from '@/components/header'
import Hero from '@/components/landing/hero'
import Calendar from '@/components/landing/calendar';
import Staff from '@/components/landing/staff';
import Why from '@/components/landing/why';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Why />
        <Staff />
        <Calendar />
      </main>
    </>
  )
}

