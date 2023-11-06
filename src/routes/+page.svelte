<script>
    import Navigationbar from "$lib/ui/navigationbar.svelte";
    import HeroTop from "$lib/page_body/hero_top.svelte";
    import HeroBottom from "$lib/page_body/hero_bottom.svelte";
    import MidSection from "$lib/page_body/mid_section.svelte";
    import Bottomsection from "$lib/page_body/bottom_section.svelte"
    import EndSection from "$lib/page_body/end_section.svelte";
    import FooterSection from "$lib/page_body/footer_section.svelte";
    import CopyrightSection from "$lib/page_body/copyright_section.svelte";

    const name = "Cynthia Wade"
</script>

<Navigationbar name={name}/>
<main>
    <HeroTop name={name}/>
    <HeroBottom/>
    <MidSection/>
    <Bottomsection/>
    <EndSection/>
    <FooterSection name={name}/>
    <CopyrightSection/>
</main>