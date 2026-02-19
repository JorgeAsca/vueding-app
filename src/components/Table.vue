<script setup lang="ts">
import { computed } from 'vue';
import type { Table } from '../types';

// Definición de Props con Tipado Estricto
const props = defineProps<{
  tableData: Table;
  status: 'free' | 'occupied' | 'selected';
}>();

// Emisión de eventos corregida
const emit = defineEmits<{
  (e: 'select', id: number): void;
}>();

// Requisito A11y: Etiqueta descriptiva para lectores de pantalla [cite: 1170]
const ariaLabel = computed(() => {
  const statusText = { free: 'Libre', occupied: 'Ocupada', selected: 'Seleccionada' };
  return `Mesa ${props.tableData.name}, capacidad ${props.tableData.capacity}, estado ${statusText[props.status]}`;
});
</script>

<template>
  <button type="button" class="restaurant-table" :class="`table-${status}`"
    :style="{ left: `${tableData.position.x}px`, top: `${tableData.position.y}px` }" :aria-label="ariaLabel"
    :disabled="status === 'occupied'" @click="emit('select', tableData.id)">
    <strong>{{ tableData.name }}</strong>
    <span>Cap: {{ tableData.capacity }}</span>
  </button>
</template>
