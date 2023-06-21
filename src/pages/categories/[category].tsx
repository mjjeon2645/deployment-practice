import { useRouter } from 'next/router';

export default function CategoryPage() {
  const router = useRouter();

  return (
    <p>
      CategoryPage(/categories/
      {router.query.category}
      )
    </p>
  );
}
