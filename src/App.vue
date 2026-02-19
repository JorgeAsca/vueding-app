<script setup lang="ts">
import TimeSlotSelector from './components/TimeSlotSelector.vue';
import TableMap from './components/TableMap.vue';
import ReservationForm from './components/ReservationForm.vue';
import { ref } from 'vue';

const selectedTableId = ref<number | null>(null);

const onTableSelected = (id: number) => {
  selectedTableId.value = id;
};
</script>

<template>
  <main class="container">
    <h1>VueDining - Gestión de Reservas</h1>

    <TimeSlotSelector />

    <div class="layout">
      <TableMap @select-table="onTableSelected" />

      <ReservationForm v-if="selectedTableId" :table-id="selectedTableId" @close="selectedTableId = null" />
    </div>
  </main>
</template>

<style>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: sans-serif;
}

.layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
