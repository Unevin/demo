import Homepage from '@/components/Homepage';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Demo App</title>
        <meta name="description" content="Demo APP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full">
        <Homepage />
      </div>
    </>
  );
}
