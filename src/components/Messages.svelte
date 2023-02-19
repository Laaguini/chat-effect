<script lang='ts'>
    import type { MessagesProvider } from '../types'
    import Message from './Message.svelte'

    export let provider: MessagesProvider = []

    let lastReady = 1
    let inc = () => lastReady++
</script>

<div class="messages">
    {#each provider.slice(0, lastReady) as message}
        <Message data={message} onReady={inc} />
    {/each}
</div>