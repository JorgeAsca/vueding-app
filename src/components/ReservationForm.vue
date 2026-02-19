<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRestaurantStore } from '../stores/restaurant';
import type { Reservation } from '../types';

const props = defineProps<{
  tableId: number;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const store = useRestaurantStore();

// Referencia a la mesa seleccionada para validar capacidad
const selectedTable = computed(() =>
  store.tables.find(t => t.id === props.tableId)
);

// Estado del formulario
const customerName = ref('');
const customerEmail = ref('');
const peopleCount = ref(1);
const errorMessage = ref('');

// Validación reactiva: Comprobar capacidad
const isCapacityValid = computed(() => {
  if (!selectedTable.value) return false;
  return peopleCount.value <= selectedTable.value.capacity;
});

const handleSubmit = () => {
  // Limpiar error previo
  errorMessage.value = '';

  // Validaciones básicas [cite: 443]
  if (!customerName.value || !customerEmail.value) {
    errorMessage.value = 'El nombre y el email son obligatorios.';
    return;
  }

  // Validación de capacidad
  if (!isCapacityValid.value) {
    errorMessage.value = `La mesa solo tiene capacidad para ${selectedTable.value?.capacity} personas.`;
    return;
  }

  const newReservation: Reservation = {
    id: crypto.randomUUID(),
    tableId: props.tableId,
    timeSlot: store.activeTimeSlot,
    customerName: customerName.value,
    peopleCount: peopleCount.value
  };

  // Intentar guardar en Pinia [cite: 422]
  const success = store.addReservation(newReservation);

  if (success) {
    alert('¡Reserva confirmada!');
    emit('close');
  } else {
    errorMessage.value = 'Error: La mesa ya no está disponible para esta hora.';
  }
};
</script>

<template>
  <div class="reservation-form">
    <h3>Reservar {{ selectedTable?.name }}</h3>
    <p>Capacidad máxima: <strong>{{ selectedTable?.capacity }} personas</strong></p>

    <form @submit.prevent="handleSubmit" novalidate>
      <div class="form-group">
        <label for="name">Nombre completo:</label>
        <input id="name" v-model="customerName" type="text" placeholder="Tu nombre" required />
      </div>

      <div class="form-group">
        <label for="email">Correo electrónico:</label>
        <input id="email" v-model="customerEmail" type="email" placeholder="tu@email.com" required />
      </div>

      <div class="form-group">
        <label for="people">Número de comensales:</label>
        <input id="people" v-model.number="peopleCount" type="number" min="1"
          :class="{ 'input-error': !isCapacityValid }" />
        <p v-if="!isCapacityValid" class="error-text">
          Excede la capacidad de la mesa[cite: 539].
        </p>
      </div>

      <div v-if="errorMessage" class="alert-error">
        {{ errorMessage }}
      </div>

      <div class="actions">
        <button type="button" @click="$emit('close')">Cancelar</button>
        <button type="submit" class="btn-confirm">Confirmar Reserva</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.reservation-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-error {
  border-color: #e74c3c;
}

.error-text {
  color: #e74c3c;
  font-size: 0.85em;
  margin-top: 5px;
}

.alert-error {
  background: #fdeaea;
  color: #e74c3c;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  font-size: 0.9em;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.btn-confirm {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-confirm:hover {
  background-color: #27ae60;
}
</style>
