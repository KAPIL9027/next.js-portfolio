
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-06'

export const dataset = "production" ;
export const projectId = "arb23gpi";
export const useCdn = false

console.log(process.env.NEXT_PUBLIC_SANITY_DATASET);