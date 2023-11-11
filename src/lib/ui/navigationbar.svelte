<script lang="ts">
    export let name: string
</script>

<nav class="flex gap-2 justify-around items-center p-3 bg-slate-400 fixed w-full z-50">
    <h1 class="text-4xl font-satisfy cursor-default text-white">{name}</h1>
    <ul class="flex gap-4 font-poppins">
        <li><a class="text-white cursor-default hover:underline hover:underline-offset-4 active:text-slate-300 active:transition active:ease-in active:duration-75" href="/">HOME</a></li>
        <li><a class="text-white cursor-default hover:underline hover:underline-offset-4 active:text-slate-300 active:transition active:ease-in active:duration-75" href="/">FICTION</a></li>
        <li><a class="text-white cursor-default hover:underline hover:underline-offset-4 active:text-slate-300 active:transition active:ease-in active:duration-75" href="/">BLOG</a></li>
        <li><a class="text-white cursor-default hover:underline hover:underline-offset-4 active:text-slate-300 active:transition active:ease-in active:duration-75" href="/">ABOUT</a></li>
        <li><a class="text-white cursor-default hover:underline hover:underline-offset-4 active:text-slate-300 active:transition active:ease-in active:duration-75" href="/">CONTACT</a></li>
    </ul>
</nav>

<slot/>