<template>
    <div>
        <nav class="bg-indigo-500 shadow-lg">
                <div class="container mx-auto">
                    <div class="sm:flex justify-around">
                        <a href="/" class="text-white text-3xl font-bold p-3">TrackBill</a>
                    
                        <ul class=" flex text-grey-400 sm:self-center text-xl border-t sm:border-none">
                                <li class="sm:inline-block">
                                    <a href="/" class="p-3 hover:text-white" >Home</a>
                                </li>
                                <li class="sm:inline-block">
                                <router-link :to="{name:'login'}" class="p-3 hover:text-white">Login</router-link>
                                </li>
                        </ul>
                    </div>
                </div>
        </nav>
    </div>
</template>
<script>
export default{
    name: "TheHeader",
}
</script>