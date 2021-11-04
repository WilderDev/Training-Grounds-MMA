import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    res.send({
      secret: process.env.AUTH_SECRET,
    });
  } else {
    res.send({
      error: "Please Sign in to access this page",
    });
  }
};
