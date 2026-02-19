<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRestaurantStore } from '../stores/restaurant';

const props = defineProps<{
  tableId: number;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const store = useRestaurantStore();

// Encontrar la mesa usando la prop tableId
const selectedTable = computed(() =>
  store.tables.find(t => t.id === props.tableId)
);

const customerName = ref('');
const customerEmail = ref('');
const peopleCount = ref(1);
const errorMessage = ref('');

// Validación de capacidad: la lógica se mantiene en la vista pero usa datos del store [cite: 1176]
const isCapacityValid = computed(() => {
  return selectedTable.value ? peopleCount.value <= selectedTable.value.capacity : false;
});

const handleSubmit = () => {
  errorMessage.value = '';

  if (!customerName.value || !customerEmail.value) {
    errorMessage.value = 'Nombre y Email son requeridos.';
    return;
  }

  if (!isCapacityValid.value) {
    errorMessage.value = 'El número de comensales supera la capacidad.';
    return;
  }

  const success = store.addReservation({
    id: crypto.randomUUID(),
    tableId: props.tableId,
    timeSlot: store.activeTimeSlot,
    customerName: customerName.value,
    peopleCount: peopleCount.value
  });

  if (success) {
    emit('close');
  } else {
    errorMessage.value = 'No se pudo procesar la reserva.';
  }
};
</script>

<template>
  <section class="reservation-form" aria-labelledby="form-title">
    <h3 id="form-title">Reserva: {{ selectedTable?.name }}</h3>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="c_name">Nombre:</label>
        <input id="c_name" v-model="customerName" type="text" required />
      </div>

      <div class="form-group">
        <label for="c_email">Email:</label>
        <input id="c_email" v-model="customerEmail" type="email" required />
      </div>

      <div class="form-group">
        <label for="c_people">Personas (Máx: {{ selectedTable?.capacity }}):</label>
        <input id="c_people" v-model.number="peopleCount" type="number" min="1"
          :class="{ 'input-error': !isCapacityValid }" />
        <p v-if="!isCapacityValid" class="error-text">Capacidad excedida</p>
      </div>

      <p v-if="errorMessage" class="error-text" role="alert">{{ errorMessage }}</p>

      <div class="form-actions">
        <button type="button" @click="emit('close')">Cancelar</button>
        <button type="submit" :disabled="!isCapacityValid">Confirmar</button>
      </div>
    </form>
  </section>
</template>
