
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
        <img
          width={'100%'}
          src="https://img.freepik.com/free-photo/telling-friend-about-sales-beautiful-young-smiling-woman-holding-shopping-bags-talking-mobile-phone-while-standing-outdoors_231208-11885.jpg?w=1380&t=st=1668338031~exp=1668338631~hmac=645b86dcba511439ca2930087d11895095958973c0e59a5a7598b5a2ce591f3d" />
      </div>
    </div>
  )
}

export default HomePage