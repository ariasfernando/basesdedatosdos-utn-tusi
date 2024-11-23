db = db.getSiblingDB("seguridad");
db.comisarias.createIndex({ geometry: "2dsphere" })
db.caba.createIndex({ geometry: "2dsphere" })