interface Props {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: Props) {
  const { slug } = params;

  return (
    <main>
      <h1>Blog Post: {slug}</h1>
      {/* You can fetch post data here using the slug */}
    </main>
  );
}

