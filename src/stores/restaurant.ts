import { defineStore } from 'pinia';
import type { Table, Reservation, TimeSlot } from '../types';

export const useRestaurantStore = defineStore('restaurant', {
  state: () => ({
    tables: [
      { id: 1, name: 'Mesa 1', capacity: 2, position: { x: 50, y: 50 } },
      { id: 2, name: 'Mesa 2', capacity: 4, position: { x: 200, y: 50 } },
      { id: 3, name: 'Mesa 3', capacity: 6, position: { x: 50, y: 200 } },
      { id: 4, name: 'Mesa 4', capacity: 4, position: { x: 200, y: 200 } },
    ] as Table[],
    reservations: [] as Reservation[],
    activeTimeSlot: '13:00' as TimeSlot,
  }),

  actions: {
    setTimeSlot(slot: TimeSlot) {
      this.activeTimeSlot = slot;
    },

    isTableAvailable(tableId: number): boolean {
      return !this.reservations.some(
        (res) => res.tableId === tableId && res.timeSlot === this.activeTimeSlot
      )
    },

    addReservation(res: Reservation): boolean {
      // Requisito: Validar que la mesa esté libre a esa hora [cite: 422]
      if (this.isTableAvailable(res.tableId)) {
        this.reservations.push(res);
        return true;
      }
      return false;
    }
  }
});
