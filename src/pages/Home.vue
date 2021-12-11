<template>
  <div class="bg-primary w-full min-h-screen">
      <div class="w-full grid grid-cols-1 lg:grid-cols-6 container gap-10">
        <div class="col-span-1 md:col-span-2 shadow px-3 md:container py-5 relative">
          <h6 class="text-accent text-sm md:text-base font-semibold mb-5">Filter Results</h6>
          <div class="w-full block">
            <div class="w-full">
              <label class="text-accent text-xm mb-3">Name(contains)</label>
              <input placeholder="Text String" v-model="searchName" class="w-full shadow md:shadow-2xl p-3 bg-accent h-10 outline-none"/>
            </div>
            <div class="w-full flex flex-col md:flex-row lg:flex-col mt-5 text-xs">
              <div class="w-full md:w-2/6 lg:w-full mr-2 lg:mr-0 lg:mb-5">
                <label class="text-accent text-xs md:text-xm ">Minimum Score</label>
                <input placeholder="1 - 10" v-model="searchName" class="w-full mt-3 md:mt-2 shadow md:shadow-2xl p-3 bg-accent h-10 outline-none mr-2 md:mr-10 lg:mr-0"/>
              </div>
              <div class="w-full md:w-4/6 mt-5 md:mt-0 lg:w-full relative text-xs md:text-xm">
                <label class="text-accent ">Order By</label>
                <div class="w-full flex flex-col md:flex-row mt-2 lg:flex-col lg:pb-3 shadow md:shadow-2xl">
                  <div class="w-full lg:w-full flex">
                    <button class="w-2/12 bg-secondary h-10 text-white text-sm">
                      <i class="fas fa-arrow-up"></i>
                    </button>
                    <v-select 
                      class="w-10/12 h-10 bg-accent outline-none"     
                      v-model="searchName" 
                      placeholder="Release Date"
                      :options="['peach','pear','apple','orange']"
                      
                  ></v-select>
                  </div>
                  <div class=" relative lg:flex lg:ml-auto lg:mt-12">
                      <button class="w-full mt-5 md:mt-0 md:w-10  bg-secondary h-10 lg:w-20 text-white flex ml-auto justify-center items-center" >
                        Clear
                      </button>
                  </div>
                </div>
            </div>
            
            </div>
          </div>
        </div>
        <div class="col-span-1 md:col-span-4"  >
            <ListCard v-for="item in cardData" :cardDetails="item" :key="item.id"/>
        </div>
      </div>
  </div>
</template>

<script>
import VueSingleSelect from "vue-single-select";
import ListCard from "../components/ListCard.vue"
export default {
  components:{
    ListCard,
    "v-select": VueSingleSelect
  },
  name: 'homePage',
  data(){
    return {
      searchName: null,
      cardData : [
        { 
          id: 1,
          title: "Game title",
          data: '12/12/2021',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        { 
          id: 2,
          title: "Game title",
          data: '12/12/2021',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        { 
          id: 3,
          title: "Game title",
          data: '12/12/2021',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        { 
          id: 4,
          title: "Game title",
          data: '12/12/2021',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        { 
          id: 5,
          title: "Game title",
          data: '12/12/2021',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
      ]
    }
  },
  methods: {
    
  },
}
</script>
