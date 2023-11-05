
import React from 'react'
import { PrismaClient } from "@prisma/client";

import BlogDetails from '@/components/BlogDetails';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


async function getData(id) {
  let prisma = new PrismaClient();
  let Details = await prisma.blogs.findUnique({ where: { id: parseInt(id) } })
  return Details
}

async function page({ params }) {

  let id = params.slug;
  let data = await getData(id)
  return (
    <main>
      <Header />

      <BlogDetails data={data} />

      <Footer />
    </main>
  )
}

export default page