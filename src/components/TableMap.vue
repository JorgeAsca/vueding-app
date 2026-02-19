<script setup lang="ts">
import { useRestaurantStore } from '../stores/restaurant';
import TableComponent from './Table.vue';
import '../assets/styles/map.css';

// Corregimos la definición de props
const props = defineProps<{
  selectedTableId: number | null;
}>();

const emit = defineEmits<{
  (e: 'select-table', id: number): void;
}>();

const store = useRestaurantStore();

/**
 * Determina el estado visual de la mesa basándose en:
 * 1. Si está seleccionada actualmente en el UI.
 * 2. Si tiene una reserva en el Store para la hora activa.
 */
const getTableStatus = (id: number) => {
  if (props.selectedTableId === id) return 'selected';
  return store.isTableAvailable(id) ? 'free' : 'occupied';
};
</script>

<template>
  <div class="table-map-container">
    <div class="map-header">
      <h2>Planta del Restaurante</h2>
      <span>Horario: <strong>{{ store.activeTimeSlot }}</strong></span>
    </div>

    <div class="map-layout" role="region" aria-label="Mapa interactivo de mesas">
      <TableComponent v-for="table in store.tables" :key="table.id" :table-data="table"
        :status="getTableStatus(table.id)" @select="(id) => emit('select-table', id)" />
    </div>
  </div>
</template>
