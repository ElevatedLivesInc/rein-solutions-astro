export async function onRequest(context) {
  try {
    const body = await context.request.json();

    const payload = {
      name: body.name || body.business || '',
      email: body.email || '',
      url: body.url || '',
      problem: body.problem || '',
      source: body.source || 'website'
    };

    const webhook = context.env?.N8N_WEBHOOK_URL || process.env.N8N_WEBHOOK_URL;

    if (!webhook) {
      return new Response(
        JSON.stringify({ status: 'error', detail: 'Missing N8N_WEBHOOK_URL' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resp = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!resp.ok) {
      return new Response(
        JSON.stringify({ status: 'error', detail: 'n8n webhook error' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify({ status: 'ok' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ status: 'error', detail: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
