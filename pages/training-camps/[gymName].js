import { useState } from "react";
import Head from "next/head";
import Layout from "../../components/layout/Layout";
import HeroImageGallery from "../../components/gym/HeroImageGallery";
import { connectToDatabase } from "../../utils/mongo.helpers";
import { toSmallKebabCase } from "../../utils/string.helpers";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const SingleGymTemplate = ({ gym }) => {
  console.log("gym:", gym);
  return (
    <Layout isSticky={false}>
      <Head>
        <title>Training Grounds | MMA Gym Finder</title>
        <meta
          name="description"
          content="Find MMA gyms, groups, instructors, masters, and fighters around the world - all made possible by hosts on Training Grounds MMA."
        />
      </Head>

      {/* Image gallery */}
      <HeroImageGallery images={gym.all_images} />

      {/* Product info */}
    </Layout>
  );
};

export default SingleGymTemplate;

export async function getStaticProps({ params }) {
  // TSK: Eventually we will need to change this to be the "_id"
  const { gymName } = params;

  const { db } = await connectToDatabase();
  const res = await db.collection("Active").find({}).toArray();

  const gymInfo = await res.filter(
    (item) => toSmallKebabCase(item.name) === gymName
  );

  return {
    props: {
      gym: JSON.parse(JSON.stringify(gymInfo[0])),
    },
  };
}

export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const res = await db.collection("Active").find({}).toArray();

  const allGymNames = await res.map((gym) => gym.name);
  const allPaths = allGymNames.map((gym) => ({
    params: {
      gymName: toSmallKebabCase(gym),
    },
  }));

  return {
    paths: allPaths,
    fallback: "blocking",
  };
}
