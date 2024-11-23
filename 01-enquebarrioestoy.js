var db = db.getSiblingDB("seguridad");

var barrio = db.caba.findOne({
    geometry: {
        $geoIntersects: {
            $geometry: { type: "Point", coordinates: [
                -58.41738521006289,
                -34.60839054556185 
            ] } }
        }
})
//Mostrar barrio)
print('\nBarrio en el que estoy ahora: "' + barrio.properties.nombre + '"')