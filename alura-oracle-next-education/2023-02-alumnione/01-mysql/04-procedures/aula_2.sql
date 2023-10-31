CREATE PROCEDURE jugos_ventas.aula_2()

/*
-- Crea un SP con las siguientes 4 variables
 y que al utilizar el comando CALL, las mismas 
 puedan ser visualizadas.
 
# Nombre: Cliente. 
# Tipo: Caracteres con 10 posiciones. 
# Valor: Juan.

# Nombre: Edad. 
# Tipo: Entero. 
# Valor: 10.

# Nombre: Fecha_Nacimiento. 
# Tipo: Fecha. 
# Valor: 10/01/2007.

# Nombre: Costo. 
# Tipo: Número con casillas decimales. 
# Valor: 10.23 .
*/

BEGIN
DECLARE Cliente VARCHAR(10);
DECLARE Edad INT;
DECLARE Fecha_Nacimiento DATE;
DECLARE Costo FLOAT;

SET Cliente = 'Juan';
SET Edad = 10;
SET Fecha_Nacimiento = '20170110';
SET Costo = 10.23;

SELECT Cliente, Edad, Fecha_Nacimiento, Costo;

END