import { useState } from 'react';
import { Modal, Checkbox } from 'antd';

const TermsCheckbox = ({ checked, onChange }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleClose = () => setIsModalVisible(false);

  return (
    <>
      <Checkbox checked={checked} onChange={onChange}>
        Acepto que he recibido el{' '}
        <span onClick={showModal} style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>
          reglamento
        </span>{' '}
        y el directorio de la administración
      </Checkbox>

      <Modal title="Reglamento del Condominio" open={isModalVisible} onCancel={handleClose} footer={null}>
        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
        {
            `
            REGLAMENTO DE AMENIDADES
REGLAMENTO DE AMENIDADES
1
INDICE
A. REGLAMENTO DE MASCOTAS “PUNTA AZUL”
B. REGLAMENTO DE ALBERCAS
C. REGLAMENTO PARA EL USO DE SALON DE EVENTOS
D. REGLAMENTO AREA DE ASADORES
E. RESTRICCIONES PARA RESERVACIONES EN AREAS COMUNES
A. REGLAMENTO DE MASCOTAS “PUNTA AZUL”
1.
Es responsabilidad del propietario, que toda mascota debe tener una identificación en su collar (dueño y número de teléfono).
2.
Si se encuentra una mascota suelta y sola, la recoge un guardia, se retiene en un lugar determinado y se le solicita al vecino que pase a recogerla.
3.
La administración mantiene una relación actualizada de las mascotas en el condominio. Es obligación del dueño de reportar la mascota al comprarla y/o al recibir el presente reglamento.
4.
Toda mascota debe de estar vacunada según los requerimientos sanitarios, los comprobantes estarán disponibles para su inspección.
5.
Los dueños de mascotas serán los responsables de que no produzcan ruidos excesivos, y no vayan a hacer sus necesidades afuera de su propiedad.
6.
Las mascotas obligatoriamente deberán salir del departamento de los dueños con correa y acompañadas.
7.
Los propietarios serán los responsables de que se recojan los excrementos y limpieza de orines.
8.
Si a pesar de todas las precauciones un perro muerde a una persona es recomendable ir al hospital inmediatamente llevando la libreta de vacunas del perro agresor. El propietario cubrirá los gastos médicos que causen las lesiones.
9.
No se permitirán mascotas en áreas de albercas y salón de uso múltiples.
10.
Se prohíbe tener mascotas escandalosas en los balcones y terrazas.
11.
Está prohibido recibir mascotas en departamentos que se destinen para alojamientos temporales
REGLAMENTO DE AMENIDADES
2
B. REGLAMENTO DE ALBERCAS
1.
Es obligatorio para ingresar a la alberca el uso de traje de baño, no se permite mezclilla, camisetas ni ropa de algodón.
2.
Horario de alberca es de 8:00 am a 22:00 hrs.
3.
No se permite la entrada a las albercas a bebés desnudos o con pañal convencional, solamente con traje de baño y pañales desechables para agua.
4.
Prohibido tener dentro del área perimetral de albercas o áreas de tránsito botellas u objetos de vidrio que en caso de romperse pudieran dejar en el piso rajuelas cortantes.
5.
Las botellas de cristal solo podrán ser permitidas en el área de la barra o en áreas siempre resguardadas por una hielera.
6.
Dentro de la alberca no se permite ingerir alimentos.
7.
Puede hacer uso de aparatos de sonido, cuidando que el volumen a de 70-80 DB. no sea molesto para las demás personas (no se permiten bocinas grandes, DJ, luces y sonido). El horario de inicio 10:00 am a límite para uso de estos aparatos será hasta las 21:00 horas.
8.
Están prohibidos los clavados y correr en la periferia de la alberca.
9.
Prohibido hacer uso de la alberca a personas que se encuentren en estado de ebriedad.
10.
Ingresar a la alberca previamente enjuagados en las regaderas.
11.
Al hacer uso de la alberca y áreas comunes se deberá cuidar la moral y buenas costumbres
12.
Cualquier reunión que implique más de 10 personas será necesario pasarla al interior del departamento, o en su caso al salón de eventos, cubriendo su costo, si es que está disponible. (solo propietarios).
13.
Las visitas deberán estar acompañadas en todo momento por el residente.
14.
Se encuentran permitidos inflables y brincolines previa autorización de la administración, y solo en el lugar designado, siempre y cuando el tamaño del mismo no interfiera con el uso de las instalaciones de los demás condóminos. Los inflables son responsabilidad del residente que haya solicitado su permiso para instalación y uso.
15.
Queda prohibido el consumo de drogas.
16.
Queda prohibido ingresar mascotas a las amenidades.
17.
Todo menor deberá ser acompañado de un adulto, en caso de que no fuera así es completamente responsabilidad de sus familiares o del residente.
18.
Utilizar los baños designados amenidades.
19.
Es necesario secarse muy bien antes de salir del área común
20.
Está prohibido entrar a los pisos y al elevador mojados o escurriendo
REGLAMENTO DE AMENIDADES
3
21.
En caso de infringir cualquier punto antes señalado del presente reglamento del uso de la alberca, tendrá una sanción administrativa de $1,000.00 (un mil pesos 00/100 M.N.) Por evento. Cantidad que se incorporará al fondo de reserva y reparaciones.
C. REGLAMENTO PARA EL USO DE SALON DE EVENTOS
1.
Para uso exclusivo de residentes o inquilino permanentes.
2.
Capacidad máxima de 25 personas.
3.
Se puede usar bajo reservación para eventos privados con costo adicional de $2,000.00 (dos mil pesos 00/100 M. N). Consultar restricciones de reserva y una fianza de $2,500.00 (dos mil quinientos pesos 00/100 M.N) la cual será devuelta al día siguiente del evento, siempre y cuando se haya respetado reglamento y de no haber causado daños.
4.
El costo de limpieza es adicional y deberá ser cubierto por el propietario directamente al personal que realice la limpieza por $350.00 M.N.
5.
El volumen de la música debe de ser moderado para que sea disfrutado por todos los condóminos que habitan, este deberá de ser de 50-80 decibeles máximo para reuniones o fiestas y se deberá bajar el volumen de lunes a jueves a partir de las 21:00 horas, viernes, sábados y domingos a partir de las 24:00 horas. para poder permitir el descanso de los demás vecinos.
6.
Se permiten alimentos y bebidas en estas áreas.
7.
Los residentes que soliciten estas áreas y tengan en el momento cuotas pendientes de mantenimiento, no podrán hacer uso de ellas.
8.
Es responsabilidad del propietario del departamento vigilar que se cumplan las normas de buen comportamiento dentro del área.
9.
Las visitas deberán estar acompañadas en todo momento por el residente.
10.
Cualquier desperfecto causado por descuido o mal uso, los gastos de reparación tendrán que ser cubiertos por el propietario del departamento.
11.
Al interior NO se permite la entrada mojados, sin camisa o en traje de baño.
12.
Queda prohibido fumar en el Interior.
D. REGLAMENTO DE ASADORES
1.
El área de asador es en la entrada de la barra en amenidades y debe colocarse un protector, para el cuidado del pasto sintético.
2.
Es responsabilidad del propietario del departamento vigilar que se cumplan las normas de buen comportamiento dentro del área.
3.
Se permiten alimentos y bebidas en estas áreas.
REGLAMENTO DE AMENIDADES
4
4.
Los usuarios que soliciten estas áreas y tengan en el momento cuotas pendientes de mantenimiento, no podrán hacer uso de ellas.
5.
Es responsabilidad del propietario dejar las instalaciones limpias después de su uso, no de hacerlo será acreedor a una multa de $1,000.00 (un mil pesos 00/100 MN)
6.
Las visitas deberán estar acompañadas en todo momento por el residente.
7.
Cualquier desperfecto causado por descuido o mal uso, los gastos de reparación tendrán que ser cubiertos por el propietario del departamento.
8.
Se permitirá el uso con ropa de tipo alberca.
H. RESTRICCIONES PARA RESERVACIONES EN AREAS COMUNES
1.
Siempre debe ser respetado la capacidad Máxima de las áreas permitidas para reservar.
2.
Las instalaciones del condominio deberán usarse conforme a la moral y buenas costumbres, de manera ordenada y tranquila; no podrá efectuarse acto alguno que perturbe la tranquilidad de los demás condóminos.
3.
La administración se reserva el derecho de retirar de cualquier área común y de las amenidades, a toda persona que no guarde la compostura que reclama la seguridad, tranquilidad y presencia que se requiere, así como todo objeto no autorizado a permanecer en Página 46 de 54 dicha área y en su caso darle vista a la Autoridad Jurisdiccional correspondiente para los efectos a los que haya lugar.

            `
        }
        </pre>
      </Modal>
    </>
  );
};

export default TermsCheckbox;
