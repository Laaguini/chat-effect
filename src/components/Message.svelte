<script lang='ts'>
    import type { Message } from '../types'
    import MessageLoader from './MessageLoader.svelte'
    import { blur } from 'svelte/transition'

    export let onReady: Function = () => null
    export let data: Message = null
    let { isOwn, text } = data
    export let delay: Number = text.length * 100

    let isReady = false

    setTimeout(() => {
        isReady = true
        onReady()
    }, delay)
</script>

<div in:blur={{ delay:0, duration: 200 }} class={`message ${isOwn?'own':''}`}>
    {#if isReady}
        {text}
    {:else}
        <MessageLoader />
    {/if}
</div>