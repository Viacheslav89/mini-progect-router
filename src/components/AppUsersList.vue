<template>
  <AppNavigation />
  <ul class="users__list">
    <li class="users__item" v-for="user of users" :key="user.id">
      <div class="users__name">
        {{ user.name }}
      </div>
      <div
        class="users__desk"
        @click="goToDetails(user.id)"
      >
        Deskription
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import AppNavigation from "./AppNavigation.vue";
import AppUserDetails from "./AppUserDetails.vue";
import { useUser } from "@/comosables/useUses";
import { useRouter } from "vue-router";

const { fetchUser, users } = useUser();
fetchUser();

const router = useRouter();

const goToDetails = (userId: number) => {
  router.push({ name: "Details", params: { id: userId } });
};
</script>

<style scoped lang="scss">
.users {
  &__item {
    margin-bottom: 30px;
  }

  &__desk {
    cursor: pointer;
  }
}
</style>
