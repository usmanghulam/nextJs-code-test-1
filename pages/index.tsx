
import React, { FC } from 'react'
import Head from "next/head";
import Image from 'next/image'

  
const HomePage = () => {
  return (
    <div className="my-8 bg-primary">
    <Head>
      <title>NextJs TailwindCSS E-commerce Website</title>
      <meta
        name="description"
        content="a website to sell gently used kids' clothing"
      />
    </Head>
    <div className="mt-4">
    {/* <Image
      src="https://thumbs.dreamstime.com/z/girl-shoping-mol-young-bags-shopping-102871284.jpg"
      alt="Picture of the author"
      width={500}
      height={500}
    /> */}
    </div>
  </div>
  )
}
  
export default HomePage