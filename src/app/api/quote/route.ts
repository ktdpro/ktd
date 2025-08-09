export async function POST(req: Request) {
  const body = await req.json();
  // TODO: Hook up to your email provider (Resend, Postmark, SES) or a DB.
  // For now we\'ll just log it server-side.
  console.log('New quote request:', body);
  return Response.json({ ok: true });
}
