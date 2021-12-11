<template>
    <div class="bg-primary w-full min-h-screen">
      <div class="flex container w-full flex-col md:w-8/12 lg:w-5/12">
            <h3 class="uppercase text-accent text-xl mb-3 font-semibold">Get in touch</h3>
            <p class="text-accent text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry.remaining essentially unchanged. It was popularised in the 1960s </p>
            <div class="shadow md:shadow-2xl lg:p-6 mt-10">
                <h6 class="capitalize text-accent text-sm mb-3">Contact form </h6>
                <form class="w-full">
                    <div class="w-full grid grid-cols-2 gap-5 mb-5">
                        <div class="cols-span-1">
                            <label class="text-accent text-xm ">Name *</label>
                            <input placeholder="Name" v-model="searchName" class="w-full mt-3 text-primary shadow md:shadow-2xl p-3 bg-accent h-10 outline-none mr-2 md:mr-10 lg:mr-0"/>
                        </div>
                        <div class="cols-span-1">
                            <label class="text-accent text-xm ">Email Address *</label>
                            <input placeholder="Email Address" v-model="searchName" class="w-full mt-3 shadow text-primary md:shadow-2xl p-3 bg-accent h-10 outline-none mr-2 md:mr-10 lg:mr-0"/>
                        </div>
                    </div>
                    <div class="">
                        <label class="text-accent text-xm ">Message  *</label>
                        <textarea placeholder="" class="w-full text-primary mt-3 shadow md:shadow-2xl p-3 bg-accent min-h-24 outline-none mr-2 md:mr-10 lg:mr-0"></textarea>
                    </div>
                    <div class="w-full mt-6">
                      <button class="px-10 py-3 bg-secondary  text-white flex ml-auto justify-center items-center" >
                        Clear
                      </button>
                  </div>
                </form>
            </div>
      </div>
    </div>
</template>