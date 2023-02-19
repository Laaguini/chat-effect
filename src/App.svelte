<script>
  import Messages from './components/Messages.svelte'
  import Loader from './components/Loader.svelte'
  import XMLMessagesProvider from './scripts/xml-messages-provider.ts'

  const provider = new XMLMessagesProvider('/public/messages.xml')
</script>

{#await provider.provide()}
  <Loader/>
{:then data} 
  <Messages provider={data}/>
{/await}