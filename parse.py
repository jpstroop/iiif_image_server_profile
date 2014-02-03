from rdflib import Graph

with open ("./profile_with_extensions_property_2.json", "r") as profile:
  data = profile.read()
  g = Graph().parse(data=data, format='json-ld')
  print g.serialize(format="turtle")
