IIIF Image Server Profile Mockups
=================================

There are three mockups here:

 1. `profile.json` is a simple `"property" : "boolean"` hash.
 2. `profile_with_extensions_property.json` is very similar, but adds `extensions`, an array of graphs about additional features.
 3. `profile_classes.json` is a different approach, where each feature of the server is a class, with additional properties.

 Each was parsed with RDF.rb and rdflib (Python) to help get a better handle on what the graph actually looks like.

A fourth approach `profile_value_bool.json` was tried, where the feature was a property with a graph as its object, containing `@value : bool` and additional properties. e.g.

```json
 "loris:feature1" : {"@value": "true", "dc:description" : "washes dishes"}
```

RDF.rb failed to parse the JSON, and rdflib dropped any additional properties. A variation on this, using `enabled` as a predicate, rather than `@value`, (`profile_enabled_bool.json`) may be another alternative, but the blank nodes may be a concern.
