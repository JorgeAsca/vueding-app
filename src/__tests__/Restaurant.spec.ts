import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, beforeEach } from 'vitest';
import { useRestaurantStore } from '@/stores/restaurant';

describe('Restaurant Store - Lógica de Reservas', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('debe evitar el overbooking en la misma mesa y hora', () => {
    const store = useRestaurantStore();

    store.setTimeSlot('14:00');

    const reservaValida = {
      id: '1',
      tableId: 1,
      timeSlot: '14:00',
      customerName: 'Juan Pérez',
      peopleCount: 2
    };

    store.addReservation(reservaValida);

    const segundoIntento = store.addReservation({
      ...reservaValida,
      id: '2',
      customerName: 'Otro Cliente'
    });

    expect(segundoIntento).toBe(false);
    expect(store.reservations.length).toBe(1);
  });
});
