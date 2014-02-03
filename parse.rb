require 'linkeddata'
graph = RDF::Graph.load("./profile_with_extensions_property.json", format: :jsonld)
puts graph.dump(:ttl)
