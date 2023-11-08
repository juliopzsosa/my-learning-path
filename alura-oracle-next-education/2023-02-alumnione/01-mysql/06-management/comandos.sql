/* 
Bienvenido al curso de Administración de MySQL: Seguridad y optimización de la base de datos. 

Te invito a preparar el ambiente para iniciar con nuestro entrenamiento. ¡Éxitos!
*/


/* PROYECTO DEL AULA ANTERIOR 1 

Llegó del momento de practicar los comandos que aprenderás durante el desarrollo de esta clase. 

Recuerda que nuestro foro está a disposición en caso de que tengas inquietudes. */


/* PROYECTO DEL AULA ANTERIOR 2 

Conexiones de MySQL y Servicios de Windows.

Recuerda que nuestro foro está a disposición en caso de que tengas inquietudes. */


/* PROYECTO DEL AULA ANTERIOR 3 */

SHOW GLOBAL STATUS LIKE 'Created_tmp_disk_tables';

SHOW GLOBAL STATUS LIKE 'Created_tmp_tables';

SHOW GLOBAL VARIABLES LIKE 'tmp_table_size';

SET GLOBAL tmp_table_size = 136700160;



/* PROYECTO DEL AULA ANTERIOR 4 */

CREATE TABLE df_table (ID INT, NOMBRE VARCHAR(100));

ALTER TABLE df_table ENGINE = MyISAM;

CREATE TABLE df_table1 (ID INT, NOMBRE VARCHAR(100)) ENGINE = MEMORY;

SHOW ENGINES;

CREATE DATABASE base;

SHOW VARIABLES WHERE Variable_Name LIKE '%dir';

CREATE DATABASE base3;

DROP DATABASE base;




/* PROYECTO FINAL */

LOCK INSTANCE FOR BACKUP;

UNLOCK INSTANCE;


/*
En este notebook encontrarás todos los comandos SQL que ejecutaremos durante el desarrollo del entrenamiento. 

¡Te deseo éxito en tus estudios!
*/


/* PROYECTO DEL AULA ANTERIOR 1*/


-- cost 3.75
SELECT A.CODIGO_DEL_PRODUCTO FROM tabla_de_productos A;

-- cost 60654.92
SELECT A.CODIGO_DEL_PRODUCTO, C.CANTIDAD FROM tabla_de_productos A 
INNER JOIN items_facturas C ON A.CODIGO_DEL_PRODUCTO = C.CODIGO_DEL_PRODUCTO;

-- cost 211939.80
SELECT A.CODIGO_DEL_PRODUCTO, YEAR(B.FECHA_VENTA) AS ANO,C.CANTIDAD FROM tabla_de_productos A 
INNER JOIN items_facturas C ON A.CODIGO_DEL_PRODUCTO = C.CODIGO_DEL_PRODUCTO 
INNER JOIN facturas B ON C.NUMERO = B.NUMERO;

-- cost 211939.80
SELECT A.CODIGO_DEL_PRODUCTO, YEAR(B.FECHA_VENTA) AS ANO, SUM(C.CANTIDAD) AS CANTIDAD FROM tabla_de_productos A 
INNER JOIN items_facturas C ON A.CODIGO_DEL_PRODUCTO = C.CODIGO_DEL_PRODUCTO 
INNER JOIN facturas B ON C.NUMERO = B.NUMERO 
GROUP BY A.CODIGO_DEL_PRODUCTO, YEAR(B.FECHA_VENTA) 
ORDER BY A.CODIGO_DEL_PRODUCTO, YEAR(B.FECHA_VENTA);


# Los siguientes comandos se ejecutan en mysql desde el símbolo del sistema 

mysql> EXECUTE SELECT A.CODIGO_DEL_PRODUCTO FROM tabla_de_productos A;

mysql> EXECUTE FORMAT=JSON SELECT A.CODIGO_DEL_PRODUCTO FROM tabla_de_productos A \G;

mysql> EXECUTE FORMAT=JSON SELECT A.CODIGO_DEL_PRODUCTO, C.CANTIDAD FROM tabla_de_productos A INNER JOIN items_facturas C ON A.CODIGO_DEL_PRODUCTO = C.CODIGO_DEL_PRODUCTO \G;

mysql> EXECUTE FORMAT=JSON SELECT A.CODIGO_DEL_PRODUCTO, YEAR(B.FECHA_VENTA) AS ANO,C.CANTIDAD FROM tabla_de_productos A INNER JOIN items_facturas C ON A.CODIGO_DEL_PRODUCTO = C.CODIGO_DEL_PRODUCTO INNER JOIN facturas B ON C.NUMERO = B.NUMERO \G;

mysql> EXECUTE FORMAT=JSON SELECT A.CODIGO_DEL_PRODUCTO, YEAR(B.FECHA_VENTA) AS ANO, SUM(C.CANTIDAD) AS CANTIDAD FROM tabla_de_productos A INNER JOIN items_facturas C ON A.CODIGO_DEL_PRODUCTO = C.CODIGO_DEL_PRODUCTO INNER JOIN facturas B ON C.NUMERO = B.NUMERO GROUP BY A.CODIGO_DEL_PRODUCTO, YEAR(B.FECHA_VENTA) ORDER BY A.CODIGO_DEL_PRODUCTO, YEAR(B.FECHA_VENTA) \G;


/* PROYECTO DEL AULA ANTERIOR 2*/


# Los siguientes comandos se ejecutan en mysql desde el símbolo del sistema 

mysql> SELECT * FROM facturas WHERE FECHA_VENTA='20170101';

mysql> EXPLAIN FORMAT=JSON SELECT * FROM FACTURAS WHERE FECHA_VENTA='20170101' \G; 

mysql> ALTER TABLE facturas ADD INDEX(FECHA_VENTA);

mysql> EXPLAIN FORMAT=JSON SELECT * FROM FACTURAS WHERE FECHA_VENTA='20170101' \G; 

mysql> SELECT * FROM facturas WHERE FECHA_VENTA='20170101';

mysql> ALTER TABLE FACTURAS DROP INDEX FECHA_VENTA;

mysql> EXPLAIN FORMAT=JSON SELECT * FROM FACTURAS WHERE FECHA_VENTA='20170101' \G; 
