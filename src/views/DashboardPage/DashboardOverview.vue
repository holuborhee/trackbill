<template>
<div class="flex-1">
    <dashboardHeader
        class="p-10"
        text="Hi, Samuel"
        smallText="Welcome to TrackBill"
      />  
<OutflowGroupCard/>
</div>
</template>
<script>
import OutflowGroupCard from '../../components/OutflowGroupCard.vue';
import DashboardHeader from '../../components/DashboardHeader.vue'
export default {
    name: "dashboardOverview",
    components: {
        OutflowGroupCard,
        DashboardHeader
    }
}
</script>
