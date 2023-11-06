<script lang="ts">
    import UpperboundTag from "$lib/micro_comp/inbound_tags/upperbound_tag.svelte";
    import LowerboundTag from "$lib/micro_comp/inbound_tags/lowerbound_tag.svelte";
    import CustomButton from "$lib/micro_comp/custom_button.svelte";
    import Cards from "$lib/micro_comp/cards.svelte";

    const loc = "some location"
</script>

<div class="bg-slate-400 p-20">
    <div>
        <UpperboundTag tag={"blog"}/>
        <p class="text-white font-poppins font-light cursor-default">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ab itaque cupiditate quo quod porro omnis tempore 
            expedita reprehenderit consequatur temporibus doloremque, laboriosam corrupti, ratione natus quae a autem exercitationem.
        </p>

        <div class="flex justify-end p-10 gap-8 items-center bg-slate-500 mt-10 mb-10">
            <div class="flex flex-col items-end gap-3 p-4">
                <h1 class="uppercase text-white text-2xl cursor-default">blog name</h1>
                <div class="h-0 w-10 border"/>
                <p class="text-white text-right cursor-default">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br>
                    Quo ipsam hic autem, nostrum voluptatum eaque voluptate in. <br>
                    Omnis a, voluptates corrupti natus eveniet distinctio dolorem enim.
                </p>
                <CustomButton button_text={"read more"}/>
            </div>

            <img class="object-cover object-center h-[20rem] w-[30rem]" src="/pexels-andrea-piacquadio-3979185.jpg" alt="story pic">
        </div>

        <div class="flex justify-between mb-10">
            <Cards location_name={loc} season_number={1} card_button={"view season 1"} img_field={"/pexels-suzy-hazelwood-1762973.jpg"}/>
            <Cards location_name={loc} season_number={2} card_button={"view season 2"} img_field={"/pexels-virginia-magat-2131293.jpg"}/>
            <Cards location_name={loc} season_number={3} card_button={"view season 3"} img_field={"/pexels-steve-johnson-1509534.jpg"}/>
            <Cards location_name={loc} season_number={4} card_button={"view season 4"} img_field={"/pexels-pok-rie-1255372.jpg"}/>
        </div>

        <LowerboundTag tag={"read blog"}/>
    </div>
</div>