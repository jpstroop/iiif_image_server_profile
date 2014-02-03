require 'linkeddata'
graph = RDF::Graph.load("./profile_with_extensions_property_2.json", format: :jsonld)
puts graph.dump(:ttl)
