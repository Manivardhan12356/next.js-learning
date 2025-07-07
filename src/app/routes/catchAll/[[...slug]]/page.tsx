import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug?: string[] | null;
  };
}

// Simulate a data fetcher based on slug
async function fetchDataBySlug(slug: string[]): Promise<string | null> {
  const knownSlugs = [['about'], ['products', 'shoes']];
  const matched = knownSlugs.find((entry) => JSON.stringify(entry) === JSON.stringify(slug));
  return matched ? matched.join('/') : null;
}

export default async function CatchAllPage({ params }: PageProps) {
  const slug = params.slug ?? [];

  const data = await fetchDataBySlug(slug);

  if (!data) {
    notFound(); // Trigger 404 page if data not found
  }

  if (slug.length === 1) {
    return <h1>{slug[0]}</h1>;
  }

  if (slug.length === 2) {
    return <h1>{`${slug[0]} and ${slug[1]}`}</h1>;
  }

  return <div>CatchAll Page: {slug.join(' / ')}</div>;
}
