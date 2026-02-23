# Documentación de Componentes

## Table.vue

Componente que representa una mesa en el plano. [cite_start]Cumple con los requisitos de accesibilidad (A11y)[cite: 400, 434].

### Props

- [cite_start]`tableData`: Objeto de tipo `Table` con id, nombre y capacidad[cite: 502, 513].
- [cite_start]`status`: Estado actual ('free', 'occupied', 'selected')[cite: 432, 529].

### Eventos

- [cite_start]`@select-table`: Emite el ID de la mesa al ser seleccionada[cite: 532].

---

## ReservationForm.vue

[cite_start]Gestiona la creación de reservas con validaciones reactivas[cite: 399, 440].

### Validaciones

- [cite_start]**Capacidad**: No permite reservar si los comensales superan el límite de la mesa[cite: 444, 534].
- [cite_start]**Campos**: Nombre y Email obligatorios[cite: 443].
