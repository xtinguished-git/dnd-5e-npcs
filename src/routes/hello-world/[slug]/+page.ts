
/** @type {import('./$types').PageLoad} */
export function load({ params }: {params: any;}) {
    if (params.slug ==='hello-world') {
        return {
            title: 'Hello World!',
            content: 'This is dynamically loaded content. Lorem ipsum dolor sit amet... this used a [slug] in the data.'
        };
    }
}