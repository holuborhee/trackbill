<template>
  <div>
     
    <input
            type="text"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           maxlength="1"
           pattern="[0-9]"
            class="
              text-center
              w-16
              h-16
              border-b-2 border-primary
              md-2
              text-xs
              bg-slate-100
              hover:outline:none
              m-2
              text-5xl
            "
            @click.left="handleClick"
            @click.right="handleClick"
            @click.middle="handleClick"
            min="0"
            max="9"
          />

           
            
  </div>
</template>

<script>
export default {
props: ['modelValue'],
emits: ['update:modelValue'],

data(){
  return{
    limit:2
  }
},

methods:{
    handleClick(e){
       e.target.blur()
    },
   
}

}
</script>

 

 