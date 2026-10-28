import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, PRODUCTS } from "@/data/products";
import { ProductDetailClient } from "./ProductDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found"
    };
  }

  return {
    title: `${product.name} — 100% Pure Raw Honey`,
    description: product.description.slice(0, 160),
    openGraph: {
      title: `${product.name} | Pak and Pakiza Honey`,
      description: product.tagline,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.name
        }
      ]
    }
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // JSON-LD Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://pakandpakiza.com${product.image}`,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Pak and Pakiza"
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "PKR",
      lowPrice: product.pricePKR,
      highPrice: product.sizes[product.sizes.length - 1].pricePKR,
      offerCount: product.sizes.length,
      availability: "https://schema.org/InStock"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
