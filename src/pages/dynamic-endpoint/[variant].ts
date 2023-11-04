import type { APIRoute } from "astro";

export function getStaticPaths() {
  return [
    {
      params: {
        variant: "a" as const,
      },
    },
    {
      params: {
        variant: "b" as const,
      },
    },
  ];
}

export const GET: APIRoute = ({ params, request }) => {
  const variant = params.variant;
  return new Response("this is a test: " + variant);
};
