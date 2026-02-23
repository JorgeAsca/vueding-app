<template><div><h1 id="documentacion-de-componentes" tabindex="-1"><a class="header-anchor" href="#documentacion-de-componentes"><span>Documentación de Componentes</span></a></h1>
<h2 id="table-vue" tabindex="-1"><a class="header-anchor" href="#table-vue"><span>Table.vue</span></a></h2>
<p>Componente que representa una mesa en el plano. [cite_start]Cumple con los requisitos de accesibilidad (A11y)[cite: 400, 434].</p>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3>
<ul>
<li>[cite_start]<code v-pre>tableData</code>: Objeto de tipo <code v-pre>Table</code> con id, nombre y capacidad[cite: 502, 513].</li>
<li>[cite_start]<code v-pre>status</code>: Estado actual ('free', 'occupied', 'selected')[cite: 432, 529].</li>
</ul>
<h3 id="eventos" tabindex="-1"><a class="header-anchor" href="#eventos"><span>Eventos</span></a></h3>
<ul>
<li>[cite_start]<code v-pre>@select-table</code>: Emite el ID de la mesa al ser seleccionada[cite: 532].</li>
</ul>
<hr>
<h2 id="reservationform-vue" tabindex="-1"><a class="header-anchor" href="#reservationform-vue"><span>ReservationForm.vue</span></a></h2>
<p>[cite_start]Gestiona la creación de reservas con validaciones reactivas[cite: 399, 440].</p>
<h3 id="validaciones" tabindex="-1"><a class="header-anchor" href="#validaciones"><span>Validaciones</span></a></h3>
<ul>
<li>[cite_start]<strong>Capacidad</strong>: No permite reservar si los comensales superan el límite de la mesa[cite: 444, 534].</li>
<li>[cite_start]<strong>Campos</strong>: Nombre y Email obligatorios[cite: 443].</li>
</ul>
</div></template>


