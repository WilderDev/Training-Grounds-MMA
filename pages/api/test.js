import { withSentry } from "@sentry/nextjs";

const handler = async (req, res) => {
  // ...
};

export default withSentry(handler);
