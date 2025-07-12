import { Metadata } from "next";
import React from "react";

const dummyData = {
  "1": {
    title: "Laptop",
    price: 2499,
  },
  "2": {
    title: "Mobile",
    price: 1999,
  },
  "3": {
    title: "Watch",
    price: 999,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: String }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = dummyData[slug as keyof typeof dummyData];
  return {
    title: data.title,
    description: data.title,
  };
}

async function DynamicMetaData({
  params,
}: {
  params: Promise<{ slug: String }>;
}) {
  const { slug } = await params;
  const data = dummyData[slug as keyof typeof dummyData];
  return <div>Title: {data.title}</div>;
}

export default DynamicMetaData;
