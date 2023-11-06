<script lang="ts">
    import CustomButton from "$lib/micro_comp/custom_button.svelte";
</script>

<div class="w-full h-[20rem] flex justify-end items-center">
    <img class="h-full w-full object-cover object-center relative sepia brightness-50" src="/pexels-maria-tyutina-1603933.jpg" alt="some pic">
    <div class="bg-slate-400 opacity-50 absolute w-[60rem] h-[20rem]"/>
    <img class="object-cover object-center h-80 w-80 border-8 absolute opacity-100 mr-[50rem] mt-[6rem]" src="/pexels-andrea-piacquadio-3986775we.jpg" alt="auther pic">
    
    <div class="flex flex-col items-start gap-3 absolute mr-64">
        <h1 class="uppercase text-white text-2xl cursor-default">about</h1>
        <div class="h-0 w-10 border"/>
        <p class="text-white text-left cursor-default">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br>
            Quo ipsam hic autem, nostrum voluptatum eaque voluptate in. <br>
            Omnis a, voluptates corrupti natus eveniet distinctio dolorem enim.
        </p>
        <CustomButton button_text={"about cynthia"}/>
    </div>
</div>