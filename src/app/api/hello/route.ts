export const runtime = 'edge'
export async function GET(request: Request) {
  return new Response(`The time is : ${new Date().valueOf()}`)
}
