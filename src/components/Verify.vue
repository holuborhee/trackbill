<template>
  <div>
     
    <input
            type="number"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
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
            min="0"
            max="9"
          />

           
            
  </div>
</template>

<script>
export default {

props: ['modelValue'],
emits: ['update:modelValue'],

}
</script>

 

 