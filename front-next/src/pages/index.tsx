import Head from "next/head";

import { Layout } from "@/components/layout";
import Hero from "@/components/layout/Hero";
import Promo from "@/components/layout/Promo";
import Banners from "@/components/layout/Banners";
import NewArrivals from "@/components/layout/NewArrivals";
import ModernBanner from "@/components/layout/ModernBanner";
import BestSellers from "@/components/layout/BestSellers";
import SocialBaner from "@/components/layout/SocialBaner";
import BlogBaner from "@/components/layout/BlogBaner";
import FullBanner from "@/components/layout/FullBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>HONO - Multi Purpose HTML Template</title>
      </Head>
      <Hero />
      <Promo />
      <Banners />
      {/* <NewArrivals /> */}
      <ModernBanner />
      {/* <BestSellers /> */}
      {/* <BlogBaner /> */}
      <FullBanner />
      <SocialBaner />
    </>
  );
}
