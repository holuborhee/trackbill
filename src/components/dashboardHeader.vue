<template>
      <header>
        <div class="flex flex-col relative">
    <h1 class="font-bold text-4xl">{{text}}</h1>
    <p class="text-sm text-gray-400 font-body leading-8">{{smallText}}</p>
    <router-link :to="{name:'profile'}" class="absolute right-0"><i class="fa fa-user"></i></router-link>
        </div>
    </header>
    <hr>

</template>
<script>
export default {
name: "dashboardHeader", 
props: {
  text: String,
  smallText: String,
  class: String
}
}
</script>