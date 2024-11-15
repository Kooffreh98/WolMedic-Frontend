"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function VerifyAccount({params}:{params: {token: string}}) {
  const router = useRouter();
  const { token } = params; // Extract the token from the URL
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return; // Wait until the router and token are ready

    const verifyToken = async () => {
      try {
        const response = await fetch(`https://medequip-api.vercel.app/api/auth/verify?token=${token}`);
        if (!response.ok) throw new Error('Failed to verify token');

        const result = await response.json();
        setData(result);
        router.push("/verified");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [token]); // Trigger when router is ready and token is available

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Verification Successful</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}