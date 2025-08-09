import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { summary, min, max } = await req.json();

    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        text:
          'This range reflects the scope and the value the selected features deliver — performance, SEO, and clearer conversions.',
      });
    }

    const prompt = `Based on these project details: "${summary}". The estimated cost is $${min} - $${max}. Briefly explain in a friendly, professional tone (2-3 sentences) why this is a fair price, highlighting the value these features bring to a business. Frame it as an investment, not just a cost.`;

    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: prompt }] }] }),
      }
    );

    if (!resp.ok) {
      return NextResponse.json({
        text:
          'This estimate balances complexity and impact — a solid foundation for growth.',
      });
    }

    const data = await resp.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      'This estimate reflects the scope and the value the selected features deliver.';
    return NextResponse.json({ text });
  } catch {
    return NextResponse.json({
      text:
        'There was an issue generating the explanation, but the range reflects scope and value.',
    });
  }
}
