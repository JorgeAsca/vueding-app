<script setup lang="ts">
import { useRestaurantStore } from '../stores/restaurant';
import type { TimeSlot } from '../types';

const store = useRestaurantStore();
const slots: TimeSlot[] = ['13:00', '14:00', '15:00', '20:00', '21:00'];
</script>

<template>
  <div class="time-selector">
    <h3>Seleccione Hora:</h3>
    <div class="slots">
      <button v-for="slot in slots" :key="slot" :class="{ active: store.activeTimeSlot === slot }"
        @click="store.setTimeSlot(slot)">
        {{ slot }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.slots {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

button {
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button.active {
  background-color: #3498db;
  color: white;
  border-color: #2980b9;
}
</style>
