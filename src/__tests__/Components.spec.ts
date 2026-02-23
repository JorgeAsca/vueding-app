import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import Table from '../components/Table.vue';
import ReservationForm from '../components/ReservationForm.vue';

describe('Pruebas de Componentes VueDining', () => {
  // TEST B: Interacción y Eventos en Table.vue
  it('debe emitir el evento select con el ID correcto al hacer clic', async () => {
    const tableData = { id: 5, name: 'Mesa 5', capacity: 4, position: { x: 0, y: 0 } };
    const wrapper = mount(Table, {
      props: { tableData, status: 'free' }
    });

    // Disparar evento click
    await wrapper.trigger('click');

    // Verificar que se emitió el evento con el ID correcto
    expect(wrapper.emitted('select')).toBeTruthy();
    expect(wrapper.emitted('select')![0]).toEqual([5]);
  });

  it('debe mostrar error y bloquear el envío si se supera la capacidad', async () => {
    const wrapper = mount(ReservationForm, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            createSpy: vi.fn // Agregamos esta línea para corregir el error
          })
        ]
      },
      props: { tableId: 1 }
    });

    const input = wrapper.find('#c_people');
    await input.setValue(10);

    await wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.emitted('close')).toBeFalsy();
    expect(wrapper.text()).toContain('Capacidad excedida');
  });
});
