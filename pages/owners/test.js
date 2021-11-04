import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const TestPage = () => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  const [secret, setSecret] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/auth/secret");
      const data = await res.json();

      if (data.secret) {
        setContent(data.secret);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && isLoading) return <div>Loading</div>;

  if (!session) {
    return <div>Please sign in</div>;
  }

  if (session) {
    return (
      <div>
        <h1>You have accessed the secret page!</h1>
      </div>
    );
  }
};

export default TestPage;
