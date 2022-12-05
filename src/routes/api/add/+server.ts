import { json } from '@sveltejs/kit';

/**@type {import('./$types').RequestHandler} */
export async function POST({request}: {request:any}){
    const { a, b} = await request.json();
    return json (a+b)
}