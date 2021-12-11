<template>
    <div class="grid grid-cols-12 mb-5 shadow md:shadow-2xl ">
        <div class="col-span-3 md:col-span-2 bg-black h-full"></div>
        <div class="col-span-9 md:col-span-10 py-3 container ">
            <div class="grid grid-cols-12 md:grid-cols-12 font-montserrat">
                <div class="col-span-11 block text-accent">
                <div class="capitalize mb-2">
                    <h6 class="font-semibold text-sm">{{cardDetails.title}}</h6>
                    <aside class="text-xs">Released Date: {{cardDetails.data}}</aside>
                </div>
                <div class="text-xs ">
                    <p>{{cardDetails.text}}</p>
                </div>
                </div>
                <div class="col-span-1 hidden md:flex justify-center items-center"><div class="bg-secondary text-accent font-montserrat font-semibold rounded-full flex justify-center items-center w-10 h-10">9</div></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        cardDetails: {
            type: Object,
        }
    }    
}
</script>