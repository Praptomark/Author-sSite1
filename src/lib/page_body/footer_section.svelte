<script lang="ts">
    export let name: string
</script>

<footer class="bg-slate-500 w-full h-[10rem] flex justify-center items-center">
    <div class="text-white flex flex-col items-center">
        <p class="font-poppins cursor-default">Writing By</p>
        <h1 class="text-4xl font-satisfy p-2 cursor-default">{name}</h1>
        <ul class="flex gap-2">
            <li><a class=" cursor-default hover:text-slate-300" href="/">home</a></li>

            <li><p class=" cursor-default">|</p></li>

            <li><a class=" cursor-default hover:text-slate-300" href="/">fiction</a></li>

            <li><p class=" cursor-default">|</p></li>

            <li><a class=" cursor-default hover:text-slate-300" href="/">blog</a></li>

            <li><p class=" cursor-default">|</p></li>

            <li><a class=" cursor-default hover:text-slate-300" href="/">about</a></li>

            <li><p class=" cursor-default">|</p></li>

            <li><a class=" cursor-default hover:text-slate-300" href="/">giveaway</a></li>

            <li><p class=" cursor-default">|</p></li>

            <li><a class=" cursor-default hover:text-slate-300" href="/">contact</a></li>
        </ul>
    </div>
</footer>