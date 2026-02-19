<script setup lang="ts">
import { computed } from 'vue';
import type { Table } from '../types';

const props = defineProps<{
  tableData: Table;
  status: 'free' | 'occupied' | 'selected';
}>();

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

// Requisito A11y: Etiqueta descriptiva para lectores de pantalla [cite: 437, 438]
const ariaLabel = computed(() => {
  const estadoTraduccion = {
    free: 'Libre',
    occupied: 'Ocupada',
    selected: 'Seleccionada'
  };
  return `Mesa ${props.tableData.name}, para ${props.tableData.capacity} personas, estado: ${estadoTraduccion[props.status]}`;
});

// Clases dinámicas para el estado visual [cite: 432]
const tableClass = computed(() => ({
  'table-free': props.status === 'free',
  'table-occupied': props.status === 'occupied',
  'table-selected': props.status === 'selected',
}));
</script>

<template>
  <button type="button" class="restaurant-table" :class="tableClass"
    :style="{ left: `${tableData.position.x}px`, top: `${tableData.position.y}px` }" :aria-label="ariaLabel"
    :disabled="status === 'occupied'" @click="emit('click', tableData.id)">
    {{ tableData.name }}
    <span class="capacity">Cap: {{ tableData.capacity }}</span>
  </button>
</template>

<style scoped>
.restaurant-table {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  border: 2px solid #333;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.restaurant-table:focus {
  outline: 3px solid #3498db;
  /* Mejora la visibilidad del foco para navegación por teclado [cite: 13, 439] */
}

.table-free {
  background-color: #2ecc71;
  color: white;
}

.table-occupied {
  background-color: #e74c3c;
  color: white;
  cursor: not-allowed;
}

.table-selected {
  background-color: #3498db;
  color: white;
  border-color: #2980b9;
}

.capacity {
  font-size: 0.7em;
  margin-top: 4px;
}
</style>
