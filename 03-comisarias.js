var db = db.getSiblingDB("seguridad");
var barrio = db.caba.findOne({
geometry: {
            $geoIntersects: {
                        $geometry: { type: "Point", coordinates: [ -58.41738521006289,  -34.60839054556185 ] }
                            }
          }
})
var comisarias = db.comisarias.find(
    { geometry: {
                $geoWithin: {
                    $geometry: barrio.geometry
                            }
                }
})
print('\nCantidad de comisarías dentro de ese barrio: ' + comisarias.count())
var orden = 0
while(comisarias.hasNext()) {
    print(comisarias.next());
}
