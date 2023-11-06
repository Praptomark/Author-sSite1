<script lang="ts">
    import CustomButton from "$lib/micro_comp/custom_button.svelte";
import Custombutton from "$lib/micro_comp/custom_button.svelte"

    export let image: string
    export let bookname: string
    export let placename: string
</script>

<div class="w-full h-full flex justify-center items-center cursor-default">
    <img class="h-full w-full object-cover object-center relative" src="{image}" alt="painting">
    <div class="absolute flex flex-col items-center p-10 backdrop-blur-xl backdrop-brightness-50">
        <h1 class="text-5xl p-6 uppercase font-poppins text-white cursor-default">{bookname}</h1>
        <div class="h-0 border w-full"/>
        <p class="pt-5 tracking-widest font-poppins text-white cursor-default">FEATURED IN</p>
        <p class="p-5 font-msmadi text-2xl text-white cursor-default">{placename}</p>
        
        <CustomButton button_text={"read story"}/>
        
    </div>
</div>