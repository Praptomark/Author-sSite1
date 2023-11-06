<script>
    import FeaturedBook from "$lib/micro_comp/featured_book.svelte";
    import UpperboundTag from "$lib/micro_comp/inbound_tags/upperbound_tag.svelte";
    import LowerboundTag from "$lib/micro_comp/inbound_tags/lowerbound_tag.svelte";
</script>


<div class="p-20 bg-slate-400 w-full">
    <UpperboundTag tag={"fiction"}/>
    
    <div class="w-full h-[30rem] mt-5 mb-5 gap-16 flex">
        <FeaturedBook image={"/pexels-snapwire-6992.jpg"} bookname={"Some Book"} placename={"someplace"}/>
        <FeaturedBook image={"/pexels-nothing-ahead-3571551.jpg"} bookname={"Some Book"} placename={"someplace"}/>
    </div>

    <LowerboundTag tag={"more fiction"}/>
</div>