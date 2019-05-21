<script>
  import escape from 'validator/lib/escape'

  export let name

  function handleChange(event) {
    name = event.target.value.length > 0 ? `<span class='font-normal'>${escape(event.target.value)}</span>` : 'world'
  }
</script>

<main class="max-w-xl w-full">
  <div class="shadow bg-indigo-100 border border-indigo-200 rounded p-4">
    <h1 class="text-4xl font-thin text-indigo-500 mb-3">Hello {@html name}!</h1>
    <input
      name='name'
      placeholder='What’s your name?'
      class="bg-white text-indigo-700 border border-indigo-200 rounded-sm hover:border-indigo-400 focus:border-indigo-700 focus:shadow-sm py-1 px-2"
      on:input={handleChange}
    >
  </div>
</main>
