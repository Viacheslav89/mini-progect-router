<template>
    <AppNavigation />
    <div>
        details!!!!!!!!!!!!!!!!!!!!!!!!
    </div>
    <p>{{ userId }}</p>
    <p>{{ user?.name }}</p>
    <p>{{ user?.address }}</p>
</template>

<script setup lang="ts">
import AppNavigation from "./AppNavigation.vue";
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useUser } from "@/comosables/useUses";
import type { User } from "./../type";


const route = useRoute();
const { users } = useUser();

const userId = computed(() => route.params.id);
const user = ref(users.value.find((user: User) => user.id === +userId.value));

</script>

<style scoped>

</style>