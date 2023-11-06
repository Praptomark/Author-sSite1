<script lang="ts">
    import CustomButton from "$lib/micro_comp/custom_button.svelte";
</script>

<div class="w-full h-[15rem] flex items-center justify-center">
    <img class="h-full w-full object-cover object-center relative brightness-50 opacity-75" src="/pexels-andreea-ch-1204941.jpg" alt="bg img">
    <div class="text-white absolute flex flex-col items-center">
        <h1 class="uppercase text-4xl p-5 cursor-default">connect</h1>
        <div class="h-0 border w-full"/>
        <p class="p-4 cursor-default">some text</p>
        <CustomButton button_text={"contact cynthia"}/>
    </div>
</div>