PEGASUS COMPUTERS

El proyecto consiste en una tienda/ecommerce solo de computadoras.

En la pagina principal/Home encontraremos un "widget" que nos direccion al catalogo donde se muestran todos los productos en venta.

Al ingresar al catalogo, obtenemos la data despues de 2 segundos con una llamada fetch desde un archivo json local en public/data/products, donde aparece un "spinner" que desaparece en el momento que se cargan los productos.
El catalogo de productos presenta al momento algunos filtros entre ellos Categoria, Marca y ram... 
Los productos son renderizados al virtual dom con el metodo map y los filtros realizados con el evento onChange a traves de metodos filters

Ademas del catalogo, el proyecto obtiene a traves de otra llamada fetch el detalle del producto que se puede visualizar haciendo click en el boton "ver detalle" utilizando como en el anterior caso los hooks de react UseState,UseEffect y ademas el UseParams pasandole como parametro dinamico el ID de cada item para ver el detalle, tmb en este caso una vez que entra al detalle ingresa despues de 2seg con un spinner hasta cargar la data correspondiente.

Haciendo click en el logo de la pagina nos redirecciona nuevamente en la pagina principal.

El diseño de la app es creado con CSS puro, no se utilizan frameworks como Bootstrap y/o Tailwind.

Instale una dependencia de FontAwesome para los iconos como tambien la de react-icon, ademas de instalar app-router-dom para crear las rutas necesarias y poder linkear/conectar las secciones de App.js y el Navbar como darle rutas a los botones "catalogo" en la pagina inicial y "ver detalle" en Item.jsx