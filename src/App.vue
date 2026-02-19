<script setup lang="ts">
import { ref } from 'vue';
import TimeSlotSelector from './components/TimeSlotSelector.vue';
import TableMap from './components/TableMap.vue';
import ReservationForm from './components/ReservationForm.vue';


import './assets/styles/restaurant.css';

const selectedId = ref<number | null>(null);

const handleTableSelection = (id: number) => {
  selectedId.value = id;
};

const closeForm = () => {
  selectedId.value = null;
};
</script>

<template>
  <main class="container">
    <header>
      <h1>VueDining - Gestión de Reservas</h1>
    </header>

    <TimeSlotSelector />

    <div class="layout">
      <TableMap :selected-table-id="selectedId" @select-table="handleTableSelection" />

      <ReservationForm v-if="selectedId" :table-id="selectedId" @close="closeForm" />

      <div v-else class="empty-selection">
        <p>Por favor, seleccione una mesa libre en el mapa para comenzar la reserva.</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  text-align: center;
  margin-bottom: 2rem;
}

.empty-selection {
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 2px dashed #dee2e6;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #6c757d;
}
</style>
