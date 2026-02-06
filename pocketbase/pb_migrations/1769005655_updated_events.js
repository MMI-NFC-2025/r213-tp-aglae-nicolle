/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1687431684")

  // remove field
  collection.fields.removeById("number3430808248")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file1767613568",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "imgEvent",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1687431684")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number3430808248",
    "max": null,
    "min": null,
    "name": "heureEvent",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file1767613568",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "imgEvent",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
