export type TimeSlot = '13:00' | '14:00' | '15:00' | '20:00' | '21:00';

export interface Table {
  id: number;
  name: string;
  capacity: number;
  position: { x: number; y: number };
}

export interface Reservation {
  id: string;
  tableId: number;
  timeSlot: string;
  customerName: string;
  peopleCount: number;
}
