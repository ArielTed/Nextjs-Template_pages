import type { NextPage } from 'next';
import Head from 'next/head';

import HomeTemplate from '../components/templates/HomeTemplate';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Template nextjs by Ariel" />
      </Head>

      <HomeTemplate />
    </>
  );
};

export default Home;
