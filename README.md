### Documentation ###
#### Skeleton ####

Para agregar un esqueleto a los elementos, solo basta con utilizar el componente Skeleton.js, ubicado en la carpeta de componentes del proyecto.

Un ejemplo de uso es el siguiente:
~~~
<SkeletonLayout>
    {contenido-para-agregar}
<SkeletonLayout/>
~~~

##### props #####
| Nombre    | Tipo   | Valor por defecto | Opciones    | Obligatorio* |
|-----------|--------|-------------------|-------------|--------------|
| children  | node   |                   |             | true         |
| animation | string | pulse             | wave, false | false        |
|           |        |                   |             |              |
# Implementacion Spinner
**Instalacion:**

Instalar el paquete react-loader-spinner:
Ejecutar en la terminal el comando **npm install react-loader-spinner --save**

**Implementacion:**
- Importar el componente **Spinner** dentro de su componente.
- El mismo debera contener 3 parametros por defecto en sus props

1. Color: Ej. color="#F00F00"
2. Height: Ej. height={80}
3. Width: Ej. width={80}



para mas informacion puede acceder a su documentacion [aqui](https://www.npmjs.com/package/react-loader-spinner "aqui")


**Implementacion Progress:**
- Importar el componente **Progress** dentro de su componente.
- El mismo puede contener 3/4 parametros por defecto en sus props

1. Color: Ej. color="primary"
2. Size: Ej. size=40
3. Variant: Ej. variant="indeterminate" **Si no hay valor de progreso** 
4. Valor: Ej. value={25} variant="determinate" 


para mas informacion puede acceder a su documentacion (https://mui.com/api/circular-progress)


#### Sweet Alert ####

Para usar las alertas se debe utilizar de la siguiente manera

    Ejemplo #1 sobre una alerta de succes


        Modal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )

    Ejemplo #1 sobre una alerta de un error

        Modal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
})

        Para mas informacion visitar https://sweetalert2.github.io/#examples


