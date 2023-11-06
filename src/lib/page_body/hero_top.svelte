<script lang="ts">
    export let name: string
</script>

<div>
    <div class="w-full h-[33rem] relative flex items-center justify-center">
        <img class="h-full w-full object-cover object-center absolute brightness-50" src="/pexels-ruvim-miksanskiy-1438761.jpg" alt="background">
        <div class="flex flex-col items-center font-intr absolute text-white">
            <h1 class="text-4xl tracking-wider cursor-default">WRITING BY</h1>
            <h1 class="text-7xl tracking-widest uppercase cursor-default">{name}</h1>
        </div>
        <div class="absolute pt-[27rem]">
            <img class="rounded-full w-36 h-36 object-cover" src="/pexels-andrea-piacquadio-39867782.png" alt="author">
        </div>
    </div>
</div>

<slot/>