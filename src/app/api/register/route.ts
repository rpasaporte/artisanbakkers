import { getAllBusinesses } from './service';

export async function GET(request: Request) {
  const businesses = await getAllBusinesses();

  return Response.json({
    message: 'Code received successfully',
    businesses,
  });

  // const url = new URL(request.url);
  // const code = url.searchParams.get("code");

  // if (!code) {
  //   return Response.json({ error: "Code not found" }, { status: 400 });
  // }

  // return Response.json({
  //   message: "Code received successfully",
  //   code,
  // });
}
