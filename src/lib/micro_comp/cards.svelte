<script lang="ts">
    import Icon from '@iconify/svelte';
    import CustomButton from './custom_button.svelte';

    const wxh = 30

    export let location_name: string
    export let season_number: number
    export let card_button: string
    export let img_field: string
</script>

<div class="flex flex-col items-center h-[20rem] w-[15rem] justify-center">
    <img class="h-full w-full object-cover object-center relative brightness-50" src="{img_field}" alt="card img">
    <div class="absolute flex flex-col items-center justify-center backdrop-blur-sm p-7">
        <Icon icon="mdi:location" color="white" width="{wxh}" height="{wxh}"/>
        <h1 class="uppercase text-white text-lg pt-2 pb-2 tracking-wide cursor-default">{location_name}</h1>
        <div class="h-0 w-10 border mt-5 mb-5"/>
        <h1 class="uppercase text-white text-2xl pt-2 pb-6 cursor-default">season {season_number}</h1>
        <CustomButton button_text={card_button}/>
    </div>
</div>