import { useRouter } from 'next/router';

export default function BoardPage() {
  const router = useRouter();

  return (
    <p>
      BoardPage(/boards/
      {router.query.subject}
      )
    </p>
  );
}
