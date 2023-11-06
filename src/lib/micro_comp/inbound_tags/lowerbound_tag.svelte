<script lang="ts">
    export let tag: string
</script>

<div class="flex gap-3 items-center mt-2">
    <div class="w-full border m-0 h-0"/>
    <a href="/" class="text-white text-lg font-poppins tracking-widest border-2 w-48 text-center hover:bg-slate-200 hover:text-slate-400 active:text-slate-200 active:bg-slate-400 cursor-default uppercase">{tag}</a>
</div>