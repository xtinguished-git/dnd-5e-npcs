<script>
    /**
	 * @type {{ title: any; content: any; }}
	 */
     export let data;
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>