PEGASUS COMPUTERS

El proyecto consiste en una tienda/ecommerce solo de computadoras.

1) Componente NAVBAR:
 + encontramos el logo, que nos direcciona al Home de la app
 + Encontramos los Links que nos direccionan, utilizando React Router, al Home, al catalogo de productos, contacto
 + Se encuentra el CartWidget, cada vez que agregamos algun producto al carrito se podrà visualizar el numero actualizado del total de elementos agregado en el mismo

2) Componente ITEM LIST: 
 + Instalamos Firabase (versión 9) al proyecto, creamos una collection llamada 'productos' donde obtenemos toda la información necesaria para crear el catalogo de productos
 + Haciendo click en el botón 'Ver detalle' direcciona al detalle del producto
 + Se pueden filtrar los productos por Categoria || Marca || RAM 

3) Componente ITEM DETAIL:
 + Instalamos Firabase (versión 9) al proyecto, creamos una collection llamada 'productos' donde obtenemos toda la información necesaria para crear el detalle del producto
 + Una vez seleccionada la cantidad de productos y agregados al carrito de compra, aparacerà la opcion de ir al carrito o seguir comprando
 + El contador se desabilita si supera la cantidad del stock existente
 + Cuando el stock es = 0 el boton de agregar al carrito es inexistente y lo reemplaza un mensaje de alerta (ver ejemplo ASUS de 1500 Euros)

4) CART CONTEXT: 
+ Encontramos toda la funcionalidad del carrito, para agregar, remover, eliminar, conocer el importe total, cantidades totales y ver el detalle de los productos agregados.
+ El cart context provider engloba toda la app.


5)Componente CART : 
 + Podemos ver el detalle de producto agregados al carrito
 + Tiene las funcionalidades de eliminar/remover productos seleccionados o eliminar/limpiar todo el carrito 
 + Haciendo click en 'Finalizar compra' direcciona al Checkout

6)Componente CHECKOUT:
 + Esta compuesto por un formulario que se le solicita al usuario para proporcionar los datos de envío para poder finalizar la compra. Todos los campos son obligatorios.
 + En la parte derecha del checkout encontramos el resumen de compra, en la parte superior izquierda de cada imagen del producto aparecerá la cantidad de elementos agregados
 + Una vez completado el formulario y haber hecho click en el boton 'Comprar' se mostrará una nueva vista con el numero de referencia de la compra realizada y se le brinda la posibilidad al usuario de contactarse con 'PegasusComputers' en el caso tenga alguna duda o consulta sobre el estado de su compra.

7) Componente adicional, CONTACTO:
 + Para tener mayor interactividad con el usuario se simula una vista para enviar mensajes/consultas a 'PegasusComputers'.
 + En el motivo de la consulta, haciendo click 'consulta estado compra' se agrega automaticamente un nuevo campo que se solicita el Numero de referencia generado durante la compra.


Dependencias instaladas

FONTAWSOME | REACT ROUTER (v6)| FIRABASE (v9)| No se utilizan framework de estilos|